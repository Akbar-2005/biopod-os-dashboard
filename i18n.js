/**
 * BioPod OS - North Eastern Region (NER) Multi-Language & Internationalization Engine
 * Comprehensive translations for 11 Regional & National Languages:
 * 1. English (Default)
 * 2. Assamese (অসমীয়া) - Assam / Brahmaputra Valley
 * 3. Khasi (Ka Ktien Khasi) - Meghalaya (Khasi Hills - Node 04)
 * 4. Garo (A·chik) - Meghalaya (Garo Hills)
 * 5. Manipuri / Meitei (মৈতৈলোন্) - Manipur
 * 6. Mizo (Mizo ṭawng) - Mizoram
 * 7. Nagamese (Naga Creole) - Nagaland Lingua Franca
 * 8. Nepali (नेपाली) - Sikkim & Hill Districts
 * 9. Bodo (बड़ो) - Bodoland, Assam
 * 10. Kokborok (Tripuri) - Tripura
 * 11. Hindi (हिन्दी) - National Agri-Trade / Mandi Baseline
 */

const NER_LANGUAGES = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    region: 'North East Region & Global',
    state: 'NER Baseline',
    flag: '🇮🇳',
    voiceLang: 'en-IN'
  },
  as: {
    code: 'as',
    name: 'Assamese',
    nativeName: 'অসমীয়া',
    region: 'Assam & Brahmaputra Valley',
    state: 'Assam',
    flag: '🌿',
    voiceLang: 'as-IN'
  },
  kha: {
    code: 'kha',
    name: 'Khasi',
    nativeName: 'Ka Ktien Khasi',
    region: 'Khasi & Jaintia Hills',
    state: 'Meghalaya',
    flag: '⛰️',
    voiceLang: 'en-IN'
  },
  grx: {
    code: 'grx',
    name: 'Garo',
    nativeName: 'A·chik Ku·sik',
    region: 'Garo Hills',
    state: 'Meghalaya',
    flag: '🍃',
    voiceLang: 'en-IN'
  },
  mni: {
    code: 'mni',
    name: 'Manipuri',
    nativeName: 'মৈতৈলোন্ (Meetei)',
    region: 'Imphal Valley & Hills',
    state: 'Manipur',
    flag: '🌺',
    voiceLang: 'bn-IN'
  },
  lus: {
    code: 'lus',
    name: 'Mizo',
    nativeName: 'Mizo ṭawng',
    region: 'Lushai Hills & Aizawl',
    state: 'Mizoram',
    flag: '🌄',
    voiceLang: 'en-IN'
  },
  nag: {
    code: 'nag',
    name: 'Nagamese',
    nativeName: 'Nagamese (Naga)',
    region: 'Kohima, Dimapur & Hills',
    state: 'Nagaland',
    flag: '🌶️',
    voiceLang: 'as-IN'
  },
  ne: {
    code: 'ne',
    name: 'Nepali',
    nativeName: 'नेपाली',
    region: 'Sikkim & Hill Terraces',
    state: 'Sikkim',
    flag: '🏔️',
    voiceLang: 'ne-NP'
  },
  brx: {
    code: 'brx',
    name: 'Bodo',
    nativeName: 'बड़ो (Boro)',
    region: 'Bodoland Territorial Region',
    state: 'Assam',
    flag: '🌾',
    voiceLang: 'hi-IN'
  },
  trp: {
    code: 'trp',
    name: 'Kokborok',
    nativeName: 'Kokborok (Tripuri)',
    region: 'Tripura Indigenous Hills',
    state: 'Tripura',
    flag: '🎋',
    voiceLang: 'bn-IN'
  },
  hi: {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    region: 'National Mandi & Trade',
    state: 'All-India',
    flag: '🇮🇳',
    voiceLang: 'hi-IN'
  }
};

