import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import confetti from 'canvas-confetti';

gsap.registerPlugin(ScrollTrigger);

/* ==========================================================================
   WEB AUDIO API CYBER SOUND SYNTHESIZER
   Crystal-clear futuristic sound effects with zero external audio assets
   ========================================================================== */

class CyberAudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = true;
    this.ambientOsc = null;
    this.ambientGain = null;
    this.lfo = null;
    this.initListeners();
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    this.ctx = new AudioContext();
  }

  toggleSound() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isMuted = !this.isMuted;
    const statusText = document.getElementById('audio-state-text');
    const audioHud = document.getElementById('audio-status');

    if (!this.isMuted) {
      if (statusText) statusText.textContent = 'ONLINE';
      if (audioHud) audioHud.classList.add('audio-active');
      this.startAmbientHum();
      this.playBeep(880, 0.15, 'sine');
    } else {
      if (statusText) statusText.textContent = 'MUTED';
      if (audioHud) audioHud.classList.remove('audio-active');
      this.stopAmbientHum();
    }
  }

  startAmbientHum() {
    if (!this.ctx || this.isMuted || this.ambientOsc) return;
    try {
      this.ambientOsc = this.ctx.createOscillator();
      this.ambientGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      this.ambientOsc.type = 'sawtooth';
      this.ambientOsc.frequency.setValueAtTime(55, this.ctx.currentTime); // Low A1

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(140, this.ctx.currentTime);

      this.ambientGain.gain.setValueAtTime(0.025, this.ctx.currentTime);

      this.ambientOsc.connect(filter);
      filter.connect(this.ambientGain);
      this.ambientGain.connect(this.ctx.destination);

      this.ambientOsc.start();
    } catch (e) {
      console.warn('Audio start error:', e);
    }
  }

  stopAmbientHum() {
    if (this.ambientOsc) {
      try {
        this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
        setTimeout(() => {
          if (this.ambientOsc) {
            this.ambientOsc.stop();
            this.ambientOsc.disconnect();
            this.ambientOsc = null;
          }
        }, 500);
      } catch (e) {
        this.ambientOsc = null;
      }
    }
  }

  playHover() {
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1800, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.02, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) { }
  }

  playClick() {
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) { }
  }

  playSuccess() {
    if (this.isMuted || !this.ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          this.playBeep(freq, 0.18, 'sine');
        }, idx * 90);
      });
    } catch (e) { }
  }

  playBeep(freq, duration = 0.1, type = 'sine') {
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) { }
  }

  initListeners() {
    const audioBtn = document.getElementById('audio-toggle-btn');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => this.toggleSound());
    }

    // Attach sound to elements with data-sound
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('[data-sound]');
      if (target && target.getAttribute('data-sound') === 'hover') {
        this.playHover();
      }
    });

    document.addEventListener('click', (e) => {
      const target = e.target.closest('[data-sound]');
      if (target) {
        this.playClick();
      }
    });
  }
}

const cyberAudio = new CyberAudioEngine();

/* ==========================================================================
   THREE.JS AMBIENT SCENE (Particle Dust + Cyber Perspective Grid)
   ========================================================================== */

function createCircleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.25, 'rgba(255, 220, 235, 0.9)');
  gradient.addColorStop(0.55, 'rgba(255, 43, 117, 0.35)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(canvas);
}

