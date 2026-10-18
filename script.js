/**
 * ============================================================================
 * CẤU HÌNH TẬP TRUNG (EASY CONFIGURATION)
 * Dễ dàng chỉnh sửa thông tin người nhận, lời chúc và hình nền tại đây.
 * ============================================================================
 */
const BIRTHDAY_CONFIG = {
  // 1. Tên người nhận sinh nhật
  recipientName: "Bảo Trân",

  // 2. Lời chúc sinh nhật (xuống dòng bằng dấu \n)
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
    count: 28,            // Số lượng cánh hoa trên màn hình
    minSize: 12,          // Kích thước tối thiểu (px)
    maxSize: 24,          // Kích thước tối đa (px)
    fallSpeed: 1.15,      // Tốc độ rơi nhẹ nhàng
    windSpeed: 0.85       // Tốc độ đung đưa theo gió
  },

  // 7. Cấu hình vệt sao stardust lấp lánh khi di chuột
  stardust: {
    enabled: true
  }
};

/* ============================================================================
   KHỞI TẠO VÀ RENDER NỘI DUNG TỪ CONFIG
   ============================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Áp dụng ảnh nền từ cấu hình nếu có
  if (BIRTHDAY_CONFIG.bgImage) {
    document.body.style.backgroundImage = `url('${BIRTHDAY_CONFIG.bgImage}')`;
  }

  // Cập nhật tiêu đề trang và các đoạn văn bản
  const titleEl = document.querySelector('#birthday-title .title-text') || document.getElementById('birthday-title');
  const promptEl = document.getElementById('gift-prompt');
  const wishesEl = document.getElementById('wishes-text');
  const blessingEl = document.getElementById('blessing-text');
  const bouquetImg = document.getElementById('bouquet-img');

  if (titleEl) {
    titleEl.textContent = `Chúc mừng sinh nhật ${BIRTHDAY_CONFIG.recipientName}!`;
  }
  document.title = `Chúc Mừng Sinh Nhật ${BIRTHDAY_CONFIG.recipientName} 🌸`;

  if (promptEl) {
    promptEl.textContent = BIRTHDAY_CONFIG.giftPrompt;
  }

  if (wishesEl) {
    wishesEl.innerHTML = escapeHtml(BIRTHDAY_CONFIG.wishes).replace(/\n/g, '<br>');
  }

  if (blessingEl) {
    blessingEl.textContent = BIRTHDAY_CONFIG.postBlowWish;
  }

  if (bouquetImg && BIRTHDAY_CONFIG.bouquetImage) {
    bouquetImg.src = BIRTHDAY_CONFIG.bouquetImage;
  }

  // Khởi động các tương tác và hiệu ứng
  initStageInteractions();
  initPetalAnimation();
  initStardustTrail();
  initConfetti();
  init3DCardTilt();
  initBouquetInteractions();
});

/**
 * Hàm hỗ trợ chống XSS an toàn khi render text
 */
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ============================================================================
   LOGIC CHUYỂN ĐỔI GIAI ĐOẠN & TƯƠNG TÁC NGƯỜI DÙNG
   ============================================================================ */
