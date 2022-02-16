#MenuTitle: Show this in Context
# -*- coding: utf-8 -*-
__doc__="""
Show selected text in spacing context in a new line.
"""

import GlyphsApp
Font = Glyphs.font

def subCat(glyph, subCat):
	if glyph.subCategory == subCat:
		return True
	else:
		return False

def cat(glyph, category):
	if glyph.category == category:
		return True
	else:
		return False

def script(glyph, script):
	if glyph.script == script:
		return True
	else:
		return False	

def getContext(glyph):

	# print glyph
	glyphName = "/"+glyph.name


	# Greek
	if script(glyph, "greek") and subCat(glyph, "Lowercase") :
		return u"""ηη{0} ηoηo{0} oo""".format(glyphName)

	elif script(glyph, "greek") and subCat(glyph, "Uppercase") :
		return u"""/Eta/Eta{0} /Eta/Omicron/Eta/Omicron{0} /Omicron/Omicron""".format(glyphName)

	# cyrllic
	elif script(glyph, "cyrillic") and subCat(glyph, "Lowercase") :
		return u"""/en-cy/en-cy{0} /en-cy/o-cy/en-cy/o-cy{0} /o-cy/o-cy""".format(glyphName)

	elif script(glyph, "cyrillic") and subCat(glyph, "Uppercase") :
		return u"""/En-cy/En-cy{0} /En-cy/O-cy/En-cy/O-cy{0} /O-cy/O-cy""".format(glyphName)

	# UC
	elif subCat(glyph, "Uppercase"):
		return u"""HH{0} HOHO{0} OO""".format(glyphName) 
	
	# lowercase
	elif subCat(glyph, "Lowercase"):
		return u"""nn{0} nono{0} oo""".format(glyphName)

	# smallcaps
	elif subCat(glyph, "Smallcaps"):
		return u"""/n.sc/o.sc/n.sc {0} /n.sc/o.sc/n.sc/n.sc/n.sc {0} /n.sc/n.sc/o.sc/o.sc {0} /o.sc/o.sc/o.sc""".format(glyphName)

	# old style numbers
	elif (subCat(glyph, "Decimal Digit") and "osf" in glyph.name):
		return u"""/zero.osf/zero.osf{0} /one.osf/one.osf{0} /one.osf/one.osf/zero.osf/one.osf""".format(glyphName)

	# numbers
	elif subCat(glyph, "Decimal Digit"):
		return u"""00{0} 00{0} 11{0} 1101""".format(glyphName)

	# currency
	elif subCat(glyph, "Currency") :
		return u"""00{0} 00{0} 11{0} 1101""".format(glyphName)

	# punctuation
	elif cat(glyph, "Punctuation"):

		strings = []
		single = True
		name = glyph.name

		# if you have alternates for German quotation styles, process separately
		if name == "quotedblleft.salt_german":
			strings.append(u"""HH{0} H{1} HOHO{0} O{1} OO\nnn{0} n{1} nono{0} o{1} oo""".format("/quotedblleft.salt_german", "/quotedblright"))
		
		elif name == "quoteleft.salt_german":
			strings.append(u"""HH{0} H{1} HOHO{0} O{1} OO\nnn{0} n{1} nono{0} o{1} oo""".format("/quoteleft.salt_german", "/quoteright"))
		
		else:
			#process paired punctuation
			pairPunctuation = [('questiondown', 'question'), ('exclamdown', 'exclam'), ('parenleft', 'parenright'), ('bracketleft', 'bracketright'), ('braceleft', 'braceright'), ('guilsinglleft', 'guilsinglright'), ('guilsinglright', 'guilsinglleft'), ('guillemetleft', 'guillemetright'), ('guillemetright', 'guillemetleft'),('quoteleft', 'quoteright'), ('quoteright', 'quoteright'), ('quotesinglbase', 'quoteleft'), ('quotedblleft', 'quotedblright'), ('quotedblright', 'quotedblright'), ('quotedblbase', 'quotedblleft')]

			for pair in pairPunctuation:
				if name in pair:
					single = False
					# match in pairPuctuation
					strings.append(u"""HH{0} H{1} HOHO{0} O{1} OO\nnn{0} n{1} nono{0} o{1} oo""".format("/"+pair[0], "/"+pair[1]))
			
			#defult punctuation string
			if(single):
				strings = [u"""HH{0} H{0} HOHO{0} O{0} OO\nnn{0} n{0} nono{0} o{0} oo""".format(glyphName)]

		return "\n".join(strings)

	elif cat(glyph, "Symbol"):
		numberSymbols = ["/degree", "/minute", "/second", "/literSign"]
		if glyphName in numberSymbols:
			return u"""00{0} 00{0} 11{0} 1101""".format(glyphName)
		else:
			return u"""HH{0} H{0} HOHO{0} O{0} OO\nnn{0} n{0} nono{0} o{0} oo""".format(glyphName)

	# fallback
	else:
		return u"""HOH{0} non HOH{0} HOH non{0} npn\nHHH{0} nnn HHH{0} HHH nnn{0} nnn\nOOO{0} ooo OOO{0} OOO ooo{0} ooo\nXHX{0} xhx XHX{0} XHX xox{0} xox""".format(glyphName)


def main():

	# get active glyph
	layer = Font.selectedLayers[0]
	glyph = layer.parent

	currentString = Font.currentText
	newString =  currentString + "\n" + getContext(glyph)
	Font.currentText = newString

main()

