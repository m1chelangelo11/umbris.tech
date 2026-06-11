export const COMPANY = {
  name: 'UMBRIS',
  legalName: 'Umbris Sp. z o.o.',
  email: 'kontakt@umbris.tech',
}

export const NAV_LINKS = [
  { key: 'nav_about', href: '#about' },
  { key: 'nav_sol', href: '#solutions' },
  { key: 'nav_sys', href: '#system' },
  { key: 'nav_cases', href: '#cases' },
  { key: 'nav_proc', href: '#process' },
]

export const SECTORS = {
  pl: ['Obronność', 'Energetyka', 'Przemysł', 'Transport', 'Lotnictwo', 'Administracja publiczna', 'Bezpieczeństwo'],
  en: ['Defense', 'Energy', 'Industry', 'Transport', 'Aviation', 'Public administration', 'Security'],
}

export const STATS = [
  {
    value: '>1000',
    label: {
      pl: 'Węzłów w jednej sieci',
      en: 'Nodes in one network',
    },
    extra: {
      pl: 'Skalowalna architektura: każdy nowy węzeł automatycznie rozszerza pokrycie i poprawia dokładność detekcji.',
      en: 'Scalable architecture: every new node automatically extends coverage and improves detection accuracy.',
    },
  },
  {
    value: '2 km',
    label: {
      pl: 'Zasięg węzła przekaźnikowego',
      en: 'Relay node range',
    },
    extra: {
      pl: 'Węzły Meshtastic tworzą samoorganizującą się sieć bez zależności od infrastruktury telekomunikacyjnej.',
      en: 'Meshtastic nodes form a self-organizing network with no dependency on telecom infrastructure.',
    },
  },
  {
    value: '24/7',
    label: {
      pl: 'Ciągła praca i wsparcie',
      en: 'Continuous operation',
    },
    extra: {
      pl: 'System działa offline — bez internetu, bez chmury. Edge AI inferencja bezpośrednio na węźle.',
      en: 'The system operates offline — no internet, no cloud. Edge AI inference runs directly on the node.',
    },
  },
  {
    value: '98%',
    label: {
      pl: 'Skuteczność collaborative sensing',
      en: 'Collaborative sensing accuracy',
    },
    extra: {
      pl: 'Fuzja sygnałów z wielu węzłów podnosi confidence detekcji ponad poziom jakiegokolwiek pojedynczego sensora.',
      en: "Signal fusion from multiple nodes raises detection confidence beyond any single sensor's capability.",
    },
  },
]

