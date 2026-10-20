/**
 * ============================================================================
 * CẤU HÌNH TẬP TRUNG (EASY CONFIGURATION)
 * Dễ dàng chỉnh sửa thông tin người nhận, lời chúc và hình nền tại đây.
 * ============================================================================
 */
const BIRTHDAY_CONFIG = {
  // 1. Tên người nhận sinh nhật
  recipientName: "người ấy",

  // 2. Lời chúc sinh nhật giàu triết lý, niềm tin và hy vọng (không nhắc đến yêu thương)
  wishes: `Anh không đến đây 1 mình,
anh đến đây với bó hoa mà em thích,
chúc em sinh nhật thật nhiều niềm vui và bình yên!

Bước sang một tuổi mới, chúc em luôn giữ vững niềm tin và sự kiên định trên con đường mình đã chọn.
Cuộc đời là một hành trình dài của trải nghiệm và trưởng thành, không cần phải vội vã so mình với bất kỳ ai, bởi mỗi loài hoa đều có thời khắc rực rỡ của riêng mình.
Mong em mỗi ngày trôi qua đều tìm thấy ý nghĩa trong những điều bình dị, luôn an nhiên trước mọi biến chuyển, can đảm đón nhận mọi thử thách, và tự tin tỏa sáng bằng chính bản lĩnh, sự tự do cùng năng lượng rạng ngời nhất của em.`,

  // 3. Thông điệp trên hộp quà ban đầu
  giftPrompt: "Có một món quà dành cho bạn!",

  // 4. Thông điệp sau khi thổi nến
  postBlowWish: "Mong mọi điều tốt đẹp sẽ đến với bạn! 🌷",

  // 5. Đường dẫn ảnh nền hoa hồng Sophia (máy tính & điện thoại riêng biệt)
  bgImage: "assets/sophia-rose-bg.jpg",
  bgImageMobile: "assets/sophia-rose-bg-mobile.jpg",
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
  },

  // 8. Cấu hình Vườn hoa hồng Sophia diệu kỳ & Đóa hoa lắc lư
  garden: {
    initialBatchCount: 45,
    moreBatchCount: 28,
    soundEnabled: true,
    title: "Vườn Hoa Hồng Sophia Của Em 🌸",
    blessingText: "“Anh đến đây với bó hoa mà em thích – ngàn đóa hoa hồng Sophia bừng nở rạng ngời gửi trọn những điều tuyệt vời nhất đến người ấy.”"
  }
};

/* ============================================================================
   KHỞI TẠO VÀ RENDER NỘI DUNG TỪ CONFIG
   ============================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Áp dụng ảnh nền chuyên dụng theo kích cỡ màn hình
  const siteBg = document.getElementById('site-background');
  const updateBg = () => {
    if (siteBg) {
      const isMobile = window.innerWidth <= 768;
      const bgUrl = isMobile && BIRTHDAY_CONFIG.bgImageMobile ? BIRTHDAY_CONFIG.bgImageMobile : BIRTHDAY_CONFIG.bgImage;
      siteBg.style.backgroundImage = `url('${bgUrl}')`;
    }
  };
  updateBg();
  window.addEventListener('resize', updateBg);

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
    wishesEl.innerHTML = '';
  }

  if (blessingEl) {
    blessingEl.textContent = BIRTHDAY_CONFIG.postBlowWish;
  }

  if (bouquetImg && BIRTHDAY_CONFIG.bouquetImage) {
    bouquetImg.src = BIRTHDAY_CONFIG.bouquetImage;
  }

  // Cập nhật nội dung Giai đoạn 3 (Vườn hoa)
  const gardenTitleEl = document.querySelector('#garden-title .title-text');
  const gardenBlessingEl = document.getElementById('garden-blessing');
  if (gardenTitleEl && BIRTHDAY_CONFIG.garden && BIRTHDAY_CONFIG.garden.title) {
    gardenTitleEl.textContent = BIRTHDAY_CONFIG.garden.title;
  }
  if (gardenBlessingEl && BIRTHDAY_CONFIG.garden && BIRTHDAY_CONFIG.garden.blessingText) {
    gardenBlessingEl.textContent = BIRTHDAY_CONFIG.garden.blessingText;
  }

  // Khởi động các tương tác và hiệu ứng
  initStageInteractions();
  initPetalAnimation();
  initStardustTrail();
  initConfetti();
  init3DCardTilt();
  initBouquetInteractions();
  initSwayingFlowerGarden();
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
   HIỆU ỨNG GÕ CHỮ TỪNG KÝ TỰ CHO LỜI CHÚC (WISHES TYPEWRITER EFFECT)
   Chữ từ từ hiện ra tự nhiên, sâu lắng, không xuất hiện ồ ạt cùng lúc
   ============================================================================ */
let wishesTypewriterTimer = null;
let isWishesTyping = false;
let hasWishesFinished = false;