function initStageInteractions() {
  const giftStage = document.getElementById('gift-stage');
  const wishesStage = document.getElementById('wishes-stage');
  const giftBox = document.getElementById('gift-box');
  const btnOpenGift = document.getElementById('btn-open-gift');
  const btnBlowCandle = document.getElementById('btn-blow-candle');
  const btnReplay = document.getElementById('btn-replay');
  const candle = document.getElementById('candle');
  const cakeWrapper = document.getElementById('cake-interactive-wrapper');
  const postBlowMessage = document.getElementById('post-blow-message');

  // Mở quà hoành tráng
  const handleOpenGift = () => {
    if (!giftBox.classList.contains('opening') && !giftBox.classList.contains('opened')) {
      giftBox.classList.add('opening');
      
      // Bắn pháo hoa rực rỡ tâm điểm từ hộp quà
      triggerConfettiBurst();

      setTimeout(() => {
        giftBox.classList.add('opened');
        giftStage.classList.remove('active');
        giftStage.classList.add('hidden');

        wishesStage.classList.remove('hidden');
        setTimeout(() => {
          wishesStage.classList.add('active');
          // Pháo hoa chào đón giai đoạn lời chúc & bó hoa
          triggerGrandFireworks();
        }, 50);
      }, 700);
    }
  };

  btnOpenGift.addEventListener('click', handleOpenGift);
  giftBox.addEventListener('click', handleOpenGift);
  giftBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleOpenGift();
    }
  });

  // Thổi nến hoành tráng (có thể bấm nút hoặc bấm trực tiếp vào nến/bánh)
  const handleBlowCandle = () => {
    if (!candle.classList.contains('extinguished')) {
      candle.classList.add('extinguished');
      btnBlowCandle.disabled = true;

      // Pháo hoa đại tiệc bắn từ 2 góc dưới màn hình lên cao
      triggerGrandFireworks();
      setTimeout(triggerGrandFireworks, 400);

      // Hiện lời chúc tốt đẹp
      setTimeout(() => {
        postBlowMessage.classList.remove('hidden');
        btnBlowCandle.classList.add('hidden');
        btnReplay.classList.remove('hidden');
      }, 700);
    }
  };

  btnBlowCandle.addEventListener('click', handleBlowCandle);
  if (cakeWrapper) {
    cakeWrapper.addEventListener('click', handleBlowCandle);
  }

  // Xem lại (Bắt đầu lại từ đầu)
  btnReplay.addEventListener('click', () => {
    // Reset nến và lời chúc
    candle.classList.remove('extinguished');
    postBlowMessage.classList.add('hidden');
    btnBlowCandle.disabled = false;
    btnBlowCandle.classList.remove('hidden');
    btnReplay.classList.add('hidden');

    // Chuyển về giai đoạn hộp quà
    wishesStage.classList.remove('active');
    wishesStage.classList.add('hidden');

    giftBox.classList.remove('opening', 'opened');
    giftStage.classList.remove('hidden');
    setTimeout(() => {
      giftStage.classList.add('active');
    }, 50);
  });
}

/* ============================================================================
   TƯƠNG TÁC CHẠM VÀO BÓ HOA SOPHIA
   ============================================================================ */
function initBouquetInteractions() {
  const bouquet = document.getElementById('bouquet-showcase');
  if (!bouquet) return;

  bouquet.addEventListener('click', (e) => {
    const rect = bouquet.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    triggerSoftSparkleConfetti(x, y);
    
    // Hiệu ứng nhún nhẹ vui mắt
    bouquet.style.transform = 'scale(1.08)';
    setTimeout(() => {
      bouquet.style.transform = '';
    }, 300);
  });
}

/* ============================================================================
   HIỆU ỨNG NGHIÊNG THẺ 3D (TILT CARD EFFECT)
   ============================================================================ */
function init3DCardTilt() {
  const card = document.getElementById('card-container');
  if (!card || window.innerWidth < 768) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  let bounds;

  function rotateToMouse(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    };

    const maxTilt = 5; // Độ nghiêng vừa phải sang trọng
    const rotateX = (-center.y / (bounds.height / 2)) * maxTilt;
    const rotateY = (center.x / (bounds.width / 2)) * maxTilt;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  card.addEventListener('mouseenter', () => {
    bounds = card.getBoundingClientRect();
    document.addEventListener('mousemove', rotateToMouse);
  });

  card.addEventListener('mouseleave', () => {
    document.removeEventListener('mousemove', rotateToMouse);
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  });
}

/* ============================================================================
   HIỆU ỨNG CÁNH HOA RƠI NHẸ NHÀNG (PETAL CANVAS ANIMATION)
   ============================================================================ */