const TRANSLATIONS = {
  // ==========================================
  // 1. ENGLISH (DEFAULT)
  // ==========================================
  en: {
    // Header & Brand
    app_title: "SOLAR BIOPOD",
    app_version: "NEXORA OS",
    app_subtitle: "Smart Agri-Cold Storage • NER",
    node_location: "Khasi Hills, Meghalaya • High-Altitude Node",
    esp32_online: "ESP32 Online",
    packets_label: "Packets",
    auto_ai_mode: "Auto AI Mode",
    
    // Header Buttons
    btn_regional_lang: "Regional Language (NER)",
    btn_scenarios: "Simulate Stress Scenarios",
    btn_selftest: "Run Hardware Diagnostics",
    btn_sound: "Toggle Interface Audio",
    btn_theme: "Switch Light/Dark Mode",
    
    // Bottom Navigation
    nav_ai_control: "AI Control",
    nav_climate: "Climate",
    nav_energy: "Energy",
    nav_logs: "Logs",
    
    // Energy Hub Banner
    sec_energy_telemetry: "Hybrid Microgrid Power Telemetry",
    card_battery: "BATTERY BANK",
    card_solar: "SOLAR ARRAY",
    card_hydro: "MICRO-HYDRO",
    status_discharging: "DISCHARGING",
    status_charging: "CHARGING",
    status_mppt: "MPPT TRACKING",
    status_torpid: "REGULATED FLOW",
    backup_remaining: "Backup Remaining",
    continuous_power: "Continuous Microgrid Power",
    solar_irradiance: "Irr",
    hydro_flow: "Flow",
    
    // AI Crop Intelligence
    sec_crop_engine: "Agri-AI Crop Intelligence Engine",
    label_select_crop: "SELECT CROP PRESERVATION PROFILE",
    btn_predict_ai: "PREDICT WITH AGRI-AI MODEL",
    btn_voice_assist: "VOICE ASSIST",
    ai_optimal_temp: "OPTIMAL TEMP",
    ai_target_rh: "TARGET RH",
    ai_shelf_life: "SHELF LIFE",
    ai_spoilage_risk: "SPOILAGE RISK",
    btn_push_esp32: "PUSH SETPOINTS TO ESP32",
    push_transmitting: "TRANSMITTING MQTT PAYLOAD...",
    push_synced: "SETPOINTS SYNCED TO ESP32",
    
    // Chamber Sensors
    sec_sensors: "Chamber Atmospheric Sensors",
    sensor_temp: "TEMPERATURE",
    sensor_rh: "HUMIDITY (RH)",
    sensor_ethylene: "ETHYLENE (C2H4)",
    sensor_co2: "CO2 LEVEL",
    sensor_dew: "DEW POINT",
    sensor_vpd: "VAPOR DEFICIT (VPD)",
    target_label: "Target",
    cond_normal: "Normal < 0.5 ppm",
    cond_optimal: "Optimal Range",
    cond_no_dew: "No condensation",
    cond_transpiration: "Transpiration Safe",
    
    // Actuators
    sec_actuators: "Actuators & Relays",
    actuator_compressor: "Compressor / Chiller",
    actuator_compressor_sub: "Inverter Brushless DC",
    actuator_humidifier: "Ultrasonic Misting Humidifier",
    actuator_humidifier_sub: "Piezo Transducer 1.7MHz",
    actuator_fans: "Internal Circulation Fans",
    actuator_fans_sub: "Dual Cross-Flow Aerators",
    actuator_scrubber: "UV-C Ethylene Scrubber",
    actuator_scrubber_sub: "TiO2 Catalytic Reactor",
    status_standby: "STANDBY",
    status_stopped: "STOPPED",
    status_idle: "IDLE",
    status_scrubbing: "SCRUBBING",
    status_mist: "MIST",
    
    // Climate Tab
    sec_climate_telemetry: "Real-Time Chamber Environmental Telemetry",
    sec_chart_history: "Live Stream Sensor History (1Hz Real-Time)",
    tag_streaming: "STREAMING",
    sec_speed_controls: "Chamber Speed & Power Modulations",
    label_comp_capacity: "Compressor Inverter Capacity",
    label_humid_duty: "Humidifier Mist Duty Cycle",
    label_fan_speed: "Circulation Fan Velocity",
    sec_thermal_defrost: "Maintenance & Thermal Defrost Cycle",
    desc_thermal_defrost: "BioPod evaporator coils utilize automatic low-energy resistive heating to prevent ice buildup without disturbing chamber core temperatures.",
    btn_trigger_defrost: "TRIGGER 45s DEFROST PULSE",
    label_chamber_pressure: "Chamber Internal Pressure",
    nominal_label: "Nominal",
    
    // Energy Tab
    sec_tri_microgrid: "Tri-Source Hybrid Microgrid (Solar + Hydro + Battery)",
    label_circuit_routing: "Live Energy Routing Circuit",
    label_microgrid_sync: "MICROGRID SYNCHRONIZED",
    node_solar_pv: "Solar PV Array",
    node_micro_hydro: "Micro-Hydro Turbine",
    node_battery_bank: "LiFePO4 Battery Bank",
    node_biopod_load: "BioPod Active Load",
    sec_power_trend: "Microgrid Generation vs BioPod Load Trend (Watts)",
    
    // Logs Tab
    sec_mqtt_stream: "Live MQTT Telemetry & Event Stream",
    btn_export_csv: "EXPORT CSV TELEMETRY",
    sec_node_specs: "BioPod Core Node Specification",
    spec_mcu: "Microcontroller",
    spec_firmware: "Firmware Version",
    spec_mesh: "Mesh Gateway",
    spec_capacity: "Storage Capacity",
    sec_stress_presets: "Quick Stress Simulation Presets",
    scenario_heatwave: "Extreme Heatwave",
    scenario_heatwave_desc: "+38°C ambient thermal spike",
    scenario_outage: "Grid Outage",
    scenario_outage_desc: "Islanded solar/hydro fallback",
    scenario_door: "Chamber Door Alert",
    scenario_door_desc: "Thermal seal breach warning",
    scenario_ethylene: "Ethylene Surge",
    scenario_ethylene_desc: "Trigger catalytic scrubber",
    scenario_monsoon: "Monsoon Hydro Surge",
    scenario_monsoon_desc: "High flow rate generation",
    scenario_reset: "Reset to Nominal Baseline",
    scenario_reset_desc: "Restore baseline variables",
    
    // Language Modal
    modal_lang_title: "North Eastern Regional Languages",
    modal_lang_subtitle: "Select your native North Eastern language for complete dashboard localization & Agri-Voice Assist.",
    lang_active_badge: "ACTIVE",
    lang_btn_apply: "APPLY LANGUAGE",
    
    // AI Modal
    ai_modal_title: "Agri-AI Neural Crop Inference",
    ai_modal_analyzing: "Analyzing Crop Target",
    ai_modal_init_scan: "Initializing Agri-AI Neural Inference Engine...",
    ai_modal_conf_score: "AI Confidence Score:",
    ai_modal_shelf_ext: "SHELF EXTENSION",
    ai_modal_advice_title: "AGRONOMY BIO-PRESERVATION ADVICE",
    ai_modal_accept_btn: "ACCEPT & PUSH SETPOINTS TO ESP32",
    
    // Self-Test Modal
    self_test_title: "Hardware System Self-Diagnostics",
    self_test_init: "Initiating automated diagnostic check...",
    btn_close_diag: "CLOSE DIAGNOSTICS",
    
    // Scenarios Modal
    scenarios_modal_title: "Simulated Stress Test Scenarios",
    scenarios_modal_desc: "Inject real-world operational challenges to evaluate autonomous BioPod OS reaction times, power routing, and PID climate regulation."
  },

  // ==========================================
  // 2. ASSAMESE (অসমীয়া) - Assam & Brahmaputra Valley
  // ==========================================
  as: {
    app_title: "ছলাৰ বায়'পড",
    app_version: "নেক্স'ৰা অ'এছ",
    app_subtitle: "স্মাৰ্ট কৃষি শীতল ভঁৰাল • উত্তৰ-পূব",
    node_location: "খাচী পাহাৰ, মেঘালয় • উচ্চ-উচ্চতাৰ ন'ড",
    esp32_online: "ESP32 সক্ৰিয়",
    packets_label: "পেকেট",
    auto_ai_mode: "স্বয়ংক্রিয় AI মোড",
    
    btn_regional_lang: "উত্তৰ-পূৰ্বাঞ্চলৰ ভাষা",
    btn_scenarios: "পৰিস্থিতি অনুকৰণ (Stress Scenarios)",
    btn_selftest: "হাৰ্ডৱেৰ পৰীক্ষণ",
    btn_sound: "ইণ্টাৰফেচ শব্দ চুইচ",
    btn_theme: "থিম সলনি কৰক",
    
    nav_ai_control: "AI নিয়ন্ত্ৰণ",
    nav_climate: "জলবায়ু",
    nav_energy: "শক্তি",
    nav_logs: "তথ্য-লগ",
    
    sec_energy_telemetry: "হাইব্ৰিড মাইক্ৰ'গ্ৰিড বিদ্যুৎ পৰিমাপ",
    card_battery: "বেটাৰী বেংক",
    card_solar: "সৌৰ পেনেল",
    card_hydro: "ক্ষুদ্ৰ জলবিদ্যুৎ",
    status_discharging: "নিৰ্গমন হৈ আছে",
    status_charging: "চাৰ্জ হৈ আছে",
    status_mppt: "MPPT ট্ৰেকিং",
    status_torpid: "নিয়ন্ত্ৰিত প্ৰবাহ",
    backup_remaining: "বাকী থকা বেকআপ",
    continuous_power: "নিৰৱচ্ছিন্ন সৌৰ-জল বিদ্যুৎ",
    solar_irradiance: "সৌৰ বিকিৰণ",
    hydro_flow: "প্ৰবাহ",
    
    sec_crop_engine: "কৃষি-AI শস্য সংৰক্ষণ ইঞ্জিন",
    label_select_crop: "সংৰক্ষণ শস্য বাছনি কৰক",
    btn_predict_ai: "AI মডেলৰ সহায়ত গণনা কৰক",
    btn_voice_assist: "মাত সহায়ক (Voice)",
    ai_optimal_temp: "অনুকূল উষ্ণতা",
    ai_target_rh: "লক্ষ্য আৰ্দ্ৰতা",
    ai_shelf_life: "স্থায়িত্ব কাল",
    ai_spoilage_risk: "নষ্ট হোৱাৰ আশংকা",
    btn_push_esp32: "ESP32 লৈ মান প্ৰেৰণ কৰক",
    push_transmitting: "MQTT তথ্য প্ৰেৰণ কৰা হৈছে...",
    push_synced: "ESP32 ত মান সংৰক্ষিত হৈছে",
    
    sec_sensors: "কোঠাৰ পৰিৱেশ সংবেদক (Sensors)",
    sensor_temp: "উষ্ণতা (TEMP)",
    sensor_rh: "আৰ্দ্ৰতা (RH)",
    sensor_ethylene: "ইথিলিন গেছ (C2H4)",
    sensor_co2: "কাৰ্বন ডাই অক্সাইড",
    sensor_dew: "শিশিৰ বিন্দু (DEW)",
    sensor_vpd: "বাষ্প চাপ ঘাটি (VPD)",
    target_label: "নিৰ্ধাৰিত",
    cond_normal: "স্বাভাৱিক < ০.৫ ppm",
    cond_optimal: "অনুকূল মাত্ৰা",
    cond_no_dew: "ঘনীভৱন মুক্ত",
    cond_transpiration: "নিৰাপদ বাষ্পীভৱন",
    
    sec_actuators: "যন্ত্ৰাংশ আৰু চুইচ নিয়ন্ত্ৰণ",
    actuator_compressor: "কম্প্ৰেছৰ / চিলাৰ",
    actuator_compressor_sub: "ব্ৰাছলেচ ডিচি ইনভাৰ্টাৰ",
    actuator_humidifier: "আল্ট্ৰাছনিক আৰ্দ্ৰতাকাৰক",
    actuator_humidifier_sub: "পাইজো ট্ৰান্সডিউচাৰ ১.৭ MHz",
    actuator_fans: "অভ্যন্তৰীণ বায়ু ফেন",
    actuator_fans_sub: "দ্বৈত ক্ৰছ-ফ্ল' বতাহ সংবহন",
    actuator_scrubber: "UV-C ইথিলিন শোধক",
    actuator_scrubber_sub: "TiO2 অনুঘটক ৰিয়েক্টৰ",
    status_standby: "অপেক্ষাৰত",
    status_stopped: "বন্ধ",
    status_idle: "নিষ্ক্ৰিয়",
    status_scrubbing: "শোধন চলিছে",
    status_mist: "কুঁৱলী প্ৰবাহ",
    
    sec_climate_telemetry: "প্ৰকৃত সময়ৰ কোঠাৰ পৰিৱেশ তথ্য",
    sec_chart_history: "প্ৰত্যক্ষ সংবেদক লেখচিত্ৰ (১Hz)",
    tag_streaming: "সম্প্ৰচাৰিত",
    sec_speed_controls: "যন্ত্ৰাংশৰ গতি আৰু শক্তি নিয়ন্ত্ৰণ",
    label_comp_capacity: "কম্প্ৰেছৰ ক্ষমতা",
    label_humid_duty: "আৰ্দ্ৰতাকাৰক শক্তি",
    label_fan_speed: "বায়ু সঞ্চালন গতি",
    sec_thermal_defrost: "ৰক্ষণাবেক্ষণ আৰু বৰফ গলন চক্ৰ",
    desc_thermal_defrost: "বায়'পডৰ স্বয়ংক্ৰিয় হিটাৰে কোঠাৰ উষ্ণতা অক্ষুণ্ণ ৰাখি কয়েলৰ বৰফ গলাই পেলায়।",
    btn_trigger_defrost: "৪৫ ছেকেণ্ড ডিফ্রষ্ট চক্ৰ আৰম্ভ কৰক",
    label_chamber_pressure: "কোঠাৰ বায়ুৰ চাপ",
    nominal_label: "স্বাভাৱিক",
    
    sec_tri_microgrid: "ত্ৰি-উৎস হাইব্ৰিড মাইক্ৰ'গ্ৰিড (সৌৰ + জল + বেটাৰী)",
    label_circuit_routing: "বিদ্যুৎ প্ৰবাহ বৰ্তনী",
    label_microgrid_sync: "মাইক্ৰ'গ্ৰিড সমন্বিত",
    node_solar_pv: "সৌৰ পেনেল ব্যৱস্থা",
    node_micro_hydro: "ক্ষুদ্ৰ জল টাৰ্বাইন",
    node_battery_bank: "LiFePO4 বেটাৰী বেংক",
    node_biopod_load: "বায়'পড মুঠ বিদ্যুৎ খৰচ",
    sec_power_trend: "বিদ্যুৎ উৎপাদন বনাম খৰচৰ লেখচিত্ৰ",
    
    sec_mqtt_stream: "প্ৰত্যক্ষ MQTT তথ্য আৰু ঘটনাপ্ৰৱাহ",
    btn_export_csv: "CSV তথ্য ডাউনলোড কৰক",
    sec_node_specs: "বায়'পড ন'ডৰ কাৰিকৰী বিৱৰণ",
    spec_mcu: "মাইক্ৰ'কন্ট্ৰলাৰ",
    spec_firmware: "ফাৰ্মৱেৰ সংস্কৰণ",
    spec_mesh: "মেছ গেটৱে",
    spec_capacity: "সংৰক্ষণ ক্ষমতা",
    sec_stress_presets: "জৰুৰী পৰিস্থিতি পৰীক্ষা",
    scenario_heatwave: "প্ৰচণ্ড গৰমৰ ঢৌ (+৩৮°C)",
    scenario_heatwave_desc: "বাহিৰৰ তাপমাত্ৰা বৃদ্ধি আৰু শীতলীকৰণ পৰীক্ষা",
    scenario_outage: "বিদ্যুৎ সংযোগ বিচ্ছিন্ন",
    scenario_outage_desc: "কেৱল সৌৰ আৰু জল বিদ্যুৎ ব্যৱহাৰ",
    scenario_door: "দুৱাৰ খোলা সতৰ্কবাণী",
    scenario_door_desc: "বায়ুৰোধক ছীল খোলাৰ সতৰ্কবার্তা",
    scenario_ethylene: "ইথিলিন গেছ বৃদ্ধি",
    scenario_ethylene_desc: "স্বয়ংক্ৰিয় অনুঘটক শোধক সক্ৰিয়কৰণ",
    scenario_monsoon: "বাৰিষাৰ পানীৰ প্ৰবাহ",
    scenario_monsoon_desc: "জলবিদ্যুৎ সৰ্বোচ্চ উৎপাদন (১৬০W)",
    scenario_reset: "স্বাভাৱিক অৱস্থালৈ প্ৰত্যাৱৰ্তন",
    scenario_reset_desc: "সকলো মান স্বাভাৱিক স্থিতিত ৰাখক",
    
    modal_lang_title: "উত্তৰ-পূৰ্বাঞ্চলৰ আঞ্চলিক ভাষা",
    modal_lang_subtitle: "BioPod OS ডেশ্ববৰ্ড আৰু কৃষি-ভইচ সহায়কৰ বাবে আপোনাৰ মাতৃভাষা বাছনি কৰক।",
    lang_active_badge: "সক্ৰিয়",
    lang_btn_apply: "ভাষা প্ৰয়োগ কৰক",
    
    ai_modal_title: "Agri-AI শস্য সংৰক্ষণ বিশ্লেষণ",
    ai_modal_analyzing: "শস্য লক্ষ্য বিশ্লেষণ কৰা হৈছে",
    ai_modal_init_scan: "Agri-AI নিউৰেল ইঞ্জিন আৰম্ভ কৰা হৈছে...",
    ai_modal_conf_score: "AI সঠিকতাৰ হাৰ:",
    ai_modal_shelf_ext: "শস্যৰ জীৱনকাল বৃদ্ধি",
    ai_modal_advice_title: "কৃষি বৈজ্ঞানিক সংৰক্ষণ পৰামৰ্শ",
    ai_modal_accept_btn: "গ্ৰহণ কৰক আৰু ESP32 লৈ প্ৰেৰণ কৰক",
    
    self_test_title: "হাৰ্ডৱেৰ ব্যৱস্থাৰ স্ব-পৰীক্ষণ",
    self_test_init: "স্বয়ংক্ৰিয় নিদান পৰীক্ষা আৰম্ভ হৈছে...",
    btn_close_diag: "পৰীক্ষণ বন্ধ কৰক",
    
    scenarios_modal_title: "জৰুৰী পৰিস্থিতি অনুকৰণ পৰীক্ষাগাৰ",
    scenarios_modal_desc: "বাস্তৱ পৰিস্থিতিত বায়'পডৰ সঁহাৰি আৰু বিদ্যুৎ নিয়ন্ত্ৰণ ক্ষমতা মূল্যায়ন কৰক।"
  },

  // ==========================================
  // 3. KHASI (Ka Ktien Khasi) - Meghalaya (Khasi Hills - Node 04)
  // ==========================================
  kha: {
    app_title: "SOLAR BIOPOD",
    app_version: "NEXORA OS",
    app_subtitle: "Ka Kor Pynkhriat Marrep Ba Stad • NER",
    node_location: "Lum Khasi, Meghalaya • Node Ba Hajrong",
    esp32_online: "ESP32 Treikam",
    packets_label: "Ki Packets",
    auto_ai_mode: "AI Mode Ba Trei Hi",
    
    btn_regional_lang: "Ktien Shnong (NER)",
    btn_scenarios: "Pynbyrngia Jingjiai (Stress Scenarios)",
    btn_selftest: "Test Ia Ki Tiang Kor",
    btn_sound: "Sngew Sur / Mute",
    btn_theme: "Kylla Rong Shai/Dum",
    
    nav_ai_control: "AI Jingpyniaid",
    nav_climate: "Ka Suinbneng",
    nav_energy: "Ka Bor Ding",
    nav_logs: "Ki Jingthoh",
    
    sec_energy_telemetry: "Ka Bor Ding Hybrid Microgrid",
    card_battery: "KA BATTERY BANK",
    card_solar: "KI PANEL SNGI",
    card_hydro: "KA BOR UM",
    status_discharging: "PYNDONKAM",
    status_charging: "THEP BOR (CHARGING)",
    status_mppt: "MPPT TRACKING",
    status_torpid: "JINGTUID BA THIK",
    backup_remaining: "Sah Por Ban Pynbiang",
    continuous_power: "Ka Bor Ding Ba Bym Ju Duh",
    solar_irradiance: "Sngi",
    hydro_flow: "Jingtuid",
    
    sec_crop_engine: "Agri-AI Kor Pynneh Marrep",
    label_select_crop: "JIED IA KA JINGTHUNG BAN PYNNEH",
    btn_predict_ai: "WAD JINGMUT DA KA AGRI-AI",
    btn_voice_assist: "KREN DA KA SUR (Voice)",
    ai_optimal_temp: "JINGSHIT BA BIANG",
    ai_target_rh: "JINGTLONG (RH)",
    ai_shelf_life: "POR BA NEH",
    ai_spoilage_risk: "JINGMA BAN SNIEW",
    btn_push_esp32: "PHAH SHA KA ESP32",
    push_transmitting: "DANG PHAH MQTT SHA ESP32...",
    push_synced: "LA POI SHA ESP32",
    
    sec_sensors: "Ki Sensor Pynkhriat Kamra",
    sensor_temp: "JINGSHIT (TEMP)",
    sensor_rh: "JINGTLONG (RH)",
    sensor_ethylene: "GAS ETHYLENE (C2H4)",
    sensor_co2: "KYRDAN CO2",
    sensor_dew: "JINGSEI UM (DEW)",
    sensor_vpd: "JINGDUNA BSIAT (VPD)",
    target_label: "Thong",
    cond_normal: "Bha < 0.5 ppm",
    cond_optimal: "Kyrdan Ba Bha Tam",
    cond_no_dew: "Ym Don Um Ban Jaw",
    cond_transpiration: "Shngiam Ia Ka Jingthung",
    
    sec_actuators: "Ki Kor Pynkhriat & Relay",
    actuator_compressor: "Compressor / Pynkhriat",
    actuator_compressor_sub: "Brushless Inverter DC",
    actuator_humidifier: "Kor Pynjaw Um Ultrasonic",
    actuator_humidifier_sub: "Piezo Transducer 1.7MHz",
    actuator_fans: "Ki Phang Pyniaid Lyer",
    actuator_fans_sub: "Dual Aerators Pynphriang Lyer",
    actuator_scrubber: "UV-C Pynkhuid Ethylene",
    actuator_scrubber_sub: "TiO2 Catalytic Reactor",
    status_standby: "AP POR",
    status_stopped: "SANGEH",
    status_idle: "SHONGTHIT",
    status_scrubbing: "DANG PYNKHUID",
    status_mist: "PYNJIEW UM",
    
    sec_climate_telemetry: "Jingshit & Jingtlong Kamra Marte-Marte",
    sec_chart_history: "Graf Jingshit & Jingtlong (1Hz)",
    tag_streaming: "DANG TUID",
    sec_speed_controls: "Pyniaid Ia Ka Bor Ki Kor",
    label_comp_capacity: "Bor Compressor",
    label_humid_duty: "Bor Kor Pynjaw Um",
    label_fan_speed: "Jingstet Phang Lyer",
    sec_thermal_defrost: "Pynsyaid Ban Um Ka Thah",
    desc_thermal_defrost: "Ka BioPod ka pynsyaid malu-mala ban pyn-um ia ka thah khlem da pynwit ia ka jingshit ki marrep.",
    btn_trigger_defrost: "PYNTREI 45s BAN PYN-UM THAH",
    label_chamber_pressure: "Jingkhmih Lyer Kamra",
    nominal_label: "Ba Biang Bha",
    
    sec_tri_microgrid: "Microgrid (Sngi + Um + Battery)",
    label_circuit_routing: "Rong Bor Ding Ba Treikam",
    label_microgrid_sync: "MICROGRID LA IATREILANG",
    node_solar_pv: "Ki Panel Sngi Solar",
    node_micro_hydro: "Ka Kor Pynmih Ding Um",
    node_battery_bank: "LiFePO4 Battery Bank",
    node_biopod_load: "Ka Bor Ding Ba Pyndonkam",
    sec_power_trend: "Graf Bor Ding Sngi & Um vs Jingdonkam",
    
    sec_mqtt_stream: "MQTT Stream & Ki Jingjia",
    btn_export_csv: "DOWNLOAD CSV TELEMETRY",
    sec_node_specs: "Jingbatai Shaphang Ka BioPod Node",
    spec_mcu: "Microcontroller",
    spec_firmware: "Firmware Version",
    spec_mesh: "Mesh Gateway",
    spec_capacity: "Jingheh Kamra",
    sec_stress_presets: "Jingtynjuh Jingjiai Kynsan",
    scenario_heatwave: "Ka Jingshit Kynsan (+38°C)",
    scenario_heatwave_desc: "Jingshit na bar kiew heh; tynjuh ia ka kor pynkhriat",
    scenario_outage: "Duh Bor Ding Grid",
    scenario_outage_desc: "Trei kam beit da ka sngi bad ka um",
    scenario_door: "Jingkhang Plied Kynsan",
    scenario_door_desc: "Pynbna ba ka jingkhang kamra ka plied",
    scenario_ethylene: "Kiew Gas Ethylene",
    scenario_ethylene_desc: "Pyntrei ia ka kor pynkhuid gas",
    scenario_monsoon: "Tuid Bha Ka Um Sla-Pliang",
    scenario_monsoon_desc: "Ka kor um pynmih bor heh (160W)",
    scenario_reset: "Pynbha Biang Sha Kaba Skhem",
    scenario_reset_desc: "Pynpoi biang ia ki jingthew sha ka kyrdan ba biang",
    
    modal_lang_title: "Ki Ktien Shnong Ka Dong Shatei Lam-Mihngi",
    modal_lang_subtitle: "Jied ia ka ktien Khasi lane kiwei de ki ktien NER ban pyniaid ia ka BioPod OS bad Voice Assist.",
    lang_active_badge: "TREIKAM",
    lang_btn_apply: "PYNTREI IA KA KTIEN",
    
    ai_modal_title: "Agri-AI Jingbatai Marrep",
    ai_modal_analyzing: "Dang bishar ia u marrep",
    ai_modal_init_scan: "Dang plied ia ka Agri-AI Neural Engine...",
    ai_modal_conf_score: "Jingshisha Ka AI:",
    ai_modal_shelf_ext: "JINGNEH SLEM BAN SHUL",
    ai_modal_advice_title: "JINGSYNDONG NA KA BYNTA BAN RI-KYNDONG",
    ai_modal_accept_btn: "PYNDONKAM & PHAH SHA ESP32",
    
    self_test_title: "Jingpeit Bniah Ia Ki Kor (Diagnostics)",
    self_test_init: "Dang check ia ki tiar baroh...",
    btn_close_diag: "KHANG IA KA DIAGNOSTICS",
    
    scenarios_modal_title: "Pynjiai Ban Tynjuh Ia Ka Kor",
    scenarios_modal_desc: "Pynlong ki jingeh ba kynsan ban lap kumno ka BioPod ka leh marte-marte."
  },

  // ==========================================
  // 4. GARO (A·chik Ku·sik) - Meghalaya (Garo Hills)
  // ==========================================
  grx: {
    app_title: "SOLAR BIOPOD",
    app_version: "NEXORA OS",
    app_subtitle: "Smart Cold Storage Mar Donchakani • NER",
    node_location: "Khasi A·bri, Meghalaya • High-Altitude Node",
    esp32_online: "ESP32 Online Kam Ka·enga",
    packets_label: "Packets",
    auto_ai_mode: "Auto AI Mode",
    
    btn_regional_lang: "Songni Ku·sik (NER)",
    btn_scenarios: "Stress Scenarios Dakchonnani",
    btn_selftest: "Hardware Diagnostics Test Ka·bo",
    btn_sound: "Gam·ani Switch",
    btn_theme: "Dark/Light Theme Dingtangata",
    
    nav_ai_control: "AI Chalaiani",
    nav_climate: "Saljilma",
    nav_energy: "Power / Bil",
    nav_logs: "Logs / Record",
    
    sec_energy_telemetry: "Hybrid Microgrid Power Telemetry",
    card_battery: "BATTERY BANK",
    card_solar: "SALGRAK SOLAR ARRAY",
    card_hydro: "CHI POWER (HYDRO)",
    status_discharging: "JAKKALENGA",
    status_charging: "CHARGE KA·ENGA",
    status_mppt: "MPPT TRACKING",
    status_torpid: "REGULATED FLOW",
    backup_remaining: "Backup Dongkuani",
    continuous_power: "Pangnan Power Dongkamgipa",
    solar_irradiance: "Salni Teng·a",
    hydro_flow: "Chini Jokatani",
    
    sec_crop_engine: "Agri-AI Cha·ani Rippinani Engine",
    label_select_crop: "RIPINGRONGGIPA SAM-BOL BASEBO",
    btn_predict_ai: "AGRI-AI BAKATTO NIKTATCHENBO",
    btn_voice_assist: "KU·RANGNI DAKCHAKANI (Voice)",
    ai_optimal_temp: "KRA·BEGIPA DING·A",
    ai_target_rh: "CHISOANI (RH)",
    ai_shelf_life: "DONNA MAN·ANI SAL",
    ai_spoilage_risk: "SOANI KENANI",
    btn_push_esp32: "ESP32-ONA ON·ATBO",
    push_transmitting: "MQTT PAYLOAD-KO WATATENGA...",
    push_synced: "ESP32-ONA SOKBAAHA",
    
    sec_sensors: "Chamber Saljilma Sensor-rang",
    sensor_temp: "DING·A / SIN·A",
    sensor_rh: "CHISOANI (RH)",
    sensor_ethylene: "ETHYLENE BIBA (C2H4)",
    sensor_co2: "CO2 LEVEL",
    sensor_dew: "CHIKAMI POINT (DEW)",
    sensor_vpd: "CHISOANI KOMANI (VPD)",
    target_label: "Target",
    cond_normal: "Normal < 0.5 ppm",
    cond_optimal: "Kra·begipa Gadang",
    cond_no_dew: "Chi jokatja",
    cond_transpiration: "Cha·anina Namgipa",
    
    sec_actuators: "Kolrang & Relay Control",
    actuator_compressor: "Compressor / Sin·atgipa",
    actuator_compressor_sub: "Brushless DC Inverter",
    actuator_humidifier: "Ultrasonic Chisoatgipa",
    actuator_humidifier_sub: "Piezo Transducer 1.7MHz",
    actuator_fans: "Balwa Balatgipa Fan-rang",
    actuator_fans_sub: "Dual Aerators Fan",
    actuator_scrubber: "UV-C Ethylene Rokgipa",
    actuator_scrubber_sub: "TiO2 Catalytic Reactor",
    status_standby: "SENG·ENGA",
    status_stopped: "DONTENGA",
    status_idle: "NENG·TAKRONGA",
    status_scrubbing: "ROKENGA",
    status_mist: "GUURI BALENGA",
    
    sec_climate_telemetry: "Chamber Saljilma Real-Time Telemetry",
    sec_chart_history: "Live Sensor History Chart (1Hz)",
    tag_streaming: "STREAMING",
    sec_speed_controls: "Kolrangni Ta·rakachi & Bil",
    label_comp_capacity: "Compressor Bil",
    label_humid_duty: "Humidifier Mist Bil",
    label_fan_speed: "Fan Ta·rakachi",
    sec_thermal_defrost: "Naljokatani & Su·uri Galani",
    desc_thermal_defrost: "BioPod automatic heater su·uri so·kangani cha·aniko nosto ka·gija evaporator-ko rongtalgata.",
    btn_trigger_defrost: "45s SU·URI GALANI CHALATBO",
    label_chamber_pressure: "Chamber Internal Pressure",
    nominal_label: "Kra·gipa",
    
    sec_tri_microgrid: "Microgrid (Sal + Chi + Battery)",
    label_circuit_routing: "Power Flow Circuit",
    label_microgrid_sync: "MICROGRID KAM KA·ENGA",
    node_solar_pv: "Solar PV Array",
    node_micro_hydro: "Micro-Hydro Turbine",
    node_battery_bank: "LiFePO4 Battery Bank",
    node_biopod_load: "BioPod Power Load",
    sec_power_trend: "Power Generation vs Load Chart",
    
    sec_mqtt_stream: "MQTT Telemetry & Event Stream",
    btn_export_csv: "EXPORT CSV FILE",
    sec_node_specs: "BioPod Core Specification",
    spec_mcu: "Microcontroller",
    spec_firmware: "Firmware Version",
    spec_mesh: "Mesh Gateway",
    spec_capacity: "Storage Capacity",
    sec_stress_presets: "Stress Simulation Presets",
    scenario_heatwave: "Gimik Dinggipani (+38°C)",
    scenario_heatwave_desc: "A·palni ding·ani baria; compressor test ka·a",
    scenario_outage: "Bijli Gimaani (Outage)",
    scenario_outage_desc: "Solar aro Hydro-chisan chalaiata",
    scenario_door: "Do·ga Saha Mikrakatani",
    scenario_door_desc: "Chamber do·ga opraha in mikrakata",
    scenario_ethylene: "Ethylene Biba Baria",
    scenario_ethylene_desc: "UV-C catalytic scrubber chalaiata",
    scenario_monsoon: "Wachi Chi Jokatani",
    scenario_monsoon_desc: "Hydro turbine peak power (160W) man·a",
    scenario_reset: "Nominal Baseline-ona Re·bapilbo",
    scenario_reset_desc: "Pangnani pilak niamrangko namatpilbo",
    
    modal_lang_title: "North Eastern Songni Ku·sikrang",
    modal_lang_subtitle: "BioPod OS dashboard aro Voice Assist-na A·chik ku·sik ba gipin NER ku·sikko seokbo.",
    lang_active_badge: "ACTIVE",
    lang_btn_apply: "KU·SIKKO JAKKALBO",
    
    ai_modal_title: "Agri-AI Neural Crop Inference",
    ai_modal_analyzing: "Cha·aniko sandienga",
    ai_modal_init_scan: "Agri-AI Neural Engine-ko a·bachengata...",
    ai_modal_conf_score: "AI Confidence Score:",
    ai_modal_shelf_ext: "SAL BAKROATANI",
    ai_modal_advice_title: "AGRONOMY RIPINGANI KU·PATIYANI",
    ai_modal_accept_btn: "RA·BO ARO ESP32-ONA WATATBO",
    
    self_test_title: "Hardware System Self-Diagnostics",
    self_test_init: "Automated diagnostic check ka·enga...",
    btn_close_diag: "DIAGNOSTICS CHIPBO",
    
    scenarios_modal_title: "Stress Simulation Test",
    scenarios_modal_desc: "BioPod OS-ni ta·rakachi aro bijli jakkalani bilko test ka·bo."
  },

  // ==========================================
  // 5. MANIPURI / MEITEI (মৈতৈলোন্) - Manipur
  // ==========================================
  mni: {
    app_title: "সোলার বায়োপড",
    app_version: "নেক্সোরা ওএস",
    app_subtitle: "স্মার্ট লৌউ-শিংউ কোল্ড স্টোরেজ • এন.ই.আর",
    node_location: "খাসি চীং, মেঘালয় • হাই-অল্টিচিউড নোড",
    esp32_online: "ESP32 ওনলাইন",
    packets_label: "পেকেটস",
    auto_ai_mode: "ওতো AI মোদ",
    
    btn_regional_lang: "নোংপোক-অৱাং লোন (NER)",
    btn_scenarios: "স্ত্রেস চহাক সিনারিও",
    btn_selftest: "হার্দৱেয়ার দাইগ্নোস্তিক্স",
    btn_sound: "খোল কন্ট্রোল",
    btn_theme: "থিম ওন্থোকপা",
    
    nav_ai_control: "AI কন্ত্রোল",
    nav_climate: "হৱা-নোংশিৎ",
    nav_energy: "শক্তি (Energy)",
    nav_logs: "লোগ্স",
    
    sec_energy_telemetry: "হাইব্রিড মাইক্রোগ্রিন্ড পাওয়ার তেলিমেত্রি",
    card_battery: "বেতেরি বেঙ্ক",
    card_solar: "সোলার পেনেল",
    card_hydro: "মাইক্রো-হাইদ্রো",
    status_discharging: "দিসচার্জ ওইরি",
    status_charging: "চার্জ তৌরি",
    status_mppt: "MPPT ত্রেকিং",
    status_torpid: "রেগুলেতেদ ফ্লো",
    backup_remaining: "বেকঅপ মতম লৈরিবা",
    continuous_power: "লেপ্তনা শক্তি ফংলি",
    solar_irradiance: "নোংমৈ",
    hydro_flow: "ঈশিং ইচেল",
    
    sec_crop_engine: "Agri-AI পোথোক ঙাকশেনবা ইঞ্জিন",
    label_select_crop: "ঙাকশেনগদবা পোথোক খনবিউ",
    btn_predict_ai: "AGRI-AI মোদেলনা প্রেদিক্ট তৌবা",
    btn_voice_assist: "খোন্থাং মতেং (Voice)",
    ai_optimal_temp: "অপটিমেল তেম্পারেচর",
    ai_target_rh: "তার্গেত RH",
    ai_shelf_life: "শেল্ফ লাইফ",
    ai_spoilage_risk: "মাংবগী রিস্ক",
    btn_push_esp32: "ESP32 দা সেতপোইন্ত থারকউ",
    push_transmitting: "MQTT পেয়লোদ থারক্লি...",
    push_synced: "ESP32 দা শিনখিবা লোইরে",
    
    sec_sensors: "চেম্বারগী সেন্সরশিং",
    sensor_temp: "অশেংবা পুংশিৎ (TEMP)",
    sensor_rh: "চিংশিৎ (RH)",
    sensor_ethylene: "ইথিলিন গ্যাস (C2H4)",
    sensor_co2: "CO2 থাক",
    sensor_dew: "ঈশিং পুংফম (DEW)",
    sensor_vpd: "ঈশিং ঈরোই অমবা (VPD)",
    target_label: "তার্গেত",
    cond_normal: "নোর্মেল < ০.৫ ppm",
    cond_optimal: "খ্বাইদগী ফবা থাক",
    cond_no_dew: "ঈশিং তরক্তে",
    cond_transpiration: "পোথোক্তা শোকহন্দে",
    
    sec_actuators: "একচুৱেতর অমসুং রিলে কন্ত্রোল",
    actuator_compressor: "কম্প্রেসর / চিলার",
    actuator_compressor_sub: "ব্রশলেস ডিসি ইনভর্তর",
    actuator_humidifier: "অপুত্রাসোনিক চিংশিৎ মেছিন",
    actuator_humidifier_sub: "পিয়েজো ত্রান্সদ্যুসর ১.৭ MHz",
    actuator_fans: "মনুংগী হৱা ফ্যান",
    actuator_fans_sub: "দ্যুয়েল ক্রোশ-ফ্লো ফ্যান",
    actuator_scrubber: "UV-C ইথিলিন স্ক্রবার",
    actuator_scrubber_sub: "TiO2 কেতলাইতিক রিএক্টর",
    status_standby: "স্তেন্দবাই",
    status_stopped: "লেপখি",
    status_idle: "আইদল",
    status_scrubbing: "শেংদোক্লি",
    status_mist: "মীস্ত মোদ",
    
    sec_climate_telemetry: "চেম্বারগী হৱা-নোংশিৎ রিয়েল-তাইম তেলিমেত্রি",
    sec_chart_history: "লাইভ সেন্সর হিস্ট্রি চার্ট (১Hz)",
    tag_streaming: "স্ত্রিম তৌরি",
    sec_speed_controls: "মেছিনগী স্পীদ অমসুং পাওয়ার কন্ত্রোল",
    label_comp_capacity: "কম্প্রেসর কেপাসিতী",
    label_humid_duty: "হিউমিদিফায়ার পাৱার",
    label_fan_speed: "ফ্যানগী খোংজেল",
    sec_thermal_defrost: "উংশিং চত্থহন্বা (Defrost)",
    desc_thermal_defrost: "বায়োপদকী ওতোমেতিক হীতরনা চেম্বারগী তেম্পারেচর কাইহন্দনা ক্বোয়লদা উংশিং জমে ওইরিবশিং অদু চত্থহল্লি।",
    btn_trigger_defrost: "৪৫ সেকেণ্ড দিফ্রস্ত হৌবা",
    label_chamber_pressure: "চেম্বারগী প্রেসার",
    nominal_label: "নোর্মেল",
    
    sec_tri_microgrid: "মাইক্রোগ্রিন্ড (সোলার + ঈশিং + বেতেরি)",
    label_circuit_routing: "পাৱার ফ্লো সার্কিট",
    label_microgrid_sync: "মাইক্রোগ্রিন্ড লিঙ্ক তৌরে",
    node_solar_pv: "সোলার পিভি এরে",
    node_micro_hydro: "মাইক্রো-হাইদ্রো তার্বাইন",
    node_battery_bank: "LiFePO4 বেতেরি বেঙ্ক",
    node_biopod_load: "বায়োপদনা চাবা পাৱার",
    sec_power_trend: "পাৱার জেনেরেশন অমসুং চাবা পাৱার চার্ট",
    
    sec_mqtt_stream: "লাইভ MQTT অমসুং ইভেন্ট লোগ",
    btn_export_csv: "CSV তেলিমেত্রি দাউনলোদ",
    sec_node_specs: "বায়োপদ নোডকী স্পেসিফিকেশন",
    spec_mcu: "মাইক্রোকন্ত্রোলর",
    spec_firmware: "ফার্মৱেয়ার ভর্জন",
    spec_mesh: "মেশ গেতৱে",
    spec_capacity: "থম্বগী চেপাসিতী",
    sec_stress_presets: "স্ত্রেস সিমুলেশন প্রিসেত",
    scenario_heatwave: "অকনবা নোংশিৎ (+৩৮°C)",
    scenario_heatwave_desc: "মপান্দা অকনবা শাবা; কম্প্রেসর তেস্ত তৌবা",
    scenario_outage: "গ্রিদ পাৱার মাংবা",
    scenario_outage_desc: "সোলার অমসুং হাইদ্রোখক্না চলাইবা",
    scenario_door: "চেম্বার থোং হাংবা চেক তৌবা",
    scenario_door_desc: "থোং হাংলে হায়বা ৱার্নিং পীরকপা",
    scenario_ethylene: "ইথিলিন গ্যাস থোকপা",
    scenario_ethylene_desc: "ওতো-স্ক্রবার থবক হৌহল্লি",
    scenario_monsoon: "নোংজু ঈশিং ইচেল",
    scenario_monsoon_desc: "হাইদ্রো তার্বাইন পিক পাৱার (১৬০W)",
    scenario_reset: "নোর্মেল স্তেটতা হনবা",
    scenario_reset_desc: "পুম্নমক অশেংবা থাক্তা হনহল্লি",
    
    modal_lang_title: "নোংপোক-অৱাং লমদমগী লোনশিং",
    modal_lang_subtitle: "BioPod OS দেসবোর্দ অমসুং Voice Assist গীদমক নহাক্না পাম্বা মৈতৈলোন নত্রগা অতোপ্পা NER লোন খনবিউ।",
    lang_active_badge: "একতিভ",
    lang_btn_apply: "লোন অসি খনবা",
    
    ai_modal_title: "Agri-AI শস্য সংৰক্ষণ বিশ্লেষণ",
    ai_modal_analyzing: "পোথোক শন্দোক্না য়েংশিল্লি",
    ai_modal_init_scan: "Agri-AI নিউরল ইঞ্জিন হৌরে...",
    ai_modal_conf_score: "AI কনফিডেন্স স্কোর:",
    ai_modal_shelf_ext: "মতম শাংনা থম্বা ঙম্বা",
    ai_modal_advice_title: "লৌউ-শিংউ সাইন্তিফিক সজেসন",
    ai_modal_accept_btn: "য়ারবা অমসুং ESP32 দা থারকউ",
    
    self_test_title: "হার্দৱেয়ার সিস্তেম সেল্ফ-দাইগ্নোস্তিক",
    self_test_init: "ওতোমেতেদ দাইগ্নোস্তিক চত্থরি...",
    btn_close_diag: "দাইগ্নোস্তিক্স থিংজিনবা",
    
    scenarios_modal_title: "স্ত্রেস তেস্ত সিমুলেশন",
    scenarios_modal_desc: "BioPod OS না অকিবগী ফিভমদা করম্না থবক তৌবগে হায়বা তেস্ত তৌবিউ।"
  },

  // ==========================================
  // 6. MIZO (Mizo ṭawng) - Mizoram
  // ==========================================
  lus: {
    app_title: "SOLAR BIOPOD",
    app_version: "NEXORA OS",
    app_subtitle: "Kawtlai Vawnṭhatna Smart Khawl • NER",
    node_location: "Khasi Tlang, Meghalaya • Hmun Sang Node",
    esp32_online: "ESP32 A Nung E",
    packets_label: "Packets",
    auto_ai_mode: "Auto AI Mode",
    
    btn_regional_lang: "Hnam Ṭawng (NER)",
    btn_scenarios: "Thil Thleng Thut Enchhinna",
    btn_selftest: "Khawl Enfiahna (Diagnostics)",
    btn_sound: "Ri On/Off",
    btn_theme: "Theme Thlakna",
    
    nav_ai_control: "AI Enkawlna",
    nav_climate: "Sikul Boruak",
    nav_energy: "Chakna / Power",
    nav_logs: "Chhinchhiahna",
    
    sec_energy_telemetry: "Hybrid Microgrid Power Dinhmun",
    card_battery: "BATTERY INKHAWLNA",
    card_solar: "NIÊNG CHAKNA (SOLAR)",
    card_hydro: "TUI CHAKNA (HYDRO)",
    status_discharging: "HMANG MEK",
    status_charging: "THUN MEK (CHARGING)",
    status_mppt: "MPPT TRACKING",
    status_torpid: "TUI LUANG ZANGKHAWN",
    backup_remaining: "Hman Theih Hun Chhûng",
    continuous_power: "Tawp Lova Power Pek Chhunzawm",
    solar_irradiance: "Ni Eng",
    hydro_flow: "Tui Luang",
    
    sec_crop_engine: "Agri-AI Thlai Vawnṭhatna Khawl",
    label_select_crop: "VAWNṬHAT TUR THLAI THLANNA",
    btn_predict_ai: "AGRI-AI HMANGIN CHHUT RAWH",
    btn_voice_assist: "AW RI HMANGIN (Voice)",
    ai_optimal_temp: "LUM/VAWH ZAWH TUR",
    ai_target_rh: "DAIDAHNA (RH)",
    ai_shelf_life: "NEH CHHÛNG TUR",
    ai_spoilage_risk: "CHHIAT THEIHNA",
    btn_push_esp32: "ESP32 KHAWLAH THAWN RAWH",
    push_transmitting: "MQTT HMANGIN THAWN MEK...",
    push_synced: "ESP32-AH A LUT KIM TA",
    
    sec_sensors: "Chamber Boruak Tehna Sensors",
    sensor_temp: "KHAWLUM LAM (TEMP)",
    sensor_rh: "DAIDAHNA (RH)",
    sensor_ethylene: "ETHYLENE GAS (C2H4)",
    sensor_co2: "CO2 SAN LAM",
    sensor_dew: "DAIFIM LAM (DEW)",
    sensor_vpd: "TUI KHU BORUAK KIAM (VPD)",
    target_label: "Tum Zat",
    cond_normal: "A Ṭha < 0.5 ppm",
    cond_optimal: "Duhthusam A Ni",
    cond_no_dew: "Tui Far A Aum Lo",
    cond_transpiration: "Thlai Tan A Hrisel",
    
    sec_actuators: "Khawl & Switch Enkawlna",
    actuator_compressor: "Compressor / Tivawtik Tuina",
    actuator_compressor_sub: "Brushless DC Inverter",
    actuator_humidifier: "Ultrasonic Misting Khawl",
    actuator_humidifier_sub: "Piezo Transducer 1.7MHz",
    actuator_fans: "Boruak Tha Fan-te",
    actuator_fans_sub: "Dual Aerators Fan",
    actuator_scrubber: "UV-C Ethylene Tifai Tu",
    actuator_scrubber_sub: "TiO2 Catalytic Reactor",
    status_standby: "INPEIH",
    status_stopped: "TIHDIN",
    status_idle: "CHAWL MEK",
    status_scrubbing: "TIFAI MEK",
    status_mist: "CHHUM PHO MEK",
    
    sec_climate_telemetry: "Chamber Boruak Tehna Chanchin",
    sec_chart_history: "Sensor Graph Chanchin (1Hz)",
    tag_streaming: "LUANG MEK",
    sec_speed_controls: "Khawl Chak Lam Thununna",
    label_comp_capacity: "Compressor Chak Lam",
    label_humid_duty: "Humidifier Chak Lam",
    label_fan_speed: "Fan Vir Chak Lam",
    sec_thermal_defrost: "Vûr Tih-tui Chhûng",
    desc_thermal_defrost: "BioPod automatic heater hian thlai vawh lam tikhawlo lovin vûr inkhawl a tiral ṭhin.",
    btn_trigger_defrost: "45s VÛR TIH-TUI TAN RAWH",
    label_chamber_pressure: "Chamber Boruak Hmehna",
    nominal_label: "A Pangngai",
    
    sec_tri_microgrid: "Microgrid (Ni + Tui + Battery)",
    label_circuit_routing: "Power Kal Velna Line",
    label_microgrid_sync: "MICROGRID A INZAWMPUI E",
    node_solar_pv: "Solar PV Array",
    node_micro_hydro: "Micro-Hydro Khawl",
    node_battery_bank: "LiFePO4 Battery Bank",
    node_biopod_load: "BioPod Power Hman Zat",
    sec_power_trend: "Power Siksawi & Hman Zat Graph",
    
    sec_mqtt_stream: "MQTT Telemetry & Thil Thleng",
    btn_export_csv: "CSV TELEMETRY LA CHHUAK RAWH",
    sec_node_specs: "BioPod Node Chungchang",
    spec_mcu: "Microcontroller",
    spec_firmware: "Firmware Version",
    spec_mesh: "Mesh Gateway",
    spec_capacity: "A Leng Zat",
    sec_stress_presets: "Thil Thleng Thut Enchhinna",
    scenario_heatwave: "Khawlum Nasa Tak (+38°C)",
    scenario_heatwave_desc: "Pawn lam boruak lum vut vut; compressor enchhinna",
    scenario_outage: "Karan Chhia (Grid Outage)",
    scenario_outage_desc: "Solar leh Hydro hmang chauhva kalna",
    scenario_door: "Kawngka Inhawng Ril",
    scenario_door_desc: "Chamber kawngka a inhawng tih hriattirna",
    scenario_ethylene: "Ethylene Gas A Tam Thut",
    scenario_ethylene_desc: "Auto-scrubber khawl a intihnun thutna",
    scenario_monsoon: "Ruah Tui Luang Chak",
    scenario_monsoon_desc: "Tui khawl aṭanga power tam lutuk (160W)",
    scenario_reset: "A Pangngai-ah Dah Let Leh",
    scenario_reset_desc: "A dinhmun pangngaiah dah let leh vek rawh",
    
    modal_lang_title: "Chhim-Hmar Bial Hnam Ṭawngte",
    modal_lang_subtitle: "BioPod OS dashboard leh Voice Assist tan hian Mizo ṭawng emaw hmarchhak ṭawng dang thlang rawh.",
    lang_active_badge: "HMANG MEK",
    lang_btn_apply: "ṬAWNG HMAN TUR CHHINCHHIAH RAWH",
    
    ai_modal_title: "Agri-AI Thlai Chhûtna",
    ai_modal_analyzing: "Thlai dinhmun zirchian mek a ni",
    ai_modal_init_scan: "Agri-AI Neural Engine chhit mek...",
    ai_modal_conf_score: "AI Rintlak Zat:",
    ai_modal_shelf_ext: "VAWNṬHAT THEIH CHHÛNG",
    ai_modal_advice_title: "THLAI VAWNṬHATNA THURAWN",
    ai_modal_accept_btn: "PAWM LA ESP32-AH THAWN RAWH",
    
    self_test_title: "Khawl Inenfiahna (Self-Diagnostics)",
    self_test_init: "Khawl kimchâng enfiah mek a ni...",
    btn_close_diag: "ENFIAHNA KHAR RAWH",
    
    scenarios_modal_title: "Thil Thleng Thut Enchhinna Hmun",
    scenarios_modal_desc: "BioPod OS hian harsatna a hmachhawn theih dan enchhin nan hmang rawh."
  },

  // ==========================================
  // 7. NAGAMESE (Naga Creole) - Nagaland Lingua Franca
  // ==========================================
  nag: {
    app_title: "SOLAR BIOPOD",
    app_version: "NEXORA OS",
    app_subtitle: "Smart Kheti Thanda Godown • NER",
    node_location: "Khasi Hills, Meghalaya • High Node",
    esp32_online: "ESP32 Online Ase",
    packets_label: "Packets",
    auto_ai_mode: "Auto AI Mode",
    
    btn_regional_lang: "North East Bhasha (NER)",
    btn_scenarios: "Test Scenarios Chalao",
    btn_selftest: "Machine Diagnostics Test",
    btn_sound: "Sound On/Off",
    btn_theme: "Theme Bodli Kora",
    
    nav_ai_control: "AI Control",
    nav_climate: "Mausam",
    nav_energy: "Bijli / Power",
    nav_logs: "Records / Logs",
    
    sec_energy_telemetry: "Hybrid Microgrid Bijli Hisab",
    card_battery: "BATTERY BANK",
    card_solar: "SOLAR PANEL",
    card_hydro: "PANI HYDRO POWER",
    status_discharging: "DISCHARGING",
    status_charging: "CHARGE HOI ASE",
    status_mppt: "MPPT TRACKING",
    status_torpid: "PANI FLOW",
    backup_remaining: "Backup Baki Ase",
    continuous_power: "Ekdam Continuous Power",
    solar_irradiance: "Roud",
    hydro_flow: "Pani Flow",
    
    sec_crop_engine: "Agri-AI Kheti Bhasan Engine",
    label_select_crop: "BHAL KORIBO LAGI KROP CHOOSE KORIBI",
    btn_predict_ai: "AGRI-AI SE CALCULATE KORIYE",
    btn_voice_assist: "AWAZ SE SUNIBI (Voice)",
    ai_optimal_temp: "SAHI TEMPERATURE",
    ai_target_rh: "HUMIDITY (RH)",
    ai_shelf_life: "KITNA DIN THAKIBO",
    ai_spoilage_risk: "BEA HOA CHANCE",
    btn_push_esp32: "ESP32 TE SIGNAL PATHAI DIYE",
    push_transmitting: "MQTT SE PATHAI ASE...",
    push_synced: "ESP32 TE SET HOI GAISE",
    
    sec_sensors: "Godown Bhitor Sensor",
    sensor_temp: "GARAM / THANDA (TEMP)",
    sensor_rh: "PANI HAWA (RH)",
    sensor_ethylene: "ETHYLENE GAS (C2H4)",
    sensor_co2: "CO2 LEVEL",
    sensor_dew: "KUHIRA POINT (DEW)",
    sensor_vpd: "BHAP KAMI (VPD)",
    target_label: "Target",
    cond_normal: "Normal < 0.5 ppm",
    cond_optimal: "Bhal Level",
    cond_no_dew: "Pani Pori Nai",
    cond_transpiration: "Khet Bhal Thakibo",
    
    sec_actuators: "Machines & Relay Switch",
    actuator_compressor: "Compressor / Chiller",
    actuator_compressor_sub: "Brushless DC Inverter",
    actuator_humidifier: "Ultrasonic Mist Machine",
    actuator_humidifier_sub: "Piezo Transducer 1.7MHz",
    actuator_fans: "Bhitor Hawa Fan",
    actuator_fans_sub: "Dual Aerators Fan",
    actuator_scrubber: "UV-C Ethylene Safa Machine",
    actuator_scrubber_sub: "TiO2 Catalytic Reactor",
    status_standby: "STANDBY",
    status_stopped: "BONDHO",
    status_idle: "IDLE",
    status_scrubbing: "SAFA KORI ASE",
    status_mist: "MISTING",
    
    sec_climate_telemetry: "Live Godown Mausam Telemetry",
    sec_chart_history: "Live Stream Sensor Graph (1Hz)",
    tag_streaming: "STREAMING",
    sec_speed_controls: "Machine Speed & Power Modulation",
    label_comp_capacity: "Compressor Speed",
    label_humid_duty: "Mist Machine Power",
    label_fan_speed: "Fan Speed",
    sec_thermal_defrost: "Borof Golaor Defrost Cycle",
    desc_thermal_defrost: "BioPod automatic heater borof gulai diye taate krop bea nohoi.",
    btn_trigger_defrost: "45s DEFROST CYCLE CHALAO",
    label_chamber_pressure: "Godown Air Pressure",
    nominal_label: "Bhal Ase",
    
    sec_tri_microgrid: "Microgrid (Solar + Hydro + Battery)",
    label_circuit_routing: "Bijli Flow Circuit",
    label_microgrid_sync: "MICROGRID SYNCED",
    node_solar_pv: "Solar Array",
    node_micro_hydro: "Micro-Hydro Generator",
    node_battery_bank: "LiFePO4 Battery Bank",
    node_biopod_load: "BioPod Power Load",
    sec_power_trend: "Generation vs Load Graph",
    
    sec_mqtt_stream: "Live MQTT Terminal & Event Stream",
    btn_export_csv: "CSV FILE DOWNLOAD KORIYE",
    sec_node_specs: "BioPod Machine Details",
    spec_mcu: "Microcontroller",
    spec_firmware: "Firmware Version",
    spec_mesh: "Mesh Gateway",
    spec_capacity: "Storage Capacity",
    sec_stress_presets: "Quick Test Presets",
    scenario_heatwave: "Bisi Garam Dhou (+38°C)",
    scenario_heatwave_desc: "Bahir bisi garam hoi jaise; compressor check kora",
    scenario_outage: "Line Katise (Outage)",
    scenario_outage_desc: "Solar aru hydro te choli ase",
    scenario_door: "Dorkha Khula Ase",
    scenario_door_desc: "Chamber door khula ase warning",
    scenario_ethylene: "Ethylene Gas Barhise",
    scenario_ethylene_desc: "Auto-scrubber safa kora machine choli jaise",
    scenario_monsoon: "Monsoon Pani Bisi",
    scenario_monsoon_desc: "Hydro turbine peak power (160W) dise",
    scenario_reset: "Normal Baseline Reset",
    scenario_reset_desc: "Shob normal setting te wapas anibo",
    
    modal_lang_title: "North East Region Bhasha",
    modal_lang_subtitle: "BioPod OS aru Voice Assist chalabole Nagamese ba dusra NER bhasha select kora.",
    lang_active_badge: "ACTIVE",
    lang_btn_apply: "BHASHA SELECT KORIBI",
    
    ai_modal_title: "Agri-AI Crop Neural Prediction",
    ai_modal_analyzing: "Krop check kori ase",
    ai_modal_init_scan: "Agri-AI Neural Engine shuru hoise...",
    ai_modal_conf_score: "AI Confidence Score:",
    ai_modal_shelf_ext: "JASTI DIN THAKIBO",
    ai_modal_advice_title: "AGRI-EXPERT ADVICE",
    ai_modal_accept_btn: "ACCEPT KORI ESP32 TE PATHAIBI",
    
    self_test_title: "Hardware Machine Self-Diagnostics",
    self_test_init: "Diagnostics check shuru hoise...",
    btn_close_diag: "DIAGNOSTICS BONDHO KORA",
    
    scenarios_modal_title: "Stress Test Scenarios",
    scenarios_modal_desc: "BioPod OS emergency time te kileka respond kore check kora."
  },

  // ==========================================
  // 8. NEPALI (नेपाली) - Sikkim & Hill Districts
  // ==========================================
  ne: {
    app_title: "सोलर बायोपोड",
    app_version: "नेक्सोरा ओएस",
    app_subtitle: "स्मार्ट कृषि शीत भण्डारण • उत्तर-पूर्व",
    node_location: "खासी हिल्स, मेघालय • उच्च-उचाइ नोड",
    esp32_online: "ESP32 अनलाइन",
    packets_label: "प्याकेटहरू",
    auto_ai_mode: "अटो AI मोड",
    
    btn_regional_lang: "उत्तर-पूर्वीय भाषा (NER)",
    btn_scenarios: "आपतकालीन परिस्थिति सिमुलेशन",
    btn_selftest: "हार्डवेयर परीक्षण",
    btn_sound: "आवाज खोल्नुहोस्/बन्द गर्नुहोस्",
    btn_theme: "रङ/थिम बदल्नुहोस्",
    
    nav_ai_control: "AI नियन्त्रण",
    nav_climate: "जलवायु",
    nav_energy: "ऊर्जा",
    nav_logs: "लगहरू",
    
    sec_energy_telemetry: "हाइब्रिड माइक्रोग्रिड पावर टेलिमेट्री",
    card_battery: "ब्याट्री बैंक",
    card_solar: "सौर ऊर्जा प्रणाली",
    card_hydro: "लघु जलविद्युत",
    status_discharging: "डिस्चार्ज हुँदैछ",
    status_charging: "चार्ज हुँदैछ",
    status_mppt: "MPPT ट्र्याकिङ",
    status_torpid: "नियमित प्रवाह",
    backup_remaining: "बाँकी ब्याकअप समय",
    continuous_power: "निरन्तर स्वच्छ ऊर्जा",
    solar_irradiance: "घामको तीव्रता",
    hydro_flow: "पानीको गति",
    
    sec_crop_engine: "Agri-AI बाली संरक्षण इन्जिन",
    label_select_crop: "संरक्षण गरिने बाली छान्नुहोस्",
    btn_predict_ai: "AGRI-AI मोडलबाट विश्लेषण",
    btn_voice_assist: "आवाज सहायक (Voice)",
    ai_optimal_temp: "उपयुक्त तापमान",
    ai_target_rh: "लक्षित आर्द्रता (RH)",
    ai_shelf_life: "संरक्षण आयु",
    ai_spoilage_risk: "बिग्रिने जोखिम",
    btn_push_esp32: "ESP32 मा पठाउनुहोस्",
    push_transmitting: "MQTT डाटा पठाउँदैछ...",
    push_synced: "ESP32 मा सेट भयो",
    
    sec_sensors: "भण्डारण कोठाको सेन्सरहरू",
    sensor_temp: "तापक्रम (TEMP)",
    sensor_rh: "आर्द्रता (RH)",
    sensor_ethylene: "इथिलिन ग्यास (C2H4)",
    sensor_co2: "CO2 स्तर",
    sensor_dew: "शीत बिन्दु (DEW)",
    sensor_vpd: "वाष्प घाटा (VPD)",
    target_label: "लक्ष्य",
    cond_normal: "सामान्य < ०.५ ppm",
    cond_optimal: "उत्कृष्ट दायरा",
    cond_no_dew: "पानी जमेको छैन",
    cond_transpiration: "बालीका लागि सुरक्षित",
    
    sec_actuators: "यन्त्र तथा रिले नियन्त्रण",
    actuator_compressor: "कम्प्रेसर / चिलर",
    actuator_compressor_sub: "ब्रशलेस डीसी इन्भर्टर",
    actuator_humidifier: "अल्ट्रासोनिक आर्द्रता यन्त्र",
    actuator_humidifier_sub: "पिएजो ट्रान्सड्यूसर १.७ MHz",
    actuator_fans: "आन्तरिक हावा पंखा",
    actuator_fans_sub: "दोहोरो हावा संचलन पंखा",
    actuator_scrubber: "UV-C इथिलिन शोधक",
    actuator_scrubber_sub: "TiO2 उत्प्रेरक रिएक्टर",
    status_standby: "स्ट्यान्डबाइ",
    status_stopped: "रोकियो",
    status_idle: "निष्क्रिय",
    status_scrubbing: "सफाई गर्दैछ",
    status_mist: "कुहिरो चालु",
    
    sec_climate_telemetry: "वास्तविक समयको कोठाको वातावरण टेलिमेट्री",
    sec_chart_history: "प्रत्यक्ष सेन्सर ग्राफ (१Hz)",
    tag_streaming: "स्ट्रिमिङ हुँदैछ",
    sec_speed_controls: "यन्त्र गति तथा पावर नियन्त्रण",
    label_comp_capacity: "कम्प्रेसर क्षमता",
    label_humid_duty: "आर्द्रता शक्ति",
    label_fan_speed: "पंखाको गति",
    sec_thermal_defrost: "मर्मत तथा बरफ पगाल्ने चक्र",
    desc_thermal_defrost: "बायोपोडको स्वचालित हीटरले बालीको तापक्रम नबिगारी बरफ पगाल्छ।",
    btn_trigger_defrost: "४५ सेकेन्ड डिफ्रोस्ट सुरु गर्नुहोस्",
    label_chamber_pressure: "कोठाको हावाको चाप",
    nominal_label: "सामान्य",
    
    sec_tri_microgrid: "माइक्रोग्रिड (घाम + पानी + ब्याट्री)",
    label_circuit_routing: "विद्युत प्रवाह सर्किट",
    label_microgrid_sync: "माइक्रोग्रिड जोडिएको छ",
    node_solar_pv: "सौर ऊर्जा एरे",
    node_micro_hydro: "लघु जलविद्युत टर्बाइन",
    node_battery_bank: "LiFePO4 ब्याट्री बैंक",
    node_biopod_load: "बायोपोडको खपत भार",
    sec_power_trend: "ऊर्जा उत्पादन र खपत ग्राफ",
    
    sec_mqtt_stream: "प्रत्यक्ष MQTT र घटना सूची",
    btn_export_csv: "CSV डाटा डाउनलोड गर्नुहोस्",
    sec_node_specs: "बायोपोड नोडको विवरण",
    spec_mcu: "माइक्रोकन्ट्रोलर",
    spec_firmware: "फर्मवेयर संस्करण",
    spec_mesh: "मेश गेटवे",
    spec_capacity: "भण्डारण क्षमता",
    sec_stress_presets: "आपतकालीन परिस्थिति परीक्षण",
    scenario_heatwave: "अत्यधिक तातो हावा (+३८°C)",
    scenario_heatwave_desc: "बाहिरको तापक्रम बढ्यो; कम्प्रेसर परीक्षण",
    scenario_outage: "विद्युत कटौती (Outage)",
    scenario_outage_desc: "केवल घाम र पानीको ऊर्जामा सञ्चालन",
    scenario_door: "ढोका खुला चेतावनी",
    scenario_door_desc: "कोठाको ढोका खुला रहेको जानकारी",
    scenario_ethylene: "इथिलिन ग्यास वृद्धि",
    scenario_ethylene_desc: "स्वचालित शोधक सक्रिय भयो",
    scenario_monsoon: "वर्षायामको पानी प्रवाह",
    scenario_monsoon_desc: "जलविद्युतबाट अधिकतम ऊर्जा (१६०W)",
    scenario_reset: "सामान्य अवस्थामा फर्काउनुहोस्",
    scenario_reset_desc: "सबै मानहरू सामान्य बनाउनुहोस्",
    
    modal_lang_title: "उत्तर-पूर्वीय क्षेत्रीय भाषाहरू",
    modal_lang_subtitle: "BioPod OS र भ्वाइस सहायकका लागि नेपाली वा अन्य उत्तर-पूर्वीय भाषा छान्नुहोस्।",
    lang_active_badge: "सक्रिय",
    lang_btn_apply: "भाषा लागू गर्नुहोस्",
    
    ai_modal_title: "Agri-AI बाली संरक्षण विश्लेषण",
    ai_modal_analyzing: "बालीको विश्लेषण भइरहेको छ",
    ai_modal_init_scan: "Agri-AI न्युरल इन्जिन सुरु हुँदैछ...",
    ai_modal_conf_score: "AI विश्वसनीयता दर:",
    ai_modal_shelf_ext: "आयु विस्तार",
    ai_modal_advice_title: "कृषि वैज्ञानिक सल्लाह",
    ai_modal_accept_btn: "स्वीकार गरी ESP32 मा पठाउनुहोस्",
    
    self_test_title: "हार्डवेयर प्रणालीको स्व-परीक्षण",
    self_test_init: "स्वचालित परीक्षण सुरु हुँदैछ...",
    btn_close_diag: "परीक्षण बन्द गर्नुहोस्",
    
    scenarios_modal_title: "आपतकालीन परिस्थिति परीक्षण प्रयोगशाला",
    scenarios_modal_desc: "वास्तविक चुनौतीहरूमा बायोपोडको प्रतिक्रिया र पावर नियन्त्रण मूल्याङ्कन गर्नुहोस्।"
  },

  // ==========================================
  // 9. BODO (बड़ो) - Bodoland, Assam
  // ==========================================
  brx: {
    app_title: "सोलार बायोपोड",
    app_version: "नेक्सोरा ओएस",
    app_subtitle: "स्मार्ट आदार दोनथुमग्रा खल्ड स्टोरेजबो • NER",
    node_location: "खासी हाजो, मेघालय • गोजौ नोड",
    esp32_online: "ESP32 अनलाइन दं",
    packets_label: "पेकेतफोर",
    auto_ai_mode: "गावआरि AI मद",
    
    btn_regional_lang: "सा-सान्जा ओनसोलनि राव (NER)",
    btn_scenarios: "आनजाद नायनाय (Scenarios)",
    btn_selftest: "हार्डवेयार नायबिजिरनाय",
    btn_sound: "गोरोबथि सोदोब",
    btn_theme: "थिम सोलायनाय",
    
    nav_ai_control: "AI दैदेननाय",
    nav_climate: "बारहावा",
    nav_energy: "गोहो (Power)",
    nav_logs: "फोरोंनाय बिजाब",
    
    sec_energy_telemetry: "हाइब्रिड पावर टेलेमेत्रि",
    card_battery: "बेटेरी बेंक",
    card_solar: "साननि गोहो सोलर",
    card_hydro: "दै गोहो हाइड्रो",
    status_discharging: "खारहोबाय दं",
    status_charging: "चार्ज जाबाय दं",
    status_mppt: "MPPT ट्रेकिं",
    status_torpid: "थियारि बोहैनाय",
    backup_remaining: "थालांनाय समा",
    continuous_power: "जेबो हुथाया जासे पावर",
    solar_irradiance: "साननि रोदा",
    hydro_flow: "दैनि बोहैनाय",
    
    sec_crop_engine: "Agri-AI आदार रैखाथि खालामग्रा इन्जिन",
    label_select_crop: "दोनथुमनाय फसलखौ सायख'",
    btn_predict_ai: "AGRI-AI मोदेलजों सानना दिहुन",
    btn_voice_assist: "रावनि हेफाजाब (Voice)",
    ai_optimal_temp: "साजोगनाय दुंथाव",
    ai_target_rh: "सिदोब (RH)",
    ai_shelf_life: "गोबाव दिन थानाय",
    ai_spoilage_risk: "गाज्रि जानायनि खैफोद",
    btn_push_esp32: "ESP32 सिम मानखौ दैथायहर",
    push_transmitting: "MQTT दैथायहरगासिनो दं...",
    push_synced: "ESP32 आव दैथायनाय जाबाय",
    
    sec_sensors: "खथा सिङावनि सेनसरफोर",
    sensor_temp: "दुंथाव (TEMP)",
    sensor_rh: "सिदोब (RH)",
    sensor_ethylene: "इथिलिन गेस (C2H4)",
    sensor_co2: "CO2 थाखो",
    sensor_dew: "दैस्रि बिन्दु (DEW)",
    sensor_vpd: "खफ गिदिद (VPD)",
    target_label: "थांखि",
    cond_normal: "मोजां < ०.५ ppm",
    cond_optimal: "मोजांथार थाखो",
    cond_no_dew: "दै नाङाखै",
    cond_transpiration: "फसलनि थाखाय मोजां",
    
    sec_actuators: "कलफोर आरो रिले खन्थ्रोल",
    actuator_compressor: "कम्प्रेसर / सोरनाय",
    actuator_compressor_sub: "ब्रासलेस DC इनभारथार",
    actuator_humidifier: "अल्ट्रासनिक सिदोब खालामग्रा",
    actuator_humidifier_sub: "पिएजो ट्रान्सद्युचार १.७ MHz",
    actuator_fans: "बार बिरहोनाय फेन",
    actuator_fans_sub: "नै नोंगो फेन",
    actuator_scrubber: "UV-C इथिलिन साफा खालामग्रा",
    actuator_scrubber_sub: "TiO2 रिएक्टर",
    status_standby: "नेनानै दं",
    status_stopped: "थादबाय",
    status_idle: "जेबो खालामाखै",
    status_scrubbing: "साफा खालामगासिनो दं",
    status_mist: "खफ' दिहुनगासिनो",
    
    sec_climate_telemetry: "बारहावा टेलेमेत्रि",
    sec_chart_history: "लाइभ सेनसर ग्राफ (१Hz)",
    tag_streaming: "बोहैगासिनो",
    sec_speed_controls: "कलनि गोख्रोंथि आरो गोहो खन्थ्रोल",
    label_comp_capacity: "कम्प्रेसर गोहो",
    label_humid_duty: "सिदोब खालामग्रा गोहो",
    label_fan_speed: "फेननि गोख्रोंथि",
    sec_thermal_defrost: "बरफ गिलायनाय फालो",
    desc_thermal_defrost: "बायोपोड गावआरि हितारा फसलनि दुंथावखौ गाज्रि खालामा जासे बरफखौ गिलायहोयो।",
    btn_trigger_defrost: "४५ सेकेण्ड डिफ्रोस्ट जागाय",
    label_chamber_pressure: "खथा सिङावनि बारनि नारसिननाय",
    nominal_label: "मोजां",
    
    sec_tri_microgrid: "माइक्रोग्रिड (सान + दै + बेटेरी)",
    label_circuit_routing: "पावर बोहैनाय सारखित",
    label_microgrid_sync: "माइक्रोग्रिड जोरायबाय",
    node_solar_pv: "सोलर एरे",
    node_micro_hydro: "हाइद्रो टरबाइन",
    node_battery_bank: "LiFePO4 बेटेरी बेंक",
    node_biopod_load: "बायोपोड गोहो बाहायनाय",
    sec_power_trend: "पावर दिहुननाय आरो बाहायनाय ग्राफ",
    
    sec_mqtt_stream: "लाइभ MQTT आरो जाथाइ लिरनाय",
    btn_export_csv: "CSV डाटा दिहुन",
    sec_node_specs: "बायोपोड नोडनि मखनाय",
    spec_mcu: "माइक्रोकन्ट्रोलार",
    spec_firmware: "फर्मवेयार भर्सन",
    spec_mesh: "मेश गेटवे",
    spec_capacity: "दोनथुमनाय गोहो",
    sec_stress_presets: "खैफोद आनजाद नायनाय",
    scenario_heatwave: "गोब्राब दुंहाव (+३८°C)",
    scenario_heatwave_desc: "साननि दुंथाव बांलांबाय; कम्प्रेसर आनजाद",
    scenario_outage: "करेंट थादनाय (Outage)",
    scenario_outage_desc: "सान आरो दैनि गोहोल' बाहायनाय",
    scenario_door: "दोरखाय खेवनाय हुसियार",
    scenario_door_desc: "खथा दोरखाय खेवनायनि खौरां",
    scenario_ethylene: "इथिलिन गेस बांनाय",
    scenario_ethylene_desc: "गावआरि साफा खालामग्रा जागायबाय",
    scenario_monsoon: "अखा दैनि बोहैनाय",
    scenario_monsoon_desc: "हाइद्रो टरबाइन गोख्रों पावर (१६०W)",
    scenario_reset: "मोजां थासारियाव लाबोफिन",
    scenario_reset_desc: "गासै मानखौ मोजां खालामफिन",
    
    modal_lang_title: "सा-सान्जा ओनसोलनि रावफोर",
    modal_lang_subtitle: "BioPod OS आरो भ्वाइस एसिसटेन्टनि थाखाय बड़ो राव एबा गुबुन NER राव सायख'ना ला।",
    lang_active_badge: "सोलिबाय दं",
    lang_btn_apply: "रावखौ बाहाय",
    
    ai_modal_title: "Agri-AI फसल नायबिजिरनाय",
    ai_modal_analyzing: "फसलखौ नायबिजिरगासिनो दं",
    ai_modal_init_scan: "Agri-AI न्युरल इन्जिन जागायबाय...",
    ai_modal_conf_score: "AI फोथायथाव नम्बर:",
    ai_modal_shelf_ext: "थानाय सम बांनाय",
    ai_modal_advice_title: "आदार रैखाथि खालामनायनि राय",
    ai_modal_accept_btn: "गनायनानै ESP32 सिम दैथायहर",
    
    self_test_title: "हार्डवेयार सिस्टेम गाव-आनजाद",
    self_test_init: "गावआरि नायबिजिरनाय जागायबाय...",
    btn_close_diag: "आनजाद फोजोब",
    
    scenarios_modal_title: "खैफोद आनजाद नायनाय खथा",
    scenarios_modal_desc: "बायोपोड ओएस माबोरै खैफोदाव खामानि मावो बेखौ आनजाद नाय।"
  },

  // ==========================================
  // 10. KOKBOROK (Tripuri) - Tripura
  // ==========================================
  trp: {
    app_title: "SOLAR BIOPOD",
    app_version: "NEXORA OS",
    app_subtitle: "Smart Mungchar Tongthai • NER",
    node_location: "Khasi Haphang, Meghalaya • Chwng Node",
    esp32_online: "ESP32 Tongbai Tong",
    packets_label: "Packets",
    auto_ai_mode: "Auto AI Mode",
    
    btn_regional_lang: "Haphangni Kok (NER)",
    btn_scenarios: "Test Scenarios Khlai",
    btn_selftest: "Machine Diagnostics Test",
    btn_sound: "Khorang Switch",
    btn_theme: "Theme Solaimani",
    
    nav_ai_control: "AI Khuntik",
    nav_climate: "Tal-Noh",
    nav_energy: "Bor / Power",
    nav_logs: "Logswrok",
    
    sec_energy_telemetry: "Microgrid Bor Telemetry",
    card_battery: "BATTERY KWTWR",
    card_solar: "SALNI BOR (SOLAR)",
    card_hydro: "TWI BOR (HYDRO)",
    status_discharging: "DISCHARGING",
    status_charging: "CHARGE KHLAI TONG",
    status_mppt: "MPPT TRACKING",
    status_torpid: "REGULATED FLOW",
    backup_remaining: "Baki Tongnai Sal",
    continuous_power: "Pangnan Power Dongkamgipa",
    solar_irradiance: "Sal Teng",
    hydro_flow: "Twi Bwle",
    
    sec_crop_engine: "Agri-AI Mungchar Ripingnai Engine",
    label_select_crop: "RIPINGNAI MUNGCHAR SAI DI",
    btn_predict_ai: "AGRI-AI BAI CHITHOKDI",
    btn_voice_assist: "KHORANGBAI (Voice)",
    ai_optimal_temp: "KAHAM KHWLWI",
    ai_target_rh: "TWI-HUK (RH)",
    ai_shelf_life: "KWMA YA SAL",
    ai_spoilage_risk: "SEPHENGMANI KENNAI",
    btn_push_esp32: "ESP32 O SETPOINTS HORKHOR",
    push_transmitting: "MQTT PAYLOAD HOR TONG...",
    push_synced: "ESP32 O PAIKHA",
    
    sec_sensors: "Chamber Tal-Noh Sensors",
    sensor_temp: "KOTOR DUDUK (TEMP)",
    sensor_rh: "TWI-HUK (RH)",
    sensor_ethylene: "ETHYLENE NOKHAR (C2H4)",
    sensor_co2: "CO2 BOHROM",
    sensor_dew: "PWSLI POINT (DEW)",
    sensor_vpd: "TWI KWMA (VPD)",
    target_label: "Target",
    cond_normal: "Normal < 0.5 ppm",
    cond_optimal: "Kaham Rang",
    cond_no_dew: "Twi gwiya",
    cond_transpiration: "Mungcharna Kaham",
    
    sec_actuators: "Machinewrok & Switch",
    actuator_compressor: "Compressor / Kwphang",
    actuator_compressor_sub: "Brushless DC Inverter",
    actuator_humidifier: "Ultrasonic Twi-Phukani",
    actuator_humidifier_sub: "Piezo Transducer 1.7MHz",
    actuator_fans: "Nokha-No Fan",
    actuator_fans_sub: "Dual Aerators Fan",
    actuator_scrubber: "UV-C Ethylene Thwisuani",
    actuator_scrubber_sub: "TiO2 Catalytic Reactor",
    status_standby: "STANDBY",
    status_stopped: "KHAKHA",
    status_idle: "THWIKHA",
    status_scrubbing: "SAFA KHLAI TONG",
    status_mist: "MISTING",
    
    sec_climate_telemetry: "Chamber Real-Time Telemetry",
    sec_chart_history: "Sensor History Graph (1Hz)",
    tag_streaming: "STREAMING",
    sec_speed_controls: "Machine Speed & Power",
    label_comp_capacity: "Compressor Capacity",
    label_humid_duty: "Humidifier Mist Power",
    label_fan_speed: "Fan Speed",
    sec_thermal_defrost: "Thamli Rwchangani (Defrost)",
    desc_thermal_defrost: "BioPod automatic heater mungcharno sepheng ya khlai thamli kwphang rwchango.",
    btn_trigger_defrost: "45s DEFROST CHALAIDI",
    label_chamber_pressure: "Chamber Air Pressure",
    nominal_label: "Kaham",
    
    sec_tri_microgrid: "Microgrid (Sal + Twi + Battery)",
    label_circuit_routing: "Power Flow Circuit",
    label_microgrid_sync: "MICROGRID SYNC KHA",
    node_solar_pv: "Solar Array",
    node_micro_hydro: "Micro-Hydro Turbine",
    node_battery_bank: "LiFePO4 Battery Bank",
    node_biopod_load: "BioPod Power Load",
    sec_power_trend: "Power Generation vs Load Graph",
    
    sec_mqtt_stream: "MQTT Terminal & Event Stream",
    btn_export_csv: "CSV FILE DOWNLOAD KHLAIDI",
    sec_node_specs: "BioPod Node Kok",
    spec_mcu: "Microcontroller",
    spec_firmware: "Firmware Version",
    spec_mesh: "Mesh Gateway",
    spec_capacity: "Tongthai Capacity",
    sec_stress_presets: "Stress Test Scenarios",
    scenario_heatwave: "Kotor Khwlwi Dwikhang (+38°C)",
    scenario_heatwave_desc: "Sal kotor khwlwi; compressor test",
    scenario_outage: "Bijli Thwimani (Outage)",
    scenario_outage_desc: "Solar bai Hydro chalaio",
    scenario_door: "Khorok Phano Chengnai",
    scenario_door_desc: "Chamber khorok phano alert",
    scenario_ethylene: "Ethylene Barima",
    scenario_ethylene_desc: "Auto-scrubber safa khlai",
    scenario_monsoon: "Wathwi Twi Kotor",
    scenario_monsoon_desc: "Hydro turbine peak power (160W)",
    scenario_reset: "Nominal Baseline Reset",
    scenario_reset_desc: "Pangnan tabuk baselineno phirok",
    
    modal_lang_title: "North Eastern Haphangni Kokwrok",
    modal_lang_subtitle: "BioPod OS dashboard bai Voice Assistno Kokborok bai chalaidi.",
    lang_active_badge: "ACTIVE",
    lang_btn_apply: "KOK CHITHOKDI",
    
    ai_modal_title: "Agri-AI Crop Neural Inference",
    ai_modal_analyzing: "Mungcharno naitok tong",
    ai_modal_init_scan: "Agri-AI Neural Engine chengkha...",
    ai_modal_conf_score: "AI Confidence Score:",
    ai_modal_shelf_ext: "KHAMANI SAL BARIMA",
    ai_modal_advice_title: "AGRONOMY RIPINGANI KOK",
    ai_modal_accept_btn: "ACCEPT KHLAI ESP32 O HORDI",
    
    self_test_title: "Hardware Diagnostics Test",
    self_test_init: "Automated check chengkha...",
    btn_close_diag: "DIAGNOSTICS KHIDI",
    
    scenarios_modal_title: "Stress Test Scenarios",
    scenarios_modal_desc: "BioPod OS emergency timeo khorang test khlaidi."
  },

  // ==========================================
  // 11. HINDI (हिन्दी) - National Agri-Trade / Mandi Baseline
  // ==========================================
  hi: {
    app_title: "सोलर बायोपोड",
    app_version: "नेक्सोरा ओएस",
    app_subtitle: "स्मार्ट कृषि कोल्ड स्टोरेज • उत्तर-पूर्व",
    node_location: "खासी हिल्स, मेघालय • उच्च-पहाड़ी नोड",
    esp32_online: "ESP32 ऑनलाइन",
    packets_label: "पैकेट्स",
    auto_ai_mode: "ऑटो AI मोड",
    
    btn_regional_lang: "पूर्वोत्तर क्षेत्रीय भाषाएँ (NER)",
    btn_scenarios: "तनाव परीक्षण सिमुलेशन (Stress Test)",
    btn_selftest: "हार्डवेयर स्व-परीक्षण (Diagnostics)",
    btn_sound: "इंटरफ़ेस ऑडियो टॉगल",
    btn_theme: "लाइट/डार्क थीम बदलें",
    
    nav_ai_control: "AI नियंत्रण",
    nav_climate: "जलवायु",
    nav_energy: "ऊर्जा",
    nav_logs: "लॉग्स",
    
    sec_energy_telemetry: "हाइब्रिड माइक्रोग्रिड विद्युत टेलीमेट्री",
    card_battery: "बैटरी बैंक",
    card_solar: "सौर पैनल सारणी",
    card_hydro: "लघु जलविद्युत",
    status_discharging: "डिस्चार्जिंग",
    status_charging: "चार्ज हो रहा है",
    status_mppt: "MPPT ट्रैकिंग",
    status_torpid: "नियंत्रित प्रवाह",
    backup_remaining: "शेष बैकअप समय",
    continuous_power: "निरंतर स्वच्छ माइक्रोग्रिड बिजली",
    solar_irradiance: "सौर विकिरण",
    hydro_flow: "जल प्रवाह",
    
    sec_crop_engine: "Agri-AI फसल संरक्षण एवं बुद्धिमत्ता इंजन",
    label_select_crop: "संरक्षण फसल प्रोफ़ाइल चुनें",
    btn_predict_ai: "AGRI-AI मॉडल से विश्लेषण करें",
    btn_voice_assist: "आवाज़ सहायक (Voice Assist)",
    ai_optimal_temp: "अनुकूलतम तापमान",
    ai_target_rh: "लक्षित आर्द्रता (RH)",
    ai_shelf_life: "शेल्फ लाइफ विस्तार",
    ai_spoilage_risk: "खराब होने का जोखिम",
    btn_push_esp32: "ESP32 को सेटपॉइंट भेजें",
    push_transmitting: "MQTT पेलोड भेजा जा रहा है...",
    push_synced: "ESP32 पर सेटपॉइंट सिंक हो गया",
    
    sec_sensors: "चैंबर वायुमंडलीय सेंसर",
    sensor_temp: "तापमान (TEMP)",
    sensor_rh: "आर्द्रता (RH)",
    sensor_ethylene: "एथिलीन गैस (C2H4)",
    sensor_co2: "CO2 स्तर",
    sensor_dew: "ओस बिन्दु (DEW POINT)",
    sensor_vpd: "वाष्प घाटा (VPD)",
    target_label: "लक्ष्य",
    cond_normal: "सामान्य < 0.5 ppm",
    cond_optimal: "सर्वोत्तम स्तर",
    cond_no_dew: "संघनन मुक्त",
    cond_transpiration: "फसल के लिए सुरक्षित",
    
    sec_actuators: "एक्चुएटर और रिले नियंत्रण",
    actuator_compressor: "कम्प्रेसर / चिल्लर",
    actuator_compressor_sub: "ब्रशलेस डीसी इन्वर्टर",
    actuator_humidifier: "अल्ट्रासोनिक ह्यूमिडिफायर",
    actuator_humidifier_sub: "पीज़ो ट्रांसड्यूसर 1.7MHz",
    actuator_fans: "आंतरिक संचलन पंखे",
    actuator_fans_sub: "दोहरे क्रॉस-फ्लो एरेटर",
    actuator_scrubber: "UV-C एथिलीन स्क्रबर",
    actuator_scrubber_sub: "TiO2 उत्प्रेरक रिएक्टर",
    status_standby: "स्टैंडबाय",
    status_stopped: "बंद",
    status_idle: "निष्क्रिय",
    status_scrubbing: "सफाई जारी",
    status_mist: "मिस्टिंग",
    
    sec_climate_telemetry: "रीयल-टाइम चैंबर पर्यावरण टेलीमेट्री",
    sec_chart_history: "लाइव सेंसर इतिहास चार्ट (1Hz)",
    tag_streaming: "स्ट्रीमिंग जारी",
    sec_speed_controls: "चैंबर गति और पावर मॉड्यूलेशन",
    label_comp_capacity: "कम्प्रेसर इन्वर्टर क्षमता",
    label_humid_duty: "ह्यूमिडिफायर मिस्ट ड्यूटी चक्र",
    label_fan_speed: "सर्कुलेशन पंखा गति",
    sec_thermal_defrost: "रखरखाव और थर्मल डीफ्रॉस्ट चक्र",
    desc_thermal_defrost: "बायोपोड ऑटोमैटिक हीटिंग फसल के मुख्य तापमान को प्रभावित किए बिना बर्फ पिघलाती है।",
    btn_trigger_defrost: "45 सेकंड डीफ्रॉस्ट पल्स शुरू करें",
    label_chamber_pressure: "चैंबर आंतरिक दबाव",
    nominal_label: "सामान्य",
    
    sec_tri_microgrid: "त्रि-स्रोत हाइब्रिड माइक्रोग्रिड (सौर + जल + बैटरी)",
    label_circuit_routing: "लाइव विद्युत प्रवाह सर्किट",
    label_microgrid_sync: "माइक्रोग्रिड सिंक्रोनाइज़्ड",
    node_solar_pv: "सौर पीवी ऐरे",
    node_micro_hydro: "माइक्रो-हाइड्रो टरबाइन",
    node_battery_bank: "LiFePO4 बैटरी बैंक",
    node_biopod_load: "बायोपोड सक्रिय लोड",
    sec_power_trend: "माइक्रोग्रिड उत्पादन बनाम लोड ट्रेंड (वॉट)",
    
    sec_mqtt_stream: "लाइव MQTT टेलीमेट्री और इवेंट स्ट्रीम",
    btn_export_csv: "CSV टेलीमेट्री डाउनलोड करें",
    sec_node_specs: "बायोपोड कोर नोड विनिर्देश",
    spec_mcu: "माइक्रोकंट्रोलर",
    spec_firmware: "फर्मवेयर संस्करण",
    spec_mesh: "मेश गेटवे",
    spec_capacity: "भंडारण क्षमता",
    sec_stress_presets: "त्वरित तनाव परीक्षण प्रीसेट",
    scenario_heatwave: "अत्यधिक लू / हीटवेव (+38°C)",
    scenario_heatwave_desc: "बाहरी तापमान में उछाल; कम्प्रेसर क्षमता परीक्षण",
    scenario_outage: "ग्रिड पावर विफलता (Outage)",
    scenario_outage_desc: "केवल सौर और जल ऊर्जा पर स्वतः स्विच",
    scenario_door: "चैंबर दरवाज़ा खुला चेतावनी",
    scenario_door_desc: "थर्मल सील टूटने की तुरंत चेतावनी",
    scenario_ethylene: "एथिलीन गैस में उछाल",
    scenario_ethylene_desc: "स्वचालित उत्प्रेरक स्क्रबर सक्रियण",
    scenario_monsoon: "मानसून जल प्रवाह",
    scenario_monsoon_desc: "माइक्रो-हाइड्रो से अधिकतम ऊर्जा (160W)",
    scenario_reset: "सामान्य आधार रेखा पर रीसेट करें",
    scenario_reset_desc: "सभी मानों को सामान्य स्थिति में लौटाएं",
    
    modal_lang_title: "पूर्वोत्तर क्षेत्रीय भाषाएँ (NER Languages)",
    modal_lang_subtitle: "BioPod OS डैशबोर्ड और वॉइस असिस्ट के लिए अपनी पसंदीदा पूर्वोत्तर क्षेत्रीय भाषा चुनें।",
    lang_active_badge: "सक्रिय",
    lang_btn_apply: "भाषा लागू करें",
    
    ai_modal_title: "Agri-AI न्यूरल क्रॉप विश्लेषण",
    ai_modal_analyzing: "फसल का विश्लेषण किया जा रहा है",
    ai_modal_init_scan: "Agri-AI न्यूरल इंजन प्रारंभ हो रहा है...",
    ai_modal_conf_score: "AI विश्वसनीयता स्कोर:",
    ai_modal_shelf_ext: "शेल्फ लाइफ विस्तार",
    ai_modal_advice_title: "कृषि वैज्ञानिक संरक्षण सलाह",
    ai_modal_accept_btn: "स्वीकार करें और ESP32 को भेजें",
    
    self_test_title: "हार्डवेयर सिस्टम स्व-परीक्षण",
    self_test_init: "स्वचालित डायग्नोस्टिक परीक्षण प्रारंभ...",
    btn_close_diag: "डायग्नोस्टिक्स बंद करें",
    
    scenarios_modal_title: "सिमुलेटेड तनाव परीक्षण परिदृश्य",
    scenarios_modal_desc: "स्वायत्त बायोपोड प्रतिक्रिया समय और ऊर्जा नियंत्रण का मूल्यांकन करें।"
  }
};

