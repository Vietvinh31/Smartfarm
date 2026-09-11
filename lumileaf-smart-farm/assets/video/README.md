# Video thương hiệu Ươm Xanh

`uom-xanh-brand.mp4`: 28 giây, 1280×720, 25 fps, H.264/yuv420p + AAC, faststart, khoảng 2,65 MB. Video dựng từ ảnh minh họa có chuyển động chậm; nhạc nền không lời tự tổng hợp, không có lời đọc.

`uom-xanh-vi.vtt`: 8 đoạn phụ đề khớp 8 cảnh. `uom-xanh-poster.webp`: poster với logo lá gốc và chữ thương hiệu HTML. Native controls hỗ trợ phát/dừng, tua, âm lượng, phụ đề và toàn màn hình theo trình duyệt. Nội dung chữ đầy đủ có trong details ngay dưới video.

Tái tạo: chạy `node tools/film-titles.cjs` khi server local cổng 5500 đang chạy, sau đó `python tools/build-film.py` (cần FFmpeg trên PATH). Công cụ tiêu đề dùng Playwright/Sharp hiện có trên máy phát triển; chúng không được tải vào website. Nhạc nền được tạo bằng Python stdlib, không cần dịch vụ ngoài. `tools/film-work` là tệp trung gian có thể xóa sau khi xuất. Báo cáo codec/thời lượng tại `docs/audit/video-probe.json`.