function initBackgroundThreeJS() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x060609, 0.0075);

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 50;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // 1. Procedural Glowing Circle Texture
  const dotTexture = createCircleTexture();

  // 2. Primary Floating Stardust Field
  const particleCount = 550;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const basePositions = new Float32Array(particleCount * 3);

  const pinkColor = new THREE.Color(0xFF2B75);
  const purpleColor = new THREE.Color(0x9D4EDD);
  const whiteColor = new THREE.Color(0xFFFFFF);

  for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() - 0.5) * 160;
    const y = (Math.random() - 0.5) * 120;
    const z = (Math.random() - 0.5) * 110;

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    basePositions[i * 3] = x;
    basePositions[i * 3 + 1] = y;
    basePositions[i * 3 + 2] = z;

    const rand = Math.random();
    let chosenColor = whiteColor;
    if (rand < 0.35) chosenColor = pinkColor;
    else if (rand < 0.65) chosenColor = purpleColor;

    colors[i * 3] = chosenColor.r;
    colors[i * 3 + 1] = chosenColor.g;
    colors[i * 3 + 2] = chosenColor.b;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const particleMaterial = new THREE.PointsMaterial({
    size: 2.0,
    map: dotTexture,
    vertexColors: true,
    transparent: true,
    opacity: 0.65,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const particles = new THREE.Points(geometry, particleMaterial);
  scene.add(particles);

  // 3. Ambient Connected Constellation Nodes (45 nodes with delicate lines)
  const nodeCount = 45;
  const nodePositions = new Float32Array(nodeCount * 3);
  const nodeVelocities = [];

  for (let i = 0; i < nodeCount; i++) {
    nodePositions[i * 3] = (Math.random() - 0.5) * 110;
    nodePositions[i * 3 + 1] = (Math.random() - 0.5) * 80;
    nodePositions[i * 3 + 2] = (Math.random() - 0.5) * 70;

    nodeVelocities.push({
      vx: (Math.random() - 0.5) * 0.04,
      vy: (Math.random() - 0.5) * 0.04,
      vz: (Math.random() - 0.5) * 0.04,
    });
  }

  const nodeGeometry = new THREE.BufferGeometry();
  nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));

  const nodeMaterial = new THREE.PointsMaterial({
    size: 2.8,
    map: dotTexture,
    color: 0xFF2B75,
    transparent: true,
    opacity: 0.55,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const nodes = new THREE.Points(nodeGeometry, nodeMaterial);
  scene.add(nodes);

  // Dynamic Line Connections between nearby constellation nodes
  const maxLines = (nodeCount * (nodeCount - 1)) / 2;
  const linePositions = new Float32Array(maxLines * 6);
  const lineColors = new Float32Array(maxLines * 6);

  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
  lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage));

  const lineMaterial = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.35,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
  scene.add(lineSegments);

  // Mouse interaction
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  const spotlight = document.getElementById('ambient-spotlight');

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

    if (spotlight) {
      spotlight.style.transform = "translate(" + e.clientX + "px, " + e.clientY + "px) translate(-50%, -50%)";
    }
  });

  // Window Resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Render loop
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Silky smooth damped camera parallax
    targetX += (mouseX * 7 - targetX) * 0.035;
    targetY += (mouseY * 5 - targetY) * 0.035;

    camera.position.x = targetX;
    camera.position.y = targetY;
    camera.lookAt(0, 0, 0);

    // Subtle breathing motion for particles
    const posAttr = geometry.attributes.position;
    const posArray = posAttr.array;
    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      posArray[idx + 1] = basePositions[idx + 1] + Math.sin(elapsedTime * 0.4 + basePositions[idx] * 0.05) * 1.5;
    }
    posAttr.needsUpdate = true;
    particles.rotation.y = elapsedTime * 0.012;

    // Animate constellation nodes
    const nodePos = nodeGeometry.attributes.position.array;
    for (let i = 0; i < nodeCount; i++) {
      const idx = i * 3;
      nodePos[idx] += nodeVelocities[i].vx;
      nodePos[idx + 1] += nodeVelocities[i].vy;
      nodePos[idx + 2] += nodeVelocities[i].vz;

      // Bounce boundaries
      if (Math.abs(nodePos[idx]) > 55) nodeVelocities[i].vx *= -1;
      if (Math.abs(nodePos[idx + 1]) > 40) nodeVelocities[i].vy *= -1;
      if (Math.abs(nodePos[idx + 2]) > 35) nodeVelocities[i].vz *= -1;
    }
    nodeGeometry.attributes.position.needsUpdate = true;

    // Update lines between nearby nodes
    let lineIdx = 0;
    const connectionDist = 18;
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = nodePos[i * 3] - nodePos[j * 3];
        const dy = nodePos[i * 3 + 1] - nodePos[j * 3 + 1];
        const dz = nodePos[i * 3 + 2] - nodePos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < connectionDist) {
          const alpha = 1.0 - (dist / connectionDist);

          linePositions[lineIdx * 6] = nodePos[i * 3];
          linePositions[lineIdx * 6 + 1] = nodePos[i * 3 + 1];
          linePositions[lineIdx * 6 + 2] = nodePos[i * 3 + 2];
          linePositions[lineIdx * 6 + 3] = nodePos[j * 3];
          linePositions[lineIdx * 6 + 4] = nodePos[j * 3 + 1];
          linePositions[lineIdx * 6 + 5] = nodePos[j * 3 + 2];

          // Magenta to purple gradient along connection lines
          lineColors[lineIdx * 6] = 1.0 * alpha;
          lineColors[lineIdx * 6 + 1] = 0.17 * alpha;
          lineColors[lineIdx * 6 + 2] = 0.46 * alpha;
          lineColors[lineIdx * 6 + 3] = 0.61 * alpha;
          lineColors[lineIdx * 6 + 4] = 0.3 * alpha;
          lineColors[lineIdx * 6 + 5] = 0.86 * alpha;

          lineIdx++;
        }
      }
    }

    lineGeometry.setDrawRange(0, lineIdx * 2);
    lineGeometry.attributes.position.needsUpdate = true;
    lineGeometry.attributes.color.needsUpdate = true;

    renderer.render(scene, camera);
  }

  animate();
}

