/**
 * BioPod OS & Lumina Bio-OS - Interactive IoT Dashboard Engine
 * Real-time Physics Simulator, Agri-AI Intelligence Hub, Microgrid Power Flow, MQTT Terminal, Web Audio Synth
 * Enhanced with North Eastern Region (NER) Multi-Language & Voice Assist Integration
 */

// --- Crop Database ---
const CROP_DATABASE = {
  potato: {
    name: "Organic Seed Potato",
    origin: "Tawang, Arunachal Pradesh",
    category: "Tubers & Roots",
    targetTemp: 4.0,
    targetRH: 90,
    shelfLifeDays: "+120d",
    co2Tolerance: 3000,
    ethyleneSensitivity: "Low",
    spoilageRisk: "Very Low (3%)",
    confidence: 98.6,
    image: "assets/potato.png",
    bioNotes: "Rhizome dormancy mode active. Solanine greening prevented via zero-light dark storage and strictly regulated skin curing humidity."
  }
};

// --- Global Application State ---
const state = {
  activeTab: 'ai-control',
  selectedCropKey: 'potato',
  soundEnabled: true,
  theme: 'dark', // 'dark' (BioPod OS) or 'light' (Lumina Bio-OS)
  
  // Real-time Chamber Physical State
  chamber: {
    temp: 4.8,
    targetTemp: 4.0,
    rh: 84.2,
    targetRH: 90.0,
    co2: 680,
    ethylene: 0.12, // ppm
    pressure: 1013.2,
    dewPoint: 2.3,
    vpd: 0.14, // kPa
    doorOpen: false,
    defrostActive: false,
    defrostTimer: 0
  },
  
  // Microgrid Energy State
  energy: {
    batterySoc: 78.4,
    batteryVoltage: 51.2,
    batteryCurrent: -4.2, // Negative = discharging, positive = charging
    solarPower: 165,
    solarIrradiance: 850,
    solarVoltage: 18.2,
    solarCurrent: 9.06,
    hydroPower: 85,
    hydroFlow: 45.0, // L/min
    hydroVoltage: 12.0,
    totalLoad: 310, // Watts
    backupHours: 14.2
  },
  
  // Actuator & Control States
  actuators: {
    autoAi: true,
    compressor: { on: true, speedPct: 65, powerW: 210 },
    humidifier: { on: true, dutyPct: 80, powerW: 45, waterLevelPct: 82 },
    fan: { on: true, rpm: 1200, powerW: 35 },
    scrubber: { on: false, filterLifePct: 91, powerW: 20 },
    lighting: { on: false, spectrum: 'inspect', lux: 0 }
  },
  
  // ESP32 Node Connectivity
  esp32: {
    online: true,
    nodeId: "BioPod-NER-04",
    location: "Khasi Hills, Meghalaya",
    ping: 45,
    rssi: -58,
    packetsSent: 1420,
    packetsRecv: 1419,
    firmware: "BioPod-ESP-v3.4.2-SMP"
  },
  
  // Historical Telemetry Buffers for Charts
  history: {
    labels: [],
    tempData: [],
    targetTempData: [],
    rhData: [],
    targetRhData: [],
    solarData: [],
    hydroData: [],
    loadData: []
  }
};

// Make state globally accessible
window.state = state;

// --- Web Audio Synthesizer ---
class SoundEngine {
  constructor() {
    this.ctx = null;
  }
  
  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }
  
  playTone(freq, type = 'sine', duration = 0.08, volume = 0.1) {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      
      gain.gain.setValueAtTime(volume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }
  
  click() {
    this.playTone(800, 'triangle', 0.04, 0.05);
  }
  
  success() {
    this.playTone(587.33, 'sine', 0.08, 0.08); // D5
    setTimeout(() => this.playTone(880, 'sine', 0.15, 0.08), 80); // A5
  }
  
  aiChirp() {
    this.playTone(440, 'sine', 0.06, 0.05);
    setTimeout(() => this.playTone(659.25, 'sine', 0.06, 0.06), 60);
    setTimeout(() => this.playTone(1046.5, 'sine', 0.12, 0.07), 120);
  }
  
  alert() {
    this.playTone(950, 'sawtooth', 0.15, 0.12);
    setTimeout(() => this.playTone(720, 'sawtooth', 0.2, 0.12), 150);
  }
}

const sound = new SoundEngine();
window.sound = sound;

// --- Helper translation wrapper ---
function translate(key, fallback = '') {
  if (typeof window.t === 'function') {
    return window.t(key, fallback);
  }
  return fallback || key;
}