export const SOLUTIONS = [
  {
    id: 'sensing',
    name: {
      pl: 'Detekcja kooperatywna',
      en: 'Collaborative Sensing',
    },
    subtitle: {
      pl: 'Wiele węzłów, jeden spójny obraz sytuacyjny',
      en: 'Many nodes, one coherent situational picture',
    },
    topics: [
      {
        pl: 'Node A: RF/SDR — Node B: radar mmWave — Node C: kamera',
        en: 'Node A: RF/SDR — Node B: mmWave radar — Node C: camera',
      },
      {
        pl: 'Fuzja danych z wielu węzłów → 95%+ confidence',
        en: 'Data fusion from multiple nodes → 95%+ confidence',
      },
      {
        pl: 'Automatyczna identyfikacja i klasyfikacja zagrożeń',
        en: 'Automatic threat identification and classification',
      },
      {
        pl: 'Eliminacja fałszywych alarmów przez cross-validation',
        en: 'False alarm elimination through cross-validation',
      },
      {
        pl: 'Każdy węzeł widzi fragment — razem widzą wszystko',
        en: 'Each node sees a fragment — together they see everything',
      },
    ],
  },
  {
    id: 'edge-ai',
    name: {
      pl: 'Edge AI',
      en: 'Edge AI',
    },
    subtitle: {
      pl: 'Inferencja AI bezpośrednio na węźle — bez chmury',
      en: 'AI inference directly on the node — no cloud',
    },
    topics: [
      {
        pl: 'Lokalne modele ML na każdym węźle sensorycznym',
        en: 'Local ML models on every sensor node',
      },
      {
        pl: 'Federated learning — sieć uczy się jako całość',
        en: 'Federated learning — the network learns as a whole',
      },
      {
        pl: 'Klasyfikacja: drony, śmigłowce, pojazdy, strzały',
        en: 'Classification: drones, helicopters, vehicles, gunshots',
      },
      {
        pl: 'Zero zależności od łączności z centrum',
        en: 'Zero dependency on connectivity to the command center',
      },
      {
        pl: 'Integracja z C2 przez API gdy dostępna łączność',
        en: 'C2 API integration when connectivity is available',
      },
    ],
  },
  {
    id: 'mesh',
    name: {
      pl: 'Sieć Meshtastic',
      en: 'Meshtastic Mesh',
    },
    subtitle: {
      pl: 'Samoorganizująca się sieć do 1000 węzłów',
      en: 'Self-organizing network of up to 1,000 nodes',
    },
    topics: [
      {
        pl: 'Zasięg: 2 km (przekaźnikowy), 1 km (detekcyjny)',
        en: 'Range: 2 km (relay), 1 km (detection)',
      },
      {
        pl: 'Brak zależności od internetu ani infrastruktury GSM',
        en: 'No dependency on internet or GSM infrastructure',
      },
      {
        pl: 'Automatyczna rekonfiguracja przy utracie węzła',
        en: 'Automatic reconfiguration on node loss',
      },
      {
        pl: 'Działa w środowiskach GPS-denied i RF-degraded',
        en: 'Operates in GPS-denied and RF-degraded environments',
      },
      {
        pl: 'Niski koszt węzła: hardware komercyjny klasy COTS',
        en: 'Low node cost: commercial off-the-shelf (COTS) hardware',
      },
    ],
  },
  {
    id: 'integration',
    name: {
      pl: 'Integracja',
      en: 'Integration',
    },
    subtitle: {
      pl: 'Połączenie z istniejącą infrastrukturą C2 i wywiadowczą',
      en: 'Connectivity with existing C2 and intelligence infrastructure',
    },
    topics: [
      {
        pl: 'Natywna integracja z TAK (ATAK / WinTAK / iTAK)',
        en: 'Native integration with TAK (ATAK / WinTAK / iTAK)',
      },
      {
        pl: 'Eksport danych w formacie CoT (Cursor on Target)',
        en: 'Data export in CoT (Cursor on Target) format',
      },
      {
        pl: 'API dla systemów SOC, PSIM i BMS',
        en: 'API for SOC, PSIM and BMS systems',
      },
      {
        pl: 'Integracja z CCTV i istniejącym monitoringiem',
        en: 'Integration with CCTV and existing surveillance',
      },
      {
        pl: 'Wdrożenie on-premise, edge lub hybrydowe',
        en: 'On-premise, edge, or hybrid deployment',
      },
    ],
  },
]

export const SYSTEM_LAYERS = [
  {
    label: {
      pl: 'Warstwa sensoryczna',
      en: 'Sensor layer',
    },
    nodes: [
      { pl: 'SDR / RF', en: 'SDR / RF' },
      { pl: 'Radar mmWave', en: 'mmWave radar' },
      { pl: 'Kamera optyczna', en: 'Optical camera' },
      { pl: 'Mikrofon MEMS', en: 'MEMS microphone' },
    ],
  },
  {
    label: {
      pl: 'Przetwarzanie sygnałów',
      en: 'Signal processing',
    },
    nodes: [
      { pl: 'Fuzja sygnałów', en: 'Signal fusion' },
      { pl: 'Klasyfikacja AI', en: 'AI classification' },
      { pl: 'Geolokalizacja BSP', en: 'UAV geolocation' },
    ],
  },
  {
    label: {
      pl: 'Łączność operacyjna',
      en: 'Operational comms',
    },
    nodes: [
      { pl: 'Szyfrowany kanał', en: 'Encrypted channel' },
      { pl: 'Protokół Meshtastic', en: 'Meshtastic protocol' },
      { pl: 'API integracyjne', en: 'Integration API' },
    ],
  },
  {
    label: {
      pl: 'Centrum dowodzenia',
      en: 'Command center',
    },
    nodes: [
      { pl: 'C2 Interface', en: 'C2 Interface' },
      { pl: 'Mapa zagrożeń', en: 'Threat map' },
      { pl: 'System alertów', en: 'Alert system' },
    ],
  },
]

