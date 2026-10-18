# Website Chúc Mừng Sinh Nhật Hoàng Gia & Lãng Mạn 🌸

Dự án website chúc mừng sinh nhật được nâng cấp toàn diện, tráng lệ và lãng mạn dành riêng cho **Bảo Trân**, lấy cảm hứng từ hoa hồng Sophia vương giả với tông hồng phấn, trắng kem và mạ vàng ấm áp.

---

## 🌹 Cấu trúc thư mục

```
hpbd/
├── index.html              # Cấu trúc HTML5 chuẩn ngữ nghĩa, hoa văn góc & bó hoa
├── style.css               # Phong cách hoàng gia, hiệu ứng 3D, nến, khói và ánh kim
├── script.js               # Cấu hình tập trung, vệt sao Stardust, pháo hoa đôi & chuyển cảnh
├── assets/
│   ├── sophia-rose-bg.jpg  # Hình nền hoa hồng Sophia viền 4 góc tinh xảo
│   ├── sophia-bouquet.png  # Bó hoa hồng Sophia tách nền trong suốt cực đẹp
│   └── sophia-bouquet.jpg  # Bản dự phòng chất lượng cao
└── README.md               # Tài liệu hướng dẫn chi tiết
```

---

## ✨ Những điểm nâng cấp hoành tráng mới

1. **Bó hoa hồng Sophia bay bổng ("Bó hoa mà em thích")**:
   - Tái hiện trực quan câu chúc: *"Anh không đến đây 1 mình, anh đến đây với bó hoa mà em thích"*.
   - Bó hoa được minh họa màu nước nghệ thuật, gói giấy kem mờ và nơ lụa mềm mại, có hiệu ứng lơ lửng 3D và hào quang ánh sáng (`halo breath`).
   - Khi chạm hoặc bấm vào bó hoa, một đợt pháo hoa giấy và cánh hoa nhẹ sẽ bung nở vui mắt!

2. **Vệt bụi sao ma thuật (Interactive Stardust Trail)**:
   - Khi di chuyển chuột trên máy tính hoặc vuốt chạm trên màn hình điện thoại, một dải hạt sao lấp lánh 4 cánh và chấm sáng màu đào sẽ bay bổng theo đầu ngón tay.

3. **Hộp quà bùng nổ ánh sáng (Epic Box Opening)**:
   - Hộp quà 3D với nơ vàng kim đung đưa nhẹ.
   - Khi bấm mở, hộp quà rung chuyển nhẹ, ánh sáng vàng kim bùng nở từ bên trong, nắp hộp xoay lật bay lên không trung cùng cơn mưa confetti rực rỡ.

4. **Đại tiệc pháo hoa đôi góc (Grand Dual-Cannon Fireworks)**:
   - Khi thổi tắt ngọn nến trên bánh sinh nhật, hai đại bác pháo hoa từ hai góc đáy màn hình bắn lên cao vút theo góc nghiêng, tạo nên màn ăn mừng đỉnh cao đầy cảm xúc.

5. **Ngọn nến chân thực & làn khói mảnh mai**:
   - Ngọn lửa nến sinh nhật có quầng sáng khuếch tán mềm mại, rung rinh sống động.
   - Khi thổi, ngọn lửa vụt tắt và làn khói trắng uốn lượn bay dần lên cao rồi tan biến.
   - Có thể bấm trực tiếp vào nến/bánh để thổi.

6. **Hiệu ứng nghiêng thẻ 3D (Interactive 3D Tilt)**:
   - Trên màn hình máy tính, thẻ nội dung tương tác nhẹ theo vị trí chuột, tạo cảm giác thẻ thiệp chúc mừng cao cấp có chiều sâu thật.

---

## ⚙️ Cấu hình tập trung trong [`script.js`](script.js)

```javascript
const BIRTHDAY_CONFIG = {
  // 1. Tên người nhận sinh nhật
  recipientName: "Bảo Trân",

  // 2. Lời chúc sinh nhật (dùng \n để xuống dòng)
  wishes: "Anh không đến đây 1 mình,\nanh đến đây với bó hoa mà em thích,\nchúc em sinh nhật vui vẻ",

  // 3. Thông điệp trên hộp quà ban đầu
  giftPrompt: "Có một món quà dành cho bạn!",

  // 4. Thông điệp sau khi thổi nến
  postBlowWish: "Mong mọi điều tốt đẹp sẽ đến với bạn! 🌷",

  // 5. Đường dẫn ảnh nền hoa hồng Sophia & Bó hoa
  bgImage: "assets/sophia-rose-bg.jpg",
  bouquetImage: "assets/sophia-bouquet.png",

  // 6. Cấu hình hiệu ứng cánh hoa rơi
  petals: {
    enabled: true,
    count: 28,
    fallSpeed: 1.15,
    windSpeed: 0.85
  },

  // 7. Cấu hình vệt sao stardust theo con trỏ
  stardust: {
    enabled: true
  }
};
```

---

## 🚀 Trải nghiệm website

- Mở trình duyệt và truy cập: **`http://localhost:8080`**
- Hoặc nhấp đúp trực tiếp vào file [`index.html`](index.html).