// --- Real-Time Physics & IoT Telemetry Loop ---
function runSimulationTick() {
  const dt = 1.0; // 1 second tick
  const crop = CROP_DATABASE[state.selectedCropKey] || CROP_DATABASE.potato;
  
  // 1. ESP32 Jitter & Heartbeat
  state.esp32.ping = Math.round(42 + (Math.random() * 12 - 6));
  state.esp32.packetsRecv += 1;
  if (Math.random() > 0.3) state.esp32.packetsSent += 1;
  
  // 2. Chamber Thermal Inertia Simulation
  let tempDelta = 0;
  if (state.chamber.defrostActive) {
    tempDelta += 0.15;
    state.chamber.defrostTimer -= 1;
    if (state.chamber.defrostTimer <= 0) {
      state.chamber.defrostActive = false;
      logMqtt("biopod/ner-04/climate", "Defrost cycle completed. Resuming standard thermal regulation.");
      showToast(translate('sec_thermal_defrost', "Defrost Cycle Finished"), translate('nominal_label', "Chamber cooling resumed."));
    }
  } else if (state.chamber.doorOpen) {
    tempDelta += 0.22; // Influx of ambient warm air
    state.chamber.rh = Math.max(40, state.chamber.rh - 0.4);
  } else {
    // Standard cooling physics
    if (state.actuators.compressor.on) {
      const coolingPower = (state.actuators.compressor.speedPct / 100) * 0.12;
      const targetDiff = state.chamber.targetTemp - state.chamber.temp;
      tempDelta = Math.min(0.08, Math.max(-0.08, targetDiff * 0.05 - coolingPower));
    } else {
      // Natural ambient heat bleed (+22°C ambient)
      tempDelta = 0.02;
    }
  }
  state.chamber.temp = Math.round((state.chamber.temp + tempDelta + (Math.random() * 0.02 - 0.01)) * 10) / 10;
  
  // 3. Chamber Humidity Simulation
  let rhDelta = 0;
  if (state.actuators.humidifier.on && !state.chamber.doorOpen) {
    const mistOutput = (state.actuators.humidifier.dutyPct / 100) * 0.25;
    const targetDiff = state.chamber.targetRH - state.chamber.rh;
    rhDelta = Math.min(0.3, Math.max(-0.3, targetDiff * 0.08 + mistOutput));
    state.actuators.humidifier.waterLevelPct = Math.max(5, state.actuators.humidifier.waterLevelPct - 0.002);
  } else {
    rhDelta = -0.05; // natural condensation drop
  }
  state.chamber.rh = Math.min(99.5, Math.max(30, Math.round((state.chamber.rh + rhDelta + (Math.random() * 0.1 - 0.05)) * 10) / 10));
  
  // 4. Dew Point & VPD Calculation
  const a = 17.27, b = 237.7;
  const alpha = ((a * state.chamber.temp) / (b + state.chamber.temp)) + Math.log(state.chamber.rh / 100.0);
  state.chamber.dewPoint = Math.round(((b * alpha) / (a - alpha)) * 10) / 10;
  
  // Saturated Vapor Pressure (VPsat)
  const vpsat = 0.61078 * Math.exp((17.27 * state.chamber.temp) / (state.chamber.temp + 237.3));
  const vpair = vpsat * (state.chamber.rh / 100);
  state.chamber.vpd = Math.max(0.01, Math.round((vpsat - vpair) * 100) / 100);
  
  // 5. Gas Dynamics (Ethylene & CO2 from crop respiration)
  if (state.actuators.scrubber.on) {
    state.chamber.ethylene = Math.max(0.01, state.chamber.ethylene - 0.015);
    state.chamber.co2 = Math.max(420, state.chamber.co2 - 8);
  } else {
    // Natural crop respiration
    const respRate = crop.ethyleneSensitivity === 'Very High' ? 0.006 : 0.002;
    state.chamber.ethylene = Math.round((state.chamber.ethylene + respRate) * 100) / 100;
    state.chamber.co2 = Math.min(4000, state.chamber.co2 + Math.round(Math.random() * 3));
  }
  
  // 6. Microgrid Energy Simulation
  // Solar output varies slightly with irradiance
  state.energy.solarPower = Math.round((state.energy.solarIrradiance / 1000) * 195 + (Math.random() * 6 - 3));
  state.energy.solarCurrent = Math.round((state.energy.solarPower / state.energy.solarVoltage) * 100) / 100;
  
  // Hydro output
  state.energy.hydroPower = Math.round(state.energy.hydroFlow * 1.88 + (Math.random() * 2 - 1));
  
  // Total Chamber Load calculation
  let currentLoad = 25; // base controller & sensors
  if (state.actuators.compressor.on) currentLoad += (state.actuators.compressor.speedPct / 100) * state.actuators.compressor.powerW;
  if (state.actuators.humidifier.on) currentLoad += (state.actuators.humidifier.dutyPct / 100) * state.actuators.humidifier.powerW;
  if (state.actuators.fan.on) currentLoad += (state.actuators.fan.rpm / 2400) * state.actuators.fan.powerW;
  if (state.actuators.scrubber.on) currentLoad += state.actuators.scrubber.powerW;
  if (state.actuators.lighting.on) currentLoad += 18;
  state.energy.totalLoad = Math.round(currentLoad);
  
  // Power Balance & Battery SoC
  const totalGen = state.energy.solarPower + state.energy.hydroPower;
  const netPower = totalGen - state.energy.totalLoad; // Positive = Charging battery, Negative = Discharging
  state.energy.batteryCurrent = Math.round((netPower / state.energy.batteryVoltage) * 10) / 10;
  
  // Battery SoC drift (Capacity ~ 2.4kWh = 2400Wh)
  const deltaSoCPct = (netPower / (2400 * 3600)) * 100 * dt;
  state.energy.batterySoc = Math.min(100, Math.max(5, Math.round((state.energy.batterySoc + deltaSoCPct) * 10) / 10));
  
  if (netPower < 0) {
    const hoursRem = (state.energy.batterySoc / 100) * 2400 / Math.abs(netPower);
    state.energy.backupHours = Math.round(hoursRem * 10) / 10;
  } else {
    state.energy.backupHours = 99.9;
  }
  
  // 7. Auto AI Autonomous Regulation Loop
  if (state.actuators.autoAi) {
    const tempError = state.chamber.temp - state.chamber.targetTemp;
    if (tempError > 0.4 && !state.actuators.compressor.on) {
      state.actuators.compressor.on = true;
      state.actuators.compressor.speedPct = Math.min(100, Math.max(40, Math.round(50 + tempError * 20)));
    } else if (tempError < -0.3 && state.actuators.compressor.on) {
      state.actuators.compressor.speedPct = Math.max(20, state.actuators.compressor.speedPct - 5);
      if (tempError < -0.8) state.actuators.compressor.on = false;
    }
    
    const rhError = state.chamber.targetRH - state.chamber.rh;
    if (rhError > 2.0 && !state.actuators.humidifier.on) {
      state.actuators.humidifier.on = true;
      state.actuators.humidifier.dutyPct = Math.min(100, Math.round(60 + rhError * 4));
    } else if (rhError < -2.0 && state.actuators.humidifier.on) {
      state.actuators.humidifier.on = false;
    }
    
    if (state.chamber.ethylene > 0.4 && !state.actuators.scrubber.on) {
      state.actuators.scrubber.on = true;
      logMqtt("biopod/ner-04/ai_command", "Auto-AI activated Ethylene scrubber (C2H4 threshold exceeded: " + state.chamber.ethylene + " ppm)");
    }
  }
  
  // 8. Update Chart History Buffers
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  
  state.history.labels.push(timeStr);
  state.history.tempData.push(state.chamber.temp);
  state.history.targetTempData.push(state.chamber.targetTemp);
  state.history.rhData.push(state.chamber.rh);
  state.history.targetRhData.push(state.chamber.targetRH);
  state.history.solarData.push(state.energy.solarPower);
  state.history.hydroData.push(state.energy.hydroPower);
  state.history.loadData.push(state.energy.totalLoad);
  
  if (state.history.labels.length > 30) {
    state.history.labels.shift();
    state.history.tempData.shift();
    state.history.targetTempData.shift();
    state.history.rhData.shift();
    state.history.targetRhData.shift();
    state.history.solarData.shift();
    state.history.hydroData.shift();
    state.history.loadData.shift();
  }
  
  // Update DOM readouts & Charts
  updateUI();
}

