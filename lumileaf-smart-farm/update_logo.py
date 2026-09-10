import os
import glob

svg_str = """        <div class="brand-icon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8.16,20C13.59,20 18,15.61 18,10.18V8H17ZM16,10.18C16,14.5 12.49,18 8.16,18C7.65,18 7.16,17.95 6.69,17.84L12.42,4.08C13.59,4.41 14.65,5.08 15.43,5.96L16,10.18Z" /></svg>
        </div>"""

img_str_pages = """        <div class="brand-icon">
          <img src="../assets/logo/uom-xanh-logo-transparent.png" alt="Ươm Xanh Logo" style="width: 100%; height: 100%; object-fit: contain;">
        </div>"""

for fpath in glob.glob('pages/*.html'):
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    content = content.replace(svg_str, img_str_pages)
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)
print("Done replacing logo in pages")