export const CASES = [
  {
    sector: { pl: 'Energetyka', en: 'Energy' },
    title: {
      pl: 'Ochrona elektrowni i linii przesyłowych',
      en: 'Protection of power plants and transmission lines',
    },
    description: {
      pl: 'DetMesh monitoruje elektrownie i linie przesyłowe w czasie rzeczywistym — wykrywając zagrożenia z powietrza bez zakłócania pracy instalacji.',
      en: 'DetMesh monitors power plants and transmission lines in real time — detecting aerial threats without disrupting facility operations.',
    },
  },
  {
    sector: { pl: 'Przemysł', en: 'Industry' },
    title: {
      pl: 'Zabezpieczenie zakładów produkcyjnych',
      en: 'Securing manufacturing facilities',
    },
    description: {
      pl: 'DetMesh zabezpiecza zakłady produkcyjne przed szpiegostwem przemysłowym i nieautoryzowanym nadzorem z powietrza.',
      en: 'DetMesh protects manufacturing facilities against industrial espionage and unauthorized aerial surveillance.',
    },
  },
  {
    sector: { pl: 'Lotnictwo', en: 'Aviation' },
    title: {
      pl: 'Strefy zakazu lotów wokół portów lotniczych',
      en: 'No-fly zones around airports',
    },
    description: {
      pl: 'DetMesh wykrywa i klasyfikuje wtargnięcia BSP w strefach operacyjnych lotnisk, umożliwiając szybką reakcję służb z minimalnym zakłóceniem ruchu.',
      en: 'DetMesh detects and classifies UAV intrusions in airport operational zones, enabling rapid response with minimal disruption.',
    },
  },
  {
    sector: { pl: 'Wydarzenia', en: 'Events' },
    title: {
      pl: 'Ochrona imprez masowych',
      en: 'Protection of mass gatherings',
    },
    description: {
      pl: 'Podczas imprez masowych DetMesh zapewnia pełny monitoring przestrzeni powietrznej i natychmiastowy alert dla służb bezpieczeństwa.',
      en: 'During mass gatherings, DetMesh provides full airspace monitoring and instant alerts for security services.',
    },
  },
  {
    sector: { pl: 'Obronność', en: 'Defense' },
    title: {
      pl: 'Obiekty wojskowe i strategiczne',
      en: 'Military and strategic facilities',
    },
    description: {
      pl: 'DetMesh buduje wielowarstwową osłonę anty-BSP dla obiektów wojskowych i strategicznych operujących w środowiskach wysokiego ryzyka.',
      en: 'DetMesh builds multi-layer anti-UAV protection for military and strategic facilities operating in high-threat environments.',
    },
  },
  {
    sector: { pl: 'Administracja', en: 'Government' },
    title: {
      pl: 'Obiekty rządowe i dyplomatyczne',
      en: 'Government and diplomatic facilities',
    },
    description: {
      pl: 'Obiekty rządowe i dyplomatyczne zyskują ochronę przed nadzorem z powietrza, nieautoryzowanymi dostawami i zagrożeniami hybrydowymi.',
      en: 'Government and diplomatic facilities gain protection against aerial surveillance, unauthorized deliveries and hybrid threats.',
    },
  },
]

export const PROCESS_STEPS = [
  {
    name: { pl: 'Konsultacja', en: 'Consultation' },
    description: {
      pl: 'Poznajemy obiekt, analizujemy zagrożenia i definiujemy wymagania operacyjne wspólnie z klientem.',
      en: 'We assess the facility, analyze threats and define operational requirements together with the client.',
    },
  },
  {
    name: { pl: 'Projekt', en: 'Design' },
    description: {
      pl: 'Dobieramy optymalną konfigurację sensoryczną, opracowujemy architekturę systemu i plan integracji.',
      en: 'We select the optimal sensor configuration and design the system architecture and integration plan.',
    },
  },
  {
    name: { pl: 'Wdrożenie', en: 'Deployment' },
    description: {
      pl: 'Instalujemy, kalibrujemy i testujemy system — włącznie z integracją z istniejącą infrastrukturą obiektu.',
      en: 'We install, calibrate and test the system — including integration with existing facility infrastructure.',
    },
  },
  {
    name: { pl: 'Wsparcie', en: 'Support' },
    description: {
      pl: 'Zapewniamy monitoring, aktualizacje oprogramowania i wsparcie techniczne 24/7 przez cały okres eksploatacji.',
      en: "We provide monitoring, software updates and 24/7 technical support throughout the system's operational life.",
    },
  },
]