// --- UI Sync & Rendering ---
function updateUI() {
  // 1. ESP32 Telemetry Bar
  const pingEl = document.getElementById('esp32-ping');
  if (pingEl) pingEl.innerText = `${translate('esp32_online', 'ESP32 Online')} • ${state.esp32.ping}ms`;
  
  const packetEl = document.getElementById('esp32-packets');
  if (packetEl) packetEl.innerText = `${translate('packets_label', 'Packets')}: ${state.esp32.packetsRecv} RX / ${state.esp32.packetsSent} TX`;
  
  // 2. Chamber Primary Readouts
  setText('live-temp-val', state.chamber.temp.toFixed(1));
  setText('live-rh-val', Math.round(state.chamber.rh));
  setText('live-co2-val', state.chamber.co2);
  setText('live-ethylene-val', state.chamber.ethylene.toFixed(2));
  setText('live-dew-val', state.chamber.dewPoint.toFixed(1));
  setText('live-vpd-val', state.chamber.vpd.toFixed(2));
  
  setText('live-target-temp-label', `${translate('target_label', 'Target')}: ${state.chamber.targetTemp.toFixed(1)}°C`);
  setText('live-target-rh-label', `${translate('target_label', 'Target')}: ${Math.round(state.chamber.targetRH)}%`);
  
  // 3. Energy Hub Primary Readouts
  setText('battery-soc-val', Math.round(state.energy.batterySoc));
  setText('battery-meta-val', `${state.energy.batteryVoltage}V / ${Math.abs(state.energy.batteryCurrent)}A`);
  
  const batteryStatusTag = document.getElementById('battery-status-tag');
  if (batteryStatusTag) {
    if (state.energy.batteryCurrent >= 0) {
      batteryStatusTag.innerText = translate('status_charging', "CHARGING");
      batteryStatusTag.className = "bg-primary/20 text-primary font-mono text-[10px] px-2 py-0.5 rounded border border-primary/30";
    } else {
      batteryStatusTag.innerText = translate('status_discharging', "DISCHARGING");
      batteryStatusTag.className = "bg-tertiary/20 text-tertiary font-mono text-[10px] px-2 py-0.5 rounded border border-tertiary/30";
    }
  }
  
  const batteryProgress = document.getElementById('battery-progress-bar');
  if (batteryProgress) {
    batteryProgress.style.width = `${Math.min(100, Math.max(0, state.energy.batterySoc))}%`;
  }
  
  const backupText = state.energy.backupHours >= 90 
    ? translate('continuous_power', 'Continuous') 
    : `${state.energy.backupHours}h ${translate('backup_remaining', 'Backup Remaining')}`;
  setText('battery-backup-val', backupText);
  
  setText('solar-power-val', state.energy.solarPower);
  setText('solar-meta-val', `${state.energy.solarVoltage}V / ${state.energy.solarCurrent}A`);
  setText('solar-irr-val', `${state.energy.solarIrradiance} W/m² ${translate('solar_irradiance', 'Irr')}`);
  
  setText('hydro-power-val', state.energy.hydroPower);
  setText('hydro-flow-val', `${state.energy.hydroFlow.toFixed(1)} L/min ${translate('hydro_flow', 'Flow')}`);
  
  setText('total-load-val', `${state.energy.totalLoad}W`);
  
  // 4. Actuator Toggles & Indicators
  setToggle('compressor-toggle', state.actuators.compressor.on);
  setText('compressor-status-tag', state.actuators.compressor.on ? `ON - ${state.actuators.compressor.speedPct}%` : translate('status_standby', 'STANDBY'));
  
  setToggle('humidifier-toggle', state.actuators.humidifier.on);
  setText('humidifier-status-tag', state.actuators.humidifier.on ? `${translate('status_mist', 'MIST')} - ${state.actuators.humidifier.dutyPct}%` : translate('status_stopped', 'OFF'));
  
  setToggle('fan-toggle', state.actuators.fan.on);
  setText('fan-status-tag', state.actuators.fan.on ? `${state.actuators.fan.rpm} RPM` : translate('status_stopped', 'STOPPED'));
  
  setToggle('scrubber-toggle', state.actuators.scrubber.on);
  setText('scrubber-status-tag', state.actuators.scrubber.on ? translate('status_scrubbing', 'SCRUBBING') : translate('status_idle', 'IDLE'));
  
  setToggle('auto-ai-toggle', state.actuators.autoAi);
  
  // 5. Update Charts
  updateCharts();
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.innerText = val;
}

