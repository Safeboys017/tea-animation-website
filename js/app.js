/**
 * app.js - Main Application Controller
 */

const PRODUCTS = [
  {
    id: 'chagee-amber',
    brand: 'CHAGEE',
    name: 'Imperial Da Hong Pao',
    thaiName: 'ชาจี ชานมอู่หลงต้าหงเผาซิกเนเจอร์',
    type: 'Paper Cup (ถ้วย)',
    badge: 'Signature Heritage',
    price: 115,
    rating: '4.9',
    reviews: '14,280',
    volume: '600 ml (Large Cup)',
    desc: 'ชาอู่หลงต้าหงเผาแท้จากเทือกเขาอู่อี๋ ชงสดแก้วต่อแก้ว ผสานนมสดคุณภาพสูง หอมกรุ่นกลิ่นเครื่องเทศและดอกไม้ป่า พร้อมความเข้มข้นนุ่มลึกระดับจักรพรรดิ',
    image: 'assets/cup_orange_cutout.png',
    theme: {
      primary: '#d97706',
      primaryRgb: '217, 119, 6',
      accent: '#fbbf24',
      accentRgb: '251, 191, 36',
      glow: 'rgba(217, 119, 6, 0.28)',
      bg1: '#26170d',
      bg2: '#0d0905'
    },
    aroma: {
      top: 'Osmanthus & White Peach',
      heart: 'Wuyi High-Mountain Oolong',
      base: 'Highland Fresh Milk & Honey'
    },
    hotspots: [
      { text: 'ฝา Aromalock: กักเก็บกลิ่นหอมชาอู่หลงยาวนาน', top: '20%', left: '72%' },
      { text: 'ตราประทับงิ้วปักกิ่ง: มรดกวัฒนธรรมอันสง่างาม', top: '38%', left: '26%' },
      { text: 'ลายจิตรกรรมอาชา: ศิลปะเส้นทางสายไหมโบราณ', top: '74%', left: '70%' }
    ]
  },
  {
    id: 'chagee-blue',
    brand: 'CHAGEE',
    name: 'Snow Mountain Jasmine',
    thaiName: 'ชาจี ชามะลิยอดหิมะกลิ่นหอมละมุน',
    type: 'Paper Cup (ถ้วย)',
    badge: 'Best Seller ★',
    price: 110,
    rating: '5.0',
    reviews: '19,450',
    volume: '600 ml (Large Cup)',
    desc: 'สุดยอดชามะลิยอดหิมะ อบซ้ำด้วยดอกมะลิสดแท้ 7 รอบ กลิ่นหอมฟุ้งจรุงใจ ผสานนมสดเบาบาง สดชื่น นุ่มคอ และไม่เลี่ยน',
    image: 'assets/cup_blue_cutout.png',
    theme: {
      primary: '#2563eb',
      primaryRgb: '37, 99, 235',
      accent: '#60a5fa',
      accentRgb: '96, 165, 250',
      glow: 'rgba(37, 99, 235, 0.28)',
      bg1: '#0e1c30',
      bg2: '#060a12'
    },
    aroma: {
      top: 'Fresh Morning Jasmine Dew',
      heart: 'Alpine Silver Needle Tea',
      base: 'Silky Pure Cow Milk'
    },
    hotspots: [
      { text: 'ฝาล็อค Minimal Black: ดื่มง่าย ไม่รั่วซึม', top: '20%', left: '72%' },
      { text: 'สัญลักษณ์ระบำหน้ากาก: เอกลักษณ์อันโดดเด่น', top: '38%', left: '26%' },
      { text: 'ลายภูเขาและเมฆมงคล: ทัศนียภาพแห่งเทือกเขาหิมะ', top: '74%', left: '70%' }
    ]
  },
  {
    id: 'mist-classic-blue',
    brand: 'MIST TEA',
    name: 'Iced Classic Oolong',
    thaiName: 'มิสต์ที ชานมเย็นสูตรกลมกล่อม',
    type: 'Chilled Bottle (ขวด)',
    badge: 'Cold-Crafted',
    price: 85,
    rating: '4.8',
    reviews: '9,120',
    volume: '500 ml (Slim Bottle)',
    desc: 'ชาอู่หลงสกัดเย็นช้าๆ นาน 16 ชั่วโมงที่ 4°C ดึงความหอมลึก ไร้ความฝาด ผสมนมสดฮอกไกโดสูตรกลมกล่อม ดื่มง่าย สดชื่น พกพาสะดวก',
    image: 'assets/bottle_blue_cutout.png',
    theme: {
      primary: '#0284c7',
      primaryRgb: '2, 132, 199',
      accent: '#38bdf8',
      accentRgb: '56, 189, 248',
      glow: 'rgba(2, 132, 199, 0.28)',
      bg1: '#091c2b',
      bg2: '#040b12'
    },
    aroma: {
      top: 'Glacier Mist & Wild Flowers',
      heart: 'Formosa Roasted Oolong (18h)',
      base: 'Smooth Velvet Hokkaido Cream'
    },
    hotspots: [
      { text: 'ฝาเกลียวสุญญากาศ Seal-Tight: พกพาง่าย ไม่หก', top: '15%', left: '68%' },
      { text: 'โลโก้คลื่นเมฆา: บ่งบอกความบริสุทธิ์ของสายหมอก', top: '44%', left: '24%' },
      { text: 'ขวดสลิม Frosted Touch: จับถนัดมือ เก็บไอเย็น', top: '78%', left: '70%' }
    ]
  },
  {
    id: 'mist-amber-gold',
    brand: 'MIST TEA',
    name: 'Caramel Roasted Oolong',
    thaiName: 'มิสต์ที ชานมเย็นคั่วเข้มสูตรกลมกล่อม',
    type: 'Chilled Bottle (ขวด)',
    badge: 'Limited Edition',
    price: 89,
    rating: '4.9',
    reviews: '11,350',
    volume: '500 ml (Slim Bottle)',
    desc: 'ชาอู่หลงคั่วถ่านไม้โบราณ หอมกลิ่นสโมคกี้อ่อนๆ เคี่ยวคู่กับซอสคาราเมลน้ำตาลทรายแดง ให้รสสัมผัสเข้มข้น หอมหวานมันลงตัวถึงหยดสุดท้าย',
    image: 'assets/bottle_amber_cutout.png',
    theme: {
      primary: '#b45309',
      primaryRgb: '180, 83, 9',
      accent: '#f59e0b',
      accentRgb: '245, 158, 11',
      glow: 'rgba(180, 83, 9, 0.28)',
      bg1: '#251508',
      bg2: '#0f0803'
    },
    aroma: {
      top: 'Warm Brown Sugar Caramel',
      heart: 'Charcoal Roasted Dark Oolong',
      base: 'Custard Sweetness & Dairy Swirl'
    },
    hotspots: [
      { text: 'ฝาขวดบรอนซ์ทอง: ซีลรักษาความสดใหม่ 100%', top: '15%', left: '68%' },
      { text: 'โลโก้ลายนูนเมฆหมอก: สัญลักษณ์รสชาติเข้มข้น', top: '44%', left: '24%' },
      { text: 'เกลียวคลื่นน้ำนมและชา: ดีไซน์ศิลปะแห่งรสสัมผัส', top: '78%', left: '70%' }
    ]
  }
];

