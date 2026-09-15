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


## Logo vector — 15/09/2026

Kiểm tra SVG mới không có text/image/base64; sáu trang × 360/390/1440 px: 18 trường hợp không overflow, mỗi trang có ba logo mới. Logo rộng 165 px mobile, 210 px desktop; img có width/height và aspect-ratio đặt trước. Đã xem ảnh header desktop/mobile và tài liệu nền sáng/tối. Video xuất lại 28 giây, giữ nhạc và VTT. Bộ kiểm tra website 36 trường hợp đạt trước tinh chỉnh kích thước tagline; bộ logo 18 trường hợp đạt sau tinh chỉnh. Chưa kiểm tra thiết bị vật lý. Không deploy.

## Giai đoạn 2 — Hành trình cây, 16/09/2026

Minh họa Smart Farm trên trang chủ dùng SVG gốc và chu kỳ CSS 9 giây: 0–1,8s hạt giống; 1,8–3,6s rễ/thân; 3,6–5,4s mở lá; 5,4–7,2s cảm biến; 7,2–9s sẵn sàng thu hoạch rồi mờ nhẹ để lặp. Nước và LED đồng hành trong chu kỳ. Trạng thái chữ dùng cùng timeline CSS; không có timer JS cập nhật từng khung hình hoặc âm thanh. Văn bản thay đổi được ẩn khỏi accessibility tree để tránh đọc lặp; mô tả tĩnh đầy đủ nằm trong SVG và figcaption.

Nút native có aria-label/aria-pressed, dùng chuột và Space; IntersectionObserver dừng ngoài viewport; reduced motion và không JS hiển thị tĩnh. Kiểm tra trên Chrome và Edge ở 360 px đạt; chưa thử thiết bị iOS/Android thật. Bộ kiểm tra toàn site 36 lượt responsive đạt, không ảnh lỗi/pageerror; video 28s, 8 cue và bộ lọc vẫn hoạt động. Bằng chứng: docs/audit/growth-check.json, growth-chrome-check.json và ảnh chụp tương ứng. Không deploy.

## Giai đoạn 3 — Nội dung quảng bá, 16/09/2026

Hero nêu rõ rau tươi ứng dụng Smart Farm và ba nhóm sản phẩm. Tái sử dụng intro/USP cho “Vì sao chọn Ươm Xanh?”, thêm đúng một section khách hàng gồm bốn card. CTA sản phẩm/tư vấn/hành trình đồng bộ trên sáu trang; giữ URL và liên kết điều hướng chính, CTA header chuyển đến trang sản phẩm theo mục tiêu mới. Không thêm chức năng bán hàng hoặc gửi form.

Bỏ tuyên bố giàu dinh dưỡng trên card trang chủ, theo dõi 24/7, độ tươi tối đa và không phụ thuộc thời tiết. Lịch thu hoạch gần giao được diễn đạt là định hướng, lịch cụ thể cần trao đổi. Không có số liệu cảm biến mô phỏng hiển thị; thời lượng 9s/28s là thời lượng media thật. Hero giới thiệu hai câu; tám card lý do/khách hàng ngắn dưới 60 từ mỗi card.

Kiểm tra 36 lượt responsive đạt; kiểm tra bổ sung sáu trang ở 360/390/1440 đạt. Đã xem ảnh chụp hero 360 và 1440 px. Không lỗi HTTP/JS trong lượt audit; video, phụ đề, lọc sản phẩm và chuyển động vẫn chạy. Không deploy.

## Giai đoạn 4 — Kiểm tra local

- 10 sản phẩm: 4 Microgreens, 3 rau ăn lá, 3 rau gia vị; mỗi sản phẩm có ảnh riêng.
- Kiểm tra từng modal: 6 trường chi tiết, focus vào modal, vòng Tab/Shift+Tab, Escape và trả focus về nút mở. Kiểm tra thêm đóng bằng nút/overlay.
- CTA Húng quế chuyển sang Liên hệ với sản phẩm đã chọn và email soạn sẵn đúng tên.
- Sản phẩm không tràn ở 360/1440 px; ảnh đã decode thành công. Xem ảnh trong docs/audit/products-360.png, products-1440.png và product-detail-360.png.
- Kiểm tra hồi quy 6 trang ở 375,390,768,1024,1280,1440 px: không overflow, không ảnh hỏng hoặc lỗi JS/HTTP trong lần chạy; video 28 giây, 8 cue phụ đề. Danh mục tĩnh có đủ 10 sản phẩm khi tắt JS.
- Quy cách ghi rõ dự kiến, không thêm giá bán hoặc tuyên bố y tế. Không deploy.

## Giai đoạn 5

Trang truy xuất mẫu có cảnh báo dữ liệu mô phỏng, 6 giai đoạn, 4 chỉ số tĩnh, QR SVG và liên kết văn bản tương đương. Kiểm tra tự động qua tools/trace-check.cjs; kiểm tra QR bằng bộ giải mã zxing-cpp trả đúng URL production. Ảnh QA: docs/audit/trace-360.png và trace-1440.png. Không xác nhận dữ liệu sản xuất thật; không deploy.