function startWishesTypewriter(forceRestart = false) {
  const wishesEl = document.getElementById('wishes-text');
  if (!wishesEl) return;

  if (hasWishesFinished && !forceRestart) return;

  if (wishesTypewriterTimer) {
    clearTimeout(wishesTypewriterTimer);
    wishesTypewriterTimer = null;
  }

  const rawText = BIRTHDAY_CONFIG.wishes;
  wishesEl.innerHTML = '';
  isWishesTyping = true;
  hasWishesFinished = false;

  const cursorSpan = document.createElement('span');
  cursorSpan.className = 'typewriter-cursor';
  cursorSpan.setAttribute('aria-hidden', 'true');
  wishesEl.appendChild(cursorSpan);

  let charIndex = 0;

  function typeChar() {
    if (charIndex < rawText.length) {
      const ch = rawText[charIndex];
      charIndex++;

      if (ch === '\n') {
        const br = document.createElement('br');
        wishesEl.insertBefore(br, cursorSpan);
      } else {
        const textNode = document.createTextNode(ch);
        wishesEl.insertBefore(textNode, cursorSpan);
      }

      let delay = 22;
      if (ch === '.' || ch === '!' || ch === '?') {
        delay = 240;
      } else if (ch === ',' || ch === ';') {
        delay = 95;
      } else if (ch === '\n') {
        delay = 260;
      }

      wishesTypewriterTimer = setTimeout(typeChar, delay);
    } else {
      isWishesTyping = false;
      hasWishesFinished = true;
      wishesTypewriterTimer = null;

      setTimeout(() => {
        cursorSpan.classList.add('fade-out');
        setTimeout(() => {
          if (cursorSpan.parentNode) {
            cursorSpan.parentNode.removeChild(cursorSpan);
          }
        }, 500);
      }, 1800);
    }
  }

  wishesTypewriterTimer = setTimeout(typeChar, 320);

  // Nhấn vào khung lời chúc để hiện ngay lập tức toàn bộ
  const wishesBox = document.querySelector('.wishes-content-box');
  if (wishesBox && !wishesBox._hasSkipHandler) {
    wishesBox._hasSkipHandler = true;
    wishesBox.addEventListener('click', () => {
      if (isWishesTyping) {
        if (wishesTypewriterTimer) {
          clearTimeout(wishesTypewriterTimer);
          wishesTypewriterTimer = null;
        }
        wishesEl.innerHTML = escapeHtml(rawText).replace(/\n/g, '<br>');
        isWishesTyping = false;
        hasWishesFinished = true;
      }
    });
  }
}

function resetWishesTypewriter() {
  if (wishesTypewriterTimer) {
    clearTimeout(wishesTypewriterTimer);
    wishesTypewriterTimer = null;
  }
  isWishesTyping = false;
  hasWishesFinished = false;
  const wishesEl = document.getElementById('wishes-text');
  if (wishesEl) {
    wishesEl.innerHTML = '';
  }
}

/* ============================================================================
   LOGIC CHUYỂN ĐỔI GIAI ĐOẠN & TƯƠNG TÁC NGƯỜI DÙNG (STAGE MANAGER)
   ============================================================================ */
let switchStageGlobal = (stageName) => {};

