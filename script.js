/**
 * ============================================================================
 * CẤU HÌNH TẬP TRUNG (EASY CONFIGURATION)
 * Dễ dàng chỉnh sửa thông tin người nhận, lời chúc và hình nền tại đây.
 * ============================================================================
 */
const BIRTHDAY_CONFIG = {
  // 1. Tên người nhận sinh nhật
  recipientName: "Bảo Trân",

  // 2. Lời chúc sinh nhật giàu triết lý, niềm tin và hy vọng (không nhắc đến yêu thương)
  wishes: `Chúc mừng sinh nhật Bảo Trân – ngày đặc biệt đánh dấu sự hiện diện của một cô gái kiên định, chân thành và luôn ngập tràn nguồn năng lượng tích cực!
Gửi đến em những lời chúc tốt đẹp và ấm áp nhất, chúc em đón tuổi mới đong đầy niềm vui thuần khiết, tâm hồn luôn an nhiên nhẹ nhõm và trọn vẹn sự bình yên trong từng khoảnh khắc.

Bước sang một tuổi mới, chúc em trên chặng đường phía trước luôn giữ trọn ngọn lửa niềm tin và sự kiên định vững vàng với con đường mà bản thân đã lựa chọn.
Cuộc đời vốn dĩ là một hành trình dài của những trải nghiệm, những bài học và sự trưởng thành; em không cần phải hối hả ép mình chạy theo nhịp bước của thế giới ngoài kia, cũng đừng bao giờ đặt mình lên bàn cân so sánh với bất kỳ ai, bởi giữa khu vườn rộng lớn này, mỗi loài hoa đều sở hữu một thời khắc trổ bông và nét kiêu hãnh rực rỡ của riêng mình.

Và hơn hết thảy, mong em đừng bao giờ tự trói buộc bản thân vào những khuôn mẫu hoàn hảo hay bất kỳ thước đo kỳ vọng nào của người khác. Có những ngày rực rỡ ngập tràn ánh nắng, nhưng cũng sẽ có những lúc chông chênh, những khoảng lặng mỏi mệt khi mọi điều chẳng như mong ước. Những khi ấy, em hãy cứ cho phép mình được dừng chân nghỉ ngơi, thả lỏng tâm trí; khi đối diện với những lắng lo hay chênh vênh, hãy dành cho chính mình sự kiên nhẫn, thấu hiểu và lòng bao dung dịu dàng nhất. Được sống là một phiên bản chân thật, tự do tự tại, dũng cảm với cảm xúc của mình và biết nâng niu, trân quý bản thân đã là một điều phi thường vô cùng đáng tự hào.

Mong em mỗi ngày trôi qua đều tìm thấy những niềm hạnh phúc lấp lánh trong những điều nhỏ bé và bình dị nhất, luôn giữ được một tâm thế an nhiên, thanh thản trước mọi biến chuyển của dòng đời, can đảm và vững vàng đón nhận mọi thử thách phía trước. Chúc em luôn tự tin làm chủ cuộc đời mình, tự do sải cánh và tỏa sáng lộng lẫy bằng chính bản lĩnh độc lập cùng nguồn năng lượng rạng ngời, ấm áp nhất của em.`,

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
    initialBatchCount: 3, // Mỗi lần chạm chỉ nở 3 - 4 bông nhẹ nhàng, tinh tế
    moreBatchCount: 3,    // Bấm nở thêm cũng 3 - 4 bông
    soundEnabled: true,
    title: "Vườn Hoa Hồng Sophia Của Em 🌸",
    blessingText: "“Anh đến đây với bó hoa mà em thích – ngàn đóa hoa hồng Sophia bừng nở rạng ngời gửi trọn những điều tuyệt vời nhất đến Bảo Trân.”"
  },

  // 9. Cấu hình tốc độ gõ chữ từ từ cho lời chúc (chậm rãi, sâu lắng)
  typewriter: {
    charDelay: 48,        // Tốc độ gõ từng chữ (ms) - số càng lớn chữ hiện càng chậm rãi
    sentencePause: 540,   // Khoảng dừng lắng đọng sau dấu chấm, chấm than, hỏi (ms)
    commaPause: 220,      // Khoảng dừng nhịp sau dấu phẩy, chấm phẩy (ms)
    newlinePause: 460     // Khoảng dừng khi chuyển dòng/đoạn mới (ms)
  },

  // 10. Cấu hình Lọ Đom Đóm Điều Ước & Gửi Gmail thông báo
  wishingJar: {
    // Địa chỉ email nhận thông báo khi Bảo Trân gửi điều ước
    recipientEmail: "thanhcong772003@gmail.com",
    formspreeId: ""
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
  initTouchSparkleBurst();
  initScratchCard();
  initOracleCards();
  initFireflyWishingJar();
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

      const tw = BIRTHDAY_CONFIG.typewriter || {
        charDelay: 48,
        sentencePause: 540,
        commaPause: 220,
        newlinePause: 460
      };

      let delay = tw.charDelay;
      if (ch === '.' || ch === '!' || ch === '?') {
        delay = tw.sentencePause;
      } else if (ch === ',' || ch === ';' || ch === ':') {
        delay = tw.commaPause;
      } else if (ch === '\n') {
        delay = tw.newlinePause;
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
   HIỆU ỨNG CHẠM PHÁT NỔ HOA & SAO LẤP LÁNH (TOUCH SPARKLE BURST)
   Lấy cảm hứng từ thiệp vietchuu, mỗi cú chạm đều bung nở cánh hoa và ánh sao
   ============================================================================ */
function initTouchSparkleBurst() {
  const symbols = ['🌸', '✨', '🌹', '🌷', '💫', '🎉', '💖'];
  document.addEventListener('pointerdown', (e) => {
    // Không kích hoạt khi đang cào trên canvas thẻ cào để thao tác cào mượt nhất
    if (e.target && (e.target.id === 'scratch-canvas' || e.target.closest('#scratch-canvas'))) {
      return;
    }

    const count = 5;
    for (let i = 0; i < count; i++) {
      const sp = document.createElement('span');
      sp.className = 'touch-sparkle';
      sp.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      sp.style.left = `${e.clientX}px`;
      sp.style.top = `${e.clientY}px`;

      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.45;
      const dist = 32 + Math.random() * 42;
      sp.style.setProperty('--tx', `${Math.cos(angle) * dist}px`);
      sp.style.setProperty('--ty', `${Math.sin(angle) * dist - 16}px`);
      sp.style.setProperty('--rot', `${(Math.random() - 0.5) * 70}deg`);

      document.body.appendChild(sp);
      setTimeout(() => sp.remove(), 850);
    }
  }, { passive: true });
}

/* ============================================================================
   THẺ CÀO BÍ MẬT TƯƠNG TÁC (INTERACTIVE SECRET SCRATCH CARD)
   Lớp nhũ kim sa Rose-Gold sang trọng, cào mở đặc quyền, tự động hoàn tất ở 45%
   ============================================================================ */
let isScratchInitialized = false;
let isScratching = false;
let scratchRevealed = false;
let lastScratchPt = null;
let scratchCanvas = null;
let scratchCardBox = null;
let scratchProgressText = null;

function initScratchCard() {
  scratchCanvas = document.getElementById('scratch-canvas');
  scratchCardBox = document.getElementById('scratch-card-box');
  scratchProgressText = document.getElementById('scratch-progress-text');
  const btnReset = document.getElementById('btn-scratch-reset');

  if (!scratchCanvas || !scratchCardBox) return;

  // Đảm bảo vẽ lớp phủ khi giao diện đã render kích thước thực
  setTimeout(() => {
    drawScratchCover();
  }, 60);

  if (!isScratchInitialized) {
    isScratchInitialized = true;

    scratchCanvas.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      isScratching = true;
      lastScratchPt = null;
      scratchAt(getScratchCoords(e));
    });

    let moveCount = 0;
    scratchCanvas.addEventListener('pointermove', (e) => {
      if (!isScratching) return;
      e.preventDefault();
      scratchAt(getScratchCoords(e));
      moveCount++;
      if (moveCount % 7 === 0) {
        checkScratchPercent();
      }
    });

    const endScratch = () => {
      if (!isScratching) return;
      isScratching = false;
      lastScratchPt = null;
      checkScratchPercent();
    };

    window.addEventListener('pointerup', endScratch);
    window.addEventListener('pointercancel', endScratch);

    if (btnReset) {
      btnReset.addEventListener('click', () => {
        drawScratchCover();
      });
    }

    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!scratchRevealed) {
          drawScratchCover();
        }
      }, 150);
    });
  }
}

