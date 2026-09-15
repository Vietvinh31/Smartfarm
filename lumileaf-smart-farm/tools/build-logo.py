"""Original geometric lettering. No font input, tracing, raster or external dependency."""
from pathlib import Path
OUT=Path('assets/logo'); OUT.mkdir(exist_ok=True)
# Baseline 76, x-height 34, capital top 16. Round terminals use a shared 15-unit stroke.
letters=[(0,'M5 16V54Q5 76 25 76Q45 76 45 54V16 M45 26Q59 26 59 12'),
(64,'M23 34C-2 34-2 76 23 76C48 76 48 34 23 34 M43 40Q55 40 55 27'),
(129,'M4 76V36 M4 47Q12 29 24 36Q31 40 31 52V76 M31 47Q39 29 51 36Q59 40 59 52V76'),
(215,'M3 17C15 23 36 66 48 76 M48 17C37 30 14 66 3 76'),
(275,'M40 76V36 M40 45C31 27 5 33 5 55C5 78 29 83 40 64'),
(331,'M5 76V36 M5 48Q13 32 26 35Q42 37 42 54V76'),
(389,'M5 76V16 M5 48Q14 32 27 35Q42 37 42 54V76')]
def word(color):
 # Bold rounded lettering, sprout horn and two crossing leaf silhouettes.
 accent='#64AB42' if color!='#FFFFFF' else color
 parts=[]
 for x,d in letters:
  if x==215:continue
  if x==0:d='M5 16V54Q5 76 25 76Q45 76 45 54V28'
  parts.append(f'<path transform="translate({x} 0)" d="{d}"/>')
 strokes='<g fill="none" stroke="'+color+'" stroke-width="15" stroke-linecap="round" stroke-linejoin="round">'+''.join(parts)+'</g>'
 sprout=f'<path fill="{color}" d="M45 29C45 18 32 24 34 5C47 6 49 16 47 26Z"/><path fill="{accent}" d="M47 23C47 7 60 -2 72 0C70 15 59 24 47 23Z"/>'
 cross=f'<g transform="translate(207 0)"><path fill="{accent}" d="M0 83C12 48 47 9 76 10C65 39 32 82 0 83Z"/><path fill="{color}" d="M0 10C30 8 48 60 73 83C39 86 23 34 0 10Z"/></g>'
 return strokes+sprout+cross
# Two leaves: original vector interpretation of the supplied two-leaf silhouette.
def leaf(color):
 return f'<g fill="{color}"><path d="M49 91C13 78 3 42 5 10C34 17 52 34 48 66C37 47 25 33 18 28C34 47 43 68 49 91Z"/><path d="M55 91C88 80 106 45 103 6C70 12 49 35 53 74C65 49 82 29 92 21C72 46 62 71 55 91Z"/></g>'
glyph={'N':'M0 12V0L8 12V0','O':'M4 0C-2 0-2 12 4 12C10 12 10 0 4 0','G':'M8 2C-3-6-3 18 8 11V6H4','H':'M0 0V12M8 0V12M0 6H8','I':'M4 0V12','E':'M8 0H0V12H8M0 6H6','P':'M0 12V0H4C11 0 11 6 4 6H0','T':'M0 0H8M4 0V12','M':'M0 12V0L4 6L8 0V12'}
def tagline(color):
 s='NÔNG NGHIỆP THÔNG MINH';x=0;parts=[]
 for c in s:
  if c==' ':x+=7;continue
  base={'Ô':'O','Ệ':'E'}.get(c,c);d=glyph[base]
  if c in 'ÔỆ':d+=' M1 -3L4 -6L7 -3'
  if c=='Ệ':d+=' M4 16h.01'
  parts.append(f'<path transform="translate({x} 0)" d="{d}"/>');x+=12
 return '<g fill="none" stroke="'+color+'" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+''.join(parts)+'</g>'
def svg(name,w,h,body,title):
 (OUT/name).write_text(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" role="img" aria-label="{title}"><title>{title}</title>{body}</svg>',encoding='utf-8')
for name,color in [('uom-xanh-horizontal.svg','#006839'),('uom-xanh-mono.svg','#FFFFFF')]:
 svg(name,580,140,f'<g transform="translate(5 5)">{leaf(color)}</g><g transform="translate(130 8)">{word(color)}</g><g transform="translate(134 108) scale(1.65)">{tagline(color)}</g>','Ươm Xanh – Nông nghiệp thông minh')
svg('uom-xanh-full.svg',480,230,f'<g transform="translate(185 4)">{leaf("#006839")}</g><g transform="translate(18 105)">{word("#006839")}</g><g transform="translate(98 208) scale(1.08)">{tagline("#006839")}</g>','Ươm Xanh – Nông nghiệp thông minh')
svg('uom-xanh-icon.svg',112,104,f'<g transform="translate(2 3)">{leaf("#006839")}</g>','Biểu tượng hai lá Ươm Xanh')
svg('uom-xanh-favicon.svg',112,112,'<rect width="112" height="112" rx="24" fill="#EFF6E8"/>'+f'<g transform="translate(10 10) scale(.85)">{leaf("#006839")}</g>','Ươm Xanh')
svg('uom-xanh-construction.svg',580,110,'<defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M10 0H0V10" fill="none" stroke="#c7d9cd" stroke-width=".4"/></pattern></defs><rect width="580" height="110" fill="url(#grid)"/>'+f'<g transform="translate(5 5)">{leaf("#006839")}</g><g transform="translate(130 8)">{word("#006839")}</g><path d="M125 16H570M125 34H570M125 76H570" stroke="#b77745" stroke-width=".6"/>','Lưới dựng chữ Ươm Xanh')