// --- Regional Crops Localized Database ---
const LOCALIZED_CROPS = {
  potato: {
    en: { name: "Organic Seed Potato", category: "Tubers & Roots", origin: "Tawang, Arunachal Pradesh", bioNotes: "Rhizome dormancy mode active. Solanine greening prevented via zero-light dark storage and strictly regulated skin curing humidity." },
    as: { name: "জৈৱিক বীজ আলু", category: "মূলজাতীয় পাচলি", origin: "টাৱাং, অৰুণাচল প্ৰদেশ", bioNotes: "ৰাইজ'ম সুপ্তাবস্থা সক্ৰিয়। আন্ধাৰ সংৰক্ষণ আৰু নিয়ন্ত্ৰিত আৰ্দ্ৰতাৰ দ্বাৰা আলু সেউজীয়া হোৱা আৰু অংকুৰণ ৰোধ কৰা হৈছে।" },
    kha: { name: "U Phan Symbai Tawang", category: "Ki Jingthung Thied", origin: "Tawang, Arunachal Pradesh", bioNotes: "Ka rukom thiah-shong u phan ka treikam. Ym shah ia ka jingshai ban ym jyrngam bad pynbiang ia ka jingtlong ban neh slem." },
    grx: { name: "Tawangni Ja·beng Ta·a", category: "Sam-Bol Ja·dil", origin: "Tawang, Arunachal Pradesh", bioNotes: "Ja·dil ripina somoi naljoka. Andalgipa biapo dona aro chisoaniko siksik rakkiani a·sel tangsekbaani aro soaniko champenga." },
    mni: { name: "অর্গানিক এলু মরূ", category: "মহৈ মরূ পোথোক", origin: "তাৱাং, অরুনাচল প্রদেশ", bioNotes: "এলু অসি কুকহন্দনবা অমসুং অহিংবা মতৌদা থম্নবা অমাংবা মফমদা চপ চাবা চিংশিৎকা লোয়ননা থম্লি।" },
    lus: { name: "Alu Chi Ṭha (Tawang)", category: "Zungnei Thlai", origin: "Tawang, Arunachal Pradesh", bioNotes: "Alu ṭo chhuak tur ven nan thim hnuaiah dah a ni a, a vun tiṭha reng turin daidahna fel taka enkawl a ni." },
    nag: { name: "Organic Aloo Guti", category: "Roots & Tubers", origin: "Tawang, Arunachal Pradesh", bioNotes: "Aloo guti bhal thakibo karne andhera jaga te humidity maintain kori rakhi ase, ketiya bi guti ulaise nai." },
    ne: { name: "जैविक आलुको बीउ", category: "कन्दमूल तथा जरा", origin: "तावाङ, अरुणाचल प्रदेश", bioNotes: "बीउ आलुलाई टुसाउनबाट रोक्न पूर्ण अँध्यारो र नियन्त्रित आर्द्रतामा राखिएको छ जसले हरियो हुन दिँदैन।" },
    brx: { name: "जैविक थासों बेगर", category: "रोदाआरि फसल", origin: "तावांग, अरुणाचल प्रदेश", bioNotes: "थासों बेगरखौ गोथां जानाय आरो बेगर ओंखारनायनिफ्राय रैखाथि खालामनो खोमसि खथायाव मोजां सिदोबजों दोनथुमनाय जादों।" },
    trp: { name: "Organic Tha Bwrwi", category: "Tha Bwrwi Mungchar", origin: "Tawang, Arunachal Pradesh", bioNotes: "Tha bwrwino thwisa khlai ya khorok gari ya andalo twi-huk rina riping tong." },
    hi: { name: "जैविक बीज आलू", category: "कंदमूल एवं जड़ें", origin: "तवांग, अरुणाचल प्रदेश", bioNotes: "प्रसुप्ति मोड सक्रिय। शून्य-प्रकाश भंडारण और नियंत्रित आर्द्रता द्वारा सोलेनाइन हरियाली और अंकुरण को पूर्णतः रोका गया है।" }
  },
  naga_chilli: {
    en: { name: "Naga King Chilli (Bhut Jolokia)", category: "High-Value Spices", origin: "Kohima & Dimapur, Nagaland", bioNotes: "Capsaicin crystal stability protocol active. Low condensation misting prevents fruit fungal spot while preserving Scoville heat units (1,000,000+ SHU)." },
    as: { name: "ভোট জলকীয়া (Bhut Jolokia)", category: "উচ্চ মূল্যৰ মচলা", origin: "কহিমা আৰু ডিমাপুৰ, নাগালেণ্ড", bioNotes: "কেপচাইচিন স্থিৰতা প্ৰট'কল সক্ৰিয়। নিয়ন্ত্রিত কুঁৱলীয়ে জলকীয়াৰ দাগ পৰা ৰোধ কৰে আৰু জলা গুণ (১,০০০,০০০+ SHU) অক্ষুণ্ণ ৰাখে।" },
    kha: { name: "U Sohmynken Raja / Bhut Jolokia", category: "Ki Jingthung Spices Ba Kordor", origin: "Kohima & Dimapur, Nagaland", bioNotes: "Ka jingpynsah ia ka jingsat Capsaicin ka treikam. Ka jingpynjaw um ba rit ka iada na ka jingthoh dait bad pynsah ia ka jingsat kaba palat 1,000,000 SHU." },
    grx: { name: "Nagani Jalik / Bhut Jolokia", category: "Gamchatbegipa Sam-Masa", origin: "Kohima & Dimapur, Nagaland", bioNotes: "Capsaicin bilko rakkiani protocol kam ka·enga. Miting ka·e chisoatani a·sel soani jokatgija 1,000,000+ SHU jalgipako rakkia." },
    mni: { name: "উমোরোক (Bhut Jolokia)", category: "মলূং লৈবা মশলা", origin: "কোহিমা অমসুং দিমাপুর, নাগাল্যান্ড", bioNotes: "উমোরোক্কী মশা অদু কাইহন্দনবা অমসুং য়াম্না শাওবা মতৌ (১,০০০,০০০+ SHU) লেপ্নবা অখন্নবা চিংশিৎকী ফিভমদা থম্লি।" },
    lus: { name: "Hmarchapui (Bhut Jolokia)", category: "Spices Hlu Tak", origin: "Kohima & Dimapur, Nagaland", bioNotes: "Capsaicin tisa tiṭha reng turin enkawl a ni a, hrik thlai ven nan daidahna zangkhaiah dah niin a thak dan (1,000,000+ SHU) a vawng reng a ni." },
    nag: { name: "Naga King Chilli / Bhut Jolokia", category: "High-Value Spice", origin: "Kohima & Dimapur, Nagaland", bioNotes: "Capsaicin heat 1,000,000+ SHU maintain kori ase, patla misting se chilli te fungus poribo nadibo." },
    ne: { name: "डल्ले / राजा खुर्सानी (भूत जोलोकिया)", category: "उच्च मूल्यवान मसला", origin: "कोहिमा र दिमापुर, नागाल्याण्ड", bioNotes: "क्याप्साइसिनको पिरोपन (१० लाख+ SHU) जोगाउन र ढुसी लाग्न नदिन विशेष आर्द्रता नियन्त्रण प्रणाली सक्रिय छ।" },
    brx: { name: "राजा फिबौ / भुत जोलोकिया", category: "गोनांथि मुलि-मसाला", origin: "कोहिमा आरो दिमापुर, नागालेण्ड", bioNotes: "फिबौनि खायस्रा गोहोखौ (१,०००,०००+ SHU) लाखिनो आरो मैला नांनायनिफ्राय बासायनो सिदोब खन्थ्रोल खालामनाय जादों।" },
    trp: { name: "Mosodeng Kwchang (Bhut Jolokia)", category: "Kwbang Rango Mosodeng", origin: "Kohima & Dimapur, Nagaland", bioNotes: "Mosodengni kwsa 1,000,000+ SHU rakkina twi-phuk rina fungal spot champeng tong." },
    hi: { name: "नागा किंग मिर्च / भूत जोलोकिया", category: "उच्च-मूल्य मसाले", origin: "कोहिमा एवं दीमापुर, नागालैंड", bioNotes: "कैप्साइसिन क्रिस्टल स्थिरता प्रोटोकॉल सक्रिय। कम-संघनन मिस्टिंग फलों में फफूंद धब्बों को रोकती है और तीखापन (10 लाख+ SHU) सुरक्षित रखती है।" }
  },
  mushroom: {
    en: { name: "Oyster Mushroom (Pleurotus)", category: "Perishable Fungi", origin: "Shillong, Meghalaya", bioNotes: "Extreme CO2 sensitivity. Continuous cross-flow air exchange (1800 RPM) prevents cap spore rot and weight desiccation." },
    as: { name: "অইষ্টাৰ কাঠফুলা (Pleurotus)", category: "শীঘ্ৰে বিনষ্টশীল ভেঁকুৰ", origin: "শ্বিলং, মেঘালয়", bioNotes: "CO2 গেছৰ প্ৰতি অতি সংবেদনশীল। অহৰহ বায়ু চলাচলৰ (১৮০০ RPM) জৰিয়তে কাঠফুলা পচি যোৱা আৰু শুকাই ওজন কমি যোৱা ৰোধ কৰা হয়।" },
    kha: { name: "Tit Dkhiew / Tit Shilliang", category: "Ki Tit Ba Kloi Ban Sniew", origin: "Shillong, Meghalaya", bioNotes: "Kylliang bha ia ka CO2. Ka jingpynphriang lyer (1800 RPM) ka iada na ka jingpyut u tit bad pynneh ia ka jingthew jong u." },
    grx: { name: "Me·gamu Me·mang (Oyster)", category: "Baktap Sogipa Me·gamu", origin: "Shillong, Meghalaya", bioNotes: "CO2 biba-na kenchakgipa. Continuous balwa balatani (1800 RPM) a·sel cap soani aro rani-ko champenga." },
    mni: { name: "উয়েন / ওয়েস্টার মাশরুম", category: "থেংনা মাংবা য়াবা ফঙ্গাই", origin: "শিলং, মেঘালয়", bioNotes: "CO2 গ্যাসতা য়াম্না কিকপনা অহিংবা হৱা ফ্যাননা (১৮০০ RPM) শীজিন্নদুনা মাশরুম পুম্বা অমসুং হন্থবা য়াহন্দে।" },
    lus: { name: "Pa / Oyster Mushroom", category: "Chhe Hma Chi", origin: "Shillong, Meghalaya", bioNotes: "CO2 boruak hlau tak a ni a, boruak vir (1800 RPM) hmangin a zik tawih tur leh a rihna kiam tur ven a ni." },
    nag: { name: "Oyster Kathfula (Pleurotus)", category: "Perishable Mushroom", origin: "Shillong, Meghalaya", bioNotes: "CO2 bisi thakile bea hoi jai, etu karne 1800 RPM cross fan se hawa di ase taate fungus rot nohoi." },
    ne: { name: "कन्या च्याउ (अइस्टर च्याउ)", category: "चाँडै बिग्रिने च्याउ", origin: "शिलोङ, मेघालय", bioNotes: "CO2 प्रति निकै संवेदनशील। लगातार हावा संचलन (१८०० RPM) मार्फत च्याउको छाता कुहिनबाट र तौल घट्नबाट जोगाइन्छ।" },
    brx: { name: "मुक्रेब / अयस्टार माशरूम", category: "गोख्रै गाज्रि जानाय मुक्रेब", origin: "शिलोंग, मेघालय", bioNotes: "CO2 गेसनिफ्राय गियो। १८०० RPM बार बिरहोनायजों मुक्रेब सेवनाय आरो सिबनायनिफ्राय रैखा खालामनाय जायो।" },
    trp: { name: "Mwkhwrwng Oyster (Pleurotus)", category: "Khaklainai Mwkhwrwng", origin: "Shillong, Meghalaya", bioNotes: "CO2 na khorok ken. 1800 RPM fan bai noha-no hawa rina mwkhwrwngno bhalo rakkhi tong." },
    hi: { name: "ढींगरी / ऑयस्टर मशरूम", category: "अति-शीघ्र विनाशी कवक", origin: "शिलांग, मेघालय", bioNotes: "CO2 के प्रति अत्यधिक संवेदनशील। निरंतर क्रॉस-फ्लो वायु संचलन (1800 RPM) छतरी के सड़ने और वजन घटने को रोकता है।" }
  },
  cabbage: {
    en: { name: "Fresh Green Cabbage", category: "Cruciferous Vegetables", origin: "East Khasi Hills, Meghalaya", bioNotes: "Ultra-high humidity preserves head firmness and prevents leaf chlorosis. Continuous low-temp chilling prevents core decay." },
    as: { name: "সতেজ বন্ধাকবি", category: "ক্ৰুচিফেৰাছ শাক-পাচলি", origin: "পূব খাচী পাহাৰ, মেঘালয়", bioNotes: "উচ্চ আৰ্দ্ৰতাই কবিৰ পাত টান কৰি ৰাখে আৰু হালধীয়া হোৱাৰ পৰা ৰক্ষা কৰে। নিম্ন উষ্ণতাই ভিতৰৰ অংশ পচি যোৱা ৰোধ কৰে।" },
    kha: { name: "U Kubi Jyrngam", category: "Ki Jhur Kubi", origin: "East Khasi Hills, Meghalaya", bioNotes: "Ka jingtlong ba heh ka pynneh ia ka jingeh u kubi bad ym shah stem ki sla. Ka jingpynkhriat kaba neh ka iada na ka jingpyut shapoh." },
    grx: { name: "Gital Kobi Tangsek", category: "Cruciferous Sam-Ote", origin: "East Khasi Hills, Meghalaya", bioNotes: "Chisoani bariatani kobi-ko ranta aro bijak rimit-ko champenga. Sin·atani a·sel ning·o soani sokja." },
    mni: { name: "কোবি মনা (Green Cabbage)", category: "হিদাক-পোথোক কোবি", origin: "ইস্ট খাসি হিলস, মেঘালয়", bioNotes: "অকনবা চিংশিৎনা কোবিগী মনা চপ চানা কনহল্লি অমসুং নোংপান খোম্বা থিংই। কোবিগী মনুং পুম্বদগী কনহল্লি।" },
    lus: { name: "Zikhlum Hring Ṭha", category: "Hnah Hring Thlai", origin: "East Khasi Hills, Meghalaya", bioNotes: "Daidahna ṭha tak hnuaiah a hnah a hring reng a, a vawh tawk chiah avangin a chhung tawih tur a veng bawk a ni." },
    nag: { name: "Taja Bandhakopi", category: "Fresh Vegetable", origin: "East Khasi Hills, Meghalaya", bioNotes: "Bisi humidity se bandhakopi fresh thakibo aru paat peela nohoi. Thanda thaka karne bhitor rot nohoi." },
    ne: { name: "ताजा हरियो बन्दागोभी", category: "क्रुसिफेरस तरकारी", origin: "पूर्वी खासी हिल्स, मेघालय", bioNotes: "उच्च आर्द्रताले बन्दाको ताजगी कायम राख्छ र पात पहेंलो हुन दिँदैन। निरन्तर चिसोले भित्री भाग कुहिन दिँदैन।" },
    brx: { name: "गोजां बान्धाखपि", category: "मेगं-थायगं बान्धाखपि", origin: "सान्जा खासी पाहाड़, मेघालय", bioNotes: "गोबां सिदोबजों बान्धाखपिखौ गोथां आरो गोरा लाखियो। खम दुंथावा बान्धाखपिनि सिङाव सेवनायनिफ्राय रैखाथि होयो।" },
    trp: { name: "Kobi Kwthang (Cabbage)", category: "Mungchar Kobi", origin: "East Khasi Hills, Meghalaya", bioNotes: "Kobi-no kwthang rakkina twi-huk rina rwichang tong, te khaklaio khorok thwisa ya." },
    hi: { name: "ताज़ा हरी पत्तागोभी", category: "क्रूसिफेरस सब्जियां", origin: "पूर्वी खासी हिल्स, मेघालय", bioNotes: "अत्यधिक उच्च आर्द्रता पत्तागोभी के कसाव को बनाए रखती है और पत्तियों को पीला होने से रोकती है। कम तापमान भीतरी सड़न रोकता है।" }
  },
  tomato: {
    en: { name: "Ripe Red Tomatoes", category: "Solanaceous Fruits", origin: "Barapani Valley, Meghalaya", bioNotes: "High ethylene emissions. UV-C scrubber cycle active to catalyze C2H4 decomposition and prevent premature softening." },
    as: { name: "পকা ৰঙা বিলাহী", category: "ফলজাতীয় পাচলি", origin: "বৰাপানী উপত্যকা, মেঘালয়", bioNotes: "অতিমাত্ৰা ইথিলিন গেছ নিৰ্গমন ঘটে। UV-C শোধকে ইথিলিন ধ্বংস কৰি বিলাহী সোনকালে কোমল আৰু পচি যোৱা ৰোধ কৰে।" },
    kha: { name: "U Soh-Saw Saw", category: "Ki Soh-Jhur", origin: "Barapani Valley, Meghalaya", bioNotes: "Pynmih gas ethylene kaba bun. Ka kor UV-C ka pynkhuid ia kane ka gas khnang ba u sohsaw un ym jem shula bad pyut kloi." },
    grx: { name: "Gitchak Bilati / Tomato", category: "Solanaceous Bite", origin: "Barapani Valley, Meghalaya", bioNotes: "Ethylene biba baria. UV-C scrubber C2H4-ko rokgata aro bilati baktap nom·atani aro soani-ko champenga." },
    mni: { name: "মোরোক খোম্বি (Red Tomato)", category: "উহৈ পোথোক", origin: "বারাপানি ভ্যালি, মেঘালয়", bioNotes: "ইথিলিন গ্যাস য়াম্না থোকই। UV-C স্ক্রবারনা গ্যাস অসি হন্থহন্দুনা বিলাতি অসি মতম চাদনা পুম্বা অমসুং শোম্বদগী কনহল্লি।" },
    lus: { name: "Tomato Sen Ṭha", category: "Rah Chi", origin: "Barapani Phai, Meghalaya", bioNotes: "Ethylene boruak a tihchhuah tam avangin UV-C khawl hmangin a boruak ṭhalo lak bo reng a ni a, a hmin chhiat thut tur a veng a ni." },
    nag: { name: "Paka Lal Bilahi (Tomato)", category: "Solanaceous Crop", origin: "Barapani Valley, Meghalaya", bioNotes: "Bisi ethylene gas ulaise. UV-C scrubber se C2H4 gas safa kori dise taate tomato jaldi norom aru bea nohoi." },
    ne: { name: "पाकेको रातो गोलभेँडा (टमाटर)", category: "फल तरकारी", origin: "बारापानी उपत्यका, मेघालय", bioNotes: "अधिक इथिलिन उत्सर्जन हुन्छ। UV-C स्क्रबरले इथिलिन हटाएर गोलभेँडालाई छिट्टै गल्न र कुहिनबाट बचाउँछ।" },
    brx: { name: "गोजा बिलाथी (Tomato)", category: "फिथाइ-सामथाइ बिलाथी", origin: "बारापानी भेलि, मेघालय", bioNotes: "गोबां इथिलिन गेस ओंखारो। UV-C स्क्रबारजों गेसखौ साफा खालामनानै बिलाथीखौ गोख्रै गिलायनाय आरो सेवनायनिफ्राय बासायो।" },
    trp: { name: "Tomato Kchak (Tomato)", category: "Kwthang Mungchar", origin: "Barapani Valley, Meghalaya", bioNotes: "Ethylene gas kwbang phano UV-C scrubber bai C2H4 safa khlai rina tomatono khaklaimani champeng tong." },
    hi: { name: "पके लाल टमाटर", category: "सोलेनेसियस फल", origin: "बारापानी घाटी, मेघालय", bioNotes: "उच्च एथिलीन उत्सर्जन। UV-C स्क्रबर चक्र एथिलीन को विघटित कर टमाटरों को असमय अत्यधिक मुलायम होने और सड़ने से बचाता है।" }
  },
  ginger: {
    en: { name: "Fresh Raw Ginger (Nadia Variety)", category: "Medicinal Rhizomes", origin: "Karbi Anglong, Assam", bioNotes: "Sprout inhibition humidity ceiling active. Prevents rhizome shriveling while preserving pungent gingerol essential oils." },
    as: { name: "কেঁচা সতেজ আদা (নাদিয়া জাত)", category: "ঔষধি ৰাইজ'ম", origin: "কাৰ্বি আংলং, অসম", bioNotes: "অংকুৰণ ৰোধক আৰ্দ্ৰতা সক্ৰিয়। ই আদা শুকাই যোৱা আৰু কোঁচ খাই যোৱা ৰোধ কৰি তীক্ষ্ণ জিঞ্জেৰল ঔষধি তেল অক্ষুণ্ণ ৰাখে।" },
    kha: { name: "U Sying Im (Nadia Variety)", category: "Ki Dawai Thied Sying", origin: "Karbi Anglong, Assam", bioNotes: "Ka jingtlong ba khang ia ka jingmih thied ka treikam. Iada na ka jingran u sying bad pynneh ia ka jingsat bad ka dawai gingerol." },
    grx: { name: "Gital E·ching (Nadia)", category: "Sam Ja·dil", origin: "Karbi Anglong, Assam", bioNotes: "Cha·prokani champengani chisoani kam ka·enga. E·ching ran·ani aro gingerol tel gimaani-ko champenga." },
    mni: { name: "শিং / তাজা আদা (নাদিয়া)", category: "হিদাক মরূ পোথোক", origin: "কার্বি আংলং, আসাম", bioNotes: "শিং অসি হৌদনা থম্নবা অখন্নবা চিংশিৎকী ফিভমদা থম্লি। মসিনা শিংগী অচুম্বা মগুণ অমসুং তেল অদু মাংহন্দে।" },
    lus: { name: "Sawhthing Hring (Nadia Variety)", category: "Damdawi Zung", origin: "Karbi Anglong, Assam", bioNotes: "A ṭo chhuah loh nan daidahna vawn a ni a, a uai chhiat loh nan leh a thakna hriak ṭha a bo loh nan uluk taka vawn a ni." },
    nag: { name: "Taja Ada (Nadia Variety)", category: "Medicinal Ginger", origin: "Karbi Anglong, Assam", bioNotes: "Ada guti ulaise na thakibo karne humidity set kori ase, gingerol pungent smell aru tel maintain kori ase." },
    ne: { name: "ताजा काँचो अदुवा (नादिया जात)", category: "औषधीय कन्दमूल", origin: "कार्बी आङ्लोङ, असम", bioNotes: "टुसाउन नदिन उपयुक्त आर्द्रता कायम गरिएको छ। अदुवा ओइलाउनबाट रोक्दै यसको औषधीय जिन्जेरोल तेल सुरक्षित राखिन्छ।" },
    brx: { name: "गोथां हाजिं (नादिया)", category: "मुलि हाजिं", origin: "कार्बी आंलोंग, आसाम", bioNotes: "बेगर ओंखारनायनिफ्राय रैखाथि होयो। हाजिंनि मुलि आरि तेलखौ लाखिनानै हाजिंखौ गोथां लाखियो।" },
    trp: { name: "Hasing Kwthang (Nadia Variety)", category: "Sam Hasing", origin: "Karbi Anglong, Assam", bioNotes: "Hasing phano gari ya khlai twi-huk rina gingerol sam-no bhalo rakkhi tong." },
    hi: { name: "ताज़ा कच्चा अदरक (नादिया किस्म)", category: "औषधीय प्रकंद", origin: "कार्बी आंगलोंग, असम", bioNotes: "अंकुरण-रोधी आर्द्रता सीमा सक्रिय। प्रकंद को सिकुड़ने से रोकती है और तीखे जिंजरॉल आवश्यक तेलों को पूरी तरह सुरक्षित रखती है।" }
  }
};