export const translations = {
  pl: {
    nav_about: 'O nas',
    nav_sol: 'Moduły',
    nav_sys: 'Architektura',
    nav_cases: 'Zastosowania',
    nav_proc: 'Proces',
    nav_cta: 'Kontakt',

    hero_label: 'DetMesh · Umbris',
    hero_tagline: 'Każdy węzeł widzi fragment.\nRazem widzą wszystko.',
    hero_cta: 'Kontakt →',
    hero_status: 'System aktywny',

    stat_tag: 'Sieć DetMesh',
    stat_head: 'Skala,\nktórej nikt\nnie ma',
    stat_desc:
      'DetMesh to platforma wywiadowcza nowego rodzaju — oparta na rozproszonej sieci niskokosztowych węzłów sensorycznych połączonych protokołem Meshtastic.',

    about_tag: 'O nas',
    about_q:
      'Nie jedna droga instalacja. Tysiąc tanich węzłów, które razem widzą więcej — i działają tam, gdzie infrastruktura nie dociera.',
    about_p:
      'DetMesh to platforma wywiadowcza oparta na sieci węzłów sensorycznych połączonych protokołem Meshtastic. Każdy węzeł przetwarza dane lokalnie. Collaborative sensing łączy fragmentaryczne obserwacje setek węzłów w spójny obraz przestrzeni powietrznej — bez chmury, bez centralnego serwera.',
    about_adv_hd: 'Kluczowe przewagi',
    about_adv1: 'Mesh zamiast jednej instalacji — skaluj od 1 do 1000 węzłów',
    about_adv2: 'Edge AI bez chmury — inferencja lokalna, działa offline',
    about_adv3: 'Natywna integracja z TAK (ATAK, WinTAK, iTAK)',
    about_adv4: 'COTS hardware — niski koszt wdrożenia i utrzymania',
    about_adv5: 'Wielozagrożeniowa detekcja — drony, śmigłowce, pojazdy, strzały, emisje RF',

    sol_tag: 'Rozwiązania',
    sol_h: 'Moduły systemu',

    sys_tag: 'Architektura',
    sys_h: 'Jak to działa',

    cases_tag: 'Zastosowania',
    cases_h: 'Gdzie chronimy',

    proc_tag: 'Proces',
    proc_h: 'Jak wdrażamy',

    ct_h: 'Wdróżmy DetMesh\nw Twoim\nśrodowisku',
    ct_p: 'Skontaktuj się z nami, żeby omówić wdrożenie — od konsultacji do operacyjnej sieci węzłów.',

    foot_c: '© 2026 Umbris Sp. z o.o.',
  },
  en: {
    nav_about: 'About',
    nav_sol: 'Modules',
    nav_sys: 'Architecture',
    nav_cases: 'Applications',
    nav_proc: 'Process',
    nav_cta: 'Contact',

    hero_label: 'DetMesh · Umbris',
    hero_tagline: 'Each node sees a fragment.\nTogether they see everything.',
    hero_cta: 'Contact →',
    hero_status: 'System active',

    stat_tag: 'DetMesh Network',
    stat_head: 'Scale\nnobody\nelse has',
    stat_desc:
      'DetMesh is a new-generation airspace intelligence platform built on a distributed network of low-cost sensor nodes connected via Meshtastic.',

    about_tag: 'About us',
    about_q:
      "Not one expensive installation. A thousand cheap nodes that see more together — operating where infrastructure doesn't reach.",
    about_p:
      'DetMesh is an airspace intelligence platform built on a network of sensor nodes connected via Meshtastic. Each node processes data locally. Collaborative sensing fuses observations from hundreds of nodes into a coherent airspace picture — no cloud, no central server.',
    about_adv_hd: 'Key advantages',
    about_adv1: 'Mesh instead of a single installation — scale from 1 to 1,000 nodes',
    about_adv2: 'Edge AI without cloud — local inference, works offline',
    about_adv3: 'Native TAK integration (ATAK, WinTAK, iTAK)',
    about_adv4: 'COTS hardware — low deployment and maintenance cost',
    about_adv5: 'Multi-threat detection — drones, helicopters, vehicles, gunshots, RF emissions',

    sol_tag: 'Solutions',
    sol_h: 'System modules',

    sys_tag: 'Architecture',
    sys_h: 'How it works',

    cases_tag: 'Applications',
    cases_h: 'Where we protect',

    proc_tag: 'Process',
    proc_h: 'How we deploy',

    ct_h: 'Deploy DetMesh\nin your\nenvironment',
    ct_p: 'Get in touch to discuss deployment — from consultation to an operational network of nodes.',

    foot_c: '© 2026 Umbris Sp. z o.o.',
  },
}