function setToggle(id, isChecked) {
  const el = document.getElementById(id);
  if (el && el.type === 'checkbox') {
    el.checked = isChecked;
  }
}

// --- Crop Profile Switching ---
function selectCrop(cropKey) {
  if (!CROP_DATABASE[cropKey]) return;
  state.selectedCropKey = cropKey;
  const crop = CROP_DATABASE[cropKey];
  
  sound.click();
  
  // Update Dropdown & Displays
  const selectEl = document.getElementById('crop-selector');
  if (selectEl) selectEl.value = cropKey;
  
  const imgEl = document.getElementById('crop-preview-img');
  if (imgEl) imgEl.src = crop.image;
  
  const locCrop = (typeof window.getLocalizedCrop === 'function') ? window.getLocalizedCrop(cropKey) : null;
  const cropName = locCrop ? locCrop.name : crop.name;
  const cropCat = locCrop ? locCrop.category : crop.category;
  const cropOrigin = locCrop ? locCrop.origin : crop.origin;
  const cropBio = locCrop ? locCrop.bioNotes : crop.bioNotes;
  
  setText('crop-name-display', cropName);
  setText('crop-category-tag', cropCat);
  setText('crop-origin-tag', cropOrigin);
  
  setText('ai-rec-temp', `${crop.targetTemp.toFixed(1)}°C`);
  setText('ai-rec-rh', `${crop.targetRH}%`);
  setText('ai-rec-shelf', crop.shelfLifeDays);
  
  setText('crop-bio-notes', cropBio);
  
  // Log event to MQTT
  logMqtt("biopod/ner-04/crop_profile", `Loaded profile for ${cropName}. Target setpoints: ${crop.targetTemp}°C / ${crop.targetRH}% RH.`);
}
window.selectCrop = selectCrop;

