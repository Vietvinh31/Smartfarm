from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
class Scan(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.ids=set();self.heads=[];self.errors=[]
 def handle_starttag(self,t,a):
  d=dict(a)
  if 'id'in d:self.ids.add(d['id'])
  if t in ['h1','h2','h3','h4','h5','h6']:self.heads.append(int(t[1]))
  if t=='img' and 'alt' not in d:self.errors.append('missing alt')
  for k in ['src','href']:
   if k in d:self.links.append(d[k])
files=[Path('index.html'),*Path('pages').glob('*.html')];parsers={}
for p in files:
 s=Scan();s.feed(p.read_text(encoding='utf-8'));parsers[p.resolve()]=s
errors=[]
for p,s in parsers.items():
 for link in s.links:
  u=urlsplit(link)
  if u.scheme or u.netloc:continue
  dest=(p.parent/unquote(u.path)).resolve() if u.path else p
  if not dest.exists():errors.append(str(p.name)+': missing '+link)
  elif u.fragment and dest in parsers and u.fragment not in parsers[dest].ids:errors.append(str(p.name)+': missing anchor '+link)
 print(p.name,'h1:',s.heads.count(1),'heading jumps:',[(a,b) for a,b in zip(s.heads,s.heads[1:]) if b>a+1],s.errors)
print('LINK ERRORS',errors)