function drawScratchCover() {
  if (!scratchCanvas || !scratchCardBox) return;

  const rect = scratchCardBox.getBoundingClientRect();
  const w = Math.max(280, Math.floor(rect.width || 380));
  const h = Math.max(380, Math.floor(rect.height || 440));

  scratchCanvas.width = w;
  scratchCanvas.height = h;

  const sctx = scratchCanvas.getContext('2d');
  sctx.globalCompositeOperation = 'source-over';

  // Lớp nền nhũ kim sa Rose-Gold & Champagne sang trọng
  const grad = sctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, '#f2a8b9');
  grad.addColorStop(0.25, '#fad4dc');
  grad.addColorStop(0.5, '#fff0f3');
  grad.addColorStop(0.75, '#f5bdc8');
  grad.addColorStop(1, '#e394a5');
  sctx.fillStyle = grad;
  sctx.fillRect(0, 0, w, h);

  // Hạt bụi kim tuyến & ánh sao lấp lánh ngẫu nhiên
  for (let i = 0; i < 80; i++) {
    sctx.fillStyle = i % 3 === 0
      ? 'rgba(255, 255, 255, 0.85)'
      : (i % 3 === 1 ? 'rgba(216, 162, 67, 0.4)' : 'rgba(201, 24, 74, 0.22)');
    sctx.beginPath();
    sctx.arc(Math.random() * w, Math.random() * h, 1 + Math.random() * 2.5, 0, Math.PI * 2);
    sctx.fill();
  }

  // Khung viền chỉ vàng kim đứt đoạn tinh tế
  sctx.strokeStyle = 'rgba(184, 74, 101, 0.45)';
  sctx.lineWidth = 2;
  sctx.setLineDash([8, 6]);
  sctx.strokeRect(14, 14, w - 28, h - 28);
  sctx.setLineDash([]);

  // Chữ chỉ dẫn ở giữa lớp nhũ
  sctx.fillStyle = '#9e2a5b';
  sctx.font = "bold 20px 'Montserrat', sans-serif";
  sctx.textAlign = 'center';
  sctx.textBaseline = 'middle';
  sctx.fillText("✨ CÀO ĐỂ NHẬN QUÀ ✨", w / 2, h / 2 - 14);

  sctx.fillStyle = '#b84a65';
  sctx.font = "italic 13.5px 'Playfair Display', serif";
  sctx.fillText("Vuốt nhẹ để mở tấm vé may mắn 🎟️", w / 2, h / 2 + 18);

  scratchCanvas.classList.remove('revealed');
  scratchRevealed = false;
  if (scratchProgressText) {
    scratchProgressText.textContent = "Đã cào: 0%";
  }
}