// --- Active Language State ---
let currentLang = localStorage.getItem('biopod_ner_lang') || 'en';
if (!NER_LANGUAGES[currentLang]) currentLang = 'en';

/**
 * Get translation string by key
 */
function t(key, fallback = '') {
  if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
    return TRANSLATIONS[currentLang][key];
  }
  if (TRANSLATIONS.en && TRANSLATIONS.en[key]) {
    return TRANSLATIONS.en[key];
  }
  return fallback || key;
}

/**
 * Get localized crop info
 */
function getLocalizedCrop(cropKey) {
  if (LOCALIZED_CROPS[cropKey]) {
    const cropLangData = LOCALIZED_CROPS[cropKey][currentLang] || LOCALIZED_CROPS[cropKey].en;
    return cropLangData;
  }
  return null;
}

/**
 * Switch dashboard language
 */
function setLanguage(langCode) {
  if (!NER_LANGUAGES[langCode]) {
    console.warn("Unsupported language code:", langCode);
    return;
  }
  
  currentLang = langCode;
  localStorage.setItem('biopod_ner_lang', langCode);
  
  // Update HTML lang attribute
  document.documentElement.setAttribute('lang', langCode);
  
  // Play sound if available
  if (window.sound && typeof window.sound.success === 'function') {
    window.sound.success();
  }
  
  // Re-translate all DOM elements
  applyTranslationsToDOM();
  
  // Update crop display
  if (typeof window.selectCrop === 'function' && window.state) {
    window.selectCrop(window.state.selectedCropKey);
  }
  
  // Update current language code pill in header
  const codeEl = document.getElementById('current-lang-code');
  if (codeEl) {
    codeEl.innerText = NER_LANGUAGES[langCode].code.toUpperCase();
  }
  
  const nameEl = document.getElementById('current-lang-name');
  if (nameEl) {
    nameEl.innerText = NER_LANGUAGES[langCode].nativeName;
  }

  // Update active state in language modal
  updateLangModalSelection();
  
  // Show localized toast
  if (typeof window.showToast === 'function') {
    const langObj = NER_LANGUAGES[langCode];
    window.showToast(
      langObj.nativeName,
      `${langObj.name} (${langObj.state}) - ${t('modal_lang_title')}`
    );
  }
}