function initPetalAnimation() {
  if (!BIRTHDAY_CONFIG.petals.enabled) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const canvas = document.getElementById('petal-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const petalColors = [
    { base: 'rgba(248, 185, 200, 0.78)', shadow: 'rgba(226, 120, 146, 0.42)' },
    { base: 'rgba(255, 215, 225, 0.82)', shadow: 'rgba(238, 145, 170, 0.36)' },
    { base: 'rgba(252, 232, 238, 0.88)', shadow: 'rgba(240, 170, 190, 0.32)' },
    { base: 'rgba(255, 245, 248, 0.92)', shadow: 'rgba(245, 195, 210, 0.28)' },
    { base: 'rgba(235, 150, 172, 0.72)', shadow: 'rgba(200, 95, 122, 0.45)' }
  ];

  class Petal {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : -20 - Math.random() * 50;
      this.size = BIRTHDAY_CONFIG.petals.minSize + Math.random() * (BIRTHDAY_CONFIG.petals.maxSize - BIRTHDAY_CONFIG.petals.minSize);
      this.speedY = (0.6 + Math.random() * 0.9) * BIRTHDAY_CONFIG.petals.fallSpeed;
      this.speedX = (Math.random() - 0.5) * BIRTHDAY_CONFIG.petals.windSpeed;
      this.oscillationSpeed = 0.02 + Math.random() * 0.03;
      this.oscillationAngle = Math.random() * Math.PI * 2;
      this.oscillationDistance = 0.9 + Math.random() * 1.6;
      
      this.rotation = Math.random() * 360;
      this.rotationSpeed = (Math.random() - 0.5) * 1.2;
      this.flip = Math.random() * Math.PI;
      this.flipSpeed = 0.02 + Math.random() * 0.03;

      this.color = petalColors[Math.floor(Math.random() * petalColors.length)];
    }

    update() {
      this.y += this.speedY;
      this.oscillationAngle += this.oscillationSpeed;
      this.x += this.speedX + Math.sin(this.oscillationAngle) * this.oscillationDistance;
      this.rotation += this.rotationSpeed;
      this.flip += this.flipSpeed;

      if (this.y > height + 30 || this.x < -40 || this.x > width + 40) {
        this.reset(false);
      }
    }

    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.scale(Math.cos(this.flip), 1);

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-this.size / 2, -this.size / 3, -this.size / 2, this.size / 1.4, 0, this.size);
      ctx.bezierCurveTo(this.size / 2, this.size / 1.4, this.size / 2, -this.size / 3, 0, 0);

      const grad = ctx.createLinearGradient(0, 0, 0, this.size);
      grad.addColorStop(0, this.color.shadow);
      grad.addColorStop(1, this.color.base);
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.restore();
    }
  }

  const petals = [];
  for (let i = 0; i < BIRTHDAY_CONFIG.petals.count; i++) {
    petals.push(new Petal());
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < petals.length; i++) {
      petals[i].update();
      petals[i].draw(ctx);
    }
    requestAnimationFrame(render);
  }

  render();
}

/* ============================================================================
   VỆT SAO & TIA SÁNG LẤP LÁNH KHI DI CHUỘT / CHẠM MÀN HÌNH (STARDUST TRAIL)
   ============================================================================ */
