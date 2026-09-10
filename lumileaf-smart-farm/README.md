# Ươm Xanh Smart Farm

Website frontend giới thiệu thương hiệu nông nghiệp thông minh — **Bài tập lớn môn Công nghệ đa phương tiện**.

## Mục tiêu

Xây dựng website multimedia hiện đại giới thiệu thương hiệu **ƯƠM XANH SMART FARM** — nông trại thông minh, rau sạch, microgreens. Website kết hợp:

- Văn bản & Typography
- Logo tùy chỉnh
- Hình ảnh & Gallery
- Animation & Scroll storytelling
- Video + Audio + Subtitle (WebVTT)
- Interaction (filter, modal, form, dashboard demo)
- Responsive design

**Chỉ frontend** — không có backend, database hay API.

## Công nghệ

- HTML5 (semantic)
- CSS3 (variables, Grid, Flexbox)
- JavaScript ES6+ (Vanilla, ES Modules)
- Google Fonts: Be Vietnam Pro + Lora

## Cấu trúc thư mục

```
lumileaf-smart-farm/
├── index.html
├── pages/
│   ├── about.html
│   ├── smart-farm.html
│   ├── products.html
│   ├── journey.html
│   └── contact.html
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── style.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── navbar.js
│   ├── animations.js
│   ├── products.js
│   └── contact.js
├── assets/
│   ├── images/ (hero, farm, products, journey, about, gallery)
│   ├── video/
│   ├── audio/
│   ├── icons/
│   └── logo/
└── README.md
```

## Cách chạy project

1. Mở thư mục `lumileaf-smart-farm` trong **VS Code**
2. Cài extension **Live Server** (nếu chưa có)
3. Click chuột phải vào `index.html` → **Open with Live Server**
4. Website chạy tại `http://127.0.0.1:5500/` (hoặc port tương tự)

> **Lưu ý:** Phải dùng Live Server (hoặc local server) vì JavaScript dùng ES Modules (`import/export`).

## Danh sách multimedia assets cần thay

Hiện tại project dùng **SVG placeholder**. Bạn cần thay bằng nội dung thật:

### Hình ảnh (`assets/images/`)

| File placeholder | Thay bằng | Gợi ý nội dung |
|---|---|---|
| `hero/hero-smart-farm.svg` | `hero-smart-farm.jpg` | Nông trại thông minh, microgreens |
| `hero/hero-poster.svg` | `hero-poster.jpg` | Poster cho hero video |
| `farm/farm-led.svg` | `farm-led.jpg` | Hệ thống LED chiếu sáng |
| `farm/farm-sensors.svg` | `farm-sensors.jpg` | Cảm biến, dashboard |
| `farm/farm-vertical.svg` | `farm-vertical.jpg` | Vertical farm |
| `products/*.svg` | `*.jpg` | Ảnh sản phẩm thật (6 sản phẩm) |
| `journey/*.svg` | `*.jpg` | 6 bước hành trình |
| `about/*.svg` | `*.jpg` | Team, mission |
| `gallery/gallery-*.svg` | `gallery-*.jpg` | 6 ảnh gallery |

Sau khi thay, cập nhật đuôi file trong HTML/JS từ `.svg` sang `.jpg` hoặc `.webp`.

### Video (`assets/video/`)

| File | Mô tả |
|---|---|
| `hero-farm.mp4` | Video loop 8–12s cho hero background (muted, autoplay) |
| `lumileaf-brand.mp4` | Video quảng cáo 20–30 giây (có audio/voice-over) |

**Kịch bản video 30 giây:**

| Thời gian | Hình ảnh | Voice-over |
|---|---|---|
| 0–4s | Hạt giống | "Every great harvest begins with a seed." |
| 4–8s | Mầm cây | — |
| 8–13s | Nước, ánh sáng, cảm biến | "Technology helps us understand what every plant needs." |
| 13–18s | Nông trại thông minh | — |
| 18–23s | Thu hoạch | "Less waste. Smarter growing. Fresher food." |
| 23–27s | Đóng gói | — |
| 27–30s | Logo Ươm Xanh | "Ươm Xanh. Ươm xanh bằng công nghệ." |

### Subtitle

| File | Mô tả |
|---|---|
| `lumileaf-vi.vtt` | Phụ đề tiếng Việt (đã có sẵn, có thể chỉnh theo video thật) |

### Audio (tùy chọn)

| File | Mô tả |
|---|---|
| `assets/audio/ambient-farm.mp3` | Nhạc nền nhẹ (nếu muốn thêm) |

## Tính năng đã triển khai

- [x] Navbar sticky + transparent → solid on scroll
- [x] Mobile hamburger menu
- [x] Hero 100vh với video background + poster fallback
- [x] Counter animation (stats)
- [x] Smart Farm dashboard demo (dữ liệu live giả lập)
- [x] Journey timeline (horizontal desktop / vertical mobile)
- [x] Product grid + filter + modal chi tiết
- [x] Video player custom controls + subtitle toggle
- [x] Gallery masonry grid
- [x] Testimonial slider
- [x] Contact form validation + toast
- [x] Scroll reveal animations
- [x] `prefers-reduced-motion` support
- [x] Responsive 375px – 1440px
- [x] SEO cơ bản + semantic HTML + accessibility

## Luồng demo gợi ý (2–3 phút)

1. **Hero** — Video background, slogan, CTA
2. **Stats** — Counter animation khi scroll
3. **Smart Farm** — Dashboard dữ liệu live demo
4. **Products** — Filter + modal chi tiết
5. **Journey** — Timeline storytelling
6. **Video** — Phát video + bật/tắt subtitle
7. **Contact** — Gửi form demo

## Nhóm thực hiện

Dự án học tập — Nhóm 04, Lớp 68M, Khoa CNTT, Trường ĐH Xây Dựng Hà Nội.

---

**Ươm Xanh Smart Farm** — *Ươm xanh bằng công nghệ.*