class TeaShowcaseApp {
  constructor() {
    this.currentIndex = 0;
    this.cartCount = 0;
    this.sweetness = '50%';
    this.iceLevel = 'ปกติ';

    // Init modules
    this.sound = new TeaSoundFX();
    this.tilt = new InteractiveVesselTilt();
    this.particles = new TeaAtmosphereEngine('particle-canvas');

    this.initDOMElements();
    this.bindEvents();
    this.renderCurrentProduct(false);
  }

  initDOMElements() {
    this.vesselImg = document.getElementById('hero-vessel-img');
    this.brandBadge = document.getElementById('hero-brand-badge');
    this.productTitle = document.getElementById('hero-product-title');
    this.productThai = document.getElementById('hero-product-thai');
    this.productDesc = document.getElementById('hero-product-desc');
    this.starsRating = document.getElementById('hero-stars-rating');
    this.reviewsCount = document.getElementById('hero-reviews-count');
    this.volumeTag = document.getElementById('hero-volume-tag');
    this.priceDisplay = document.getElementById('hero-price-display');

    // Aroma
    this.noteTop = document.getElementById('aroma-top');
    this.noteHeart = document.getElementById('aroma-heart');
    this.noteBase = document.getElementById('aroma-base');

    // Hotspots
    this.hotspots = [
      document.getElementById('hotspot-1'),
      document.getElementById('hotspot-2'),
      document.getElementById('hotspot-3')
    ];

    // Dock Cards
    this.dockCards = document.querySelectorAll('.dock-card');
    this.galleryCards = document.querySelectorAll('.gallery-card');

    // Cart badge & Sound btn
    this.cartBadge = document.getElementById('cart-badge');
    this.soundToggleBtn = document.getElementById('sound-toggle-btn');
    this.soundIcon = document.getElementById('sound-icon');
    this.orderBtn = document.getElementById('order-now-btn');
  }