function getScratchCoords(e) {
  const rect = scratchCanvas.getBoundingClientRect();
  const scaleX = scratchCanvas.width / rect.width;
  const scaleY = scratchCanvas.height / rect.height;
  return {
    x: (e.clientX - rect.left) * scaleX,
    y: (e.clientY - rect.top) * scaleY
  };
}

function scratchAt(pt) {
  if (!scratchCanvas || scratchRevealed) return;
  const sctx = scratchCanvas.getContext('2d');
  sctx.globalCompositeOperation = 'destination-out';
  sctx.lineWidth = 42;
  sctx.lineCap = 'round';
  sctx.lineJoin = 'round';

  sctx.beginPath();
  if (lastScratchPt) {
    sctx.moveTo(lastScratchPt.x, lastScratchPt.y);
    sctx.lineTo(pt.x, pt.y);
  } else {
    sctx.arc(pt.x, pt.y, 21, 0, Math.PI * 2);
  }
  sctx.stroke();
  lastScratchPt = pt;
}

function checkScratchPercent() {
  if (!scratchCanvas || scratchRevealed) return;
  const sctx = scratchCanvas.getContext('2d');
  const { width, height } = scratchCanvas;

  try {
    const imgData = sctx.getImageData(0, 0, width, height).data;
    let cleared = 0;
    const step = 16;
    const totalSampled = Math.floor(imgData.length / step);

    for (let i = 3; i < imgData.length; i += step) {
      if (imgData[i] < 128) cleared++;
    }

    const pct = Math.min(100, Math.round((cleared / totalSampled) * 100));
    if (scratchProgressText) {
      scratchProgressText.textContent = `Đã cào: ${pct}%`;
    }

    if (pct >= 45 && !scratchRevealed) {
      revealScratchPrize();
    }
  } catch (err) {
    // Dự phòng an toàn
  }
}

