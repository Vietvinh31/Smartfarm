# Audit hoàn thiện — 11/09/2026

Website giữ nguyên sáu route và nền tảng HTML/CSS/JS; không thêm framework hoặc backend.

| Yêu cầu | Kết quả |
| --- | --- |
| Giới thiệu thương hiệu | Trang chủ, câu chuyện/sứ mệnh/tầm nhìn/giá trị, mô hình, sản phẩm, hành trình và liên hệ được giữ đồng bộ |
| Logo và tiếng Việt | Chỉ tham chiếu logo lá gốc; tên thương hiệu là HTML; font Be Vietnam Pro local |
| Ảnh riêng | 6 sản phẩm/6 ảnh; 6 gallery/6 ảnh; 6 bước hành trình/6 ảnh; 4 chủ đề Smart Farm/4 ảnh |
| Ngoại lệ tái sử dụng hợp lý | Cùng sản phẩm ở trang chủ/danh mục/modal; ảnh lightbox và ảnh nguồn; ảnh hành trình trong video |
| Ảnh động | SVG/CSS tưới tuần hoàn, có chuyển động thực; tạm dừng, dừng ngoài màn hình, reduced motion |
| Video thật | 28 giây, 1280×720, H.264 + AAC, nhạc nền không lời; 8 cue tiếng Việt; poster và bản chữ |
| Trình phát | Kiểm tra phát/dừng, thời gian tăng, seek 16,5 giây, unmuted volume 1, phụ đề tải đủ; native controls |
| Sản phẩm | HTML tĩnh hiện cả khi tắt JS; bộ lọc 6/3/2/1; modal hoạt động, đóng trả focus |
| Responsive | 375, 390, 768, 1024, 1280, 1440 px × 6 trang: 36/36 không overflow |
| Asset và JavaScript | Toàn bộ ảnh có src được tải/decode; không HTTP >=400 hoặc pageerror trong lượt local |
| Tương tác | Menu mobile/Escape, gallery lightbox, Smart Farm đổi ảnh, form validation đạt |
| Thông tin liên hệ | 55 Giải Phóng, Bạch Mai, Hà Nội; nhom4@smartfarm.vn; 0375219286; copyright 2026 thống nhất |

Bằng chứng: `docs/audit/local-final.json`, `interaction-extra.json`, `video-probe.json`, ảnh chụp home desktop/mobile, motion, gallery và video. Đã kiểm tra trực quan các ảnh mới trên contact sheet. `node --check` đạt cho các module JS sửa đổi.

Production: đã kiểm tra https://uomxanhsf.vercel.app, sáu route hoạt động, sản phẩm hiển thị. Bản live chưa có video; thay đổi lần này chưa được push/deploy. Báo cáo `docs/audit/production-before.json` là bản live, không phải xác nhận triển khai các thay đổi local.

Giới hạn: chưa thử Safari/iOS hoặc thiết bị thật; toàn màn hình dựa trên khả năng trình duyệt. Form là demo kiểm tra dữ liệu, không gửi hoặc lưu dữ liệu. Video là montage ảnh có nhạc nền, không có lời đọc. Ảnh AI và số liệu Smart Farm được ghi rõ là minh họa. Nguồn ảnh và giấy phép tại `docs/MEDIA-SOURCES.md`.

## Cập nhật nội dung chuyên sâu — 11/09/2026

Bốn trang Câu chuyện, Smart Farm, Sản phẩm và Hành trình xanh đã được phát triển theo từng mạch đọc riêng. `css/editorial.css` dùng bố cục chương, dòng chữ có độ dài vừa phải, thẻ nội dung, FAQ gốc HTML và điều hướng neo. Không bổ sung framework hoặc ảnh trùng.

Đã bỏ các nhãn hình ảnh minh họa/mô phỏng và ghi chú nguồn ảnh trên giao diện theo yêu cầu; thông tin nguồn vẫn được lưu trong docs. Thay các giá trị cảm biến ngẫu nhiên bằng nội dung giải thích, tránh trình bày như dữ liệu đang đo thực tế. Form giữ thông báo chưa hỗ trợ gửi trực tuyến để không báo gửi thành công giả. Copyright theo yêu cầu ban đầu được giữ.

Mô tả sản phẩm trong HTML và modal được đồng bộ; chi tiết gợi ý kết hợp thay cho chu kỳ trồng cố định. Không thêm chứng nhận, lịch sử doanh nghiệp hoặc thành tích chưa được cung cấp.

Đã chụp và xem bốn trang desktop, tạo thêm bốn ảnh chụp mobile tại `docs/audit/editorial-*.png`. `docs/audit/editorial.json` ghi nhận đường dẫn neo hợp lệ và không còn cụm “minh họa/mô phỏng” trong nội dung bốn trang. Các kiểm tra local vẫn được lưu trong `local-final.json`. Chưa triển khai cập nhật lên Vercel.