// --- Predict with Agri-AI Modal & Neural Scan Animation ---
function openAgriAiModal() {
  sound.aiChirp();
  const crop = CROP_DATABASE[state.selectedCropKey];
  const locCrop = (typeof window.getLocalizedCrop === 'function') ? window.getLocalizedCrop(state.selectedCropKey) : null;
  const cropName = locCrop ? locCrop.name : crop.name;
  const cropBio = locCrop ? locCrop.bioNotes : crop.bioNotes;
  
  const modal = document.getElementById('ai-predict-modal');
  if (modal) modal.classList.add('open');
  
  // Reset scan display
  setText('scan-progress-label', translate('ai_modal_init_scan', 'Initializing Agri-AI Neural Inference Engine...'));
  setText('ai-modal-crop-name', cropName);
  
  const resultBox = document.getElementById('ai-modal-results');
  if (resultBox) resultBox.classList.add('hidden');
  
  const scanBox = document.getElementById('ai-scan-animation');
  if (scanBox) scanBox.classList.remove('hidden');
  
  let step = 0;
  const steps = [
    "Analyzing ambient barometric pressure & respiration curve...",
    "Computing optimal vapor pressure deficit (VPD)...",
    "Running ethylene decomposition rate modeling...",
    "Calculating Capasicin / Polyphenol preservation index...",
    "Synthesizing setpoint optimization matrix..."
  ];
  
  const interval = setInterval(() => {
    if (step < steps.length) {
      setText('scan-progress-label', steps[step]);
      sound.click();
      step++;
    } else {
      clearInterval(interval);
      if (scanBox) scanBox.classList.add('hidden');
      if (resultBox) resultBox.classList.remove('hidden');
      
      setText('ai-conf-score', `${crop.confidence}%`);
      setText('ai-target-temp-modal', `${crop.targetTemp.toFixed(1)}°C`);
      setText('ai-target-rh-modal', `${crop.targetRH}%`);
      setText('ai-shelf-life-modal', crop.shelfLifeDays);
      setText('ai-modal-explanation', cropBio);
      
      sound.success();
    }
  }, 350);
}
window.openAgriAiModal = openAgriAiModal;

function closeAgriAiModal() {
  sound.click();
  const modal = document.getElementById('ai-predict-modal');
  if (modal) modal.classList.remove('open');
}
window.closeAgriAiModal = closeAgriAiModal;

// --- Push Setpoints to ESP32 Hardware ---
function pushSetpointsToESP32() {
  const crop = CROP_DATABASE[state.selectedCropKey];
  state.chamber.targetTemp = crop.targetTemp;
  state.chamber.targetRH = crop.targetRH;
  
  sound.success();
  
  // Trigger physical animation on push button
  const btn = document.getElementById('btn-push-esp32');
  if (btn) {
    btn.innerHTML = `<span class="material-symbols-outlined animate-spin">sync</span> ${translate('push_transmitting', 'TRANSMITTING MQTT PAYLOAD...')}`;
    btn.classList.add('opacity-75');
  }
  
  setTimeout(() => {
    if (btn) {
      btn.innerHTML = `<span class="material-symbols-outlined">check_circle</span> ${translate('push_synced', 'SETPOINTS SYNCED TO ESP32')}`;
      btn.classList.remove('opacity-75');
    }
    
    showToast("ESP32 Synchronized", `Updated setpoints to ${crop.targetTemp}°C / ${crop.targetRH}% RH via MQTT.`);
    logMqtt("biopod/ner-04/setpoint", JSON.stringify({
      target_temp: crop.targetTemp,
      target_rh: crop.targetRH,
      crop: crop.name,
      timestamp: new Date().toISOString(),
      source: "AGRI_AI_CLOUD_SYNC"
    }));
    
    updateUI();
    
    setTimeout(() => {
      if (btn) {
        btn.innerHTML = `<span class="material-symbols-outlined">send</span> ${translate('btn_push_esp32', 'PUSH SETPOINTS TO ESP32')}`;
      }
    }, 2500);
  }, 700);
}
window.pushSetpointsToESP32 = pushSetpointsToESP32;

// --- Actuator Manual Controls ---
function toggleActuator(name) {
  sound.click();
  if (state.actuators[name]) {
    state.actuators[name].on = !state.actuators[name].on;
    logMqtt(`biopod/ner-04/actuators/${name}`, `State switched to ${state.actuators[name].on ? 'ON' : 'OFF'}`);
    showToast(`Actuator Changed`, `${name.toUpperCase()} is now ${state.actuators[name].on ? 'ON' : 'OFF'}`);
    updateUI();
  }
}
window.toggleActuator = toggleActuator;

function setActuatorSpeed(name, val) {
  if (state.actuators[name]) {
    state.actuators[name].speedPct = parseInt(val, 10);
    updateUI();
  }
}
window.setActuatorSpeed = setActuatorSpeed;

function setFanRPM(val) {
  state.actuators.fan.rpm = parseInt(val, 10);
  updateUI();
}
window.setFanRPM = setFanRPM;

function toggleAutoAi() {
  sound.click();
  state.actuators.autoAi = !state.actuators.autoAi;
  showToast("Auto AI Mode", state.actuators.autoAi ? "Autonomous PID climate control active" : "Manual override control active");
  logMqtt("biopod/ner-04/mode", `Auto AI mode set to ${state.actuators.autoAi}`);
  updateUI();
}
window.toggleAutoAi = toggleAutoAi;

function triggerDefrost() {
  sound.click();
  if (state.chamber.defrostActive) return;
  state.chamber.defrostActive = true;
  state.chamber.defrostTimer = 45; // 45 seconds countdown
  showToast("Defrost Cycle Initiated", "Electric heating coil active for 45s.");
  logMqtt("biopod/ner-04/actuators/defrost", "Emergency heater defrost triggered.");
}
window.triggerDefrost = triggerDefrost;