  bindEvents() {
    // Dock card selection
    this.dockCards.forEach((card, idx) => {
      card.addEventListener('click', () => {
        if (this.currentIndex !== idx) {
          this.switchProduct(idx);
        }
      });
    });

    // Gallery card "Select / เลือกรสชาตินี้" button
    document.querySelectorAll('.gallery-select-btn').forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        this.switchProduct(idx);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    // Keyboard Arrow Keys
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        const next = (this.currentIndex + 1) % PRODUCTS.length;
        this.switchProduct(next);
      } else if (e.key === 'ArrowLeft') {
        const prev = (this.currentIndex - 1 + PRODUCTS.length) % PRODUCTS.length;
        this.switchProduct(prev);
      }
    });

    // Sound toggle
    this.soundToggleBtn.addEventListener('click', () => {
      const isSoundOn = this.sound.toggle();
      this.soundIcon.textContent = isSoundOn ? '🔊' : '🔇';
      this.soundToggleBtn.style.borderColor = isSoundOn ? 'var(--theme-primary)' : 'var(--surface-border)';
    });

    // Sweetness options
    document.querySelectorAll('.sweetness-opt').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.sweetness-opt').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.sweetness = e.currentTarget.dataset.val;
        document.getElementById('sweetness-display').textContent = this.sweetness;
        this.sound.playClick();
      });
    });

    // Ice options
    document.querySelectorAll('.ice-opt').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.ice-opt').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.iceLevel = e.currentTarget.dataset.val;
        document.getElementById('ice-display').textContent = this.iceLevel;
        this.sound.playClick();
      });
    });

    // Order Now Button (Flying Product to Cart Animation)
    this.orderBtn.addEventListener('click', (e) => {
      this.handleAddToCart(e);
    });

    // Magnifier Lens on Original Source Image
    this.initMagnifier();
  }

  switchProduct(index) {
    this.currentIndex = index;
    const prod = PRODUCTS[index];

    // Play chime sound
    this.sound.playChime(600 + index * 120);

    // Dynamic Color Transition
    const root = document.documentElement;
    root.style.setProperty('--theme-primary', prod.theme.primary);
    root.style.setProperty('--theme-primary-rgb', prod.theme.primaryRgb);
    root.style.setProperty('--theme-accent', prod.theme.accent);
    root.style.setProperty('--theme-accent-rgb', prod.theme.accentRgb);
    root.style.setProperty('--theme-bg-glow', prod.theme.glow);
    root.style.setProperty('--theme-gradient-1', prod.theme.bg1);
    root.style.setProperty('--theme-gradient-2', prod.theme.bg2);

    // Update particles palette
    this.particles.setTheme({
      leaf1: prod.theme.primary,
      leaf2: prod.theme.accent,
      mist: `rgba(${prod.theme.primaryRgb}, 0.05)`,
      spark: prod.theme.accent
    });

    // Animated transition on hero vessel image
    this.vesselImg.style.opacity = '0';
    this.vesselImg.style.transform = 'scale(0.85) rotate(-5deg)';

    setTimeout(() => {
      this.renderCurrentProduct(true);
      this.vesselImg.style.opacity = '1';
      this.vesselImg.style.transform = 'scale(1) rotate(0deg)';
      this.tilt.impactBounce();
    }, 280);

    // Dock selection state
    this.dockCards.forEach((c, idx) => {
      c.classList.toggle('active', idx === index);
    });
  }

  renderCurrentProduct(animateText = true) {
    const prod = PRODUCTS[this.currentIndex];

    // Vessel image source
    this.vesselImg.src = prod.image;
    this.vesselImg.alt = prod.name;

    // Badges & Titles
    this.brandBadge.textContent = `${prod.brand} • ${prod.badge}`;
    this.productTitle.textContent = prod.name;
    this.productThai.textContent = prod.thaiName;
    this.productDesc.textContent = prod.desc;
    this.starsRating.textContent = `★ ${prod.rating}`;
    this.reviewsCount.textContent = `(${prod.reviews} รีวิว)`;
    this.volumeTag.textContent = prod.volume;
    this.priceDisplay.textContent = prod.price;

    // Aroma notes
    this.noteTop.textContent = prod.aroma.top;
    this.noteHeart.textContent = prod.aroma.heart;
    this.noteBase.textContent = prod.aroma.base;

    // Hotspots text & position
    prod.hotspots.forEach((hs, idx) => {
      if (this.hotspots[idx]) {
        this.hotspots[idx].style.top = hs.top;
        this.hotspots[idx].style.left = hs.left;
        const tooltip = this.hotspots[idx].querySelector('.hotspot-tooltip');
        if (tooltip) tooltip.textContent = hs.text;
      }
    });

    if (animateText) {
      // Small trigger burst on vessel center
      const rect = this.vesselImg.getBoundingClientRect();
      this.particles.triggerBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }
  }

  handleAddToCart(e) {
    this.cartCount++;
    this.sound.playPour();

    // 1. Create flying image clone
    const rect = this.vesselImg.getBoundingClientRect();
    const cartRect = this.cartBadge.getBoundingClientRect();

    const clone = document.createElement('img');
    clone.src = PRODUCTS[this.currentIndex].image;
    clone.className = 'flying-product-clone';
    clone.style.width = `${rect.width * 0.7}px`;
    clone.style.height = `${rect.height * 0.7}px`;
    clone.style.top = `${rect.top}px`;
    clone.style.left = `${rect.left}px`;
    clone.style.opacity = '1';
    document.body.appendChild(clone);

    // Force layout reflow
    void clone.offsetWidth;

    // 2. Animate to cart badge in header
    clone.style.top = `${cartRect.top - 20}px`;
    clone.style.left = `${cartRect.left - 20}px`;
    clone.style.width = '35px';
    clone.style.height = '50px';
    clone.style.opacity = '0.1';
    clone.style.transform = 'rotate(360deg)';

    // Trigger burst at button
    this.particles.triggerBurst(e.clientX, e.clientY);

    // 3. Update Badge on complete
    setTimeout(() => {
      clone.remove();
      this.cartBadge.textContent = this.cartCount;
      this.cartBadge.classList.add('bump');
      setTimeout(() => this.cartBadge.classList.remove('bump'), 300);
    }, 850);
  }

  initMagnifier() {
    const wrap = document.getElementById('source-img-wrap');
    const img = document.getElementById('source-image');
    const lens = document.getElementById('magnifier-lens');

    if (!wrap || !img || !lens) return;

    lens.style.backgroundImage = `url('${img.src}')`;
    const zoom = 2.5;

    wrap.addEventListener('mouseenter', () => {
      lens.style.opacity = '1';
      lens.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;
    });

    wrap.addEventListener('mouseleave', () => {
      lens.style.opacity = '0';
    });

    wrap.addEventListener('mousemove', (e) => {
      const rect = wrap.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      lens.style.left = `${x}px`;
      lens.style.top = `${y}px`;

      const bgX = -(x * zoom - lens.offsetWidth / 2);
      const bgY = -(y * zoom - lens.offsetHeight / 2);

      lens.style.backgroundPosition = `${bgX}px ${bgY}px`;
    });
  }
}

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new TeaShowcaseApp();
});