/* ==========================================================================
   THREE.JS ROTATING WIREFRAME SPHERE (Bottom Telemetry Dock Card 1)
   ========================================================================== */

function initDockWireframeSphere() {
  const canvas = document.getElementById('wireframe-sphere-canvas');
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.z = 5.2;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(80, 80);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Holographic Wireframe Sphere
  const geometry = new THREE.SphereGeometry(1.8, 16, 14);
  const material = new THREE.MeshBasicMaterial({
    color: 0xFF2B75,
    wireframe: true,
    transparent: true,
    opacity: 0.85,
  });

  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  // Inner Core Sphere
  const coreGeo = new THREE.IcosahedronGeometry(0.8, 1);
  const coreMat = new THREE.MeshBasicMaterial({
    color: 0xFF0055,
    wireframe: true,
    transparent: true,
    opacity: 0.5,
  });
  const core = new THREE.Mesh(coreGeo, coreMat);
  scene.add(core);

  let spinSpeed = 0.015;

  const card = document.getElementById('stat-card-prize');
  if (card) {
    card.addEventListener('mouseenter', () => {
      spinSpeed = 0.055;
      material.opacity = 1.0;
    });
    card.addEventListener('mouseleave', () => {
      spinSpeed = 0.015;
      material.opacity = 0.85;
    });
  }

  function renderSphere() {
    requestAnimationFrame(renderSphere);
    sphere.rotation.y += spinSpeed;
    sphere.rotation.x += spinSpeed * 0.6;
    core.rotation.y -= spinSpeed * 1.5;
    renderer.render(scene, camera);
  }

  renderSphere();
}

/* ==========================================================================
   2D CYBER RADAR CANVAS (Section 3: Venue Terminal)
   ========================================================================== */

