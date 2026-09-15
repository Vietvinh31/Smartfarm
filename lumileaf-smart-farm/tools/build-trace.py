from pathlib import Path
import sys
sys.path.insert(0,str(Path('tools/.qr-deps').resolve()))
import qrcode, qrcode.image.svg
url='https://uomxanhsf.vercel.app/pages/traceability.html?lot=UX-260915-01'
qr=qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M,box_size=8,border=4)
qr.add_data(url);qr.make(fit=True)
Path('assets/qr').mkdir(exist_ok=True)
qr.make_image(image_factory=qrcode.image.svg.SvgPathImage).save('assets/qr/UX-260915-01.svg')
qr.make_image().save('docs/audit/trace-qr.png')
import zxingcpp
from PIL import Image
assert zxingcpp.read_barcode(Image.open('docs/audit/trace-qr.png')).text==url
print('QR decoded correctly:',url)

