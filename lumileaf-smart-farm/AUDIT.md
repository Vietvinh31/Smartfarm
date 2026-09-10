# Kiểm tra hoàn tất — 11/09/2026

Phạm vi: sáu trang HTML hiện có. Kiểm tra bằng Microsoft Edge headless qua Playwright trên Windows.

| Nội dung | Kết quả |
| --- | --- |
| 1440, 1280, 1024, 768, 390, 375 px × 6 trang | Đạt 36/36; không phát hiện phần tử tràn ngang |
| Ảnh và đường dẫn nội bộ | Không thiếu tệp, không có ảnh lỗi |
| HTTP và JavaScript khi duyệt | Không có HTTP ≥400 hoặc lỗi pageerror trong lượt kiểm tra |
| Navbar và mobile menu | Mở/đóng, Escape và liên kết trang hoạt động |
| Bộ lọc sản phẩm | Tất cả 6; Microgreens 3; rau ăn lá 2; rau gia vị 1 |
| Modal sản phẩm | Mở chi tiết và đóng bằng Escape hoạt động |
| Gallery | Sáu ảnh; mở lightbox và đóng bằng Escape hoạt động |
| Smart Farm | Chọn mục thay ảnh; số liệu ghi rõ là mô phỏng |
| Form | Kiểm tra bắt buộc/email; giữ dữ liệu và báo rõ chưa gửi |
| Font | Be Vietnam Pro tải từ project, gồm ký tự tiếng Việt và giấy phép OFL |
| Logo | Cùng một ảnh hai lá gốc được dùng cho navbar/footer/mobile/favicon |
| Nội dung | Không testimonial giả, không claim 90%, không dashboard quản trị |
| Video | Placeholder và TODO; không yêu cầu MP4 chưa tồn tại |

Đã xem ảnh chụp desktop, mobile và các trang con để kiểm tra bố cục. Ảnh tạo bằng AI chỉ phục vụ minh họa, không đại diện ảnh chụp nông trại thực tế. Chi tiết nguồn ảnh và prompt tại README.md.

Giới hạn: chưa kiểm tra trên thiết bị iOS/Safari thật. Chưa có video nên chưa thể kiểm tra phát video/âm thanh/phụ đề bằng nội dung thật. Form không có backend; mạng xã hội chờ URL chính thức.
