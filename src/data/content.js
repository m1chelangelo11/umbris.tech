const BRAND = 'Rozpierdlalamy Polską Zbrojeniówkę.'

export const COMPANY = {
  name: BRAND,
  legalName: 'Umbris Sp. z o.o.',
  tagline: 'Ochrona przed dronami w czasie rzeczywistym',
  heroTitle: `Umbris`,
  heroSubtitle:
    'Rozwiązania przeciwko dronom dla infrastruktury krytycznej, przemysłu i instytucji',
  heroMeta: 'Projektujemy i wdrażamy systemy detekcji dronów w czasie rzeczywistym',
  scrollLabel: 'Przewiń, aby dowiedzieć się więcej',
  missionQuote:
    'Bezpieczna przestrzeń nie zaczyna się od reakcji na incydent - zaczyna się od wczesnego wykrycia.',
  missionAuthor: 'Zespół Rozpierdlalamy Polską Zbrojeniówkę',
  missionRole: 'Systemy antydrone',
}

export const ASSETS = {
  heroVideo:
    '/YTDown_YouTube_Drone-racing-footage-of-abandoned-coal-f_Media_CpXa8K1BhI_001_1080p.mp4',
  solutionVideos: {
    detection:
      'https://framerusercontent.com/assets/GxhkDLcDBfujafaVJCiFKoxE.webm',
    neutralization:
      'https://framerusercontent.com/assets/lL79Fmd1Pvt2WDRdt11xdoPD3Uw.webm',
    integration:
      'https://framerusercontent.com/assets/n4xIX9MPpD5lGFog1WLZ2I2UQyY.webm',
  },
}

export const NAV_LINKS = [
  { label: 'O nas', href: '#about' },
  { label: 'Zastosowania', href: '#zastosowania' },
]

export const SECTORS = [
  'Obronność',
  'Energetyka',
  'Przemysł',
  'Transport',
  'Lotnictwo',
  'Administracja publiczna',
  'Bezpieczeństwo',
]

export const SOLUTIONS = [
  {
    id: 'detection',
    anchor: 'wykrywanie',
    label: 'Wykrywanie',
    title: 'Wczesne wykrywanie zagrożeń z powietrza',
    accent: 'bg-orange',
    topics: [
      'Fuzja sygnałów RF, radarowych i optycznych',
      'Klasyfikacja dronów i rozpoznawanie trajektorii',
      'Mapowanie stref chronionych i alertów',
      'Integracja z istniejącym monitoringiem obiektu',
      'Rejestr zdarzeń i raportowanie incydentów',
    ],
    cta: 'Poznaj moduł wykrywania',
    video: ASSETS.solutionVideos.detection,
  },
  {
    id: 'neutralization',
    anchor: 'neutralizacja',
    label: 'Neutralizacja',
    title: 'Skuteczna reakcja na nieautoryzowany lot',
    accent: 'bg-purple',
    topics: [
      'Tłumienie łącza i zakłócenia sterowania',
      'Procedury eskalacji zgodne z regulacjami',
      'Automatyczne i ręczne tryby reakcji',
      'Minimalizacja wpływu na otoczenie',
      'Współpraca z służbami i ochroną obiektu',
    ],
    cta: 'Poznaj moduł neutralizacji',
    video: ASSETS.solutionVideos.neutralization,
  },
  {
    id: 'integration',
    anchor: 'integracja',
    label: 'Integracja',
    title: 'Jedno centrum dowodzenia ochroną',
    accent: 'bg-teal',
    topics: [
      'Scalenie sensorów i efektorów w jednym UI',
      'Integracja z CCTV, BMS i systemami alarmowymi',
      'API dla SOC i centrów bezpieczeństwa',
      'Role, uprawnienia i audyt operatorów',
      'Wdrożenie on-premise, edge lub hybrydowe',
    ],
    cta: 'Poznaj platformę integracyjną',
    video: ASSETS.solutionVideos.integration,
  },
]

export const SOLUTION_LINKS = SOLUTIONS.map(({ label, anchor }) => ({
  label,
  href: `#${anchor}`,
}))

export const USE_CASES = [
  {
    sector: 'Energetyka',
    title: 'Ochrona elektrowni i linii przesyłowych',
    description:
      'Jak zabezpieczyć rozległy obiekt przed rozpoznaniem i atakiem z powietrza bez zakłócania pracy instalacji?',
    status: 'Zapytaj o wdrożenie',
  },
  {
    sector: 'Przemysł',
    title: 'Zabezpieczenie zakładów produkcyjnych',
    description:
      'Jak chronić tajemnice technologiczne i procesy przed dronami rozpoznawczymi nad halami i magazynami?',
    status: 'Zapytaj o wdrożenie',
  },
  {
    sector: 'Lotnictwo',
    title: 'Strefy zakazu lotów wokół portów lotniczych',
    description:
      'Jak wykrywać i reagować na wtargnięcia BSP w strefie operacyjnej lotniska i jego otoczeniu?',
    status: 'Zapytaj o wdrożenie',
  },
  {
    sector: 'Wydarzenia',
    title: 'Ochrona imprez masowych',
    description:
      'Jak zapewnić bezpieczeństwo tłumu podczas koncertów, manifestacji i wydarzeń sportowych?',
    status: 'Zapytaj o wdrożenie',
  },
  {
    sector: 'Obronność',
    title: 'Obiekty wojskowe i strategiczne',
    description:
      'Jak zbudować wielowarstwową osłonę przeciw BSP w środowisku o podwyższonym poziomie zagrożenia?',
    status: 'Zapytaj o wdrożenie',
  },
  {
    sector: 'Administracja',
    title: 'Obiekty rządowe i dyplomatyczne',
    description:
      'Jak chronić budynki o podwyższonej wrażliwości przed nadzorem i dostawami z powietrza?',
    status: 'Zapytaj o wdrożenie',
  },
]

export const COMPANY_STATS = [
  { value: '360°', label: 'Monitoring przestrzeni wokół obiektu' },
  { value: '<3 s', label: 'Czas reakcji systemu od wykrycia' },
  { value: '24/7', label: 'Ciągła praca i wsparcie operacyjne' },
]
