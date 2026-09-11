# Ươm Xanh – Nông nghiệp thông minh

Website giới thiệu thương hiệu cho bài Công nghệ đa phương tiện của Nhóm 4. Giữ HTML, CSS và JavaScript ES Modules hiện có; không có backend hay kết nối IoT.

## Chạy tại máy

Từ thư mục này chạy `python -m http.server 5500 --bind 127.0.0.1`, sau đó mở http://127.0.0.1:5500. Không mở trực tiếp bằng file:// vì JavaScript dùng ES Modules.

## Giao diện và nội dung

- Sáu trang dùng chung `css/variables.css`, `css/fonts.css`, `css/brand.css` và các stylesheet thành phần hiện có.
- Be Vietnam Pro được lưu tại `assets/fonts`, kèm giấy phép OFL; không cần tải Google Fonts khi xem trang.
- Logo duy nhất đang được sử dụng: `assets/logo/two-leaves.svg`. SVG chỉ tạo khung hiển thị quanh ảnh PNG gốc người dùng cung cấp, không vẽ lại hình lá. Navbar, mobile menu, footer và favicon cùng dùng tệp này.
- Các tệp logo cũ được giữ trong kho nguồn nhưng không được tham chiếu trong giao diện.
- Trang chủ: hero, thanh điểm mạnh, giới thiệu, Smart Farm, ba sản phẩm, sáu bước hành trình, định hướng bền vững, video, sáu ảnh gallery, liên hệ và footer.
- Bộ lọc, modal sản phẩm, mobile menu, lightbox, hiệu ứng xuất hiện và mô phỏng cảm biến dùng các module hiện có.

## Các mục cần nội dung thật

- Video thương hiệu thật dài 28 giây, H.264/AAC, khoảng 2,65 MB, nhạc nền không lời tự tạo và 8 đoạn phụ đề VTT. Xem `assets/video/README.md`.
- Form chỉ kiểm tra dữ liệu tại trình duyệt, không gửi hoặc lưu dữ liệu. Email và số điện thoại có liên kết thật.
- Chưa có URL mạng xã hội: biểu tượng không gắn liên kết giả.
- Dữ liệu môi trường và ảnh là minh họa; không có chứng nhận sản phẩm hay số liệu tiết kiệm tài nguyên được khẳng định.

## Kiểm tra giao diện

Đã kiểm tra bằng Edge/Playwright ở 1440, 1280, 1024, 768, 390 và 375 px trên cả sáu trang; kiểm tra asset, lỗi JavaScript, tràn ngang, menu, bộ lọc, modal, lightbox, demo Smart Farm và form. Chi tiết tại `AUDIT.md`.

## Ảnh minh họa

Ảnh minh họa được tạo bằng imagegen; gallery dùng sáu ảnh tư liệu Pexels. Tất cả được lưu local và chuyển WebP để giảm dung lượng. Đây không phải ảnh chụp nông trại thật. Logo không được tạo bằng AI.

Các tệp cuối nằm tại `assets/images/`: `hero/greenhouse.webp`, `microgreens.webp`, `radish.webp`, `broccoli.webp`, `herbs.webp`, `kale.webp`, `seedlings.webp`, `harvest.webp`, `led.webp`, `packaging.webp`, `table.webp`.

Prompt chung: “Use case: photorealistic-natural. Illustrative photograph for a smart agriculture brand website. Bright soft morning daylight, fresh green and warm cream palette, clean premium editorial photography, landscape 4:3. No text, no logo, no watermark.”

Chủ thể của từng prompt:

- greenhouse: lush butterhead lettuce in white hydroponic channels, clean greenhouse, green hills, gentle morning light.
- microgreens: mixed radish and broccoli microgreens in a shallow tray, green leaves and delicate purple stems.
- radish: red radish microgreens with purple stems and green cotyledons on a cream ceramic plate.
- broccoli: dense young broccoli microgreens, pale green stems and tiny paired cotyledons, no purple stems.
- herbs: basil, parsley and coriander on a light cream kitchen surface.
- kale: curly green kale leaves on a cream natural surface.
- seedlings: seeds beside emerging seedlings in coco coir plugs inside a bright greenhouse.
- harvest: hands harvesting butterhead lettuce into a clean crate in a greenhouse, no faces.
- led: bright vertical farm, shelves of microgreens, white LED lights and an unbranded sensor, no purple neon.
- packaging: lettuce and microgreens being packed in unbranded kraft produce boxes.
- table: green salad with microgreens in a cream ceramic bowl on a light dining table.


## Hoàn thiện đa phương tiện

- `css/multimedia.css` và `js/multimedia.js`: minh họa tưới tuần hoàn bằng SVG/CSS, nút tạm dừng, dừng ngoài màn hình và tôn trọng reduced motion.
- Sáu sản phẩm được ghi sẵn trong HTML; JavaScript bổ sung lọc và chi tiết, không cần build để hiển thị nội dung.
- Bốn lựa chọn Smart Farm sử dụng bốn ảnh khác nhau; hành trình đầy đủ có sáu ảnh khác nhau; gallery có sáu ảnh riêng.
- Ảnh của cùng sản phẩm được dùng lại trong phần nổi bật và chi tiết; lightbox dùng chính ảnh đã chọn. Đây là liên kết cùng nội dung, không phải ảnh dùng chung cho nhiều sản phẩm.
- Nguồn ảnh mới và prompt: `docs/MEDIA-SOURCES.md`, `tools/new-images.json`.

## Vercel

Giữ Root Directory hiện có là `lumileaf-smart-farm`, framework Other, không cần lệnh build. Các route `.html` giữ nguyên. `vercel.json` đặt MIME cho VTT. Toàn bộ ảnh, font, MP4 và VTT phục vụ từ cùng origin.

Đã kiểm tra bản đang chạy tại https://uomxanhsf.vercel.app: sáu route hoạt động, sáu sản phẩm xuất hiện, chưa có video. Các chỉnh sửa lần này nằm ở local, chưa push hoặc triển khai. Sau khi triển khai, kiểm tra lại video nhận metadata 28 giây, source MP4 và track VTT trả 200/206; dùng `tools/production-check.cjs` để kiểm tra route.

## Nội dung chuyên sâu

Bốn trang nội dung dùng thêm `css/editorial.css`: câu chuyện thương hiệu, cách vận hành Smart Farm, chọn rau theo bữa ăn và hành trình sáu bước. FAQ sử dụng details/summary nên hoạt động không cần JavaScript. Nhãn minh họa được bỏ khỏi UI theo yêu cầu; nguồn ảnh vẫn ở docs. Các số liệu cảm biến ngẫu nhiên không còn được hiển thị; mô tả sản phẩm đã được cập nhật cùng HTML tĩnh.