function initStageInteractions() {
  const stages = {
    gift: document.getElementById('gift-stage'),
    wishes: document.getElementById('wishes-stage'),
    garden: document.getElementById('garden-stage')
  };

  const navBtns = document.querySelectorAll('.stage-nav-btn');
  const giftBox = document.getElementById('gift-box');
  const btnOpenGift = document.getElementById('btn-open-gift');
  const btnBlowCandle = document.getElementById('btn-blow-candle');
  const btnGotoGarden = document.getElementById('btn-goto-garden');
  const btnReplay = document.getElementById('btn-replay');
  const candle = document.getElementById('candle');
  const cakeWrapper = document.getElementById('cake-interactive-wrapper');
  const postBlowMessage = document.getElementById('post-blow-message');

  let currentStage = 'gift';
  let hasVisitedGarden = false;

  // Chuyển giai đoạn mượt mà với hoạt cảnh fade & scale
  const switchStage = (targetStage) => {
    if (!stages[targetStage] || currentStage === targetStage) return;

    const prevEl = stages[currentStage];
    if (prevEl) {
      prevEl.classList.remove('active');
      prevEl.classList.add('hidden');
    }

    navBtns.forEach((btn) => {
      const stageAttr = btn.getAttribute('data-stage');
      btn.classList.toggle('active', stageAttr === targetStage);
    });

    const nextEl = stages[targetStage];
    if (nextEl) {
      nextEl.classList.remove('hidden');
      setTimeout(() => {
        nextEl.classList.add('active');
      }, 40);
    }

    currentStage = targetStage;

    // Kích hoạt pháo hoa hoặc hiệu ứng đặc thù
    if (targetStage === 'wishes') {
      triggerGrandFireworks();
      startWishesTypewriter(true);
    } else if (targetStage === 'garden') {
      if (window.onGardenStageActivated) {
        window.onGardenStageActivated(!hasVisitedGarden);
      }
      hasVisitedGarden = true;
    }
  };

  switchStageGlobal = switchStage;

  // Bắt sự kiện click trên thanh điều hướng tab
  navBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      const stage = btn.getAttribute('data-stage');
      if (stage) {
        switchStage(stage);
      }
    });
  });

  // Mở quà hoành tráng
  const handleOpenGift = () => {
    if (!giftBox.classList.contains('opening') && !giftBox.classList.contains('opened')) {
      giftBox.classList.add('opening');
      
      // Bắn pháo hoa rực rỡ tâm điểm từ hộp quà
      triggerConfettiBurst();

      setTimeout(() => {
        giftBox.classList.add('opened');
        switchStage('wishes');
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

      // Hiện lời chúc tốt đẹp và nút mở vườn hoa
      setTimeout(() => {
        postBlowMessage.classList.remove('hidden');
        btnBlowCandle.classList.add('hidden');
        if (btnGotoGarden) btnGotoGarden.classList.remove('hidden');
        btnReplay.classList.remove('hidden');
      }, 700);
    }
  };

  btnBlowCandle.addEventListener('click', handleBlowCandle);
  if (cakeWrapper) {
    cakeWrapper.addEventListener('click', handleBlowCandle);
  }

  // Chuyển sang vườn hoa từ nút ở Stage 2
  if (btnGotoGarden) {
    btnGotoGarden.addEventListener('click', (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      switchStage('garden');
    });
  }

  // Nút quay lại lời chúc ở Stage 3
  const btnGardenBack = document.getElementById('btn-garden-back');
  if (btnGardenBack) {
    btnGardenBack.addEventListener('click', () => {
      switchStage('wishes');
    });
  }

  // Xem lại (Bắt đầu lại từ đầu)
  btnReplay.addEventListener('click', () => {
    // Reset nến và lời chúc
    candle.classList.remove('extinguished');
    postBlowMessage.classList.add('hidden');
    btnBlowCandle.disabled = false;
    btnBlowCandle.classList.remove('hidden');
    if (btnGotoGarden) btnGotoGarden.classList.add('hidden');
    btnReplay.classList.add('hidden');
    resetWishesTypewriter();

    // Chuyển về giai đoạn hộp quà
    giftBox.classList.remove('opening', 'opened');
    switchStage('gift');
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

/* ============================================================================
   GIAI ĐOẠN 3: VƯỜN HOA DIỆU KỲ & ĐÓA HOA LẮC LƯ TƯƠNG TÁC
   Procedural Botanical Sprouting Engine & Web Audio Chimes
   ============================================================================ */
function initSwayingFlowerGarden() {
  const container = document.getElementById('swaying-flower-interactive');
  const shockwave = document.getElementById('flower-shockwave');
  const touchBadge = document.getElementById('touch-hint-badge');
  const counterPill = document.getElementById('garden-counter-pill');
  const counterText = document.getElementById('garden-counter-text');
  const counterNumber = document.getElementById('garden-counter-number');
  const btnBloomMore = document.getElementById('btn-bloom-more');
  const btnClearGarden = document.getElementById('btn-clear-garden') || document.getElementById('btn-reset-garden');
  const gardenStage = document.getElementById('garden-stage');

  const canvasBack = document.getElementById('garden-canvas-back');
  const canvasFront = document.getElementById('garden-canvas-front');
  if (!canvasBack || !canvasFront) return;

  const ctxBack = canvasBack.getContext('2d');
  const ctxFront = canvasFront.getContext('2d');

  let width = (canvasBack.width = canvasFront.width = window.innerWidth);
  let height = (canvasBack.height = canvasFront.height = window.innerHeight);

  const resize = () => {
    width = canvasBack.width = canvasFront.width = window.innerWidth;
    height = canvasBack.height = canvasFront.height = window.innerHeight;
  };
  window.addEventListener('resize', resize);

  // Âm thanh chuông ngân diệu kỳ (Web Audio API Pentatonic Chime)
  const playBloomChime = () => {
    if (!BIRTHDAY_CONFIG.garden || !BIRTHDAY_CONFIG.garden.soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      // Hợp âm ngũ cung lãng mạn: C5, E5, G5, B5, C6, E6
      const freqs = [523.25, 659.25, 783.99, 987.77, 1046.50, 1318.51];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.07);

        gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.07);
        gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + idx * 0.07 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.07 + 1.15);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.07);
        osc.stop(ctx.currentTime + idx * 0.07 + 1.25);
      });
    } catch (e) {
      // Bỏ qua lỗi context không được phép
    }
  };

  // Bảng màu chuẩn hoa hồng Sophia: Hồng phấn hoàng gia, hồng đào, hồng kem và hồng nhung
  const sophiaRosePalettes = {
    'sophia-grand': {
      outer: '#f58aa4',
      mid: '#e85f83',
      inner: '#c43b60',
      core: '#fff2f5',
      rim: '#ffe6ed',
      stamen: '#f4c348'
    },
    'sophia-classic': {
      outer: '#f78fa7',
      mid: '#e55a80',
      inner: '#bd3356',
      core: '#ffebf1',
      rim: '#ffdae4',
      stamen: '#f7cb52'
    },
    'sophia-cup': {
      outer: '#fa98aa',
      mid: '#f06e84',
      inner: '#cb455f',
      core: '#fff5ed',
      rim: '#ffe8ee',
      stamen: '#f5bd3f'
    },
    'sophia-rosette': {
      outer: '#fff2f5',
      mid: '#fca3b9',
      inner: '#e86187',
      core: '#ffffff',
      rim: '#fde8ee',
      stamen: '#ffd56b'
    },
    'sophia-bud': {
      outer: '#f47996',
      mid: '#db4970',
      inner: '#b83354',
      core: '#ffeef3',
      rim: '#ffd4df',
      stamen: '#f4c348'
    }
  };

  // ẢNH HOA HỒNG SOPHIA MÀU NƯỚC CHUẨN MẪU TỪ HÌNH ẢNH NGƯỜI DÙNG CUNG CẤP
  const sophiaRoseImages = {
    pink: new Image(),
    cream: new Image(),
    bud: new Image()
  };
  sophiaRoseImages.pink.src = 'assets/sophia-rose-pink.png';
  sophiaRoseImages.cream.src = 'assets/sophia-rose-cream.png';
  sophiaRoseImages.bud.src = 'assets/sophia-rose-bud.png';

  // Cánh hoa hồng Sophia rơi và chao liệng trong gió
  class SophiaRosePetalMote {
    constructor(x, y) {
      this.x = x + (Math.random() - 0.5) * 16;
      this.y = y;
      this.vx = (Math.random() - 0.5) * 1.5;
      this.vy = -1.0 - Math.random() * 1.6;
      this.size = 3.5 + Math.random() * 4.5;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.08;
      this.flip = Math.random() * Math.PI;
      this.flipSpeed = 0.03 + Math.random() * 0.04;
      this.alpha = 1;
      this.decay = 0.009 + Math.random() * 0.014;
      
      const petalColors = [
        'rgba(247, 139, 167, ',
        'rgba(255, 204, 218, ',
        'rgba(254, 235, 195, ',
        'rgba(255, 245, 220, '
      ];
      this.color = petalColors[Math.floor(Math.random() * petalColors.length)];
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.rotation += this.rotSpeed;
      this.flip += this.flipSpeed;
      this.alpha -= this.decay;
    }

    draw(ctx) {
      if (this.alpha <= 0) return;
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.alpha);
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.scale(Math.cos(this.flip), 1);

      // Vẽ cánh hoa hồng hình trái tim/bầu dục mềm mại
      ctx.beginPath();
      ctx.moveTo(0, -this.size);
      ctx.bezierCurveTo(this.size * 0.8, -this.size * 0.8, this.size * 0.8, this.size * 0.5, 0, this.size);
      ctx.bezierCurveTo(-this.size * 0.8, this.size * 0.5, -this.size * 0.8, -this.size * 0.8, 0, -this.size);
      ctx.fillStyle = this.color + this.alpha + ')';
      ctx.fill();

      ctx.restore();
    }
  }

  // ĐỐI TƯỢNG HOA HỒNG SOPHIA CHỒI TỪ DƯỚI LÊN (SOPHIA ROSE SPROUTING FLOWER)
  class BotanicalFlower {
    constructor(x, layer, customOptions = {}) {
      this.x = x;
      this.layer = layer; // 'back' hoặc 'front'
      this.baseY = height + 15;

      const minH = layer === 'back' ? 0.32 : 0.60;
      const maxH = layer === 'back' ? 0.76 : 0.88;
      this.targetHeight = customOptions.targetHeight || height * (minH + Math.random() * (maxH - minH));

      this.currentHeight = 0;
      this.delay = customOptions.delay !== undefined ? customOptions.delay : Math.random() * 1100;
      this.elapsed = 0;

      this.curvature = (Math.random() - 0.5) * (layer === 'back' ? 55 : 35);
      this.stemThickness = layer === 'back' ? (2.8 + Math.random() * 1.5) : (3.5 + Math.random() * 2.0);

      // Tỉ lệ biến thể hoa hồng Sophia theo bó hoa mẫu (Hồng phấn chủ đạo, Vàng kem quý phái, Nụ e ấp)
      const variantList = ['pink', 'pink', 'cream', 'pink', 'cream', 'bud'];
      this.variant = customOptions.variant || variantList[Math.floor(Math.random() * variantList.length)];
      this.tiltAngle = (Math.random() - 0.5) * 0.35; // Độ nghiêng tự nhiên của mỗi bông

      if (this.variant === 'bud') {
        this.flowerSize = layer === 'back' ? (20 + Math.random() * 8) : (28 + Math.random() * 10);
      } else {
        this.flowerSize = layer === 'back' ? (32 + Math.random() * 14) : (48 + Math.random() * 18);
      }

      // Giữ kiểu vector làm dự phòng
      const sophiaTypes = ['sophia-grand', 'sophia-classic', 'sophia-cup', 'sophia-rosette', 'sophia-bud'];
      this.type = customOptions.type || (this.variant === 'bud' ? 'sophia-bud' : sophiaTypes[Math.floor(Math.random() * sophiaTypes.length)]);
      this.colors = sophiaRosePalettes[this.type] || sophiaRosePalettes['sophia-grand'];

      // Lá hoa hồng Sophia răng cưa mọc so le
      this.leaves = [];
      const leafCount = 2 + Math.floor(Math.random() * 2);
      for (let i = 0; i < leafCount; i++) {
        this.leaves.push({
          ratio: 0.30 + (i / leafCount) * 0.50,
          side: i % 2 === 0 ? -1 : 1,
          length: (layer === 'back' ? 16 : 22) + Math.random() * 6,
          unfurl: 0
        });
      }

      this.bloomProgress = 0;
      this.hasEmittedPollen = false;

      this.swayPhase = Math.random() * Math.PI * 2;
      this.swaySpeed = 0.0016 + Math.random() * 0.0014;
      this.swayAmplitude = 5 + Math.random() * 7;
    }

    update(delta, time) {
      if (this.isRetracting) {
        this.currentHeight = Math.max(0, this.currentHeight - Math.max(7, this.targetHeight * 0.10));
        this.bloomProgress = Math.max(0, this.bloomProgress - 0.08);
        return;
      }

      if (this.delay > 0) {
        this.delay -= delta;
        return;
      }

      if (this.currentHeight < this.targetHeight) {
        const remaining = this.targetHeight - this.currentHeight;
        const growthStep = Math.max(2.5, remaining * 0.065);
        this.currentHeight = Math.min(this.targetHeight, this.currentHeight + growthStep);
      }

      if (this.currentHeight >= this.targetHeight * 0.8) {
        if (this.bloomProgress < 1) {
          this.bloomProgress = Math.min(1, this.bloomProgress + 0.045);
        }
      }
    }

    draw(ctx, time) {
      if (this.currentHeight <= 0) return;

      const sway = Math.sin(time * this.swaySpeed + this.swayPhase) * this.swayAmplitude;
      const progress = this.currentHeight / this.targetHeight;

      const tipX = this.x + (this.curvature * progress) + sway;
      const tipY = this.baseY - this.currentHeight;

      const ctrlX = this.x + this.curvature * 0.5 + sway * 0.35;
      const ctrlY = this.baseY - this.currentHeight * 0.52;

      ctx.save();

      // 1. Thân cành hoa hồng Sophia màu xanh ngọc tươi bóng
      ctx.beginPath();
      ctx.moveTo(this.x, this.baseY);
      ctx.quadraticCurveTo(ctrlX, ctrlY, tipX, tipY);
      const stemGrad = ctx.createLinearGradient(this.x, this.baseY, tipX, tipY);
      stemGrad.addColorStop(0, '#2e5636');
      stemGrad.addColorStop(0.5, '#4f8c57');
      stemGrad.addColorStop(1, '#81c78b');
      ctx.strokeStyle = stemGrad;
      ctx.lineWidth = this.stemThickness;
      ctx.lineCap = 'round';
      ctx.stroke();

      // Gai nhỏ mềm mại đặc trưng của hoa hồng
      if (this.stemThickness > 3 && this.currentHeight > 80) {
        const thornY = this.baseY - this.currentHeight * 0.45;
        const thornX = (this.x + ctrlX) * 0.5;
        ctx.beginPath();
        ctx.moveTo(thornX, thornY);
        ctx.lineTo(thornX - 4, thornY + 3);
        ctx.strokeStyle = '#3a6640';
        ctx.lineWidth = 1.6;
        ctx.stroke();
      }

      // 2. Lá hoa hồng Sophia răng cưa với gân lá xanh ngọc
      for (let i = 0; i < this.leaves.length; i++) {
        const leaf = this.leaves[i];
        const leafThresh = this.targetHeight * leaf.ratio;
        if (this.currentHeight > leafThresh) {
          if (leaf.unfurl < 1) {
            leaf.unfurl = Math.min(1, leaf.unfurl + 0.06);
          }

          const t = leaf.ratio;
          const lx = (1 - t) * (1 - t) * this.x + 2 * (1 - t) * t * ctrlX + t * t * tipX;
          const ly = (1 - t) * (1 - t) * this.baseY + 2 * (1 - t) * t * ctrlY + t * t * tipY;

          const dx = 2 * (1 - t) * (ctrlX - this.x) + 2 * t * (tipX - ctrlX);
          const dy = 2 * (1 - t) * (ctrlY - this.baseY) + 2 * t * (tipY - ctrlY);
          const stemAngle = Math.atan2(dy, dx);
          const leafAngle = stemAngle + (leaf.side * Math.PI / 3.2);

          ctx.save();
          ctx.translate(lx, ly);
          ctx.rotate(leafAngle);
          ctx.scale(leaf.unfurl, leaf.unfurl);

          // Cánh lá bầu dục nhọn đầu đặc trưng của hoa hồng
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(leaf.length * 0.35, -leaf.length * 0.35, leaf.length * 0.75, -leaf.length * 0.25, leaf.length, 0);
          ctx.bezierCurveTo(leaf.length * 0.75, leaf.length * 0.25, leaf.length * 0.35, leaf.length * 0.35, 0, 0);
          
          const leafGrad = ctx.createLinearGradient(0, 0, leaf.length, 0);
          leafGrad.addColorStop(0, '#3e7d48');
          leafGrad.addColorStop(0.7, '#5ea869');
          leafGrad.addColorStop(1, '#a65463'); // Đỉnh lá non ánh đồng đỏ tía của hoa hồng
          ctx.fillStyle = leafGrad;
          ctx.fill();

          // Gân lá hoa hồng
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(leaf.length * 0.9, 0);
          ctx.strokeStyle = '#9be3a5';
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.restore();
        }
      }

      // 3. ĐÓA HOA HỒNG SOPHIA BUNG NỞ TRÁNG LỆ
      if (this.bloomProgress > 0) {
        const bloomScale = Math.sin(this.bloomProgress * Math.PI * 0.5) * (1 + 0.16 * Math.sin(this.bloomProgress * Math.PI));

        ctx.save();
        ctx.translate(tipX, tipY);
        ctx.rotate(sway * 0.03 + (this.tiltAngle || 0));
        ctx.scale(bloomScale, bloomScale);

        const size = this.flowerSize;

        // Các đài hoa xanh vươn ra nâng đỡ đóa hồng Sophia
        ctx.save();
        for (let s = 0; s < 5; s++) {
          const sAngle = (s * Math.PI * 2) / 5 + 0.32;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          const sx = Math.cos(sAngle) * size * 0.45;
          const sy = Math.sin(sAngle) * size * 0.45;
          const cpx = Math.cos(sAngle + 0.25) * size * 0.28;
          const cpy = Math.sin(sAngle + 0.25) * size * 0.28;
          ctx.quadraticCurveTo(cpx, cpy, sx, sy);
          ctx.strokeStyle = '#43784c';
          ctx.lineWidth = this.layer === 'back' ? 1.8 : 2.4;
          ctx.lineCap = 'round';
          ctx.stroke();
        }
        ctx.restore();

        // ƯU TIÊN VẼ HOA HỒNG SOPHIA MÀU NƯỚC CHUẨN ẢNH MẪU
        const roseImg = sophiaRoseImages[this.variant] || sophiaRoseImages.pink;
        if (roseImg && roseImg.complete && roseImg.naturalWidth > 0) {
          const drawW = size * 2.2;
          const drawH = (drawW * roseImg.naturalHeight) / roseImg.naturalWidth;
          ctx.save();
          ctx.shadowColor = this.variant === 'cream' ? 'rgba(215, 170, 90, 0.25)' : 'rgba(180, 50, 80, 0.30)';
          ctx.shadowBlur = this.layer === 'back' ? 6 : 10;
          ctx.shadowOffsetY = this.layer === 'back' ? 2 : 4;
          ctx.drawImage(roseImg, -drawW / 2, -drawH * 0.72, drawW, drawH);
          ctx.restore();
        } else {
          // VẼ VECTOR DỰ PHÒNG TỪNG DÁNG HOA HỒNG SOPHIA
          if (this.type === 'sophia-grand') {
          // 1. Đóa Hồng Sophia Hoàng Gia Nở Rộ Viên Mãn (4 tầng cánh xếp xoắn ốc)
          // Tầng 1: Cánh ngoài xòe rộng
          for (let p = 0; p < 7; p++) {
            const pAngle = (p * Math.PI * 2) / 7;
            ctx.save();
            ctx.rotate(pAngle);
            ctx.beginPath();
            ctx.ellipse(0, -size * 0.48, size * 0.44, size * 0.36, 0, 0, Math.PI * 2);
            ctx.fillStyle = this.colors.outer;
            ctx.fill();
            ctx.restore();
          }
          // Tầng 2: Cánh giữa cúp tròn mềm mại
          for (let p = 0; p < 6; p++) {
            const pAngle = (p * Math.PI * 2) / 6 + 0.28;
            ctx.save();
            ctx.rotate(pAngle);
            ctx.beginPath();
            ctx.ellipse(0, -size * 0.34, size * 0.36, size * 0.28, 0, 0, Math.PI * 2);
            ctx.fillStyle = this.colors.mid;
            ctx.fill();
            ctx.restore();
          }
          // Tầng 3: Cánh trong xoắn ốc hoa hồng
          for (let p = 0; p < 5; p++) {
            const pAngle = (p * Math.PI * 2) / 5 + 0.55;
            ctx.save();
            ctx.rotate(pAngle);
            ctx.beginPath();
            ctx.ellipse(0, -size * 0.22, size * 0.26, size * 0.20, 0, 0, Math.PI * 2);
            ctx.fillStyle = this.colors.inner;
            ctx.fill();
            ctx.restore();
          }
          // Tầng 4: Lõi nụ hoa hồng & nhụy vàng ấm
          ctx.beginPath();
          ctx.arc(0, 0, size * 0.18, 0, Math.PI * 2);
          ctx.fillStyle = this.colors.core;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(0, 0, size * 0.10, 0, Math.PI * 2);
          ctx.fillStyle = this.colors.stamen;
          ctx.fill();

        } else if (this.type === 'sophia-cup') {
          // 2. Đóa Hồng Sophia Dáng Chén Sâu (Deep-Cupped English Sophia Rose)
          // Lớp cánh chén ôm đáy
          ctx.beginPath();
          ctx.arc(0, 0, size * 0.52, 0, Math.PI * 2);
          ctx.fillStyle = this.colors.outer;
          ctx.fill();

          // Các vạt cánh cúp xếp lượn sóng
          for (let p = 0; p < 6; p++) {
            const pAngle = (p * Math.PI * 2) / 6;
            ctx.save();
            ctx.rotate(pAngle);
            ctx.beginPath();
            ctx.ellipse(0, -size * 0.36, size * 0.38, size * 0.28, 0.1, 0, Math.PI * 2);
            ctx.fillStyle = this.colors.mid;
            ctx.fill();
            ctx.restore();
          }

          // Cánh xoáy sâu bên trong chén hoa
          for (let p = 0; p < 4; p++) {
            const pAngle = (p * Math.PI * 2) / 4 + 0.4;
            ctx.save();
            ctx.rotate(pAngle);
            ctx.beginPath();
            ctx.ellipse(0, -size * 0.20, size * 0.28, size * 0.18, -0.15, 0, Math.PI * 2);
            ctx.fillStyle = this.colors.inner;
            ctx.fill();
            ctx.restore();
          }

          ctx.beginPath();
          ctx.arc(0, 0, size * 0.14, 0, Math.PI * 2);
          ctx.fillStyle = this.colors.core;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(0, 0, size * 0.08, 0, Math.PI * 2);
          ctx.fillStyle = this.colors.stamen;
          ctx.fill();

        } else if (this.type === 'sophia-rosette') {
          // 3. Đóa Hồng Sophia Dáng Nếp Gấp Lụa Hoàng Gia (Quartered Rosette)
          // Vòng cánh ngoài xòe rộng màu hồng phấn
          for (let p = 0; p < 8; p++) {
            const pAngle = (p * Math.PI * 2) / 8;
            ctx.save();
            ctx.rotate(pAngle);
            ctx.beginPath();
            ctx.ellipse(0, -size * 0.46, size * 0.34, size * 0.32, 0, 0, Math.PI * 2);
            ctx.fillStyle = this.colors.outer;
            ctx.fill();
            ctx.restore();
          }

          // 4 góc xoáy cánh hoa hồng Anh Quốc
          for (let q = 0; q < 4; q++) {
            const qAngle = (q * Math.PI) / 2;
            const qx = Math.cos(qAngle) * size * 0.18;
            const qy = Math.sin(qAngle) * size * 0.18;
            ctx.beginPath();
            ctx.arc(qx, qy, size * 0.16, 0, Math.PI * 2);
            ctx.fillStyle = this.colors.inner;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(qx, qy, size * 0.08, 0, Math.PI * 2);
            ctx.fillStyle = this.colors.core;
            ctx.fill();
          }

          ctx.beginPath();
          ctx.arc(0, 0, size * 0.09, 0, Math.PI * 2);
          ctx.fillStyle = this.colors.stamen;
          ctx.fill();

        } else if (this.type === 'sophia-bud') {
          // 4. Nụ Hoa Hồng Sophia Chúm Chím Hé Nở (Tender Sophia Rosebud)
          // Thân nụ hoa hồng thon dài
          ctx.beginPath();
          ctx.ellipse(0, -size * 0.36, size * 0.28, size * 0.44, 0, 0, Math.PI * 2);
          ctx.fillStyle = this.colors.outer;
          ctx.fill();

          // Cánh xoắn hé nở ở đỉnh nụ
          ctx.beginPath();
          ctx.ellipse(-size * 0.08, -size * 0.40, size * 0.18, size * 0.38, -0.22, 0, Math.PI * 2);
          ctx.fillStyle = this.colors.mid;
          ctx.fill();

          ctx.beginPath();
          ctx.ellipse(size * 0.08, -size * 0.40, size * 0.18, size * 0.38, 0.22, 0, Math.PI * 2);
          ctx.fillStyle = this.colors.inner;
          ctx.fill();

          ctx.beginPath();
          ctx.ellipse(0, -size * 0.48, size * 0.12, size * 0.24, 0, 0, Math.PI * 2);
          ctx.fillStyle = this.colors.rim;
          ctx.fill();

        } else {
          // 5. Hoa Hồng Sophia Duyên Dáng Truyền Thống (Classic Spiral Sophia Rose)
          for (let p = 0; p < 6; p++) {
            const pAngle = (p * Math.PI) / 3;
            ctx.save();
            ctx.rotate(pAngle);
            ctx.beginPath();
            ctx.ellipse(0, -size * 0.44, size * 0.44, size * 0.32, 0, 0, Math.PI * 2);
            ctx.fillStyle = this.colors.outer;
            ctx.fill();
            ctx.restore();
          }
          for (let p = 0; p < 5; p++) {
            const pAngle = (p * Math.PI * 2) / 5 + 0.32;
            ctx.save();
            ctx.rotate(pAngle);
            ctx.beginPath();
            ctx.ellipse(0, -size * 0.30, size * 0.34, size * 0.24, 0, 0, Math.PI * 2);
            ctx.fillStyle = this.colors.mid;
            ctx.fill();
            ctx.restore();
          }
          ctx.beginPath();
          ctx.arc(0, 0, size * 0.20, 0, Math.PI * 2);
          ctx.fillStyle = this.colors.inner;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(0, 0, size * 0.10, 0, Math.PI * 2);
          ctx.fillStyle = this.colors.stamen;
          ctx.fill();
        }
        } // Đóng else fallback vector

        ctx.restore();

        // Thả những cánh hoa hồng Sophia mềm mại bay bổng vào không gian
        if (!this.hasEmittedPollen && this.bloomProgress > 0.6) {
          this.hasEmittedPollen = true;
          for (let m = 0; m < 3; m++) {
            pollenMotes.push(new SophiaRosePetalMote(tipX, tipY));
          }
        }
      }

      ctx.restore();
    }
  }

  // Quản lý danh sách hoa và hạt phấn
  let flowersBack = [];
  let flowersFront = [];
  let pollenMotes = [];
  let totalBloomedCount = 0;
  let isGardenRunning = false;
  let lastTime = performance.now();

  // Vòng lặp render hiệu ứng vườn hoa 60fps
  function gardenLoop(now) {
    const delta = Math.min(50, now - lastTime);
    lastTime = now;

    // 1. Vẽ lớp hoa nền (phía sau thẻ)
    ctxBack.clearRect(0, 0, width, height);
    for (let i = 0; i < flowersBack.length; i++) {
      flowersBack[i].update(delta, now);
      flowersBack[i].draw(ctxBack, now);
    }

    // 2. Vẽ lớp hoa tiền cảnh (phía trước viền dưới)
    ctxFront.clearRect(0, 0, width, height);
    for (let i = 0; i < flowersFront.length; i++) {
      flowersFront[i].update(delta, now);
      flowersFront[i].draw(ctxFront, now);
    }

    // 3. Cập nhật và vẽ các cánh hoa hồng Sophia lung linh bay trong gió
    for (let i = pollenMotes.length - 1; i >= 0; i--) {
      pollenMotes[i].update();
      pollenMotes[i].draw(ctxFront);
      if (pollenMotes[i].alpha <= 0 || pollenMotes[i].y < -20) {
        pollenMotes.splice(i, 1);
      }
    }

    requestAnimationFrame(gardenLoop);
  }

  // Hàm kích hoạt đợt hoa hồng Sophia chồi lên ngoạn mục từ phía dưới
  function sproutGardenBatch(count = 42) {
    resize();
    if (!isGardenRunning) {
      isGardenRunning = true;
      lastTime = performance.now();
      requestAnimationFrame(gardenLoop);
    }

    const backCount = Math.floor(count * 0.62);
    const frontCount = count - backCount;

    // Tạo hoa hồng Sophia lớp nền (trải đều khắp bề ngang màn hình)
    for (let i = 0; i < backCount; i++) {
      const x = (i / backCount) * width + (Math.random() - 0.5) * (width / backCount * 0.9);
      flowersBack.push(new BotanicalFlower(x, 'back', {
        delay: Math.random() * 1200
      }));
    }

    // Tạo hoa hồng Sophia lớp tiền cảnh (tập trung tôn lên phần chân thẻ)
    for (let i = 0; i < frontCount; i++) {
      const x = (i / frontCount) * width + (Math.random() - 0.5) * (width / frontCount * 0.9);
      flowersFront.push(new BotanicalFlower(x, 'front', {
        delay: 200 + Math.random() * 1100
      }));
    }

    totalBloomedCount += count;
    updateCounterBadge();
  }

  // Trồng một đóa hoa hồng Sophia đơn lẻ tại vị trí chạm/click
  function plantSingleFlower(x) {
    if (!isGardenRunning) {
      isGardenRunning = true;
      lastTime = performance.now();
      requestAnimationFrame(gardenLoop);
    }

    const isBack = Math.random() > 0.45;
    const targetArray = isBack ? flowersBack : flowersFront;
    targetArray.push(new BotanicalFlower(x, isBack ? 'back' : 'front', {
      delay: 50
    }));

    totalBloomedCount += 1;
    updateCounterBadge();
  }

  // Ngưỡng hoa để tự động kích hoạt hiển thị nút Xóa hết hoa (khi nhiều hoa quá)
  const MANY_FLOWERS_THRESHOLD = 20;

  function updateClearButtonVisibility() {
    const currentCount = flowersBack.length + flowersFront.length;
    if (btnClearGarden) {
      if (currentCount >= MANY_FLOWERS_THRESHOLD) {
        btnClearGarden.classList.remove('is-hidden');
      } else {
        btnClearGarden.classList.add('is-hidden');
      }
    }
  }

  // Cập nhật số lượng hoa hồng Sophia và thông điệp động
  function updateCounterBadge() {
    if (counterNumber) {
      counterNumber.textContent = `${totalBloomedCount} đóa hoa hồng Sophia`;
    }
    if (counterText) {
      counterText.textContent = `Vườn hoa hồng Sophia đang bừng nở rực rỡ:`;
    }
    if (touchBadge) {
      const hint = touchBadge.querySelector('.hint-text');
      if (hint) hint.textContent = 'Chạm tiếp để nở thêm hoa hồng Sophia!';
    }
    updateClearButtonVisibility();
  }

  // Cờ kiểm soát: Chỉ cho phép click sau khi đã vào hẳn màn hình vườn hoa (chống tap-through từ nút chuyển màn hình)
  let canInteractWithFlower = false;

  // Xử lý khi nhấn vào đóa hoa trung tâm lắc lư
  const handleFlowerClick = (e) => {
    // Nếu chưa được phép click (vừa mới chuyển màn hình) thì bỏ qua
    if (!canInteractWithFlower) {
      if (e && e.preventDefault) e.preventDefault();
      return;
    }

    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
    // Kích hoạt hoạt cảnh nhún nở mạnh mẽ cho đóa hoa lắc lư
    container.classList.remove('blooming');
    void container.offsetWidth; // Force reflow
    container.classList.add('blooming');

    // Bắn sóng xung kích phát quang
    if (shockwave) {
      shockwave.classList.remove('burst');
      void shockwave.offsetWidth;
      shockwave.classList.add('burst');
    }

    // Âm thanh chuông ngân diệu kỳ
    playBloomChime();

    // Tung cánh hoa confetti nhỏ quanh tâm bông hoa
    const rect = container.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height * 0.35;
    triggerSoftSparkleConfetti(cx, cy);

    // Kích hoạt toàn bộ vườn hoa chồi lên từ dưới màn hình!
    sproutGardenBatch(BIRTHDAY_CONFIG.garden ? BIRTHDAY_CONFIG.garden.initialBatchCount : 45);

    // Rung phản hồi cảm ứng trên điện thoại
    if (navigator.vibrate) {
      navigator.vibrate([35, 45, 35]);
    }

    // Tự động gỡ bỏ class blooming sau khi hoàn thành hoạt cảnh để tiếp tục lắc lư
    setTimeout(() => {
      container.classList.remove('blooming');
    }, 800);
  };

  container.addEventListener('click', handleFlowerClick);
  container.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleFlowerClick(e);
    }
  });

  // Bấm nút "Nở thêm hoa"
  if (btnBloomMore) {
    btnBloomMore.addEventListener('click', () => {
      playBloomChime();
      sproutGardenBatch(BIRTHDAY_CONFIG.garden ? BIRTHDAY_CONFIG.garden.moreBatchCount : 28);
    });
  }

  // Hàm dọn/xóa sạch toàn bộ hoa với hiệu ứng hoa hạ dần xuống đất diệu kỳ
  function clearAllGardenFlowers() {
    const totalCurrent = flowersBack.length + flowersFront.length;
    if (totalCurrent === 0) return;

    // Âm thanh chuông ngân dịu nhẹ khi thu gọn vườn hoa
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        const actx = new AudioCtx();
        const now = actx.currentTime;
        const notes = [659.25, 523.25, 392.00, 261.63]; // Mi - Đô - Sol - Đô
        notes.forEach((freq, idx) => {
          const osc = actx.createOscillator();
          const gain = actx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.06);
          gain.gain.setValueAtTime(0.08, now + idx * 0.06);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.30);
          osc.connect(gain);
          gain.connect(actx.destination);
          osc.start(now + idx * 0.06);
          osc.stop(now + idx * 0.06 + 0.32);
        });
      }
    } catch (e) {}

    // Bắn một đợt hạt bụi tiên/cánh hoa nhỏ
    if (container) {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height * 0.4;
      triggerSoftSparkleConfetti(cx, cy);
    }

    // Đánh dấu tất cả hoa đang lùi dần xuống đất
    for (let i = 0; i < flowersBack.length; i++) {
      flowersBack[i].isRetracting = true;
    }
    for (let i = 0; i < flowersFront.length; i++) {
      flowersFront[i].isRetracting = true;
    }

    // Sau khi hoa hạ xuống hoàn tất (khoảng 350ms), dọn sạch mảng
    setTimeout(() => {
      flowersBack = [];
      flowersFront = [];
      pollenMotes = [];
      totalBloomedCount = 0;
      ctxBack.clearRect(0, 0, width, height);
      ctxFront.clearRect(0, 0, width, height);

      // Đặt lại các thông số và trạng thái bảng đếm
      if (counterNumber) {
        counterNumber.textContent = '';
      }
      if (counterText) {
        counterText.textContent = 'Chạm vào đóa hoa để ngàn hoa hồng Sophia bừng nở';
      }
      if (touchBadge) {
        const hint = touchBadge.querySelector('.hint-text');
        if (hint) hint.textContent = 'Chạm vào đóa hoa để hoa bừng nở!';
      }
      updateClearButtonVisibility();
    }, 360);
  }

  // Bấm nút "Xóa hết hoa" (chỉ hiện khi có nhiều hoa)
  if (btnClearGarden) {
    btnClearGarden.addEventListener('click', clearAllGardenFlowers);
  }

  // Callback khi người dùng chuyển sang giai đoạn Vườn Hoa
  window.onGardenStageActivated = (isFirstTime) => {
    resize();

    // 1. Tạm thời khóa tương tác click vào hoa để tránh hiện tượng chạm xuyên màn hình (tap-through/ghost click)
    canInteractWithFlower = false;

    // 2. Đảm bảo toàn bộ hoa được dọn sạch hoàn toàn khi mới vào màn hình, tuyệt đối không tự mọc hoa
    flowersBack = [];
    flowersFront = [];
    pollenMotes = [];
    totalBloomedCount = 0;
    ctxBack.clearRect(0, 0, width, height);
    ctxFront.clearRect(0, 0, width, height);

    if (counterNumber) counterNumber.textContent = '';
    if (counterText) counterText.textContent = 'Chạm vào đóa hoa để ngàn hoa hồng Sophia bừng nở';
    if (touchBadge) {
      const hint = touchBadge.querySelector('.hint-text');
      if (hint) hint.textContent = 'Chạm vào đóa hoa để hoa bừng nở!';
    }
    updateClearButtonVisibility();

    if (!isGardenRunning) {
      isGardenRunning = true;
      lastTime = performance.now();
      requestAnimationFrame(gardenLoop);
    }

    // 3. Sau 500ms khi giao diện vườn hoa đã ổn định hoàn toàn, mới cho phép nhận click từ người dùng
    setTimeout(() => {
      canInteractWithFlower = true;
    }, 500);
  };
}
