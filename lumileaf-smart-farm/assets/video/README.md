# Video thương hiệu – TODO

Chưa có tệp video thật. Trang chủ giữ placeholder hình ảnh, không có nguồn MP4 gây 404 hoặc nút phát giả.

Khi có video:

1. Thêm `uom-xanh-brand.mp4` (H.264 và âm thanh AAC) vào thư mục này.
2. Thêm `uom-xanh-vi.vtt` có phụ đề tiếng Việt khớp nội dung và thời gian video. Tệp phụ đề cũ chỉ là bản nháp, không được coi là phụ đề đã kiểm chứng.
3. Thay `.video-placeholder` tại `index.html` bằng trình phát:

```html
<div class="video-player-wrap">
  <video id="brand-video" controls preload="metadata" poster="assets/images/hero/greenhouse.webp">
    <source src="assets/video/uom-xanh-brand.mp4" type="video/mp4">
    <track kind="subtitles" src="assets/video/uom-xanh-vi.vtt" srclang="vi" label="Tiếng Việt" default>
  </video>
</div>
```

Trình phát gốc hỗ trợ phát/dừng, âm lượng, tua, phụ đề và toàn màn hình theo trình duyệt. Logic trình phát tùy chỉnh cũ vẫn được giữ trong `js/animations.js` nếu cần dùng lại.

Gợi ý trình tự: hạt giống → nảy mầm → chăm sóc thông minh → thu hoạch → đóng gói → bàn ăn. Chỉ dùng logo hai chiếc lá đã được cung cấp và lời dẫn tiếng Việt.