// --- Stress Testing & Scenario Simulator ---
function loadScenario(preset) {
  sound.alert();
  switch (preset) {
    case 'heatwave':
      state.energy.solarIrradiance = 1150;
      state.chamber.temp = 8.5;
      showToast("Scenario: Extreme Heatwave", "Ambient temperature surge (+38°C). Solar PV yield increased.");
      logMqtt("biopod/ner-04/scenario", "SIMULATION: High thermal load surge (+38°C ambient). Compressor boosting to 100%.");
      break;
      
    case 'grid_outage':
      showToast("Scenario: Grid Outage", "Transitioned to pure Solar + Hydro off-grid microgrid mode.");
      logMqtt("biopod/ner-04/scenario", "SIMULATION: Grid mains disconnected. Microgrid operating in islanded mode.");
      break;
      
    case 'door_open':
      state.chamber.doorOpen = !state.chamber.doorOpen;
      showToast("Scenario: BioPod Door Alert", state.chamber.doorOpen ? "Chamber door opened! Thermal seal broken." : "Chamber door securely latched.");
      logMqtt("biopod/ner-04/alerts", state.chamber.doorOpen ? "WARNING: Door magnetic interlock OPEN." : "Door seal RESTORED.");
      break;
      
    case 'ethylene_surge':
      state.chamber.ethylene = 1.25;
      showToast("Scenario: Ethylene Surge", "Detected rapid fruit ripening emissions! Auto-scrubber engaged.");
      logMqtt("biopod/ner-04/alerts", "CRITICAL: C2H4 concentration exceeded 1.0 ppm threshold.");
      break;
      
    case 'monsoon':
      state.energy.hydroFlow = 88.0;
      state.energy.solarIrradiance = 250;
      showToast("Scenario: Heavy Monsoon", "Micro-hydro turbine generating peak power (160W). Low solar irradiance.");
      logMqtt("biopod/ner-04/scenario", "SIMULATION: High water head flow. Micro-hydro max output.");
      break;
      
    case 'reset':
      state.chamber.temp = 4.8;
      state.chamber.rh = 84.2;
      state.chamber.ethylene = 0.12;
      state.chamber.doorOpen = false;
      state.chamber.defrostActive = false;
      state.energy.hydroFlow = 45.0;
      state.energy.solarIrradiance = 850;
      showToast("System Reset", "All environmental parameters restored to baseline nominal.");
      logMqtt("biopod/ner-04/system", "Nominal operational baseline restored.");
      break;
  }
  closeScenarioModal();
  updateUI();
}
window.loadScenario = loadScenario;

function openScenarioModal() {
  sound.click();
  const modal = document.getElementById('scenario-modal');
  if (modal) modal.classList.add('open');
}
window.openScenarioModal = openScenarioModal;

function closeScenarioModal() {
  sound.click();
  const modal = document.getElementById('scenario-modal');
  if (modal) modal.classList.remove('open');
}
window.closeScenarioModal = closeScenarioModal;

// --- Diagnostic Self-Test ---
function runSelfTest() {
  sound.click();
  const modal = document.getElementById('self-test-modal');
  if (modal) modal.classList.add('open');
  
  const statusEl = document.getElementById('self-test-status');
  const barEl = document.getElementById('self-test-progress');
  
  const testStages = [
    { label: "1/5: Checking ESP32 I2C bus & SHT40 Temperature sensor...", pct: 20 },
    { label: "2/5: Verifying NDIR CO2 & Electrochemical Ethylene sensor...", pct: 40 },
    { label: "3/5: Probing MPPT Solar Inverter & Micro-Hydro Generator...", pct: 60 },
    { label: "4/5: Stress testing Brushless Compressor & PWM Humidifier...", pct: 80 },
    { label: "5/5: Diagnostics Complete. All 14 Subsystems PASS (100% Health).", pct: 100 }
  ];
  
  let i = 0;
  if (barEl) barEl.style.width = '0%';
  
  const interval = setInterval(() => {
    if (i < testStages.length) {
      if (statusEl) statusEl.innerText = testStages[i].label;
      if (barEl) barEl.style.width = `${testStages[i].pct}%`;
      sound.click();
      i++;
    } else {
      clearInterval(interval);
      sound.success();
      logMqtt("biopod/ner-04/diagnostics", "Full hardware diagnostic self-test passed with 0 faults.");
    }
  }, 450);
}
window.runSelfTest = runSelfTest;

function closeSelfTestModal() {
  sound.click();
  const modal = document.getElementById('self-test-modal');
  if (modal) modal.classList.remove('open');
}
window.closeSelfTestModal = closeSelfTestModal;

