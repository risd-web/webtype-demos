#MenuTitle: Copy to Background
# -*- coding: utf-8 -*-
__doc__="""
Copy the current glyph into the background.
"""


font = Glyphs.font
currentLayer = font.selectedLayers[0]
currentLayer.setBackground_( currentLayer.copyDecomposedLayer() )
