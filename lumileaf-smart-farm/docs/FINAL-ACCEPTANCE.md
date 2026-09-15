# Nghiệm thu cuối — Ươm Xanh

Chưa deploy. Không có file .vercel/project.json trong source; có vercel.json cho website tĩnh. Không tìm hoặc sử dụng credential ngoài dự án.

## Kết quả

| Yêu cầu | Kết quả | Bằng chứng / giới hạn |
|---|---|---|
| Link nội bộ, anchor, ảnh | PASS | tools/static-final.py: không link thiếu, ảnh có alt |
| Responsive | PASS | 7 trang × 360×800,390×844,768×1024,1024×768,1440×900; không overflow/ảnh lỗi |
| Menu mobile | PASS | Mở, Escape và aria-expanded |
| Logo vector | PASS | tools/logo-check.cjs: cấu trúc vector và 18 trường hợp responsive |
| Lọc, chi tiết 10 sản phẩm | PASS | Bộ lọc 4/3/3, focus trap, trả focus, 3 cách đóng |
| Form | PASS | Validation và thông báo chưa gửi, chọn sản phẩm và mailto; không có backend |
| Animation | PASS | Chuột, Space, offscreen, reduced motion và no-JS |
| Truy xuất và QR | PASS local | 6 bước, lô sai, nhãn mô phỏng; QR giải mã đúng URL production, chờ deploy trang mới |
| Gallery/lightbox | PASS | Mở ảnh và Escape |
| Console/asset 404 | PASS | Không ghi nhận lỗi trong phiên kiểm thử |
| Heading, alt, focus | PASS kiểm tra cơ bản | 1 h1/trang, không nhảy cấp heading, outline focus, modal keyboard |
| Contrast toàn bộ trạng thái | CHƯA ĐẠT nghiệm thu | Chưa có phép đo đầy đủ mọi nền ảnh, hover và focus; không tuyên bố đạt WCAG toàn bộ |
| Video hình ảnh/audio stream | PASS kỹ thuật | 71,146 giây, 3840×2160, H.264/AAC, phát ở 360/768/1440, controls/playsinline |
| Phụ đề | PASS quan sát | Phụ đề chèn trong hình; không tải VTT cũ |
| Transcript / lời nói | CHƯA ĐẠT | Chưa có transcript xác minh với lời đọc; transcript cũ đang ẩn. Không suy diễn lời đọc từ audio stream |
| Video dưới 2 phút | PASS | 71,146 giây; không đạt ưu tiên dưới 30 giây nhưng đạt giới hạn bắt buộc |
| Hiệu năng video | PASS cải thiện / còn hạn chế | Metadata lên đầu file; preload metadata; file vẫn khoảng 366 MB, mạng chậm có thể buffering |
| Văn bản, ảnh tĩnh, logo chữ, animation, chủ đề nông nghiệp | PASS | Có trong giao diện và tài liệu logo |
| Footer học tập, dữ liệu mô phỏng | PASS | Có nhãn dự án và cảnh báo lô mẫu |

## Lỗi đã sửa

- Footer đổi h4 thành h2, giữ class và kiểu trình bày.
- Form thêm aria-invalid và liên kết lỗi với trường nhập bằng aria-describedby.
- Bộ test cập nhật video 71 giây, không còn kỳ vọng VTT 28 giây; đúng 5 kích thước yêu cầu và thêm trang truy xuất.
- MP4 chuyển metadata lên đầu bằng -c copy -movflags +faststart. Stream SHA256 hình và âm thanh khớp bản gốc, không đổi nội dung hoặc tái mã hóa. Bản gốc tại tools/video-original (gitignored).
- .vercelignore loại công cụ, bản video dự phòng và ảnh audit khỏi gói triển khai.

## File thay đổi trong lượt nghiệm thu

index.html; pages/about.html; pages/contact.html; pages/journey.html; pages/products.html; pages/smart-farm.html; pages/traceability.html; js/contact.js; assets/video/uom-xanh-brand.mp4; tools/audit.cjs; tools/static-final.py; .gitignore; .vercelignore; docs/FINAL-ACCEPTANCE.md; kết quả kiểm tra trong docs/audit/.

## Triển khai sau khi giải quyết mục chưa đạt

Trong Vercel mở project đang phục vụ uomxanhsf.vercel.app. Kiểm tra Root Directory là lumileaf-smart-farm, loại dự án Other/static, không cần build. Đưa các file website đã kiểm tra lên repository được liên kết để kích hoạt deployment. Không đưa tools/video-original, tools/.qr-deps hoặc secrets lên Git. Video hiện lớn hơn 100 MB: không dùng git push thông thường để đưa file này lên GitHub; cần xử lý phân phối file lớn trước khi chọn luồng Git.

Có thể dùng Vercel CLI từ thư mục lumileaf-smart-farm khi tài khoản của nhóm đã đăng nhập: `vercel --prod`. Kiểm tra project đích trước khi xác nhận; .vercelignore sẽ loại công cụ local. Lần kiểm tra này không chạy lệnh deploy và chưa xác nhận giới hạn upload của tài khoản.

## Checklist thuyết trình

- Giới thiệu thương hiệu giả định và ba nhóm rau.
- Mở docs/logo-design.html: chữ vector tự thiết kế, biến thể và lưới dựng.
- Trình diễn animation, tạm dừng bằng bàn phím và reduced motion.
- Lọc sản phẩm, mở chi tiết, chuyển sang tư vấn; giải thích form không tự gửi.
- Mở lô UX-260915-01, chỉ rõ dữ liệu mô phỏng và quét QR sau deploy.
- Phát video với âm thanh và phụ đề; chuẩn bị transcript đã xác minh trước nghiệm thu.
- Trình diễn giao diện mobile và gallery.
- Nêu giới hạn: thương hiệu học tập, không dữ liệu sản xuất thật, không backend.
