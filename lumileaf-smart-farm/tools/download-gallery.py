import urllib.request
from pathlib import Path
p=Path('assets/images/gallery');p.mkdir(exist_ok=True)
for i,id in enumerate([4199761,7497009,11573787,7728646,5503195,3298060],1):
 u=f'https://images.pexels.com/photos/{id}/pexels-photo-{id}.jpeg?auto=compress&cs=tinysrgb&w=1200'
 req=urllib.request.Request(u,headers={'User-Agent':'Mozilla/5.0'})
 with urllib.request.urlopen(req) as response: (p/f'gallery-{i}.jpg').write_bytes(response.read())
 print(i,id)

