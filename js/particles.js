/**
 * particles.js - Atmospheric Tea Leaves, Mist & Interactive Particles Engine
 */

class TeaAtmosphereEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.mouse = { x: -1000, y: -1000, active: false };
    this.theme = {
      leafColor1: 'rgba(217, 119, 6, 0.75)',
      leafColor2: 'rgba(251, 191, 36, 0.45)',
      mistColor: 'rgba(245, 158, 11, 0.04)',
      sparkColor: 'rgba(253, 230, 138, 0.85)'
    };

    this.leaves = [];
    this.mists = [];
    this.sparks = [];

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.mouse.active = true;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.active = false;
    });

    // Populate particles
    this.createLeaves(22);
    this.createMists(12);
    this.createSparks(35);

    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  setTheme(palette) {
    if (palette.leaf1) this.theme.leafColor1 = palette.leaf1;
    if (palette.leaf2) this.theme.leafColor2 = palette.leaf2;
    if (palette.mist) this.theme.mistColor = palette.mist;
    if (palette.spark) this.theme.sparkColor = palette.spark;
  }

  createLeaves(count) {
    for (let i = 0; i < count; i++) {
      this.leaves.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: 14 + Math.random() * 16,
        vx: -0.3 + Math.random() * 0.6,
        vy: 0.6 + Math.random() * 0.9,
        angle: Math.random() * Math.PI * 2,
        angleSpeed: (Math.random() - 0.5) * 0.03,
        swaySpeed: 0.015 + Math.random() * 0.02,
        swayOffset: Math.random() * Math.PI * 2,
        swayAmp: 1.2 + Math.random() * 1.5,
        opacity: 0.35 + Math.random() * 0.45
      });
    }
  }

  createMists(count) {
    for (let i = 0; i < count; i++) {
      this.mists.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: 120 + Math.random() * 160,
        vy: -0.2 - Math.random() * 0.35,
        vx: -0.1 + Math.random() * 0.2,
        opacity: 0.03 + Math.random() * 0.05,
        pulseSpeed: 0.01 + Math.random() * 0.015,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }
  }

  createSparks(count) {
    for (let i = 0; i < count; i++) {
      this.sparks.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: 1.2 + Math.random() * 2.2,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -0.4 - Math.random() * 0.6,
        baseAlpha: 0.2 + Math.random() * 0.6,
        alpha: 0.5,
        twinkleSpeed: 0.03 + Math.random() * 0.04,
        twinkleOffset: Math.random() * Math.PI * 2
      });
    }
  }

  drawLeaf(leaf) {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(leaf.x, leaf.y);
    ctx.rotate(leaf.angle);

    // Realistic curved tea leaf shape
    ctx.beginPath();
    ctx.moveTo(0, -leaf.size);
    ctx.bezierCurveTo(leaf.size * 0.65, -leaf.size * 0.4, leaf.size * 0.7, leaf.size * 0.4, 0, leaf.size);
    ctx.bezierCurveTo(-leaf.size * 0.7, leaf.size * 0.4, -leaf.size * 0.65, -leaf.size * 0.4, 0, -leaf.size);
    ctx.closePath();

    // Leaf gradient fill
    const grad = ctx.createLinearGradient(0, -leaf.size, 0, leaf.size);
    grad.addColorStop(0, this.theme.leafColor1);
    grad.addColorStop(1, this.theme.leafColor2);
    ctx.fillStyle = grad;
    ctx.globalAlpha = leaf.opacity;
    ctx.fill();

    // Center stem vein
    ctx.beginPath();
    ctx.moveTo(0, -leaf.size * 0.85);
    ctx.lineTo(0, leaf.size * 0.85);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.restore();
  }

  animate(time) {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // 1. Draw Mist Clouds
    for (let mist of this.mists) {
      mist.y += mist.vy;
      mist.x += mist.vx;

      if (mist.y + mist.radius < 0) {
        mist.y = this.height + mist.radius;
        mist.x = Math.random() * this.width;
      }

      const pulse = Math.sin(time * 0.001 * mist.pulseSpeed + mist.pulseOffset);
      const rad = mist.radius + pulse * 20;

      const grad = this.ctx.createRadialGradient(mist.x, mist.y, 0, mist.x, mist.y, rad);
      grad.addColorStop(0, this.theme.mistColor);
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      this.ctx.fillStyle = grad;
      this.ctx.beginPath();
      this.ctx.arc(mist.x, mist.y, rad, 0, Math.PI * 2);
      this.ctx.fill();
    }

    // 2. Draw Sparks / Shimmering Aroma
    for (let spark of this.sparks) {
      spark.y += spark.vy;
      spark.x += spark.vx;

      // Mouse repulsion
      if (this.mouse.active) {
        const dx = spark.x - this.mouse.x;
        const dy = spark.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120 && dist > 0) {
          const force = (120 - dist) / 120;
          spark.x += (dx / dist) * force * 3;
          spark.y += (dy / dist) * force * 3;
        }
      }

      if (spark.y < 0) {
        spark.y = this.height + 10;
        spark.x = Math.random() * this.width;
      }

      const twinkle = Math.sin(time * 0.003 * spark.twinkleSpeed + spark.twinkleOffset);
      spark.alpha = Math.max(0.1, spark.baseAlpha + twinkle * 0.3);

      this.ctx.fillStyle = this.theme.sparkColor;
      this.ctx.globalAlpha = spark.alpha;
      this.ctx.beginPath();
      this.ctx.arc(spark.x, spark.y, spark.radius, 0, Math.PI * 2);
      this.ctx.fill();
    }

    // 3. Draw Fluttering Tea Leaves
    for (let leaf of this.leaves) {
      leaf.y += leaf.vy;
      leaf.x += leaf.vx + Math.sin(time * 0.002 * leaf.swaySpeed + leaf.swayOffset) * leaf.swayAmp;
      leaf.angle += leaf.angleSpeed;

      // Mouse gentle breeze reaction
      if (this.mouse.active) {
        const dx = leaf.x - this.mouse.x;
        const dy = leaf.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140 && dist > 0) {
          const force = (140 - dist) / 140;
          leaf.x += (dx / dist) * force * 2.5;
          leaf.y += (dy / dist) * force * 2.5;
          leaf.angle += force * 0.05;
        }
      }

      // Recycle at bottom
      if (leaf.y - leaf.size > this.height) {
        leaf.y = -leaf.size - 10;
        leaf.x = Math.random() * this.width;
      }
      if (leaf.x - leaf.size > this.width) {
        leaf.x = -leaf.size;
      } else if (leaf.x + leaf.size < 0) {
        leaf.x = this.width + leaf.size;
      }

      this.drawLeaf(leaf);
    }

    this.ctx.globalAlpha = 1.0;
    requestAnimationFrame(this.animate);
  }

  // Blossom burst effect on user interaction
  triggerBurst(x, y) {
    for (let i = 0; i < 16; i++) {
      const angle = (Math.PI * 2 / 16) * i + Math.random() * 0.2;
      const speed = 2 + Math.random() * 4;
      this.sparks.push({
        x: x,
        y: y,
        radius: 2 + Math.random() * 2.5,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        baseAlpha: 0.9,
        alpha: 0.9,
        twinkleSpeed: 0.05,
        twinkleOffset: 0
      });
    }
  }
}

window.TeaAtmosphereEngine = TeaAtmosphereEngine;