function initVenueRadar() {
  const canvas = document.getElementById('radar-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let sweepAngle = 0;
  const blips = [
    { x: 0.28, y: 0.35, label: 'JIT LIBRARY', ping: 0 },
    { x: 0.68, y: 0.42, label: 'CS LABS', ping: 0 },
    { x: 0.45, y: 0.72, label: 'MAIN ENTRANCE', ping: 0 },
    { x: 0.82, y: 0.25, label: 'SERVER ROOM', ping: 0 }
  ];

  function drawRadar() {
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.45;

    ctx.clearRect(0, 0, width, height);

    // Background Grid
    ctx.strokeStyle = 'rgba(255, 43, 117, 0.08)';
    ctx.lineWidth = 1;
    const gridSize = 20;
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Concentric Rings
    ctx.strokeStyle = 'rgba(255, 43, 117, 0.25)';
    for (let r = 1; r <= 3; r++) {
      ctx.beginPath();
      ctx.arc(centerX, centerY, (radius / 3) * r, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Crosshairs
    ctx.strokeStyle = 'rgba(255, 43, 117, 0.2)';
    ctx.beginPath();
    ctx.moveTo(centerX - radius, centerY);
    ctx.lineTo(centerX + radius, centerY);
    ctx.moveTo(centerX, centerY - radius);
    ctx.lineTo(centerX, centerY + radius);
    ctx.stroke();

    // Sweep Line
    sweepAngle += 0.035;
    if (sweepAngle > Math.PI * 2) sweepAngle = 0;

    const sweepX = centerX + Math.cos(sweepAngle) * radius;
    const sweepY = centerY + Math.sin(sweepAngle) * radius;

    const grad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
    grad.addColorStop(0, 'rgba(255, 43, 117, 0.2)');
    grad.addColorStop(1, 'rgba(255, 43, 117, 0.0)');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, sweepAngle - 0.4, sweepAngle);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = '#FF2B75';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(sweepX, sweepY);
    ctx.stroke();

    // Render Blips
    blips.forEach(blip => {
      const bx = blip.x * width;
      const by = blip.y * height;

      // Distance check to sweep line
      const angleToBlip = Math.atan2(by - centerY, bx - centerX);
      let angleDiff = sweepAngle - angleToBlip;
      while (angleDiff < 0) angleDiff += Math.PI * 2;
      while (angleDiff > Math.PI * 2) angleDiff -= Math.PI * 2;

      if (angleDiff < 0.2) {
        blip.ping = 1.0;
      }

      ctx.fillStyle = '#10B981';
      ctx.beginPath();
      ctx.arc(bx, by, 3, 0, Math.PI * 2);
      ctx.fill();

      if (blip.ping > 0.05) {
        ctx.strokeStyle = `rgba(16, 185, 129, ${blip.ping})`;
        ctx.beginPath();
        ctx.arc(bx, by, (1 - blip.ping) * 16 + 3, 0, Math.PI * 2);
        ctx.stroke();
        blip.ping -= 0.015;
      }

      ctx.font = '8px "Chakra Petch", monospace';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.fillText(blip.label, bx + 6, by + 3);
    });

    requestAnimationFrame(drawRadar);
  }

  drawRadar();
}

/* ==========================================================================
   3D MOUSE PARALLAX TILT PHYSICS ON HERO CHARACTER & TYPOGRAPHY
   ========================================================================== */

function initHeroParallax() {
  const heroSection = document.getElementById('hero');
  const charWrapper = document.getElementById('hero-character-wrap');
  const giantHeader = document.getElementById('giant-typography');
  const leftCard = document.getElementById('hero-left-card');
  const rightCard = document.getElementById('hero-right-card');
  const bloom = document.getElementById('hero-bloom');

  if (!heroSection || !charWrapper) return;

  let currentTiltX = 0;
  let currentTiltY = 0;
  let targetTiltX = 0;
  let targetTiltY = 0;

  window.addEventListener('mousemove', (e) => {
    // Only process on desktop non-touch screens
    if (window.innerWidth < 1024 || window.matchMedia('(pointer: coarse)').matches) return;

    const rect = heroSection.getBoundingClientRect();
    if (e.clientY < rect.top || e.clientY > rect.bottom) return;

    const normX = (e.clientX / window.innerWidth) * 2 - 1;
    const normY = (e.clientY / window.innerHeight) * 2 - 1;

    targetTiltY = normX * 10; // Rotate around Y axis (-10 to 10 deg)
    targetTiltX = -normY * 6;  // Rotate around X axis (-6 to 6 deg)
  });

  function updateTilt() {
    requestAnimationFrame(updateTilt);

    // On mobile or touch devices, clear inline transforms to avoid layout glitch
    if (window.innerWidth < 1024 || window.matchMedia('(pointer: coarse)').matches) {
      if (charWrapper.style.transform) charWrapper.style.transform = '';
      if (giantHeader && giantHeader.style.transform) giantHeader.style.transform = '';
      if (leftCard && leftCard.style.transform) leftCard.style.transform = '';
      if (rightCard && rightCard.style.transform) rightCard.style.transform = '';
      if (bloom && bloom.style.transform) bloom.style.transform = '';
      return;
    }

    // Smooth lerp damping
    currentTiltX += (targetTiltX - currentTiltX) * 0.07;
    currentTiltY += (targetTiltY - currentTiltY) * 0.07;

    // Character 3D Perspective Tilt
    charWrapper.style.transform = `perspective(1000px) rotateX(${currentTiltX}deg) rotateY(${currentTiltY}deg) translateZ(30px)`;

    // Reverse Parallax on Giant Header (creates deep distance feeling)
    if (giantHeader) {
      giantHeader.style.transform = `translate(-50%, -50%) translate3d(${-currentTiltY * 2}px, ${-currentTiltX * 1.5}px, 0)`;
    }

    // Mid Info Cards Subtle Parallax Shift
    if (leftCard) {
      leftCard.style.transform = `translate3d(${currentTiltY * 0.6}px, ${currentTiltX * 0.5}px, 15px)`;
    }
    if (rightCard) {
      rightCard.style.transform = `translate3d(${currentTiltY * 0.6}px, ${currentTiltX * 0.5}px, 15px)`;
    }

    // Ambient Magenta Bloom Shift
    if (bloom) {
      bloom.style.transform = `translate(-50%, -50%) translate3d(${currentTiltY * 1.0}px, ${currentTiltX * 0.8}px, 0)`;
    }
  }

  updateTilt();
}

/* ==========================================================================
   SCROLL-DRIVEN GSAP ANIMATION SEQUENCE
   Stage 1: 3D character scales & zooms past header
   Stage 2: Metric dock cards detach and morph
   Stage 3: Metric counters increment, circuit trace lights up
   ========================================================================== */

function initScrollAnimations() {
  const charImg = document.getElementById('hero-char-img');
  const giantHeader = document.querySelector('.giant-display-header');
  const bottomDock = document.getElementById('bottom-dock');

  ScrollTrigger.matchMedia({
    // Desktop: full zoom and depth parallax
    "(min-width: 1024px)": function () {
      if (charImg && giantHeader) {
        gsap.to(charImg, {
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
          scale: 1.18,
          yPercent: 8,
          opacity: 0.9,
          filter: 'drop-shadow(0 20px 60px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 50px rgba(255, 43, 117, 0.8))',
        });

        gsap.to(giantHeader, {
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
          scale: 0.92,
          yPercent: -15,
          opacity: 0.2,
          filter: 'blur(4px)',
        });

        if (bottomDock) {
          gsap.to(bottomDock, {
            scrollTrigger: {
              trigger: '#hero',
              start: '20% top',
              end: '80% top',
              scrub: 0.8,
            },
            y: 40,
            opacity: 0.3,
          });
        }
      }
    },

    // Mobile & Tablet: subtle smooth transition with zero stretching or overlap
    "(max-width: 1023px)": function () {
      if (charImg && giantHeader) {
        gsap.to(charImg, {
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom 50%',
            scrub: 1,
          },
          scale: 1.04,
          opacity: 0.95,
        });

        gsap.to(giantHeader, {
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom 50%',
            scrub: 1,
          },
          opacity: 0.25,
        });
      }
    }
  });

  // Section 2: Server Block Cards Slide-in
  const serverCards = document.querySelectorAll('.server-block-card');
  if (serverCards.length) {
    gsap.from(serverCards, {
      scrollTrigger: {
        trigger: '#rules',
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
    });
  }

  // Section 3: Timeline Spine Circuit Trace Runner
  const spineRunner = document.getElementById('spine-runner');
  const timelineNodes = document.querySelectorAll('.timeline-node');

  if (spineRunner && timelineNodes.length) {
    gsap.to(spineRunner, {
      scrollTrigger: {
        trigger: '.cyber-timeline-spine',
        start: 'top 70%',
        end: 'bottom 50%',
        scrub: 1,
      },
      top: '100%',
      ease: 'none',
    });

    timelineNodes.forEach((node, i) => {
      gsap.from(node, {
        scrollTrigger: {
          trigger: node,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        x: -30,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1,
      });
    });
  }

  // Right Rail Step Indicator Update on Scroll
  const sections = [
    { id: 'hero', step: '01' },
    { id: 'rules', step: '02' },
    { id: 'tracks', step: '03' },
    { id: 'schedule', step: '04' },
    { id: 'prizes', step: '05' },
  ];

  const stepDisplay = document.getElementById('active-step-num');
  const miniBars = document.querySelectorAll('.mini-bar');
  const scrollThumb = document.getElementById('scroll-thumb');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight * 0.35;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;

    // Scroll Thumb on Left Rail
    if (scrollThumb) {
      scrollThumb.style.top = `${Math.min(scrollPercent * 0.44, 44)}px`;
    }

    // Active Section Check
    sections.forEach((sec, idx) => {
      const el = document.getElementById(sec.id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          if (stepDisplay) stepDisplay.textContent = sec.step;

          miniBars.forEach((bar, bIdx) => {
            bar.classList.toggle('active', bIdx === idx);
          });

          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === `#${sec.id}`);
          });
        }
      }
    });

    // Sticky Header styling
    const header = document.getElementById('navbar');
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // Animated Counter for Cash Prize (+₹22,000)
  const prizeCounter = document.getElementById('counter-prize');
  if (prizeCounter) {
    let started = false;
    ScrollTrigger.create({
      trigger: '#hero',
      start: 'top 80%',
      onEnter: () => {
        if (started) return;
        started = true;
        let count = 0;
        const target = 22000;
        const duration = 1800;
        const startTime = performance.now();

        function updateCount(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          count = Math.floor(eased * target);
          prizeCounter.textContent = count.toLocaleString('en-IN');
          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            prizeCounter.textContent = '22,000';
          }
        }
        requestAnimationFrame(updateCount);
      }
    });
  }
}