function revealScratchPrize() {
  scratchRevealed = true;
  if (scratchCanvas) {
    scratchCanvas.classList.add('revealed');
  }
  if (scratchProgressText) {
    scratchProgressText.innerHTML = "🎉 <strong>Chúc mừng! Đã mở khóa 100%!</strong> 🌟";
  }

  // Âm thanh chuông ngân pentatonic chúc mừng
  playScratchUnlockChime();

  // Bắn pháo hoa rực rỡ
  if (typeof triggerGrandFireworks === 'function') {
    triggerGrandFireworks();
  }
}

function playScratchUnlockChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const actx = new AudioCtx();
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6
    const now = actx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = actx.createOscillator();
      const gain = actx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.2, now + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.7);

      osc.connect(gain);
      gain.connect(actx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.75);
    });
  } catch (e) {
    // Audio Context safe
  }
}

/* ============================================================================
   3 LÁ BÀI TAROT / THÔNG ĐIỆP VŨ TRỤ (BIRTHDAY ORACLE CARDS)
   Lật mở 3D chân thực, phát chuông ngân diệu kỳ và bừng sáng pháo hoa
   ============================================================================ */
function initOracleCards() {
  const cards = document.querySelectorAll('.oracle-card');
  let firstFlip = true;

  cards.forEach((card) => {
    const handleFlip = () => {
      card.classList.toggle('is-flipped');
      playOracleCardChime();

      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      triggerSoftSparkleConfetti(cx, cy);

      if (firstFlip && card.classList.contains('is-flipped')) {
        firstFlip = false;
        if (typeof triggerGrandFireworks === 'function') {
          triggerGrandFireworks();
        }
      }
    };

    card.addEventListener('click', handleFlip);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleFlip();
      }
    });
  });
}

function playOracleCardChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const actx = new AudioCtx();
    const chord = [587.33, 739.99, 880.00, 1174.66]; // D5, F#5, A5, D6
    const now = actx.currentTime;

    chord.forEach((freq, idx) => {
      const osc = actx.createOscillator();
      const gain = actx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.06);

      gain.gain.setValueAtTime(0, now + idx * 0.06);
      gain.gain.linearRampToValueAtTime(0.18, now + idx * 0.06 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.85);

      osc.connect(gain);
      gain.connect(actx.destination);
      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.9);
    });
  } catch (e) {
    // Audio Context safe
  }
}

/* ============================================================================
   CHIẾC LỌ ĐOM ĐÓM ĐIỀU ƯỚC (ENCHANTED FIREFLY WISHING JAR)
   Lưu vào localStorage, tự động tải file .txt kỷ niệm và gửi âm thầm qua Formspree về Gmail
   ============================================================================ */
let currentSavedWishText = "";
let currentSavedWishTime = "";