/**
 * Update all DOM elements with [data-i18n]
 */
function applyTranslationsToDOM() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
      // Check if tag contains icons or children
      if (el.children.length === 0) {
        el.innerText = TRANSLATIONS[currentLang][key];
      } else {
        // If element has icon span, preserve it
        const icon = el.querySelector('.material-symbols-outlined');
        const textSpan = el.querySelector('.i18n-text') || el.querySelector('.nav-label');
        if (textSpan) {
          textSpan.innerText = TRANSLATIONS[currentLang][key];
        } else if (icon) {
          const iconHtml = icon.outerHTML;
          el.innerHTML = `${iconHtml} ${TRANSLATIONS[currentLang][key]}`;
        } else {
          el.innerText = TRANSLATIONS[currentLang][key];
        }
      }
    }
  });

  // Translate placeholders and titles
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (key) el.setAttribute('title', t(key));
  });

  // Translate Crop Selector dropdown options
  const cropSelect = document.getElementById('crop-selector');
  if (cropSelect) {
    const cropKeys = ['potato', 'naga_chilli', 'mushroom', 'cabbage', 'tomato', 'ginger'];
    const emojis = { potato: '🥔', naga_chilli: '🌶️', mushroom: '🍄', cabbage: '🥬', tomato: '🍅', ginger: '🫚' };
    
    cropSelect.querySelectorAll('option').forEach(opt => {
      const key = opt.value;
      const locCrop = getLocalizedCrop(key);
      if (locCrop) {
        opt.innerText = `${emojis[key] || '🌱'} ${locCrop.name} (${locCrop.origin})`;
      }
    });
  }
}