/* ==========================================================================
   LIVE COUNTDOWN TIMER TO HACKATHON COMMENCEMENT (25 NOV 2026)
   ========================================================================== */

function initCountdown() {
  const daysEl = document.getElementById('timer-days');
  const hoursEl = document.getElementById('timer-hours');
  const minsEl = document.getElementById('timer-mins');
  const secsEl = document.getElementById('timer-secs');

  // Target Date: 25 November 2026, 09:00 AM IST
  let targetDate = new Date('2026-11-25T09:00:00+05:30');
  if (isNaN(targetDate.getTime()) || targetDate.getTime() - new Date().getTime() <= 0) {
    targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 31);
    targetDate.setHours(9, 0, 0, 0);
  }

  function tick() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance <= 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minsEl) minsEl.textContent = '00';
      if (secsEl) secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(mins).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(secs).padStart(2, '0');
  }

  tick();
  setInterval(tick, 1000);
}

/* ==========================================================================
   TERMINAL CLOCK
   ========================================================================== */

function initTerminalClock() {
  const clockEl = document.getElementById('terminal-time');
  if (!clockEl) return;

  function updateClock() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-GB', { hour12: false });
    clockEl.textContent = `UTC+05:30 // ${timeStr}`;
  }
  updateClock();
  setInterval(updateClock, 1000);
}