// --- CSV Telemetry Export ---
function exportCSV() {
  sound.click();
  let csv = "Timestamp,ESP32_Node,Crop_Profile,Temp_C,Target_Temp_C,RH_Pct,Target_RH_Pct,CO2_ppm,Ethylene_ppm,Battery_SoC_Pct,Solar_W,Hydro_W,Load_W\n";
  const now = new Date();
  
  for (let j = state.history.labels.length - 1; j >= 0; j--) {
    const time = state.history.labels[j];
    const temp = state.history.tempData[j] || state.chamber.temp;
    const targetTemp = state.history.targetTempData[j] || state.chamber.targetTemp;
    const rh = state.history.rhData[j] || state.chamber.rh;
    const targetRh = state.history.targetRhData[j] || state.chamber.targetRH;
    const solar = state.history.solarData[j] || state.energy.solarPower;
    const hydro = state.history.hydroData[j] || state.energy.hydroPower;
    const load = state.history.loadData[j] || state.energy.totalLoad;
    
    csv += `${now.toISOString().split('T')[0]} ${time},BioPod-NER-04,${state.selectedCropKey},${temp},${targetTemp},${rh},${targetRh},${state.chamber.co2},${state.chamber.ethylene},${state.energy.batterySoc},${solar},${hydro},${load}\n`;
  }
  
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `biopod_telemetry_${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  showToast("CSV Exported", "Telemetry log exported successfully.");
}
window.exportCSV = exportCSV;

// --- MQTT Terminal Logger ---
function logMqtt(topic, payload) {
  const terminal = document.getElementById('mqtt-terminal');
  if (!terminal) return;
  
  const time = new Date().toLocaleTimeString();
  const line = document.createElement('div');
  line.className = 'terminal-line';
  line.innerHTML = `
    <span class="terminal-time">[${time}]</span>
    <span class="terminal-topic">${topic}</span>
    <span class="text-on-surface-variant">&rarr;</span>
    <span>${payload}</span>
  `;
  terminal.appendChild(line);
  terminal.scrollTop = terminal.scrollHeight;
}
window.logMqtt = logMqtt;

// --- Toast Notification Manager ---
function showToast(title, msg, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast ${type === 'error' ? 'toast-error' : type === 'warn' ? 'toast-warn' : ''}`;
  
  let icon = 'info';
  if (type === 'error') icon = 'error';
  if (type === 'warn') icon = 'warning';
  if (title.includes('Synced') || title.includes('Exported') || title.includes('Language') || title.includes('ভাষা') || title.includes('Ktien') || title.includes('Ku·sik') || title.includes('লোন') || title.includes('ṭawng')) icon = 'check_circle';
  
  toast.innerHTML = `
    <span class="material-symbols-outlined ${type === 'error' ? 'text-error' : 'text-primary'}">${icon}</span>
    <div style="flex:1">
      <div style="font-weight:700; font-family:var(--font-mono); font-size:12px;">${title}</div>
      <div style="color:var(--text-muted); font-size:12px;">${msg}</div>
    </div>
  `;
  
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
window.showToast = showToast;

// --- Tab Switching ---
function switchTab(tabId) {
  sound.click();
  state.activeTab = tabId;
  
  // Hide all tab content
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Show target tab
  const targetTab = document.getElementById(`tab-${tabId}`);
  if (targetTab) targetTab.classList.add('active');
  
  // Update nav buttons
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.tab === tabId) btn.classList.add('active');
  });
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.switchTab = switchTab;

// --- Theme Switching (BioPod OS Obsidian vs Lumina Bio-OS Laboratory) ---
function toggleTheme() {
  sound.click();
  const html = document.documentElement;
  if (html.classList.contains('light')) {
    html.classList.remove('light');
    state.theme = 'dark';
    setText('theme-toggle-icon', 'dark_mode');
    showToast("Theme Switch", "BioPod OS Dark Obsidian Glassmorphism activated");
  } else {
    html.classList.add('light');
    state.theme = 'light';
    setText('theme-toggle-icon', 'light_mode');
    showToast("Theme Switch", "Lumina Bio-OS Clinical Laboratory activated");
  }
  rebuildChartsTheme();
}
window.toggleTheme = toggleTheme;

function toggleSound() {
  state.soundEnabled = !state.soundEnabled;
  sound.click();
  setText('sound-toggle-icon', state.soundEnabled ? 'volume_up' : 'volume_off');
  showToast("Audio Feedback", state.soundEnabled ? "Sci-fi interface sound effects enabled" : "Audio muted");
}
window.toggleSound = toggleSound;

// --- Chart.js Real-time Integration ---
let climateChart = null;
let energyChart = null;