/**
 * Update the modal UI to highlight active language card
 */
function updateLangModalSelection() {
  const cards = document.querySelectorAll('.lang-card-item');
  cards.forEach(card => {
    const code = card.getAttribute('data-lang');
    if (code === currentLang) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}

/**
 * Speak Current Crop Advisory in the selected regional language (Agri-Voice Assist)
 */
function speakCurrentCropAdvisory() {
  if (!window.state) return;
  const cropKey = window.state.selectedCropKey;
  const locCrop = getLocalizedCrop(cropKey);
  const langObj = NER_LANGUAGES[currentLang] || NER_LANGUAGES.en;
  
  if (!locCrop) return;

  const textToSpeak = `${locCrop.name}. ${t('ai_optimal_temp')}: ${window.state.chamber.targetTemp} °C. ${t('ai_target_rh')}: ${window.state.chamber.targetRH} %. ${locCrop.bioNotes}`;
  
  if (window.sound && typeof window.sound.aiChirp === 'function') {
    window.sound.aiChirp();
  }

  // Visual button pulse feedback
  const voiceBtn = document.getElementById('btn-voice-crop');
  if (voiceBtn) {
    voiceBtn.classList.add('speaking-active');
  }

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // Stop prior
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = langObj.voiceLang || 'en-IN';
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    
    utterance.onend = () => {
      if (voiceBtn) voiceBtn.classList.remove('speaking-active');
    };
    utterance.onerror = () => {
      if (voiceBtn) voiceBtn.classList.remove('speaking-active');
    };
    
    window.speechSynthesis.speak(utterance);
    
    if (typeof window.showToast === 'function') {
      window.showToast(`Agri-Voice Assist (${langObj.nativeName})`, `Reading advisory for ${locCrop.name}...`);
    }
  } else {
    if (typeof window.showToast === 'function') {
      window.showToast("Voice Synthesis", textToSpeak);
    }
    setTimeout(() => {
      if (voiceBtn) voiceBtn.classList.remove('speaking-active');
    }, 2000);
  }
}

/**
 * Open/Close Regional Language Modal
 */
function openLanguageModal() {
  if (window.sound && typeof window.sound.click === 'function') {
    window.sound.click();
  }
  const modal = document.getElementById('language-modal');
  if (modal) {
    updateLangModalSelection();
    modal.classList.add('open');
  }
}

function closeLanguageModal() {
  if (window.sound && typeof window.sound.click === 'function') {
    window.sound.click();
  }
  const modal = document.getElementById('language-modal');
  if (modal) {
    modal.classList.remove('open');
  }
}

// Attach to window object
window.NER_LANGUAGES = NER_LANGUAGES;
window.TRANSLATIONS = TRANSLATIONS;
window.LOCALIZED_CROPS = LOCALIZED_CROPS;
window.t = t;
window.getLocalizedCrop = getLocalizedCrop;
window.setLanguage = setLanguage;
window.applyTranslationsToDOM = applyTranslationsToDOM;
window.speakCurrentCropAdvisory = speakCurrentCropAdvisory;
window.openLanguageModal = openLanguageModal;
window.closeLanguageModal = closeLanguageModal;