function initFireflyWishingJar() {
  const wishingInput = document.getElementById('wishing-input');
  const charCount = document.getElementById('wishing-char-num');
  const btnSendWish = document.getElementById('btn-send-wish');
  const wishingForm = document.getElementById('wishing-form');
  const wishingResult = document.getElementById('wishing-result');
  const sentWishTextEl = document.getElementById('sent-wish-text');
  const sentWishTimeEl = document.getElementById('sent-wish-time');
  const btnRewriteWish = document.getElementById('btn-rewrite-wish');
  const magicJar = document.getElementById('magic-jar');

  // Đếm ký tự realtime
  if (wishingInput && charCount) {
    wishingInput.addEventListener('input', () => {
      charCount.textContent = wishingInput.value.length;
    });
  }

  // Tương tác chạm vào lọ thủy tinh để đom đóm phát nổ nhẹ
  if (magicJar) {
    magicJar.addEventListener('click', (e) => {
      const rect = magicJar.getBoundingClientRect();
      triggerSoftSparkleConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
    });
  }

  // Xử lý gửi điều ước
  if (btnSendWish) {
    btnSendWish.addEventListener('click', () => {
      const wishText = wishingInput ? wishingInput.value.trim() : '';

      if (!wishText) {
        if (wishingInput) {
          wishingInput.focus();
          wishingInput.style.borderColor = '#c9184a';
          wishingInput.placeholder = "Đừng quên viết một điều ước trước khi thả đom đóm nhé! 🌸";
          setTimeout(() => {
            wishingInput.style.borderColor = '';
          }, 2000);
        }
        return;
      }

      // Tạo thời gian gửi
      const now = new Date();
      const timeStr = `${now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })} • Ngày ${now.toLocaleDateString('vi-VN')}`;
      currentSavedWishText = wishText;
      currentSavedWishTime = timeStr;

      // 1. Kích hoạt bầy đom đóm bay vút lên bầu trời sao
      launchFlyingWishFireflies();

      // 2. Phát âm thanh chuông ngân diệu kỳ & pháo hoa
      playOracleCardChime();
      if (typeof triggerGrandFireworks === 'function') {
        triggerGrandFireworks();
      }

      // 3. Lưu vào localStorage an toàn trên máy
      try {
        localStorage.setItem('hpbd_wish_bao_tran', JSON.stringify({
          wish: wishText,
          time: timeStr
        }));
      } catch (e) {}

      // 4. Gửi email tự động về thanhcong772003@gmail.com
      sendWishEmail(wishText, timeStr);

      // 5. Hiển thị kết quả thành công
      if (sentWishTextEl) sentWishTextEl.textContent = wishText;
      if (sentWishTimeEl) sentWishTimeEl.textContent = `Thắp sáng lúc: ${timeStr}`;
      if (wishingForm) wishingForm.classList.add('hidden');
      if (wishingResult) wishingResult.classList.remove('hidden');
    });
  }

  // Nút viết thêm điều ước khác
  if (btnRewriteWish) {
    btnRewriteWish.addEventListener('click', () => {
      if (wishingForm) wishingForm.classList.remove('hidden');
      if (wishingResult) wishingResult.classList.add('hidden');
      if (wishingInput) {
        wishingInput.value = '';
        if (charCount) charCount.textContent = '0';
        wishingInput.focus();
      }
    });
  }

  // Kiểm tra nếu trước đó đã lưu điều ước
  checkSavedWish();
}

function checkSavedWish() {
  try {
    const raw = localStorage.getItem('hpbd_wish_bao_tran');
    if (raw) {
      const data = JSON.parse(raw);
      if (data && data.wish) {
        currentSavedWishText = data.wish;
        currentSavedWishTime = data.time || 'Đã lưu';
        const wishingForm = document.getElementById('wishing-form');
        const wishingResult = document.getElementById('wishing-result');
        const sentWishTextEl = document.getElementById('sent-wish-text');
        const sentWishTimeEl = document.getElementById('sent-wish-time');

        if (sentWishTextEl) sentWishTextEl.textContent = data.wish;
        if (sentWishTimeEl) sentWishTimeEl.textContent = `Thắp sáng lúc: ${currentSavedWishTime}`;
        if (wishingForm) wishingForm.classList.add('hidden');
        if (wishingResult) wishingResult.classList.remove('hidden');
      }
    }
  } catch (e) {}
}

function launchFlyingWishFireflies() {
  const magicJar = document.getElementById('magic-jar');
  const count = 12;
  const rect = magicJar ? magicJar.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0, height: 0 };
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;

  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const ff = document.createElement('span');
      ff.className = 'flying-wish-firefly';
      ff.style.left = `${originX}px`;
      ff.style.top = `${originY}px`;

      const dx = (Math.random() - 0.5) * 160;
      ff.style.setProperty('--dx', `${dx}px`);

      document.body.appendChild(ff);
      setTimeout(() => ff.remove(), 1650);
    }, i * 90);
  }
}

function sendWishEmail(wishText, timeStr) {
  const recipient = BIRTHDAY_CONFIG.recipientName || "Bảo Trân";
  const targetEmail = (BIRTHDAY_CONFIG.wishingJar && BIRTHDAY_CONFIG.wishingJar.recipientEmail) || "thanhcong772003@gmail.com";
  const formspreeId = BIRTHDAY_CONFIG.wishingJar && BIRTHDAY_CONFIG.wishingJar.formspreeId;

  // 1. Gửi email trực tiếp đến thanhcong772003@gmail.com qua FormSubmit API
  try {
    fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `✨ [HPBD] Điều ước sinh nhật từ ${recipient}! ✨`,
        "Người gửi": recipient,
        "Điều ước tuổi mới": wishText,
        "Thời gian gửi": timeStr
      })
    }).catch(() => {});
  } catch (e) {}

  // 2. Gửi thêm qua Formspree (nếu có cấu hình Formspree ID)
  if (formspreeId) {
    try {
      fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          _subject: `✨ [HPBD] Điều ước tuổi mới của ${recipient} ✨`,
          nguoi_gui: recipient,
          dieu_uoc: wishText,
          thoi_gian: timeStr
        })
      }).catch(() => {});
    } catch (e) {}
  }
}