function initStardustTrail() {
  if (!BIRTHDAY_CONFIG.stardust.enabled) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const canvas = document.getElementById('stardust-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const sparkles = [];
  const colors = ['#fce2e8', '#ffd6e0', '#fbd488', '#ffffff', '#e88ba2'];

  class Sparkle {
    constructor(x, y) {
      this.x = x + (Math.random() - 0.5) * 16;
      this.y = y + (Math.random() - 0.5) * 16;
      this.size = 2 + Math.random() * 4.5;
      this.alpha = 1;
      this.decay = 0.02 + Math.random() * 0.03;
      this.vx = (Math.random() - 0.5) * 1.5;
      this.vy = (Math.random() - 0.5) * 1.5 - 0.6;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.isStar = Math.random() > 0.4;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= this.decay;
    }

    draw(ctx) {
      if (this.alpha <= 0) return;
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.alpha);
      ctx.translate(this.x, this.y);

      if (this.isStar) {
        // Vẽ ngôi sao 4 cánh nhỏ lung linh
        ctx.fillStyle = this.color;
        ctx.beginPath();
        for (let i = 0; i < 4; i++) {
          ctx.rotate(Math.PI / 2);
          ctx.lineTo(this.size, 0);
          ctx.lineTo(this.size * 0.25, this.size * 0.25);
        }
        ctx.closePath();
        ctx.fill();
      } else {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  function addSparkles(x, y) {
    for (let i = 0; i < 3; i++) {
      sparkles.push(new Sparkle(x, y));
    }
  }

  window.addEventListener('mousemove', (e) => {
    addSparkles(e.clientX, e.clientY);
  });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      addSparkles(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  function renderSparkles() {
    ctx.clearRect(0, 0, width, height);
    for (let i = sparkles.length - 1; i >= 0; i--) {
      sparkles[i].update();
      sparkles[i].draw(ctx);
      if (sparkles[i].alpha <= 0) {
        sparkles.splice(i, 1);
      }
    }
    requestAnimationFrame(renderSparkles);
  }

  renderSparkles();
}

/* ============================================================================
   HIỆU ỨNG PHÁO HOA & CONFETTI ĐẠI TIỆC HOÀNG GIA (CONFETTI CANNON)
   ============================================================================ */
let triggerConfettiBurst = () => {};
let triggerSoftSparkleConfetti = () => {};
let triggerGrandFireworks = () => {};

function initConfetti() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const colors = [
    '#e2738d', '#f694ab', '#fbe9ee', // Sophia Rose pink tones
    '#d8a243', '#f7d377',             // Champagne gold
    '#ffffff', '#fceded',             // Cream white
    '#e65c7b', '#ffc107'              // Vibrant celebration accents
  ];

  let particles = [];

  class ConfettiParticle {
    constructor(x, y, angle, speed, isRibbon = false) {
      this.x = x;
      this.y = y;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      this.gravity = 0.22;
      this.friction = 0.96;
      this.size = isRibbon ? 8 + Math.random() * 10 : 5 + Math.random() * 7;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = (Math.random() - 0.5) * 12;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.alpha = 1;
      this.decay = 0.007 + Math.random() * 0.01;
      this.isRibbon = isRibbon;
    }

    update() {
      this.vx *= this.friction;
      this.vy = this.vy * this.friction + this.gravity;
      this.x += this.vx;
      this.y += this.vy;
      this.rotation += this.rotationSpeed;
      this.alpha -= this.decay;
    }

    draw(ctx) {
      if (this.alpha <= 0) return;
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.alpha);
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.fillStyle = this.color;

      if (this.isRibbon) {
        // Dải ruy băng mạ kim
        ctx.fillRect(-this.size / 2, -this.size / 6, this.size, this.size / 3);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  let isAnimating = false;

  function loop() {
    if (particles.length === 0) {
      isAnimating = false;
      ctx.clearRect(0, 0, width, height);
      return;
    }

    ctx.clearRect(0, 0, width, height);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.update();
      p.draw(ctx);
      if (p.alpha <= 0 || p.y > height + 20) {
        particles.splice(i, 1);
      }
    }

    requestAnimationFrame(loop);
  }

  // Bắn pháo hoa trung tâm khi mở quà
  triggerConfettiBurst = () => {
    const originX = width / 2;
    const originY = height * 0.48;
    for (let i = 0; i < 90; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 11;
      particles.push(new ConfettiParticle(originX, originY, angle, speed, Math.random() > 0.4));
    }
    if (!isAnimating) {
      isAnimating = true;
      requestAnimationFrame(loop);
    }
  };

  // Pháo hoa nhẹ khi chạm vào bó hoa
  triggerSoftSparkleConfetti = (x, y) => {
    const originX = x || width / 2;
    const originY = y || height * 0.55;
    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 6;
      particles.push(new ConfettiParticle(originX, originY, angle, speed, false));
    }
    if (!isAnimating) {
      isAnimating = true;
      requestAnimationFrame(loop);
    }
  };

  // Đại tiệc pháo hoa bắn từ 2 góc dưới màn hình lên cao
  triggerGrandFireworks = () => {
    // Pháo bên trái
    const leftX = width * 0.08;
    const leftY = height * 0.95;
    for (let i = 0; i < 65; i++) {
      const angle = -Math.PI / 4 + (Math.random() - 0.5) * 0.6; // Bắn chếch lên phải
      const speed = 12 + Math.random() * 9;
      particles.push(new ConfettiParticle(leftX, leftY, angle, speed, Math.random() > 0.4));
    }

    // Pháo bên phải
    const rightX = width * 0.92;
    const rightY = height * 0.95;
    for (let i = 0; i < 65; i++) {
      const angle = -Math.PI * 0.75 + (Math.random() - 0.5) * 0.6; // Bắn chếch lên trái
      const speed = 12 + Math.random() * 9;
      particles.push(new ConfettiParticle(rightX, rightY, angle, speed, Math.random() > 0.4));
    }

    if (!isAnimating) {
      isAnimating = true;
      requestAnimationFrame(loop);
    }
  };
}
