# Nguồn đa phương tiện

Logo: ảnh hai chiếc lá do người dùng cung cấp; SVG hiện có chỉ đóng khung ảnh gốc. Không tạo lại logo.

Ảnh minh họa AI mới: intro-farm, story-grower, lettuce-product, seed-selection, care-check, water-system, nutrient-check, sensor-close. Đầu ra WebP trong `assets/images`; prompt và đường dẫn đầu ra gốc trong `tools/new-images.json`. Ảnh minh họa không được trình bày là ảnh chụp tại một nông trại thật.

Gallery lưu local, không hotlink; sử dụng theo [giấy phép Pexels](https://www.pexels.com/license/):

1. [Thủy canh – 4199761](https://www.pexels.com/photo/close-up-photo-of-lettuce-plant-using-hydroponics-farming-4199761/)
2. [Nhà kính – 7497009](https://www.pexels.com/photo/green-leaves-plant-in-the-greenhouse-7497009/)
3. [Khay ươm – Alfo Medeiros](https://www.pexels.com/photo/seedlings-on-seedling-tray-11573787/)
4. [Chăm sóc cây – Greta Hoffman](https://www.pexels.com/photo/person-carrying-a-seedling-tray-7728646/)
5. [Rau củ – Eva Bronzini](https://www.pexels.com/photo/fresh-vegetables-and-flowers-in-wooden-crate-5503195/)
6. [Rau trộn – cottonbro studio](https://www.pexels.com/photo/photo-of-vegetable-salad-in-a-bowl-3298060/)

Video sử dụng ảnh minh họa của dự án, nhạc nền tổng hợp nguyên bản bởi `tools/build-film.py` và phụ đề tiếng Việt. Không dùng nhạc có bản quyền của bên khác. Minh họa chuyển động tưới cây được viết bằng SVG/CSS trong HTML, không phải logo.

## Ảnh sản phẩm bổ sung — giai đoạn 4

Tạo bằng công cụ imagegen tích hợp, không dùng ảnh của thương hiệu khác. Chuyển sang WebP 1200 × 900 để dùng trên website. Đây là ảnh tổng hợp cho thương hiệu giả định.

Các file: `assets/images/pea-shoots.webp`, `romaine.webp`, `basil.webp`, `mint.webp`.

Prompt chung: Product photography for a Vietnamese fresh vegetable brand. {subject}, on a cream ceramic plate, pale cream tabletop, soft daylight, green and warm cream palette, clean editorial closeup, landscape 4:3, centered entire vegetable visible, no text, no logo, no watermark, no other vegetable species.

Subjects lần lượt:
- Fresh young pea shoots with curled tendrils
- One romaine lettuce head with upright elongated ribbed leaves
- Fresh sweet basil sprigs with smooth oval green leaves
- Fresh mint sprigs with serrated textured leaves