/* ==========================================================================
   INTERACTIVE MODALS & TICKET SYSTEM
   ========================================================================== */

function initModals() {
  const regModal = document.getElementById('reg-modal');
  const regBtns = [
    document.getElementById('register-nav-btn'),
    document.getElementById('drawer-register-btn'),
    document.getElementById('teaser-reg-btn'),
  ];
  const modalClose = document.getElementById('modal-close');
  const regForm = document.getElementById('reg-form');
  const ticketView = document.getElementById('ticket-success-view');
  const ticketDoneBtn = document.getElementById('ticket-done-btn');

  function openRegModal() {
    if (regModal) {
      regModal.classList.add('open');
      regModal.setAttribute('aria-hidden', 'false');
      cyberAudio.playClick();
    }
  }

  function closeRegModal() {
    if (regModal) {
      regModal.classList.remove('open');
      regModal.setAttribute('aria-hidden', 'true');
    }
  }

  regBtns.forEach(btn => {
    if (btn) btn.addEventListener('click', openRegModal);
  });

  if (modalClose) modalClose.addEventListener('click', closeRegModal);
  if (ticketDoneBtn) {
    ticketDoneBtn.addEventListener('click', () => {
      closeRegModal();
      if (ticketView) ticketView.classList.add('hidden');
      if (regForm) {
        regForm.style.display = 'block';
        regForm.reset();
      }
    });
  }

  // Registration Form Submission
  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const teamName = document.getElementById('team-name')?.value || 'CYBER_SQUAD';
      const leadName = document.getElementById('lead-name')?.value || 'LEAD_OPERATOR';
      const track = document.getElementById('track-select')?.value || 'Healthcare & AI Innovation';

      // Update Ticket Details
      const tTeam = document.getElementById('ticket-team-name');
      const tLead = document.getElementById('ticket-lead-name');
      const tTrack = document.getElementById('ticket-track');

      if (tTeam) tTeam.textContent = teamName.toUpperCase();
      if (tLead) tLead.textContent = leadName.toUpperCase();
      if (tTrack) tTrack.textContent = track.toUpperCase();

      // Confetti Blast
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#FF2B75', '#FF0055', '#FFFFFF', '#00F0FF'],
      });

      cyberAudio.playSuccess();

      // Swap Form with Holographic Pass
      regForm.style.display = 'none';
      if (ticketView) ticketView.classList.remove('hidden');
    });
  }

  // Trailer Video Modal
  const trailerModal = document.getElementById('trailer-modal');
  const trailerBtn = document.getElementById('watch-trailer-btn');
  const trailerClose = document.getElementById('trailer-close-btn');

  if (trailerBtn && trailerModal) {
    trailerBtn.addEventListener('click', () => {
      trailerModal.classList.add('open');
      trailerModal.setAttribute('aria-hidden', 'false');
      cyberAudio.playClick();
    });
  }
  if (trailerClose && trailerModal) {
    trailerClose.addEventListener('click', () => {
      trailerModal.classList.remove('open');
      trailerModal.setAttribute('aria-hidden', 'true');
    });
  }

  // Venue Radar Arrow Button -> Quick Scroll to Venue
  const venueRadarBtn = document.getElementById('venue-radar-btn');
  if (venueRadarBtn) {
    venueRadarBtn.addEventListener('click', () => {
      cyberAudio.playClick();
      const venueSec = document.getElementById('venue');
      if (venueSec) venueSec.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Close modals on clicking overlay backdrop
  [regModal, trailerModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('open');
          modal.setAttribute('aria-hidden', 'true');
        }
      });
    }
  });

  // Pre-flight Rule Checklist Trigger
  const openRulesBtn = document.getElementById('open-rules-checklist-btn');
  if (openRulesBtn) {
    openRulesBtn.addEventListener('click', () => {
      openRegModal();
    });
  }
}

