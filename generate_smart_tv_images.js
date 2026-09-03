const sharp = require('sharp');

async function generateSmartTvImages() {
  // 1. Hero Image
  const heroSvg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#060810"/>
        <stop offset="50%" stop-color="#0f172a"/>
        <stop offset="100%" stop-color="#060810"/>
      </linearGradient>
      <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#38bdf8"/>
        <stop offset="50%" stop-color="#818cf8"/>
        <stop offset="100%" stop-color="#c084fc"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <path d="M0 100 H1200 M0 200 H1200 M0 300 H1200 M0 400 H1200 M0 500 H1200" stroke="#1e293b" stroke-width="1" opacity="0.25"/>
    <path d="M200 0 V630 M400 0 V630 M600 0 V630 M800 0 V630 M1000 0 V630" stroke="#1e293b" stroke-width="1" opacity="0.25"/>

    <rect x="80" y="60" width="200" height="36" rx="18" fill="#060810" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="180" y="83" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#38bdf8" text-anchor="middle" letter-spacing="2">STRIMO IPTV GUIDE</text>

    <text x="80" y="160" font-family="system-ui, sans-serif" font-size="40" font-weight="900" fill="#ffffff">Best IPTV Apps for Smart TV in 2026</text>
    <text x="80" y="205" font-family="system-ui, sans-serif" font-size="22" font-weight="500" fill="#94a3b8">Samsung Tizen • LG webOS • Android TV &amp; Google TV</text>

    <!-- Platform Badges -->
    <g transform="translate(80, 255)">
      <rect width="150" height="50" rx="12" fill="#0284c7" opacity="0.2" stroke="#0284c7" stroke-width="1.5"/>
      <text x="75" y="31" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#38bdf8" text-anchor="middle">SAMSUNG TV</text>
    </g>
    <g transform="translate(245, 255)">
      <rect width="150" height="50" rx="12" fill="#e11d48" opacity="0.2" stroke="#f43f5e" stroke-width="1.5"/>
      <text x="75" y="31" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#fb7185" text-anchor="middle">LG WEBOS</text>
    </g>
    <g transform="translate(410, 255)">
      <rect width="150" height="50" rx="12" fill="#16a34a" opacity="0.2" stroke="#22c55e" stroke-width="1.5"/>
      <text x="75" y="31" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#4ade80" text-anchor="middle">ANDROID TV</text>
    </g>

    <!-- Large Smart TV Mockup Right -->
    <g transform="translate(600, 230)">
      <rect x="0" y="0" width="520" height="320" rx="16" fill="#0f172a" stroke="#334155" stroke-width="3"/>
      <rect x="0" y="0" width="520" height="42" rx="16" fill="#1e293b"/>
      <text x="260" y="27" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#cbd5e1" text-anchor="middle">Smart TV IPTV Player Interface • 4K HDR</text>

      <!-- TV Screen EPG Layout -->
      <rect x="20" y="60" width="140" height="240" rx="8" fill="#1e293b"/>
      <rect x="30" y="75" width="120" height="28" rx="6" fill="#0284c7"/>
      <text x="40" y="94" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#ffffff">Smart IPTV</text>
      <rect x="30" y="115" width="120" height="28" rx="6" fill="#334155"/>
      <text x="40" y="134" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">IBO Player</text>
      <rect x="30" y="155" width="120" height="28" rx="6" fill="#334155"/>
      <text x="40" y="174" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Net IPTV</text>
      <rect x="30" y="195" width="120" height="28" rx="6" fill="#334155"/>
      <text x="40" y="214" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">TiviMate / Smarters</text>

      <!-- Main Video Screen -->
      <rect x="175" y="60" width="325" height="180" rx="8" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.5"/>
      <text x="337" y="140" font-family="system-ui, sans-serif" font-size="22" font-weight="900" fill="#ffffff" text-anchor="middle">ULTRA HD 4K</text>
      <rect x="175" y="250" width="325" height="50" rx="8" fill="#1e293b"/>
      <text x="190" y="280" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#818cf8">Live EPG Data • Xtream Codes API</text>
    </g>

    <!-- Bottom Text Left -->
    <text x="80" y="360" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#ffffff">App Compatibility &amp; Player Feature Comparison</text>
    <text x="80" y="390" font-family="system-ui, sans-serif" font-size="14" fill="#94a3b8">• Smart TV Operating System Analysis (Tizen vs webOS vs Android)</text>
    <text x="80" y="415" font-family="system-ui, sans-serif" font-size="14" fill="#94a3b8">• EPG Support, M3U Playlists &amp; Xtream API Integration</text>
    <text x="80" y="440" font-family="system-ui, sans-serif" font-size="14" fill="#94a3b8">• Remote Control Navigation &amp; Playback Optimization</text>

    <text x="80" y="535" font-family="system-ui, sans-serif" font-size="14" fill="#64748b">Samsung 4K • LG OLED • Sony • Philips • TCL Android TV</text>
  </svg>`;

  await sharp(Buffer.from(heroSvg))
    .webp({ quality: 90 })
    .toFile('./public/strimoiptv-smart-tv-apps-hero.webp');

  // 2. Platform Comparison Infographic
  const platformSvg = `<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="675" fill="#060810"/>

    <text x="600" y="60" font-family="system-ui, sans-serif" font-size="32" font-weight="900" fill="#ffffff" text-anchor="middle">Smart TV IPTV Platform Comparison</text>
    <text x="600" y="95" font-family="system-ui, sans-serif" font-size="16" fill="#94a3b8" text-anchor="middle">Comparing Samsung Tizen, LG webOS &amp; Android TV Ecosystems</text>

    <!-- Samsung Column -->
    <g transform="translate(80, 140)">
      <rect width="320" height="470" rx="16" fill="#0f172a" stroke="#0284c7" stroke-width="2"/>
      <rect x="20" y="20" width="280" height="45" rx="10" fill="#0369a1"/>
      <text x="160" y="48" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#ffffff" text-anchor="middle">SAMSUNG SMART TV</text>
      <text x="160" y="85" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#38bdf8" text-anchor="middle">Tizen OS Platform</text>

      <rect x="20" y="105" width="280" height="345" rx="10" fill="#1e293b" opacity="0.6"/>
      <text x="35" y="135" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#ffffff">Compatible Players:</text>
      <text x="35" y="165" font-family="system-ui, sans-serif" font-size="13" fill="#cbd5e1">• Smart IPTV (SIPTV)</text>
      <text x="35" y="190" font-family="system-ui, sans-serif" font-size="13" fill="#cbd5e1">• IBO Player</text>
      <text x="35" y="215" font-family="system-ui, sans-serif" font-size="13" fill="#cbd5e1">• Net IPTV</text>
      <text x="35" y="240" font-family="system-ui, sans-serif" font-size="13" fill="#cbd5e1">• SS IPTV</text>

      <text x="35" y="285" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#38bdf8">Key Strengths:</text>
      <text x="35" y="315" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">• No external streaming stick needed</text>
      <text x="35" y="340" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">• One remote control setup</text>
      <text x="35" y="365" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">• High quality 4K display engine</text>
      <text x="35" y="410" font-family="system-ui, sans-serif" font-size="11" fill="#64748b">* App availability varies by model &amp; region</text>
    </g>

    <!-- LG Column -->
    <g transform="translate(440, 140)">
      <rect width="320" height="470" rx="16" fill="#0f172a" stroke="#f43f5e" stroke-width="2"/>
      <rect x="20" y="20" width="280" height="45" rx="10" fill="#be123c"/>
      <text x="160" y="48" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#ffffff" text-anchor="middle">LG SMART TV</text>
      <text x="160" y="85" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#fb7185" text-anchor="middle">webOS Platform</text>

      <rect x="20" y="105" width="280" height="345" rx="10" fill="#1e293b" opacity="0.6"/>
      <text x="35" y="135" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#ffffff">Compatible Players:</text>
      <text x="35" y="165" font-family="system-ui, sans-serif" font-size="13" fill="#cbd5e1">• Smart IPTV (SIPTV)</text>
      <text x="35" y="190" font-family="system-ui, sans-serif" font-size="13" fill="#cbd5e1">• IBO Player</text>
      <text x="35" y="215" font-family="system-ui, sans-serif" font-size="13" fill="#cbd5e1">• Net IPTV</text>
      <text x="35" y="240" font-family="system-ui, sans-serif" font-size="13" fill="#cbd5e1">• Home IPTV</text>

      <text x="35" y="285" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#fb7185">Key Strengths:</text>
      <text x="35" y="315" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">• Magic Remote pointer integration</text>
      <text x="35" y="340" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">• Clean webOS card dashboard</text>
      <text x="35" y="365" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">• Integrated LG Content Store</text>
      <text x="35" y="410" font-family="system-ui, sans-serif" font-size="11" fill="#64748b">* App availability depends on store region</text>
    </g>

    <!-- Android TV Column -->
    <g transform="translate(800, 140)">
      <rect width="320" height="470" rx="16" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
      <rect x="20" y="20" width="280" height="45" rx="10" fill="#15803d"/>
      <text x="160" y="48" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#ffffff" text-anchor="middle">ANDROID &amp; GOOGLE TV</text>
      <text x="160" y="85" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#4ade80" text-anchor="middle">Android TV OS</text>

      <rect x="20" y="105" width="280" height="345" rx="10" fill="#1e293b" opacity="0.6"/>
      <text x="35" y="135" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#ffffff">Compatible Players:</text>
      <text x="35" y="165" font-family="system-ui, sans-serif" font-size="13" fill="#cbd5e1">• TiviMate IPTV Player</text>
      <text x="35" y="190" font-family="system-ui, sans-serif" font-size="13" fill="#cbd5e1">• IPTV Smarters Pro</text>
      <text x="35" y="215" font-family="system-ui, sans-serif" font-size="13" fill="#cbd5e1">• XCIPTV Player</text>
      <text x="35" y="240" font-family="system-ui, sans-serif" font-size="13" fill="#cbd5e1">• OTT Navigator IPTV</text>

      <text x="35" y="285" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#4ade80">Key Strengths:</text>
      <text x="35" y="315" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">• Broadest app store ecosystem</text>
      <text x="35" y="340" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">• Cable-style multi-channel EPG grid</text>
      <text x="35" y="365" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">• Deep playback &amp; decoder controls</text>
      <text x="35" y="410" font-family="system-ui, sans-serif" font-size="11" fill="#64748b">Sony, Philips, TCL, Hisense, Chromecast</text>
    </g>
  </svg>`;

  await sharp(Buffer.from(platformSvg))
    .webp({ quality: 90 })
    .toFile('./public/strimoiptv-smart-tv-platforms-comparison.webp');

  // 3. IPTV Workflow Diagram
  const workflowSvg = `<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="675" fill="#060810"/>

    <text x="600" y="60" font-family="system-ui, sans-serif" font-size="30" font-weight="900" fill="#ffffff" text-anchor="middle">Smart TV IPTV Setup Architecture</text>
    <text x="600" y="95" font-family="system-ui, sans-serif" font-size="16" fill="#94a3b8" text-anchor="middle">Connecting Your TV Software to Subscription Credentials &amp; Live Streams</text>

    <!-- Node 1: Smart TV Hardware -->
    <g transform="translate(80, 180)">
      <rect width="220" height="340" rx="16" fill="#0f172a" stroke="#0284c7" stroke-width="2"/>
      <rect x="20" y="20" width="180" height="36" rx="8" fill="#0369a1"/>
      <text x="110" y="43" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">1. TV PLATFORM</text>
      <text x="110" y="100" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#ffffff" text-anchor="middle">Smart TV OS</text>
      <text x="110" y="125" font-family="system-ui, sans-serif" font-size="12" fill="#38bdf8" text-anchor="middle">Tizen / webOS / Android</text>

      <rect x="15" y="150" width="190" height="155" rx="10" fill="#1e293b" opacity="0.6"/>
      <text x="25" y="180" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">• App Store Integration</text>
      <text x="25" y="205" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">• Hardware 4K Decoders</text>
      <text x="25" y="230" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">• TV Remote Commands</text>
      <text x="25" y="255" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">• Network Interface</text>
    </g>

    <!-- Arrow 1 -->
    <path d="M315 350 L355 350" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/>
    <polygon points="355,342 370,350 355,358" fill="#38bdf8"/>

    <!-- Node 2: App Download -->
    <g transform="translate(385, 180)">
      <rect width="220" height="340" rx="16" fill="#0f172a" stroke="#818cf8" stroke-width="2"/>
      <rect x="20" y="20" width="180" height="36" rx="8" fill="#4f46e5"/>
      <text x="110" y="43" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">2. PLAYER APP</text>
      <text x="110" y="100" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#ffffff" text-anchor="middle">IPTV Player</text>
      <text x="110" y="125" font-family="system-ui, sans-serif" font-size="12" fill="#818cf8" text-anchor="middle">Smart IPTV / TiviMate / etc.</text>

      <rect x="15" y="150" width="190" height="155" rx="10" fill="#1e293b" opacity="0.6"/>
      <text x="25" y="180" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">• Channel List Indexing</text>
      <text x="25" y="205" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">• EPG Timeline Guide</text>
      <text x="25" y="230" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">• Favorites &amp; Groups</text>
      <text x="25" y="255" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">• Media Player Engine</text>
    </g>

    <!-- Arrow 2 -->
    <path d="M620 350 L660 350" stroke="#818cf8" stroke-width="4" stroke-linecap="round"/>
    <polygon points="660,342 675,350 660,358" fill="#818cf8"/>

    <!-- Node 3: Credentials -->
    <g transform="translate(690, 180)">
      <rect width="220" height="340" rx="16" fill="#0f172a" stroke="#c084fc" stroke-width="2"/>
      <rect x="20" y="20" width="180" height="36" rx="8" fill="#7e22ce"/>
      <text x="110" y="43" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">3. CREDENTIALS</text>
      <text x="110" y="100" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#ffffff" text-anchor="middle">Xtream / M3U</text>
      <text x="110" y="125" font-family="system-ui, sans-serif" font-size="12" fill="#c084fc" text-anchor="middle">Provider Subscription</text>

      <rect x="15" y="150" width="190" height="155" rx="10" fill="#1e293b" opacity="0.6"/>
      <text x="25" y="180" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">• Server Portal Host</text>
      <text x="25" y="205" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">• User Name &amp; Password</text>
      <text x="25" y="230" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">• XMLTV EPG Schedule</text>
      <text x="25" y="255" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">• Live Stream Portal</text>
    </g>

    <!-- Arrow 3 -->
    <path d="M925 350 L965 350" stroke="#c084fc" stroke-width="4" stroke-linecap="round"/>
    <polygon points="965,342 980,350 965,358" fill="#c084fc"/>

    <!-- Node 4: Stream Output -->
    <g transform="translate(995, 180)">
      <rect width="125" height="340" rx="16" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
      <text x="62" y="180" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#4ade80" text-anchor="middle" transform="rotate(-90 62 180)">4K LIVE TV &amp; VOD</text>
    </g>
  </svg>`;

  await sharp(Buffer.from(workflowSvg))
    .webp({ quality: 90 })
    .toFile('./public/strimoiptv-smart-tv-workflow-diagram.webp');

  // 4. Decision Guide
  const decisionSvg = `<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="675" fill="#060810"/>

    <text x="600" y="60" font-family="system-ui, sans-serif" font-size="32" font-weight="900" fill="#ffffff" text-anchor="middle">How to Choose the Right Smart TV IPTV App</text>
    <text x="600" y="95" font-family="system-ui, sans-serif" font-size="16" fill="#94a3b8" text-anchor="middle">Matching Your Smart TV Operating System to the Ideal IPTV Player</text>

    <!-- Option 1: Samsung Tizen -->
    <g transform="translate(80, 140)">
      <rect width="490" height="220" rx="16" fill="#0f172a" stroke="#0284c7" stroke-width="2"/>
      <rect x="24" y="20" width="150" height="32" rx="8" fill="#0369a1"/>
      <text x="99" y="41" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">SAMSUNG TIZEN</text>
      <text x="190" y="42" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#ffffff">Smart IPTV / IBO Player</text>

      <text x="24" y="85" font-family="system-ui, sans-serif" font-size="14" fill="#94a3b8">• Install directly from Samsung Smart Hub Store</text>
      <text x="24" y="112" font-family="system-ui, sans-serif" font-size="14" fill="#94a3b8">• Simple playlist upload via MAC address or M3U</text>
      <text x="24" y="139" font-family="system-ui, sans-serif" font-size="14" fill="#94a3b8">• Streamlined remote-control channel navigation</text>

      <rect x="24" y="165" width="442" height="35" rx="8" fill="#1e293b"/>
      <text x="245" y="187" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#38bdf8" text-anchor="middle">Best for direct Samsung TV viewing without external boxes</text>
    </g>

    <!-- Option 2: LG webOS -->
    <g transform="translate(630, 140)">
      <rect width="490" height="220" rx="16" fill="#0f172a" stroke="#f43f5e" stroke-width="2"/>
      <rect x="24" y="20" width="150" height="32" rx="8" fill="#be123c"/>
      <text x="99" y="41" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">LG WEBOS</text>
      <text x="190" y="42" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#ffffff">Smart IPTV / Net IPTV</text>

      <text x="24" y="85" font-family="system-ui, sans-serif" font-size="14" fill="#94a3b8">• Native webOS integration via LG Content Store</text>
      <text x="24" y="112" font-family="system-ui, sans-serif" font-size="14" fill="#94a3b8">• Works with LG Magic Remote pointer &amp; scroll wheel</text>
      <text x="24" y="139" font-family="system-ui, sans-serif" font-size="14" fill="#94a3b8">• Clean channel list layout &amp; fast startup</text>

      <rect x="24" y="165" width="442" height="35" rx="8" fill="#1e293b"/>
      <text x="245" y="187" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#fb7185" text-anchor="middle">Ideal for LG OLED &amp; NanoCell webOS Smart TVs</text>
    </g>

    <!-- Option 3: Android TV -->
    <g transform="translate(80, 395)">
      <rect width="490" height="220" rx="16" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
      <rect x="24" y="20" width="150" height="32" rx="8" fill="#15803d"/>
      <text x="99" y="41" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">ANDROID TV</text>
      <text x="190" y="42" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#ffffff">TiviMate / Smarters Pro</text>

      <text x="24" y="85" font-family="system-ui, sans-serif" font-size="14" fill="#94a3b8">• Full access to Google Play Store app ecosystem</text>
      <text x="24" y="112" font-family="system-ui, sans-serif" font-size="14" fill="#94a3b8">• Support for advanced EPG grids, multi-view &amp; VOD</text>
      <text x="24" y="139" font-family="system-ui, sans-serif" font-size="14" fill="#94a3b8">• Deep playback decoder settings &amp; custom shortcuts</text>

      <rect x="24" y="165" width="442" height="35" rx="8" fill="#1e293b"/>
      <text x="245" y="187" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#4ade80" text-anchor="middle">Best choice for maximum flexibility &amp; advanced EPG</text>
    </g>

    <!-- Option 4: Beginner / Simple -->
    <g transform="translate(630, 395)">
      <rect width="490" height="220" rx="16" fill="#0f172a" stroke="#818cf8" stroke-width="2"/>
      <rect x="24" y="20" width="150" height="32" rx="8" fill="#4f46e5"/>
      <text x="99" y="41" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">EASY SETUP</text>
      <text x="190" y="42" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#ffffff">IPTV Smarters Pro</text>

      <text x="24" y="85" font-family="system-ui, sans-serif" font-size="14" fill="#94a3b8">• Fast login with Xtream Codes API username &amp; password</text>
      <text x="24" y="112" font-family="system-ui, sans-serif" font-size="14" fill="#94a3b8">• Clearly separated Live TV, Movies &amp; Series sections</text>
      <text x="24" y="139" font-family="system-ui, sans-serif" font-size="14" fill="#94a3b8">• StrimoIPTV recommended primary beginner player</text>

      <rect x="24" y="165" width="442" height="35" rx="8" fill="#1e293b"/>
      <text x="245" y="187" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#818cf8" text-anchor="middle">Recommended starting point for straightforward viewing</text>
    </g>
  </svg>`;

  await sharp(Buffer.from(decisionSvg))
    .webp({ quality: 90 })
    .toFile('./public/strimoiptv-smart-tv-player-decision-guide.webp');

  console.log('ALL 4 SMART TV WEBP IMAGES GENERATED SUCCESSFULLY!');
}

generateSmartTvImages().catch(console.error);