function initCharts() {
  const isLight = document.documentElement.classList.contains('light');
  const textColor = isLight ? '#475569' : '#86948a';
  const gridColor = isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)';
  
  // 1. Climate Chart
  const climateCtx = document.getElementById('climateChartCanvas');
  if (climateCtx && window.Chart) {
    climateChart = new Chart(climateCtx, {
      type: 'line',
      data: {
        labels: state.history.labels,
        datasets: [
          {
            label: 'Chamber Temp (°C)',
            data: state.history.tempData,
            borderColor: '#ffb95f',
            backgroundColor: 'rgba(255, 185, 95, 0.1)',
            borderWidth: 2.5,
            tension: 0.3,
            yAxisID: 'y'
          },
          {
            label: 'Target Temp (°C)',
            data: state.history.targetTempData,
            borderColor: 'rgba(255, 185, 95, 0.4)',
            borderWidth: 1.5,
            borderDash: [5, 5],
            pointRadius: 0,
            yAxisID: 'y'
          },
          {
            label: 'Chamber RH (%)',
            data: state.history.rhData,
            borderColor: '#4cd7f6',
            backgroundColor: 'rgba(76, 215, 246, 0.1)',
            borderWidth: 2.5,
            tension: 0.3,
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 0 },
        scales: {
          x: {
            grid: { color: gridColor },
            ticks: { color: textColor, font: { family: 'JetBrains Mono', size: 10 } }
          },
          y: {
            type: 'linear',
            position: 'left',
            grid: { color: gridColor },
            ticks: { color: '#ffb95f', font: { family: 'JetBrains Mono', size: 10 } },
            title: { display: true, text: 'Temp (°C)', color: '#ffb95f', font: { family: 'JetBrains Mono', size: 10 } }
          },
          y1: {
            type: 'linear',
            position: 'right',
            grid: { drawOnChartArea: false },
            ticks: { color: '#4cd7f6', font: { family: 'JetBrains Mono', size: 10 } },
            title: { display: true, text: 'RH (%)', color: '#4cd7f6', font: { family: 'JetBrains Mono', size: 10 } }
          }
        },
        plugins: {
          legend: {
            labels: { color: textColor, font: { family: 'JetBrains Mono', size: 11 } }
          }
        }
      }
    });
  }
  
  // 2. Microgrid Power Chart
  const energyCtx = document.getElementById('energyChartCanvas');
  if (energyCtx && window.Chart) {
    energyChart = new Chart(energyCtx, {
      type: 'line',
      data: {
        labels: state.history.labels,
        datasets: [
          {
            label: 'Solar Array (W)',
            data: state.history.solarData,
            borderColor: '#ffb95f',
            backgroundColor: 'rgba(255, 185, 95, 0.1)',
            borderWidth: 2,
            tension: 0.3
          },
          {
            label: 'Micro-Hydro (W)',
            data: state.history.hydroData,
            borderColor: '#4cd7f6',
            backgroundColor: 'rgba(76, 215, 246, 0.1)',
            borderWidth: 2,
            tension: 0.3
          },
          {
            label: 'Total Chamber Load (W)',
            data: state.history.loadData,
            borderColor: '#4edea3',
            borderWidth: 2,
            tension: 0.3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 0 },
        scales: {
          x: {
            grid: { color: gridColor },
            ticks: { color: textColor, font: { family: 'JetBrains Mono', size: 10 } }
          },
          y: {
            grid: { color: gridColor },
            ticks: { color: textColor, font: { family: 'JetBrains Mono', size: 10 } },
            title: { display: true, text: 'Power (Watts)', color: textColor, font: { family: 'JetBrains Mono', size: 10 } }
          }
        },
        plugins: {
          legend: {
            labels: { color: textColor, font: { family: 'JetBrains Mono', size: 11 } }
          }
        }
      }
    });
  }
}

function updateCharts() {
  if (climateChart) {
    climateChart.data.labels = state.history.labels;
    climateChart.data.datasets[0].data = state.history.tempData;
    climateChart.data.datasets[1].data = state.history.targetTempData;
    climateChart.data.datasets[2].data = state.history.rhData;
    climateChart.update('none');
  }
  if (energyChart) {
    energyChart.data.labels = state.history.labels;
    energyChart.data.datasets[0].data = state.history.solarData;
    energyChart.data.datasets[1].data = state.history.hydroData;
    energyChart.data.datasets[2].data = state.history.loadData;
    energyChart.update('none');
  }
}

function rebuildChartsTheme() {
  if (climateChart) climateChart.destroy();
  if (energyChart) energyChart.destroy();
  initCharts();
}

// --- Application Initialization ---
window.addEventListener('DOMContentLoaded', () => {
  console.log("🚀 BioPod OS IoT Engine booting with NER Multi-Language Support...");
  
  // Apply saved or default language
  const savedLang = localStorage.getItem('biopod_ner_lang') || 'en';
  if (typeof window.setLanguage === 'function') {
    window.setLanguage(savedLang);
  }
  
  // Populate initial crop display
  selectCrop(state.selectedCropKey);
  
  // Initialize Chart.js
  setTimeout(initCharts, 200);
  
  // Start 1Hz Simulation Tick Loop
  setInterval(runSimulationTick, 1000);
  
  // Initial MQTT Welcome Logs
  logMqtt("biopod/ner-04/system", "ESP32 Node BioPod-NER-04 initialized. Dual-core RTOS running.");
  logMqtt("biopod/ner-04/network", "Connected to NEXORA Gateway via LoRaWAN/Wi-Fi mesh (RSSI: -58dBm).");
  logMqtt("biopod/ner-04/power", "Tri-source microgrid active: Solar MPPT online, Hydro turbine spinning.");
  logMqtt("biopod/ner-04/i18n", `Regional Language active: ${savedLang.toUpperCase()} with Agri-Voice Assist.`);
  
  showToast("BioPod OS Online", "System telemetry streaming in real time.");
});