/* ==========================================================================
   COMMAND PALETTE / SEARCH MODAL (Ctrl + K)
   ========================================================================== */

function initCommandPalette() {
  const searchModal = document.getElementById('search-modal');
  const searchTrigger = document.getElementById('search-trigger');
  const searchInput = document.getElementById('command-search-input');
  const searchResults = document.querySelectorAll('.search-item');

  function openSearch() {
    if (!searchModal) return;
    searchModal.classList.add('open');
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
    cyberAudio.playClick();
  }

  function closeSearch() {
    if (!searchModal) return;
    searchModal.classList.remove('open');
  }

  if (searchTrigger) searchTrigger.addEventListener('click', openSearch);

  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (searchModal && searchModal.classList.contains('open')) {
        closeSearch();
      } else {
        openSearch();
      }
    }
    if (e.key === 'Escape') {
      closeSearch();
      const regModal = document.getElementById('reg-modal');
      const trailerModal = document.getElementById('trailer-modal');
      if (regModal) regModal.classList.remove('open');
      if (trailerModal) trailerModal.classList.remove('open');
    }
  });

  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearch();
    });
  }

  // Filter Search Items
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      searchResults.forEach(item => {
        const title = item.querySelector('.item-title')?.textContent.toLowerCase() || '';
        const desc = item.querySelector('.item-desc')?.textContent.toLowerCase() || '';
        if (title.includes(query) || desc.includes(query)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  searchResults.forEach(item => {
    item.addEventListener('click', () => {
      closeSearch();
    });
  });
}

/* ==========================================================================
   MOBILE MENU DRAWER
   ========================================================================== */

function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const close = document.getElementById('drawer-close');
  const links = document.querySelectorAll('.drawer-link');

  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      drawer.classList.add('open');
      cyberAudio.playClick();
    });
  }
  if (close && drawer) {
    close.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  }
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (drawer) drawer.classList.remove('open');
    });
  });
}

/* ==========================================================================
   CUSTOM CYBER CURSOR
   ========================================================================== */

function initCyberCursor() {
  const cursor = document.getElementById('cyber-cursor');
  if (!cursor) return;
  const crosshair = cursor.querySelector('.cursor-crosshair');

  window.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('button, a, input, select, .dock-card, .server-block-card, .track-card, .prize-card')) {
      if (crosshair) crosshair.classList.add('cursor-hover');
    } else {
      if (crosshair) crosshair.classList.remove('cursor-hover');
    }
  });
}

/* ==========================================================================
   INIT ALL SYSTEMS ON DOM READY
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initBackgroundThreeJS();
  initDockWireframeSphere();
  initVenueRadar();
  initHeroParallax();
  initScrollAnimations();
  initCountdown();
  initTerminalClock();
  initModals();
  initCommandPalette();
  initMobileMenu();
  initCyberCursor();

  console.log('%c [CLOCKIT 2026] // CODE AGAINST THE CLOCK // PROTOCOL INITIALIZED ', 'background: #FF2B75; color: #fff; font-size: 14px; font-weight: bold; padding: 4px 8px; border-radius: 4px;');
});