/* ============================================================================
   LOGIC CHUYỂN ĐỔI GIAI ĐOẠN & TƯƠNG TÁC NGƯỜI DÙNG (STAGE MANAGER)
   ============================================================================ */
let scrollToStepGlobal = (stageName) => { };

function initStageInteractions() {
  const frames = {
    1: document.getElementById('frame-step-1'),
    2: document.getElementById('frame-step-2'),
    3: document.getElementById('frame-step-3'),
    4: document.getElementById('frame-step-4'),
    5: document.getElementById('frame-step-5'),
    6: document.getElementById('frame-step-6')
  };

  const giftBox = document.getElementById('gift-box');
  const btnOpenGift = document.getElementById('btn-open-gift');
  const btnGotoWishes = document.getElementById('btn-goto-wishes');
  const btnBlowCandle = document.getElementById('btn-blow-candle');
  const btnGotoScratch = document.getElementById('btn-goto-scratch');
  const btnScratchToOracle = document.getElementById('btn-scratch-to-oracle') || document.getElementById('btn-scratch-to-garden');
  const btnOracleToGarden = document.getElementById('btn-oracle-to-garden');
  const btnScrollTop = document.getElementById('btn-scroll-top');
  const candle = document.getElementById('candle');
  const cakeWrapper = document.getElementById('cake-interactive-wrapper');
  const postBlowMessage = document.getElementById('post-blow-message');

  // Nút quay lại (Back buttons)
  const btnBackStep1 = document.getElementById('btn-back-to-step-1');
  const btnBackStep2 = document.getElementById('btn-back-to-step-2');
  const btnBackStep3 = document.getElementById('btn-back-to-step-3');
  const btnBackStep4 = document.getElementById('btn-back-to-step-4');
  const btnBackStep5 = document.getElementById('btn-back-to-step-5');

  // Chuyển sang bước mới: ẨN HOÀN TOÀN TẤT CẢ các bước khác, CHỈ HIỂN THỊ DUY NHẤT bước hiện tại
  const switchToStep = (targetStep) => {
    for (let i = 1; i <= 6; i++) {
      const frameEl = frames[i];
      if (frameEl) {
        if (i === targetStep) {
          frameEl.classList.remove('step-locked');
          frameEl.classList.remove('step-reveal');
          // Buộc browser tính lại layout để kích hoạt animation bừng sáng mượt mà
          void frameEl.offsetWidth;
          frameEl.classList.add('step-reveal');
        } else {
          frameEl.classList.add('step-locked');
          frameEl.classList.remove('step-reveal');
        }
      }

      const dividerEl = document.getElementById(`divider-step-${i}`);
      if (dividerEl) {
        dividerEl.classList.add('step-locked');
        dividerEl.classList.remove('step-reveal');
      }
    }

    // Cuộn mượt lên đỉnh để khung mới nằm trọn vẹn trong tầm mắt
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Kích hoạt các hiệu ứng đặc thù theo từng bước
    if (targetStep === 1) {
      // Khi trở về Bước 1, nếu hộp quà đã mở sẵn có thể nhấn để mở lại
    } else if (targetStep === 2) {
      setTimeout(() => {
        // Kích hoạt nét vẽ khoanh tròn nghệ thuật ngày 23/10
        const day23 = document.getElementById('calendar-day-23');
        if (day23) {
          day23.classList.add('draw-active');
        }
      }, 180);
    } else if (targetStep === 3) {
      setTimeout(() => {
        startWishesTypewriter(true);
      }, 180);
    } else if (targetStep === 4) {
      setTimeout(() => {
        drawScratchCover();
      }, 180);
    } else if (targetStep === 5) {
      setTimeout(() => {
        if (typeof checkSavedWish === 'function') {
          checkSavedWish();
        }
      }, 180);
    } else if (targetStep === 6) {
      setTimeout(() => {
        if (window.onGardenStageActivated) {
          window.onGardenStageActivated();
        }
      }, 180);
    }
  };

  // Bước 1: Mở hộp quà -> Ẩn Bước 1 & Nhảy sang duy nhất Bước 2 (Lịch 23/10)
  const handleOpenGift = () => {
    if (!giftBox.classList.contains('opening') && !giftBox.classList.contains('opened')) {
      giftBox.classList.add('opening');
      
      // Bắn pháo hoa rực rỡ tâm điểm từ hộp quà
      triggerConfettiBurst();

      setTimeout(() => {
        giftBox.classList.add('opened');
        switchToStep(2);
      }, 650);
    } else {
      switchToStep(2);
    }
  };

  if (btnOpenGift) {
    btnOpenGift.addEventListener('click', handleOpenGift);
  }
  if (giftBox) {
    giftBox.addEventListener('click', handleOpenGift);
    giftBox.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleOpenGift();
      }
    });
  }

  // Tương tác chạm vào ngày 23 trên lịch để bắn hoa lấp lánh
  const day23 = document.getElementById('calendar-day-23');
  if (day23) {
    day23.addEventListener('click', () => {
      const rect = day23.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      triggerSoftSparkleConfetti(cx, cy);
    });
  }

  // Bước 2 -> Bước 3: Nút chuyển từ Lịch sang duy nhất Khung Lời chúc & Thổi nến
  if (btnGotoWishes) {
    btnGotoWishes.addEventListener('click', (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      switchToStep(3);
    });
  }

  // Bước 2 -> Quay lại Bước 1 (Hộp quà)
  if (btnBackStep1) {
    btnBackStep1.addEventListener('click', (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      switchToStep(1);
    });
  }

  // Bước 3: Thổi nến hoành tráng & mở nút dẫn sang Khung 4 (Thẻ cào)
  const handleBlowCandle = () => {
    if (!candle.classList.contains('extinguished')) {
      candle.classList.add('extinguished');
      if (btnBlowCandle) btnBlowCandle.disabled = true;

      // Pháo hoa đại tiệc bắn từ 2 góc dưới màn hình lên cao
      triggerGrandFireworks();
      setTimeout(triggerGrandFireworks, 400);

      // Hiện lời chúc tốt đẹp và nút dẫn chuyển sang Bước 4
      setTimeout(() => {
        if (postBlowMessage) postBlowMessage.classList.remove('hidden');
        if (btnBlowCandle) btnBlowCandle.classList.add('hidden');
        if (btnGotoScratch) btnGotoScratch.classList.remove('hidden');
      }, 700);
    }
  };

  if (btnBlowCandle) {
    btnBlowCandle.addEventListener('click', handleBlowCandle);
  }
  if (cakeWrapper) {
    cakeWrapper.addEventListener('click', handleBlowCandle);
  }

  // Bước 3 -> Bước 4: Nhấn nút xong ẩn Bước 3 & nhảy sang duy nhất Bước 4 (Thẻ cào)
  if (btnGotoScratch) {
    btnGotoScratch.addEventListener('click', (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      switchToStep(4);
    });
  }

  // Bước 3 -> Quay lại Bước 2 (Lịch 23/10)
  if (btnBackStep2) {
    btnBackStep2.addEventListener('click', (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      switchToStep(2);
    });
  }

  // Bước 4 -> Bước 5: Sang Oracle & Lọ Điều Ước
  if (btnScratchToOracle) {
    btnScratchToOracle.addEventListener('click', (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      switchToStep(5);
    });
  }

  // Bước 4 -> Quay lại Bước 3 (Lời chúc & Thổi nến)
  if (btnBackStep3) {
    btnBackStep3.addEventListener('click', (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      switchToStep(3);
    });
  }

  // Bước 5 -> Bước 6: Sang Vườn hoa Sophia
  if (btnOracleToGarden) {
    btnOracleToGarden.addEventListener('click', (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      switchToStep(6);
    });
  }

  // Bước 5 -> Quay lại Bước 4 (Thẻ cào)
  if (btnBackStep4) {
    btnBackStep4.addEventListener('click', (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      switchToStep(4);
    });
  }

  // Bước 6 -> Quay lại Bước 5 (Oracle & Lọ Điều Ước)
  if (btnBackStep5) {
    btnBackStep5.addEventListener('click', (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      switchToStep(5);
    });
  }

  // Bước 6: Nút xem lại từ đầu -> Ẩn Bước 6 & quay lại duy nhất Bước 1
  if (btnScrollTop) {
    btnScrollTop.addEventListener('click', (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (giftBox) {
        giftBox.classList.remove('opening', 'opened');
      }
      switchToStep(1);
    });
  }
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
  if (window.innerWidth < 768) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const cards = document.querySelectorAll('.step-card-frame');
  cards.forEach((card) => {
    let bounds = null;

    function rotateToMouse(e) {
      if (!bounds) bounds = card.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
      };

      const maxTilt = 4; // Độ nghiêng vừa phải sang trọng
      const rotateX = (-center.y / (bounds.height / 2)) * maxTilt;
      const rotateY = (center.x / (bounds.width / 2)) * maxTilt;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    card.addEventListener('mouseenter', () => {
      bounds = card.getBoundingClientRect();
      card.addEventListener('mousemove', rotateToMouse);
    });

    card.addEventListener('mouseleave', () => {
      card.removeEventListener('mousemove', rotateToMouse);
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      bounds = null;
    });
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
let triggerConfettiBurst = () => { };
let triggerSoftSparkleConfetti = () => { };
let triggerGrandFireworks = () => { };

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

  // Hàm kích hoạt đợt hoa hồng Sophia chồi lên nhẹ nhàng (3 - 4 hoa mỗi lần chạm, tránh rối mắt)
  function sproutGardenBatch(count) {
    resize();
    if (!isGardenRunning) {
      isGardenRunning = true;
      lastTime = performance.now();
      requestAnimationFrame(gardenLoop);
    }

    // Mỗi lần chạm chỉ nở ngẫu nhiên 3 hoặc 4 đóa hoa thanh lịch, tinh tế
    const spawnCount = (typeof count === 'number' && count > 0 && count <= 5)
      ? count
      : (Math.random() > 0.5 ? 4 : 3);

    // Tính toán phân bổ vị trí x tự nhiên, thoáng đãng khắp màn hình
    const padding = Math.max(30, width * 0.08);
    const availableWidth = width - padding * 2;

    for (let i = 0; i < spawnCount; i++) {
      // Phân bổ đều và tạo độ lệch ngẫu nhiên nhẹ nhàng
      const baseRatio = (i + 0.5) / spawnCount;
      const jitter = (Math.random() - 0.5) * (availableWidth / spawnCount * 0.75);
      const x = Math.max(25, Math.min(width - 25, padding + baseRatio * availableWidth + jitter));

      const isBack = Math.random() > 0.45;
      const targetArray = isBack ? flowersBack : flowersFront;

      targetArray.push(new BotanicalFlower(x, isBack ? 'back' : 'front', {
        delay: i * 160 + Math.random() * 100 // Từng bông vươn lên so le mềm mại
      }));
    }

    totalBloomedCount += spawnCount;
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

  // Ngưỡng hoa để tự động kích hoạt hiển thị nút Xóa hết hoa (khi vườn có từ 8 bông trở lên)
  const MANY_FLOWERS_THRESHOLD = 8;

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

  // Cho phép tương tác click vào đóa hoa trung tâm
  let canInteractWithFlower = true;

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

    // Kích hoạt đợt hoa (3 - 4 hoa)
    const countToBloom = (Math.random() > 0.5) ? 4 : 3;
    sproutGardenBatch(countToBloom);

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

  // Bấm nút "Nở thêm hoa" (3 - 4 hoa nhẹ nhàng)
  if (btnBloomMore) {
    btnBloomMore.addEventListener('click', () => {
      playBloomChime();
      const countToBloom = (Math.random() > 0.5) ? 4 : 3;
      sproutGardenBatch(countToBloom);
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
    } catch (e) { }

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
        counterText.textContent = 'Chạm vào đóa hoa để hoa hồng Sophia chồi lên khoe sắc';
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
  window.onGardenStageActivated = () => {
    resize();
  };

  // Khởi động vòng lặp render canvas vườn hoa
  if (!isGardenRunning) {
    isGardenRunning = true;
    lastTime = performance.now();
    requestAnimationFrame(gardenLoop);
  }
}
