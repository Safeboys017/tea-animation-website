/**
 * tilt.js - Ultra-smooth 3D Parallax & Physics Tilt Engine with LERP
 */

class InteractiveVesselTilt {
  constructor(options = {}) {
    this.stage = document.querySelector(options.stageSelector || '.stage-center');
    this.vesselWrap = document.querySelector(options.vesselSelector || '.vessel-3d-wrap');
    this.sheen = document.querySelector(options.sheenSelector || '.vessel-sheen');
    this.shadow = document.querySelector(options.shadowSelector || '.vessel-shadow');

    this.maxTilt = options.maxTilt || 18; // Maximum tilt angle in degrees
    this.perspective = options.perspective || 1200;
    this.lerpFactor = options.lerpFactor || 0.085;

    // State
    this.targetRotX = 0;
    this.targetRotY = 0;
    this.currentRotX = 0;
    this.currentRotY = 0;

    this.targetGlareX = 50;
    this.targetGlareY = 30;
    this.currentGlareX = 50;
    this.currentGlareY = 30;

    this.isHovered = false;

    if (this.stage && this.vesselWrap) {
      this.init();
    }
  }

  init() {
    // Desktop Mouse Tracking
    this.stage.addEventListener('mousemove', (e) => this.onMouseMove(e));
    this.stage.addEventListener('mouseenter', () => { this.isHovered = true; });
    this.stage.addEventListener('mouseleave', () => this.onMouseLeave());

    // Window parallax tracking (subtle tilt when moving anywhere on screen)
    window.addEventListener('mousemove', (e) => {
      if (!this.isHovered) {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const px = (e.clientX - cx) / cx;
        const py = (e.clientY - cy) / cy;

        this.targetRotY = px * (this.maxTilt * 0.45);
        this.targetRotX = -py * (this.maxTilt * 0.45);
        this.targetGlareX = 50 + px * 20;
        this.targetGlareY = 30 + py * 20;
      }
    });

    // Mobile Gyroscope / Device Orientation
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', (e) => {
        if (e.gamma !== null && e.beta !== null) {
          // gamma: left-to-right (-90 to 90)
          // beta: front-to-back (-180 to 180)
          const tiltX = Math.max(-25, Math.min(25, e.gamma));
          const tiltY = Math.max(-25, Math.min(25, e.beta - 45)); // assume holding phone at 45 deg

          this.targetRotY = (tiltX / 25) * this.maxTilt;
          this.targetRotX = -(tiltY / 25) * this.maxTilt;
          this.targetGlareX = 50 + (tiltX / 25) * 30;
          this.targetGlareY = 30 + (tiltY / 25) * 30;
        }
      });
    }

    this.update = this.update.bind(this);
    requestAnimationFrame(this.update);
  }

  onMouseMove(e) {
    this.isHovered = true;
    const rect = this.stage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width) * 2 - 1; // -1 to +1
    const normY = (y / rect.height) * 2 - 1; // -1 to +1

    this.targetRotY = normX * this.maxTilt;
    this.targetRotX = -normY * this.maxTilt;

    this.targetGlareX = (x / rect.width) * 100;
    this.targetGlareY = (y / rect.height) * 100;
  }

  onMouseLeave() {
    this.isHovered = false;
    this.targetRotX = 0;
    this.targetRotY = 0;
    this.targetGlareX = 50;
    this.targetGlareY = 30;
  }

  update() {
    // LERP calculation for silky smooth 60fps physics
    this.currentRotX += (this.targetRotX - this.currentRotX) * this.lerpFactor;
    this.currentRotY += (this.targetRotY - this.currentRotY) * this.lerpFactor;

    this.currentGlareX += (this.targetGlareX - this.currentGlareX) * this.lerpFactor;
    this.currentGlareY += (this.targetGlareY - this.currentGlareY) * this.lerpFactor;

    // Apply 3D Transform
    const transform = `perspective(${this.perspective}px) rotateX(${this.currentRotX.toFixed(2)}deg) rotateY(${this.currentRotY.toFixed(2)}deg) translateZ(25px)`;
    this.vesselWrap.style.transform = transform;

    // Dynamic Specular Highlight
    if (this.sheen) {
      this.sheen.style.background = `radial-gradient(circle at ${this.currentGlareX.toFixed(1)}% ${this.currentGlareY.toFixed(1)}%, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0) 65%)`;
    }

    // Dynamic Floor Shadow reacting inversely to tilt
    if (this.shadow) {
      const shadowOffsetX = -this.currentRotY * 2.2;
      const shadowScale = 1 - Math.abs(this.currentRotX) * 0.015;
      this.shadow.style.transform = `translateX(calc(-50% + ${shadowOffsetX.toFixed(1)}px)) scale(${shadowScale.toFixed(2)})`;
    }

    requestAnimationFrame(this.update);
  }

  // Wiggle / impact animation when product changes
  impactBounce() {
    this.currentRotX = -12;
    this.currentRotY = 8;
  }
}

window.InteractiveVesselTilt = InteractiveVesselTilt;
