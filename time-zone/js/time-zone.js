/**
 * Spac2 Time Zone - All-in-One Core JavaScript Bundle (time-zone.js)
 * Combines all worldwide timezone data, 3D interactive planetary globe engine,
 * and live world clocks controller.
 */


// Global reference pins for 3D Globe
const GLOBAL_PIN_CITIES = [
  { city: 'Hanoi', country: 'Vietnam', flag: '🇻🇳', tz: 'Asia/Ho_Chi_Minh', lat: 21.0285, lng: 105.8542 },
  { city: 'Tokyo', country: 'Japan', flag: '🇯🇵', tz: 'Asia/Tokyo', lat: 35.6762, lng: 139.6503 },
  { city: 'Seoul', country: 'South Korea', flag: '🇰🇷', tz: 'Asia/Seoul', lat: 37.5665, lng: 126.9780 },
  { city: 'Singapore', country: 'Singapore', flag: '🇸🇬', tz: 'Asia/Singapore', lat: 1.3521, lng: 103.8198 },
  { city: 'Bangkok', country: 'Thailand', flag: '🇹🇭', tz: 'Asia/Bangkok', lat: 13.7563, lng: 100.5018 },
  { city: 'Beijing', country: 'China', flag: '🇨🇳', tz: 'Asia/Shanghai', lat: 39.9042, lng: 116.4074 },
  { city: 'New Delhi', country: 'India', flag: '🇮🇳', tz: 'Asia/Kolkata', lat: 28.6139, lng: 77.2090 },
  { city: 'Dubai', country: 'United Arab Emirates', flag: '🇦🇪', tz: 'Asia/Dubai', lat: 25.2048, lng: 55.2708 },
  { city: 'London', country: 'United Kingdom', flag: '🇬🇧', tz: 'Europe/London', lat: 51.5074, lng: -0.1278 },
  { city: 'Paris', country: 'France', flag: '🇫🇷', tz: 'Europe/Paris', lat: 48.8566, lng: 2.3522 },
  { city: 'Berlin', country: 'Germany', flag: '🇩🇪', tz: 'Europe/Berlin', lat: 52.5200, lng: 13.4050 },
  { city: 'Moscow', country: 'Russia', flag: '🇷🇺', tz: 'Europe/Moscow', lat: 55.7558, lng: 37.6173 },
  { city: 'Vladivostok', country: 'Russia', flag: '🇷🇺', tz: 'Asia/Vladivostok', lat: 43.1155, lng: 131.8855 },
  { city: 'New York', country: 'United States', flag: '🇺🇸', tz: 'America/New_York', lat: 40.7128, lng: -74.0060 },
  { city: 'Los Angeles', country: 'United States', flag: '🇺🇸', tz: 'America/Los_Angeles', lat: 34.0522, lng: -118.2437 },
  { city: 'Chicago', country: 'United States', flag: '🇺🇸', tz: 'America/Chicago', lat: 41.8781, lng: -87.6298 },
  { city: 'Honolulu', country: 'United States', flag: '🇺🇸', tz: 'Pacific/Honolulu', lat: 21.3069, lng: -157.8583 },
  { city: 'Toronto', country: 'Canada', flag: '🇨🇦', tz: 'America/Toronto', lat: 43.6532, lng: -79.3832 },
  { city: 'Vancouver', country: 'Canada', flag: '🇨🇦', tz: 'America/Vancouver', lat: 49.2827, lng: -123.1207 },
  { city: 'Sydney', country: 'Australia', flag: '🇦🇺', tz: 'Australia/Sydney', lat: -33.8688, lng: 151.2093 },
  { city: 'Perth', country: 'Australia', flag: '🇦🇺', tz: 'Australia/Perth', lat: -31.9505, lng: 115.8605 },
  { city: 'Auckland', country: 'New Zealand', flag: '🇳🇿', tz: 'Pacific/Auckland', lat: -36.8485, lng: 174.7633 },
  { city: 'São Paulo', country: 'Brazil', flag: '🇧🇷', tz: 'America/Sao_Paulo', lat: -23.5505, lng: -46.6333 },
  { city: 'Buenos Aires', country: 'Argentina', flag: '🇦🇷', tz: 'America/Argentina/Buenos_Aires', lat: -34.6037, lng: -58.3816 },
  { city: 'Cairo', country: 'Egypt', flag: '🇪🇬', tz: 'Africa/Cairo', lat: 30.0444, lng: 31.2357 },
  { city: 'Johannesburg', country: 'South Africa', flag: '🇿🇦', tz: 'Africa/Johannesburg', lat: -26.2041, lng: 28.0473 },
  { city: 'Kiritimati', country: 'Kiribati', flag: '🇰🇮', tz: 'Pacific/Kiritimati', lat: 1.8709, lng: -157.4278 }
];


// ==========================================
// PART 1: WORLD TIMEZONES & COUNTRIES DATA
// ==========================================
/**
 * Spac2 Time Zone - Complete World Timezones & Countries Database
 * Contains ALL 38 distinct world time zones from UTC-12 to UTC+14
 * with comprehensive country and territory mappings, cities, coordinates,
 * and regional breakdowns for multi-timezone nations in English.
 */

const WORLD_TIMEZONES = [
  {
    id: "utc-12",
    offset: -12,
    offsetStr: "UTC-12:00",
    name: "International Date Line West (IDLW)",
    abbr: "IDLW",
    sampleTz: "Etc/GMT+12",
    lat: 0.1936,
    lng: -176.4769,
    description: "The westernmost time zone on Earth (uninhabited oceanic atolls).",
    countries: [
      { name: "United States (Baker & Howland Islands)", flag: "🇺🇸", capital: "Baker Island", region: "Oceania", note: "United States Minor Outlying Islands in the Pacific" }
    ]
  },
  {
    id: "utc-11",
    offset: -11,
    offsetStr: "UTC-11:00",
    name: "Samoa Standard Time / Niue Time",
    abbr: "SST / NUT",
    sampleTz: "Pacific/Pago_Pago",
    lat: -14.2756,
    lng: -170.7020,
    description: "Covers American Samoa, Niue, and Midway Atoll.",
    countries: [
      { name: "American Samoa (USA)", flag: "🇦🇸", capital: "Pago Pago", region: "Oceania", note: "Unincorporated US territory" },
      { name: "Niue", flag: "🇳🇺", capital: "Alofi", region: "Oceania", note: "Self-governing island state in free association with New Zealand" },
      { name: "Midway Atoll (USA)", flag: "🇺🇲", capital: "Sand Island", region: "Oceania", note: "US National Wildlife Refuge" }
    ]
  },
  {
    id: "utc-10",
    offset: -10,
    offsetStr: "UTC-10:00",
    name: "Hawaii-Aleutian Standard Time / Tahiti Time",
    abbr: "HST / TAHT",
    sampleTz: "Pacific/Honolulu",
    lat: 21.3069,
    lng: -157.8583,
    description: "Covers Hawaii, French Polynesia (Tahiti), and Cook Islands.",
    countries: [
      { name: "United States (Hawaii & Aleutian Islands)", flag: "🇺🇸", capital: "Honolulu", region: "Americas", note: "State of Hawaii and Aleutian Islands west of 169° 30' W" },
      { name: "French Polynesia (Tahiti)", flag: "🇵🇫", capital: "Papeete", region: "Oceania", note: "Society Islands, Tuamotu Archipelago, and Austral Islands" },
      { name: "Cook Islands", flag: "🇨🇰", capital: "Avarua", region: "Oceania", note: "Island nation in free association with New Zealand" }
    ]
  },
  {
    id: "utc-9-30",
    offset: -9.5,
    offsetStr: "UTC-09:30",
    name: "Marquesas Time (MART)",
    abbr: "MART",
    sampleTz: "Pacific/Marquesas",
    lat: -9.7812,
    lng: -139.0817,
    description: "A unique half-hour offset observed in the Marquesas Archipelago.",
    countries: [
      { name: "French Polynesia (Marquesas Islands)", flag: "🇵🇫", capital: "Taiohae", region: "Oceania", note: "Northern archipelago of French Polynesia" }
    ]
  },
  {
    id: "utc-9",
    offset: -9,
    offsetStr: "UTC-09:00",
    name: "Alaska Standard Time / Gambier Time",
    abbr: "AKST / GAMT",
    sampleTz: "America/Anchorage",
    lat: 61.2181,
    lng: -149.9003,
    description: "Encompasses the vast majority of Alaska and the Gambier Islands.",
    countries: [
      { name: "United States (Alaska)", flag: "🇺🇸", capital: "Anchorage / Juneau", region: "Americas", note: "Most of the state of Alaska (AKST/AKDT)" },
      { name: "French Polynesia (Gambier Islands)", flag: "🇵🇫", capital: "Rikitea", region: "Oceania", note: "Gambier archipelago in southeastern French Polynesia" }
    ]
  },
  {
    id: "utc-8",
    offset: -8,
    offsetStr: "UTC-08:00",
    name: "Pacific Standard Time (PST)",
    abbr: "PST / PDT",
    sampleTz: "America/Los_Angeles",
    lat: 34.0522,
    lng: -118.2437,
    description: "West Coast USA (California, Washington), Western Canada (Vancouver), and Tijuana.",
    countries: [
      { name: "United States (Pacific Coast)", flag: "🇺🇸", capital: "Los Angeles / San Francisco / Seattle", region: "Americas", note: "California, Washington, Nevada, Oregon (most), northern Idaho" },
      { name: "Canada (Pacific - BC & Yukon)", flag: "🇨🇦", capital: "Vancouver / Victoria", region: "Americas", note: "British Columbia and Yukon Territory" },
      { name: "Mexico (Baja California)", flag: "🇲🇽", capital: "Tijuana / Mexicali", region: "Americas", note: "State of Baja California (Northwest Zone)" },
      { name: "Pitcairn Islands (UK)", flag: "🇵🇳", capital: "Adamstown", region: "Oceania", note: "British Overseas Territory" }
    ]
  },
  {
    id: "utc-7",
    offset: -7,
    offsetStr: "UTC-07:00",
    name: "Mountain Standard Time (MST)",
    abbr: "MST / MDT",
    sampleTz: "America/Denver",
    lat: 39.7392,
    lng: -104.9903,
    description: "Rocky Mountain region USA, Arizona, Western Canada (Calgary), and Sonora.",
    countries: [
      { name: "United States (Mountain)", flag: "🇺🇸", capital: "Denver / Salt Lake City / Phoenix", region: "Americas", note: "Colorado, Arizona (no DST), Utah, New Mexico, Montana, Wyoming, southern Idaho" },
      { name: "Canada (Mountain - Alberta & NWT)", flag: "🇨🇦", capital: "Calgary / Edmonton", region: "Americas", note: "Alberta, Northwest Territories, parts of Nunavut and BC" },
      { name: "Mexico (Pacific Coast)", flag: "🇲🇽", capital: "Hermosillo / Mazatlán", region: "Americas", note: "Baja California Sur, Nayarit, Sinaloa, Sonora (Pacific Zone)" }
    ]
  },
  {
    id: "utc-6",
    offset: -6,
    offsetStr: "UTC-06:00",
    name: "Central Standard Time (CST) / Central America",
    abbr: "CST / CDT",
    sampleTz: "America/Chicago",
    lat: 41.8781,
    lng: -87.6298,
    description: "Central USA (Chicago, Texas), Mexico City, Manitoba, and all Central America.",
    countries: [
      { name: "United States (Central)", flag: "🇺🇸", capital: "Chicago / Houston / Dallas", region: "Americas", note: "Texas, Illinois, Minnesota, Missouri, Wisconsin, Louisiana, Oklahoma, Kansas, Nebraska, Iowa, Arkansas, Mississippi, Alabama, Dakotas, Tennessee" },
      { name: "Mexico (Central)", flag: "🇲🇽", capital: "Mexico City / Guadalajara / Monterrey", region: "Americas", note: "Federal District and majority of central & eastern states" },
      { name: "Canada (Central)", flag: "🇨🇦", capital: "Winnipeg / Regina", region: "Americas", note: "Manitoba, Saskatchewan (mostly no DST), western Ontario" },
      { name: "Guatemala", flag: "🇬🇹", capital: "Guatemala City", region: "Americas", note: "Entire country" },
      { name: "Costa Rica", flag: "🇨🇷", capital: "San José", region: "Americas", note: "Entire country" },
      { name: "El Salvador", flag: "🇸🇻", capital: "San Salvador", region: "Americas", note: "Entire country" },
      { name: "Honduras", flag: "🇭🇳", capital: "Tegucigalpa", region: "Americas", note: "Entire country" },
      { name: "Nicaragua", flag: "🇳🇮", capital: "Managua", region: "Americas", note: "Entire country" },
      { name: "Belize", flag: "🇧🇿", capital: "Belmopan", region: "Americas", note: "Entire country" },
      { name: "Ecuador (Galápagos Islands)", flag: "🇪🇨", capital: "Puerto Baquerizo Moreno", region: "Americas", note: "Galápagos Archipelago in the Pacific (GALT)" },
      { name: "Chile (Easter Island / Rapa Nui)", flag: "🇨🇱", capital: "Hanga Roa", region: "Americas", note: "Easter Island in the southeastern Pacific (EAST/EASST)" }
    ]
  },
  {
    id: "utc-5",
    offset: -5,
    offsetStr: "UTC-05:00",
    name: "Eastern Standard Time (EST) / Colombia / Peru",
    abbr: "EST / EDT / COT / PET",
    sampleTz: "America/New_York",
    lat: 40.7128,
    lng: -74.0060,
    description: "East Coast USA (New York, Florida, D.C.), Toronto, Colombia, Peru, Ecuador, Cuba.",
    countries: [
      { name: "United States (Eastern)", flag: "🇺🇸", capital: "New York / Washington, D.C. / Miami / Boston", region: "Americas", note: "New York, Florida, Washington D.C., Massachusetts, Pennsylvania, Georgia, Carolinas, Virginia, Ohio, Michigan, New Jersey, Maryland, Connecticut, Indiana" },
      { name: "Canada (Eastern)", flag: "🇨🇦", capital: "Toronto / Ottawa / Montreal", region: "Americas", note: "Ontario (Ottawa, Toronto), Quebec (Montreal, Quebec City), parts of Nunavut" },
      { name: "Colombia", flag: "🇨🇴", capital: "Bogotá / Medellín", region: "Americas", note: "Entire country (COT)" },
      { name: "Peru", flag: "🇵🇪", capital: "Lima / Cusco", region: "Americas", note: "Entire country (PET)" },
      { name: "Ecuador (Continental)", flag: "🇪🇨", capital: "Quito / Guayaquil", region: "Americas", note: "Continental mainland Ecuador (ECT)" },
      { name: "Panama", flag: "🇵🇦", capital: "Panama City", region: "Americas", note: "Entire country" },
      { name: "Cuba", flag: "🇨🇺", capital: "Havana", region: "Americas", note: "Entire country" },
      { name: "Jamaica", flag: "🇯🇲", capital: "Kingston", region: "Americas", note: "Entire country" },
      { name: "Haiti", flag: "🇭🇹", capital: "Port-au-Prince", region: "Americas", note: "Entire country" },
      { name: "Bahamas", flag: "🇧🇸", capital: "Nassau", region: "Americas", note: "Entire country" },
      { name: "Mexico (Quintana Roo)", flag: "🇲🇽", capital: "Cancún / Chetumal", region: "Americas", note: "State of Quintana Roo (Southeast Zone)" },
      { name: "Cayman Islands (UK)", flag: "🇰🇾", capital: "George Town", region: "Americas", note: "British Overseas Territory" },
      { name: "Turks and Caicos Islands (UK)", flag: "🇹🇨", capital: "Cockburn Town", region: "Americas", note: "British Overseas Territory" },
      { name: "Brazil (Acre)", flag: "🇧🇷", capital: "Rio Branco", region: "Americas", note: "State of Acre and southwestern Amazonas (ACT)" }
    ]
  },
  {
    id: "utc-4",
    offset: -4,
    offsetStr: "UTC-04:00",
    name: "Atlantic Standard Time (AST) / Venezuela / Bolivia",
    abbr: "AST / BOT / VET / CLT",
    sampleTz: "America/Halifax",
    lat: 44.6488,
    lng: -63.5752,
    description: "Atlantic Canada, Venezuela, Bolivia, Paraguay, Chile, Puerto Rico, and Caribbean.",
    countries: [
      { name: "Canada (Atlantic)", flag: "🇨🇦", capital: "Halifax", region: "Americas", note: "Nova Scotia, New Brunswick, Prince Edward Island, Labrador" },
      { name: "Venezuela", flag: "🇻🇪", capital: "Caracas", region: "Americas", note: "Entire country (VET)" },
      { name: "Bolivia", flag: "🇧🇴", capital: "La Paz / Sucre", region: "Americas", note: "Entire country (BOT)" },
      { name: "Paraguay", flag: "🇵🇾", capital: "Asunción", region: "Americas", note: "Entire country (PYT)" },
      { name: "Chile (Continental)", flag: "🇨🇱", capital: "Santiago / Valparaíso", region: "Americas", note: "Majority of mainland Chile (CLT/CLST)" },
      { name: "Dominican Republic", flag: "🇩🇴", capital: "Santo Domingo", region: "Americas", note: "Entire country" },
      { name: "Puerto Rico (USA)", flag: "🇵🇷", capital: "San Juan", region: "Americas", note: "Commonwealth territory of the United States" },
      { name: "Brazil (Amazon Time)", flag: "🇧🇷", capital: "Manaus / Cuiabá", region: "Americas", note: "Amazonas, Mato Grosso, Mato Grosso do Sul, Rondônia, Roraima (AMT)" },
      { name: "Guyana", flag: "🇬🇾", capital: "Georgetown", region: "Americas", note: "Entire country" },
      { name: "Trinidad and Tobago", flag: "🇹🇹", capital: "Port of Spain", region: "Americas", note: "Entire country" },
      { name: "Barbados", flag: "🇧🇧", capital: "Bridgetown", region: "Americas", note: "Entire country" },
      { name: "Saint Lucia", flag: "🇱🇨", capital: "Castries", region: "Americas", note: "Entire country" },
      { name: "Grenada", flag: "🇬🇩", capital: "St. George's", region: "Americas", note: "Entire country" },
      { name: "Antigua and Barbuda", flag: "🇦🇬", capital: "St. John's", region: "Americas", note: "Entire country" },
      { name: "Dominica", flag: "🇩🇲", capital: "Roseau", region: "Americas", note: "Entire country" },
      { name: "Saint Kitts and Nevis", flag: "🇰🇳", capital: "Basseterre", region: "Americas", note: "Entire country" },
      { name: "Saint Vincent and the Grenadines", flag: "🇻🇨", capital: "Kingstown", region: "Americas", note: "Entire country" },
      { name: "Guadeloupe & Martinique (France)", flag: "🇫🇷", capital: "Fort-de-France", region: "Americas", note: "French overseas departments in the Caribbean" },
      { name: "Aruba & Curaçao (Netherlands)", flag: "🇦🇼", capital: "Oranjestad / Willemstad", region: "Americas", note: "Constituent countries of the Kingdom of the Netherlands" },
      { name: "Bermuda (UK)", flag: "🇧🇲", capital: "Hamilton", region: "Americas", note: "British Overseas Territory in the North Atlantic" },
      { name: "Virgin Islands (US & UK)", flag: "🇻🇮", capital: "Charlotte Amalie / Road Town", region: "Americas", note: "US and British Virgin Islands" }
    ]
  },
  {
    id: "utc-3-30",
    offset: -3.5,
    offsetStr: "UTC-03:30",
    name: "Newfoundland Standard Time (NST)",
    abbr: "NST / NDT",
    sampleTz: "America/St_Johns",
    lat: 47.5615,
    lng: -52.7126,
    description: "The unique half-hour offset for the island of Newfoundland in eastern Canada.",
    countries: [
      { name: "Canada (Newfoundland Island)", flag: "🇨🇦", capital: "St. John's", region: "Americas", note: "Island of Newfoundland (NST/NDT)" }
    ]
  },
  {
    id: "utc-3",
    offset: -3,
    offsetStr: "UTC-03:00",
    name: "Brasília Time / Argentina / Uruguay",
    abbr: "BRT / ART / UYT",
    sampleTz: "America/Sao_Paulo",
    lat: -23.5505,
    lng: -46.6333,
    description: "Eastern South America: Brasília, São Paulo, Rio de Janeiro, Buenos Aires, Montevideo.",
    countries: [
      { name: "Brazil (Brasília Official Time)", flag: "🇧🇷", capital: "Brasília / São Paulo / Rio de Janeiro", region: "Americas", note: "Federal District, São Paulo, Rio de Janeiro, Minas Gerais, South & Northeast states (BRT)" },
      { name: "Argentina", flag: "🇦🇷", capital: "Buenos Aires / Córdoba", region: "Americas", note: "Entire country (ART)" },
      { name: "Uruguay", flag: "🇺🇾", capital: "Montevideo", region: "Americas", note: "Entire country (UYT)" },
      { name: "Chile (Magallanes Region)", flag: "🇨🇱", capital: "Punta Arenas", region: "Americas", note: "Magallanes Region and Chilean Antarctic Territory" },
      { name: "Suriname", flag: "🇸🇷", capital: "Paramaribo", region: "Americas", note: "Entire country" },
      { name: "French Guiana (France)", flag: "🇬🇫", capital: "Cayenne", region: "Americas", note: "French overseas department in South America (GFT)" },
      { name: "Falkland Islands (UK)", flag: "🇫🇰", capital: "Stanley", region: "Americas", note: "British Overseas Territory in the South Atlantic (FKST)" },
      { name: "Greenland (West - Nuuk)", flag: "🇬🇱", capital: "Nuuk", region: "Americas", note: "Capital Nuuk and majority of Greenland population" },
      { name: "Saint Pierre and Miquelon (France)", flag: "🇵🇲", capital: "Saint-Pierre", region: "Americas", note: "French territorial collectivity off the coast of Canada" }
    ]
  },
  {
    id: "utc-2",
    offset: -2,
    offsetStr: "UTC-02:00",
    name: "Fernando de Noronha / South Georgia",
    abbr: "FNT / GST",
    sampleTz: "America/Noronha",
    lat: -3.8547,
    lng: -32.4297,
    description: "Fernando de Noronha archipelago in the Atlantic Ocean.",
    countries: [
      { name: "Brazil (Fernando de Noronha)", flag: "🇧🇷", capital: "Vila dos Remédios", region: "Americas", note: "Atlantic archipelago off northeastern Brazil (FNT)" },
      { name: "South Georgia and South Sandwich Islands (UK)", flag: "🇬🇸", capital: "King Edward Point", region: "Americas", note: "British Overseas Territory in the southern Atlantic" }
    ]
  },
  {
    id: "utc-1",
    offset: -1,
    offsetStr: "UTC-01:00",
    name: "Cape Verde / Azores Time",
    abbr: "CVT / AZOT",
    sampleTz: "Atlantic/Cape_Verde",
    lat: 14.9330,
    lng: -23.5133,
    description: "Island republic of Cape Verde and the Azores Autonomous Region of Portugal.",
    countries: [
      { name: "Cape Verde", flag: "🇨🇻", capital: "Praia", region: "Africa", note: "Entire island nation (CVT)" },
      { name: "Portugal (Azores Islands)", flag: "🇵🇹", capital: "Ponta Delgada", region: "Europe", note: "Autonomous archipelago of the Azores (AZOT/AZOST)" },
      { name: "Greenland (East - Ittoqqortoormiit)", flag: "🇬🇱", capital: "Ittoqqortoormiit", region: "Americas", note: "Eastern settlement of Ittoqqortoormiit" }
    ]
  },
  {
    id: "utc-0",
    offset: 0,
    offsetStr: "UTC+00:00",
    name: "Greenwich Mean Time (GMT) / Western European Time (WET)",
    abbr: "GMT / WET",
    sampleTz: "Europe/London",
    lat: 51.5074,
    lng: -0.1278,
    description: "The global reference meridian (0°): London, Dublin, Lisbon, Iceland, and West Africa.",
    countries: [
      { name: "United Kingdom", flag: "🇬🇧", capital: "London / Edinburgh / Cardiff / Belfast", region: "Europe", note: "England, Scotland, Wales, Northern Ireland (GMT/BST)" },
      { name: "Ireland", flag: "🇮🇪", capital: "Dublin", region: "Europe", note: "Entire country (GMT/IST)" },
      { name: "Portugal (Mainland & Madeira)", flag: "🇵🇹", capital: "Lisbon / Porto / Funchal", region: "Europe", note: "Continental Portugal and Madeira archipelago (WET/WEST)" },
      { name: "Spain (Canary Islands)", flag: "🇪🇸", capital: "Las Palmas / Santa Cruz", region: "Europe", note: "Canary Islands off the northwest African coast (WET/WEST)" },
      { name: "Iceland", flag: "🇮🇸", capital: "Reykjavik", region: "Europe", note: "Entire country (permanent GMT year-round without DST)" },
      { name: "Ghana", flag: "🇬🇭", capital: "Accra", region: "Africa", note: "Entire country" },
      { name: "Senegal", flag: "🇸🇳", capital: "Dakar", region: "Africa", note: "Entire country" },
      { name: "Ivory Coast (Côte d'Ivoire)", flag: "🇨🇮", capital: "Yamoussoukro / Abidjan", region: "Africa", note: "Entire country" },
      { name: "Mali", flag: "🇲🇱", capital: "Bamako", region: "Africa", note: "Entire country" },
      { name: "Guinea", flag: "🇬🇳", capital: "Conakry", region: "Africa", note: "Entire country" },
      { name: "Burkina Faso", flag: "🇧🇫", capital: "Ouagadougou", region: "Africa", note: "Entire country" },
      { name: "Togo", flag: "🇹🇬", capital: "Lomé", region: "Africa", note: "Entire country" },
      { name: "Sierra Leone", flag: "🇸🇱", capital: "Freetown", region: "Africa", note: "Entire country" },
      { name: "Liberia", flag: "🇱🇷", capital: "Monrovia", region: "Africa", note: "Entire country" },
      { name: "Mauritania", flag: "🇲🇷", capital: "Nouakchott", region: "Africa", note: "Entire country" },
      { name: "Gambia", flag: "🇬🇲", capital: "Banjul", region: "Africa", note: "Entire country" },
      { name: "Guinea-Bissau", flag: "🇬🇼", capital: "Bissau", region: "Africa", note: "Entire country" },
      { name: "São Tomé and Príncipe", flag: "🇸🇹", capital: "São Tomé", region: "Africa", note: "Entire country" },
      { name: "Faroe Islands (Denmark)", flag: "🇫🇴", capital: "Tórshavn", region: "Europe", note: "Self-governing territory of the Kingdom of Denmark" },
      { name: "Saint Helena (UK)", flag: "🇸🇭", capital: "Jamestown", region: "Africa", note: "British Overseas Territory in the South Atlantic" }
    ]
  },
  {
    id: "utc+1",
    offset: 1,
    offsetStr: "UTC+01:00",
    name: "Central European Time (CET) / West Africa Time (WAT)",
    abbr: "CET / CEST / WAT",
    sampleTz: "Europe/Paris",
    lat: 48.8566,
    lng: 2.3522,
    description: "Most of Western & Central Europe (France, Germany, Italy, Spain) and West-Central Africa.",
    countries: [
      { name: "France (Metropolitan)", flag: "🇫🇷", capital: "Paris / Lyon / Marseille", region: "Europe", note: "Mainland European France (CET/CEST)" },
      { name: "Germany", flag: "🇩🇪", capital: "Berlin / Frankfurt / Munich", region: "Europe", note: "Entire country" },
      { name: "Italy", flag: "🇮🇹", capital: "Rome / Milan / Venice", region: "Europe", note: "Entire country" },
      { name: "Spain (Peninsular)", flag: "🇪🇸", capital: "Madrid / Barcelona / Valencia", region: "Europe", note: "Mainland Spain and Balearic Islands (CET/CEST)" },
      { name: "Netherlands", flag: "🇳🇱", capital: "Amsterdam / Rotterdam", region: "Europe", note: "European territory" },
      { name: "Belgium", flag: "🇧🇪", capital: "Brussels", region: "Europe", note: "Entire country" },
      { name: "Switzerland", flag: "🇨🇭", capital: "Bern / Zurich / Geneva", region: "Europe", note: "Entire country" },
      { name: "Austria", flag: "🇦🇹", capital: "Vienna", region: "Europe", note: "Entire country" },
      { name: "Poland", flag: "🇵🇱", capital: "Warsaw / Kraków", region: "Europe", note: "Entire country" },
      { name: "Sweden", flag: "🇸🇪", capital: "Stockholm", region: "Europe", note: "Entire country" },
      { name: "Norway", flag: "🇳🇴", capital: "Oslo", region: "Europe", note: "Entire country" },
      { name: "Denmark", flag: "🇩🇰", capital: "Copenhagen", region: "Europe", note: "European territory" },
      { name: "Czech Republic", flag: "🇨🇿", capital: "Prague", region: "Europe", note: "Entire country" },
      { name: "Hungary", flag: "🇭🇺", capital: "Budapest", region: "Europe", note: "Entire country" },
      { name: "Slovakia", flag: "🇸🇰", capital: "Bratislava", region: "Europe", note: "Entire country" },
      { name: "Croatia", flag: "🇭🇷", capital: "Zagreb", region: "Europe", note: "Entire country" },
      { name: "Slovenia", flag: "🇸🇮", capital: "Ljubljana", region: "Europe", note: "Entire country" },
      { name: "Serbia", flag: "🇷🇸", capital: "Belgrade", region: "Europe", note: "Entire country" },
      { name: "Bosnia and Herzegovina", flag: "🇧🇦", capital: "Sarajevo", region: "Europe", note: "Entire country" },
      { name: "Albania", flag: "🇦🇱", capital: "Tirana", region: "Europe", note: "Entire country" },
      { name: "North Macedonia", flag: "🇲🇰", capital: "Skopje", region: "Europe", note: "Entire country" },
      { name: "Montenegro", flag: "🇲🇪", capital: "Podgorica", region: "Europe", note: "Entire country" },
      { name: "Luxembourg", flag: "🇱🇺", capital: "Luxembourg City", region: "Europe", note: "Entire country" },
      { name: "Monaco", flag: "🇲🇨", capital: "Monaco", region: "Europe", note: "Entire country" },
      { name: "Liechtenstein", flag: "🇱🇮", capital: "Vaduz", region: "Europe", note: "Entire country" },
      { name: "Andorra", flag: "🇦🇩", capital: "Andorra la Vella", region: "Europe", note: "Entire country" },
      { name: "San Marino", flag: "🇸🇲", capital: "San Marino", region: "Europe", note: "Entire country" },
      { name: "Vatican City", flag: "🇻🇦", capital: "Vatican City", region: "Europe", note: "Entire country" },
      { name: "Malta", flag: "🇲🇹", capital: "Valletta", region: "Europe", note: "Entire country" },
      { name: "Gibraltar (UK)", flag: "🇬🇮", capital: "Gibraltar", region: "Europe", note: "British Overseas Territory on the southern tip of the Iberian Peninsula" },
      { name: "Nigeria", flag: "🇳🇬", capital: "Abuja / Lagos", region: "Africa", note: "Entire country (WAT)" },
      { name: "Algeria", flag: "🇩🇿", capital: "Algiers", region: "Africa", note: "Entire country" },
      { name: "Morocco", flag: "🇲🇦", capital: "Rabat / Casablanca", region: "Africa", note: "Entire country (+1 year-round, except Ramadan)" },
      { name: "Tunisia", flag: "🇹🇳", capital: "Tunis", region: "Africa", note: "Entire country" },
      { name: "Cameroon", flag: "🇨🇲", capital: "Yaoundé / Douala", region: "Africa", note: "Entire country" },
      { name: "Angola", flag: "🇦🇴", capital: "Luanda", region: "Africa", note: "Entire country" },
      { name: "DR Congo (West)", flag: "🇨🇩", capital: "Kinshasa", region: "Africa", note: "Kinshasa, Kongo Central, Équateur, Kwilu, Kwango (WAT)" },
      { name: "Republic of the Congo", flag: "🇨🇬", capital: "Brazzaville", region: "Africa", note: "Entire country" },
      { name: "Gabon", flag: "🇬🇦", capital: "Libreville", region: "Africa", note: "Entire country" },
      { name: "Chad", flag: "🇹🇩", capital: "N'Djamena", region: "Africa", note: "Entire country" },
      { name: "Central African Republic", flag: "🇨🇫", capital: "Bangui", region: "Africa", note: "Entire country" },
      { name: "Niger", flag: "🇳🇪", capital: "Niamey", region: "Africa", note: "Entire country" },
      { name: "Benin", flag: "🇧🇯", capital: "Porto-Novo", region: "Africa", note: "Entire country" },
      { name: "Equatorial Guinea", flag: "🇬🇶", capital: "Malabo", region: "Africa", note: "Entire country" }
    ]
  },
  {
    id: "utc+2",
    offset: 2,
    offsetStr: "UTC+02:00",
    name: "Eastern European Time (EET) / Central & South Africa",
    abbr: "EET / EEST / SAST / CAT",
    sampleTz: "Europe/Athens",
    lat: 37.9838,
    lng: 23.7275,
    description: "Eastern Europe (Greece, Finland, Ukraine), Egypt, South Africa, Israel, Kaliningrad.",
    countries: [
      { name: "Greece", flag: "🇬🇷", capital: "Athens / Thessaloniki", region: "Europe", note: "Entire country (EET/EEST)" },
      { name: "Egypt", flag: "🇪🇬", capital: "Cairo / Alexandria", region: "Africa", note: "Entire country" },
      { name: "South Africa", flag: "🇿🇦", capital: "Pretoria / Cape Town / Johannesburg", region: "Africa", note: "Entire country (SAST)" },
      { name: "Finland", flag: "🇫🇮", capital: "Helsinki", region: "Europe", note: "Entire country" },
      { name: "Ukraine", flag: "🇺🇦", capital: "Kyiv / Lviv / Odesa", region: "Europe", note: "Entire country" },
      { name: "Romania", flag: "🇷🇴", capital: "Bucharest", region: "Europe", note: "Entire country" },
      { name: "Bulgaria", flag: "🇧🇬", capital: "Sofia", region: "Europe", note: "Entire country" },
      { name: "Israel", flag: "🇮🇱", capital: "Jerusalem / Tel Aviv", region: "Asia", note: "Entire country (IST/IDT)" },
      { name: "Jordan", flag: "🇯🇴", capital: "Amman", region: "Asia", note: "Entire country" },
      { name: "Lebanon", flag: "🇱🇧", capital: "Beirut", region: "Asia", note: "Entire country" },
      { name: "Cyprus", flag: "🇨🇾", capital: "Nicosia", region: "Europe", note: "Entire country" },
      { name: "Syria", flag: "🇸🇾", capital: "Damascus", region: "Asia", note: "Entire country" },
      { name: "Palestine", flag: "🇵🇸", capital: "Ramallah / Gaza", region: "Asia", note: "Entire country" },
      { name: "Sudan", flag: "🇸🇩", capital: "Khartoum", region: "Africa", note: "Entire country (CAT)" },
      { name: "South Sudan", flag: "🇸🇸", capital: "Juba", region: "Africa", note: "Entire country" },
      { name: "Libya", flag: "🇱🇾", capital: "Tripoli", region: "Africa", note: "Entire country" },
      { name: "Zimbabwe", flag: "🇿🇼", capital: "Harare", region: "Africa", note: "Entire country (CAT)" },
      { name: "Zambia", flag: "🇿🇲", capital: "Lusaka", region: "Africa", note: "Entire country (CAT)" },
      { name: "Mozambique", flag: "🇲🇿", capital: "Maputo", region: "Africa", note: "Entire country (CAT)" },
      { name: "Botswana", flag: "🇧🇼", capital: "Gaborone", region: "Africa", note: "Entire country (CAT)" },
      { name: "Namibia", flag: "🇳🇦", capital: "Windhoek", region: "Africa", note: "Entire country (CAT)" },
      { name: "Malawi", flag: "🇲🇼", capital: "Lilongwe", region: "Africa", note: "Entire country (CAT)" },
      { name: "Rwanda", flag: "🇷🇼", capital: "Kigali", region: "Africa", note: "Entire country (CAT)" },
      { name: "Burundi", flag: "🇧🇮", capital: "Gitega", region: "Africa", note: "Entire country (CAT)" },
      { name: "DR Congo (East)", flag: "🇨🇩", capital: "Lubumbashi / Goma", region: "Africa", note: "Haut-Katanga, North & South Kivu, Ituri, Tshopo (CAT)" },
      { name: "Lesotho", flag: "🇱🇸", capital: "Maseru", region: "Africa", note: "Entire country" },
      { name: "Eswatini (Swaziland)", flag: "🇸🇿", capital: "Mbabane", region: "Africa", note: "Entire country" },
      { name: "Russia (Kaliningrad)", flag: "🇷🇺", capital: "Kaliningrad", region: "Europe", note: "Kaliningrad exclave on the Baltic Sea (MSK-1)" },
      { name: "Moldova", flag: "🇲🇩", capital: "Chisinau", region: "Europe", note: "Entire country" },
      { name: "Estonia", flag: "🇪🇪", capital: "Tallinn", region: "Europe", note: "Entire country" },
      { name: "Latvia", flag: "🇱🇻", capital: "Riga", region: "Europe", note: "Entire country" },
      { name: "Lithuania", flag: "🇱🇹", capital: "Vilnius", region: "Europe", note: "Entire country" }
    ]
  },
  {
    id: "utc+3",
    offset: 3,
    offsetStr: "UTC+03:00",
    name: "Moscow Time (MSK) / Arabia & East Africa",
    abbr: "MSK / AST / EAT / TRT",
    sampleTz: "Europe/Moscow",
    lat: 55.7558,
    lng: 37.6173,
    description: "Moscow, Turkey, Saudi Arabia, Iraq, Qatar, Kenya, Ethiopia.",
    countries: [
      { name: "Russia (Moscow Time)", flag: "🇷🇺", capital: "Moscow / St. Petersburg", region: "Europe", note: "Capital Moscow, St. Petersburg, Nizhny Novgorod, Kazan, Sochi, Rostov-on-Don (MSK)" },
      { name: "Turkey", flag: "🇹🇷", capital: "Ankara / Istanbul", region: "Europe", note: "Entire country (TRT year-round)" },
      { name: "Saudi Arabia", flag: "🇸🇦", capital: "Riyadh / Jeddah / Mecca", region: "Asia", note: "Entire country (AST)" },
      { name: "Iraq", flag: "🇮🇶", capital: "Baghdad", region: "Asia", note: "Entire country" },
      { name: "Qatar", flag: "🇶🇦", capital: "Doha", region: "Asia", note: "Entire country" },
      { name: "Kuwait", flag: "🇰🇼", capital: "Kuwait City", region: "Asia", note: "Entire country" },
      { name: "Bahrain", flag: "🇧🇭", capital: "Manama", region: "Asia", note: "Entire country" },
      { name: "Yemen", flag: "🇾🇪", capital: "Sana'a / Aden", region: "Asia", note: "Entire country" },
      { name: "Kenya", flag: "🇰🇪", capital: "Nairobi", region: "Africa", note: "Entire country (EAT)" },
      { name: "Ethiopia", flag: "🇪🇹", capital: "Addis Ababa", region: "Africa", note: "Entire country (EAT)" },
      { name: "Tanzania", flag: "🇹🇿", capital: "Dodoma / Dar es Salaam", region: "Africa", note: "Entire country (EAT)" },
      { name: "Uganda", flag: "🇺🇬", capital: "Kampala", region: "Africa", note: "Entire country (EAT)" },
      { name: "Somalia", flag: "🇸🇴", capital: "Mogadishu", region: "Africa", note: "Entire country (EAT)" },
      { name: "Madagascar", flag: "🇲🇬", capital: "Antananarivo", region: "Africa", note: "Entire country (EAT)" },
      { name: "Djibouti", flag: "🇩🇯", capital: "Djibouti City", region: "Africa", note: "Entire country" },
      { name: "Eritrea", flag: "🇪🇷", capital: "Asmara", region: "Africa", note: "Entire country" },
      { name: "Comoros", flag: "🇰🇲", capital: "Moroni", region: "Africa", note: "Entire country" },
      { name: "Belarus", flag: "🇧🇾", capital: "Minsk", region: "Europe", note: "Entire country" },
      { name: "Mayotte (France)", flag: "🇾🇹", capital: "Mamoudzou", region: "Africa", note: "French overseas department in the Indian Ocean" }
    ]
  },
  {
    id: "utc-3-30-plus",
    offset: 3.5,
    offsetStr: "UTC+03:30",
    name: "Iran Standard Time (IRST)",
    abbr: "IRST",
    sampleTz: "Asia/Tehran",
    lat: 35.6892,
    lng: 51.3890,
    description: "The unique half-hour time zone of Iran.",
    countries: [
      { name: "Iran", flag: "🇮🇷", capital: "Tehran / Isfahan / Shiraz", region: "Asia", note: "Entire territory of the Islamic Republic of Iran" }
    ]
  },
  {
    id: "utc+4",
    offset: 4,
    offsetStr: "UTC+04:00",
    name: "Gulf Standard Time (GST) / Samara / Caucasus",
    abbr: "GST / SAMT / AZT / GET",
    sampleTz: "Asia/Dubai",
    lat: 25.2048,
    lng: 55.2708,
    description: "United Arab Emirates (Dubai, Abu Dhabi), Oman, Azerbaijan, Georgia, Armenia, Samara.",
    countries: [
      { name: "United Arab Emirates", flag: "🇦🇪", capital: "Abu Dhabi / Dubai", region: "Asia", note: "All seven emirates including Dubai and Abu Dhabi (GST)" },
      { name: "Oman", flag: "🇴🇲", capital: "Muscat", region: "Asia", note: "Entire country" },
      { name: "Azerbaijan", flag: "🇦🇿", capital: "Baku", region: "Asia", note: "Entire country (AZT)" },
      { name: "Georgia", flag: "🇬🇪", capital: "Tbilisi", region: "Asia", note: "Entire country (GET)" },
      { name: "Armenia", flag: "🇦🇲", capital: "Yerevan", region: "Asia", note: "Entire country (AMT)" },
      { name: "Mauritius", flag: "🇲🇺", capital: "Port Louis", region: "Africa", note: "Entire country (MUT)" },
      { name: "Seychelles", flag: "🇸🇨", capital: "Victoria", region: "Africa", note: "Entire country (SCT)" },
      { name: "Russia (Samara Time)", flag: "🇷🇺", capital: "Samara / Izhevsk / Saratov", region: "Europe", note: "Samara, Saratov, Ulyanovsk, Astrakhan, Udmurt Republic (SAMT / MSK+1)" },
      { name: "Réunion (France)", flag: "🇷🇪", capital: "Saint-Denis", region: "Africa", note: "French overseas department in the Indian Ocean (RET)" }
    ]
  },
  {
    id: "utc-4-30-plus",
    offset: 4.5,
    offsetStr: "UTC+04:30",
    name: "Afghanistan Time (AFT)",
    abbr: "AFT",
    sampleTz: "Asia/Kabul",
    lat: 34.5553,
    lng: 69.2075,
    description: "The half-hour offset of Afghanistan.",
    countries: [
      { name: "Afghanistan", flag: "🇦🇫", capital: "Kabul / Kandahar / Herat", region: "Asia", note: "Entire country of Afghanistan" }
    ]
  },
  {
    id: "utc+5",
    offset: 5,
    offsetStr: "UTC+05:00",
    name: "Pakistan / Uzbekistan / Kazakhstan / Yekaterinburg",
    abbr: "PKT / UZT / YEKT",
    sampleTz: "Asia/Karachi",
    lat: 24.8607,
    lng: 67.0011,
    description: "Pakistan, Uzbekistan, unified Kazakhstan, Turkmenistan, Maldives, and the Ural Mountains.",
    countries: [
      { name: "Pakistan", flag: "🇵🇰", capital: "Islamabad / Karachi / Lahore", region: "Asia", note: "Entire country (PKT)" },
      { name: "Uzbekistan", flag: "🇺🇿", capital: "Tashkent / Samarkand / Bukhara", region: "Asia", note: "Entire country (UZT)" },
      { name: "Kazakhstan", flag: "🇰🇿", capital: "Astana / Almaty / Shymkent", region: "Asia", note: "Unified nationwide standard time across all regions" },
      { name: "Turkmenistan", flag: "🇹🇲", capital: "Ashgabat", region: "Asia", note: "Entire country (TMT)" },
      { name: "Tajikistan", flag: "🇹🇯", capital: "Dushanbe", region: "Asia", note: "Entire country (TJT)" },
      { name: "Maldives", flag: "🇲🇻", capital: "Malé", region: "Asia", note: "Entire island republic (MVT)" },
      { name: "Russia (Yekaterinburg Time)", flag: "🇷🇺", capital: "Yekaterinburg / Chelyabinsk / Perm / Ufa", region: "Asia", note: "Sverdlovsk, Chelyabinsk, Bashkortostan, Perm, Tyumen, Khanty-Mansi, Yamal (YEKT / MSK+2)" }
    ]
  },
  {
    id: "utc-5-30-plus",
    offset: 5.5,
    offsetStr: "UTC+05:30",
    name: "India Standard Time (IST) / Sri Lanka",
    abbr: "IST / SLST",
    sampleTz: "Asia/Kolkata",
    lat: 28.6139,
    lng: 77.2090,
    description: "Encompasses India's 1.4+ billion people and island nation Sri Lanka.",
    countries: [
      { name: "India", flag: "🇮🇳", capital: "New Delhi / Mumbai / Bengaluru / Kolkata", region: "Asia", note: "All states and union territories of India (IST)" },
      { name: "Sri Lanka", flag: "🇱🇰", capital: "Colombo / Sri Jayawardenepura Kotte", region: "Asia", note: "Entire island nation" }
    ]
  },
  {
    id: "utc-5-45-plus",
    offset: 5.75,
    offsetStr: "UTC+05:45",
    name: "Nepal Time (NPT)",
    abbr: "NPT",
    sampleTz: "Asia/Kathmandu",
    lat: 27.7172,
    lng: 85.3240,
    description: "The unique 45-minute offset calibrated to the meridian of Mount Everest.",
    countries: [
      { name: "Nepal", flag: "🇳🇵", capital: "Kathmandu / Pokhara", region: "Asia", note: "Entire territory of the Federal Democratic Republic of Nepal" }
    ]
  },
  {
    id: "utc+6",
    offset: 6,
    offsetStr: "UTC+06:00",
    name: "Bangladesh / Bhutan / Omsk Time",
    abbr: "BST / BTT / OMST",
    sampleTz: "Asia/Dhaka",
    lat: 23.8103,
    lng: 90.4125,
    description: "Bangladesh, Kingdom of Bhutan, Kyrgyzstan, and southwestern Siberia.",
    countries: [
      { name: "Bangladesh", flag: "🇧🇩", capital: "Dhaka / Chittagong", region: "Asia", note: "Entire country (BST)" },
      { name: "Bhutan", flag: "🇧🇹", capital: "Thimphu", region: "Asia", note: "Entire country (BTT)" },
      { name: "Kyrgyzstan", flag: "🇰🇬", capital: "Bishkek", region: "Asia", note: "Entire country (KGT)" },
      { name: "Russia (Omsk Time)", flag: "🇷🇺", capital: "Omsk", region: "Asia", note: "Omsk Oblast in southwestern Siberia (OMST / MSK+3)" },
      { name: "British Indian Ocean Territory", flag: "🇮🇴", capital: "Diego Garcia", region: "Africa", note: "Military base on Diego Garcia atoll" }
    ]
  },
  {
    id: "utc-6-30-plus",
    offset: 6.5,
    offsetStr: "UTC+06:30",
    name: "Myanmar Time (MMT) / Cocos Islands",
    abbr: "MMT / CCT",
    sampleTz: "Asia/Yangon",
    lat: 16.8661,
    lng: 96.1951,
    description: "The half-hour offset of Myanmar and Australia's Cocos Islands.",
    countries: [
      { name: "Myanmar (Burma)", flag: "🇲🇲", capital: "Naypyidaw / Yangon / Mandalay", region: "Asia", note: "Entire country of Myanmar (MMT)" },
      { name: "Cocos (Keeling) Islands (Australia)", flag: "🇨🇨", capital: "West Island", region: "Oceania", note: "Australian external territory in the Indian Ocean" }
    ]
  },
  {
    id: "utc+7",
    offset: 7,
    offsetStr: "UTC+07:00",
    name: "Indochina Time (ICT) / Western Indonesia (WIB) / Krasnoyarsk",
    abbr: "ICT / WIB / KRAT",
    sampleTz: "Asia/Ho_Chi_Minh",
    lat: 21.0285,
    lng: 105.8542,
    description: "Vietnam, Thailand, Western Indonesia (Jakarta, Java, Sumatra), Cambodia, Laos, Krasnoyarsk.",
    countries: [
      { name: "Vietnam", flag: "🇻🇳", capital: "Hanoi / Ho Chi Minh City / Da Nang", region: "Asia", note: "All 63 provinces and cities nationwide (ICT)" },
      { name: "Thailand", flag: "🇹🇭", capital: "Bangkok / Chiang Mai / Phuket", region: "Asia", note: "Entire country (ICT)" },
      { name: "Indonesia (Western - WIB)", flag: "🇮🇩", capital: "Jakarta / Surabaya / Bandung / Medan", region: "Asia", note: "Java, Sumatra, West & Central Kalimantan (WIB)" },
      { name: "Cambodia", flag: "🇰🇭", capital: "Phnom Penh / Siem Reap", region: "Asia", note: "Entire country" },
      { name: "Laos", flag: "🇱🇦", capital: "Vientiane / Luang Prabang", region: "Asia", note: "Entire country" },
      { name: "Russia (Krasnoyarsk Time)", flag: "🇷🇺", capital: "Krasnoyarsk / Novosibirsk / Tomsk / Kemerovo", region: "Asia", note: "Krasnoyarsk, Novosibirsk, Tomsk, Kemerovo, Altai, Khakassia, Tuva (KRAT / MSK+4)" },
      { name: "Mongolia (West)", flag: "🇲🇳", capital: "Khovd / Ulaangom", region: "Asia", note: "Western provinces of Khovd, Uvs, Bayan-Ölgii" },
      { name: "Christmas Island (Australia)", flag: "🇨🇽", capital: "Flying Fish Cove", region: "Oceania", note: "Australian external territory" }
    ]
  },
  {
    id: "utc+8",
    offset: 8,
    offsetStr: "UTC+08:00",
    name: "China (CST) / Singapore / Central Indonesia (WITA) / Western Australia",
    abbr: "CST / SGT / HKT / WITA / AWST",
    sampleTz: "Asia/Shanghai",
    lat: 39.9042,
    lng: 116.4074,
    description: "China nationwide, Singapore, Hong Kong, Taiwan, Malaysia, Philippines, Bali, Perth.",
    countries: [
      { name: "China", flag: "🇨🇳", capital: "Beijing / Shanghai / Guangzhou / Shenzhen", region: "Asia", note: "Entire territory of the People's Republic of China (CST)" },
      { name: "Singapore", flag: "🇸🇬", capital: "Singapore", region: "Asia", note: "Entire island republic (SGT)" },
      { name: "Hong Kong", flag: "🇭🇰", capital: "Hong Kong", region: "Asia", note: "Hong Kong Special Administrative Region (HKT)" },
      { name: "Taiwan", flag: "🇹🇼", capital: "Taipei / Kaohsiung", region: "Asia", note: "Entire island territory" },
      { name: "Malaysia", flag: "🇲🇾", capital: "Kuala Lumpur / George Town", region: "Asia", note: "Peninsular Malaysia and states of Sabah and Sarawak (MYT)" },
      { name: "Philippines", flag: "🇵🇭", capital: "Manila / Cebu / Davao", region: "Asia", note: "Entire Philippine archipelago of 7,000+ islands (PST)" },
      { name: "Indonesia (Central - WITA)", flag: "🇮🇩", capital: "Denpasar (Bali) / Makassar / Manado", region: "Asia", note: "Bali, Sulawesi, East & South Kalimantan, Nusa Tenggara (Lombok, Timor) (WITA)" },
      { name: "Australia (Western Australia)", flag: "🇦🇺", capital: "Perth", region: "Oceania", note: "State of Western Australia (AWST)" },
      { name: "Brunei", flag: "🇧🇳", capital: "Bandar Seri Begawan", region: "Asia", note: "Entire country" },
      { name: "Macau", flag: "🇲🇴", capital: "Macau", region: "Asia", note: "Macau Special Administrative Region" },
      { name: "Mongolia (Central & East)", flag: "🇲🇳", capital: "Ulaanbaatar", region: "Asia", note: "Capital Ulaanbaatar and central & eastern provinces" },
      { name: "Russia (Irkutsk Time)", flag: "🇷🇺", capital: "Irkutsk / Ulan-Ude", region: "Asia", note: "Irkutsk Oblast and Republic of Buryatia around Lake Baikal (IRKT / MSK+5)" }
    ]
  },
  {
    id: "utc-8-45-plus",
    offset: 8.75,
    offsetStr: "UTC+08:45",
    name: "Australian Central Western Standard Time (ACWST)",
    abbr: "ACWST",
    sampleTz: "Australia/Eucla",
    lat: -31.6778,
    lng: 128.8833,
    description: "The rare 45-minute offset along the Eyre Highway in Western Australia.",
    countries: [
      { name: "Australia (Eucla / Eyre Highway)", flag: "🇦🇺", capital: "Eucla", region: "Oceania", note: "Roadhouses of Eucla, Caiguna, Madura, Mundrabilla, Border Village" }
    ]
  },
  {
    id: "utc+9",
    offset: 9,
    offsetStr: "UTC+09:00",
    name: "Japan Standard Time (JST) / Korea (KST) / Eastern Indonesia (WIT)",
    abbr: "JST / KST / WIT / YAKT",
    sampleTz: "Asia/Tokyo",
    lat: 35.6762,
    lng: 139.6503,
    description: "Japan, South Korea, North Korea, Eastern Indonesia (Papua), Yakutsk.",
    countries: [
      { name: "Japan", flag: "🇯🇵", capital: "Tokyo / Osaka / Kyoto / Yokohama", region: "Asia", note: "All prefectures across Japan (JST)" },
      { name: "South Korea", flag: "🇰🇷", capital: "Seoul / Busan / Incheon", region: "Asia", note: "Entire country (KST)" },
      { name: "North Korea", flag: "🇰🇵", capital: "Pyongyang", region: "Asia", note: "Entire country" },
      { name: "Indonesia (Eastern - WIT)", flag: "🇮🇩", capital: "Jayapura / Ambon", region: "Asia", note: "Maluku Islands and Western New Guinea / Papua provinces (WIT)" },
      { name: "East Timor (Timor-Leste)", flag: "🇹🇱", capital: "Dili", region: "Asia", note: "Entire country" },
      { name: "Palau", flag: "🇵🇼", capital: "Ngerulmud", region: "Oceania", note: "Entire Pacific island republic" },
      { name: "Russia (Yakutsk Time)", flag: "🇷🇺", capital: "Yakutsk / Chita / Blagoveshchensk", region: "Asia", note: "Sakha Republic (Yakutia - western part), Amur Oblast, Zabaykalsky Krai (YAKT / MSK+6)" }
    ]
  },
  {
    id: "utc-9-30-plus",
    offset: 9.5,
    offsetStr: "UTC+09:30",
    name: "Australian Central Standard Time (ACST)",
    abbr: "ACST / ACDT",
    sampleTz: "Australia/Adelaide",
    lat: -34.9285,
    lng: 138.6007,
    description: "South Australia (Adelaide) and Northern Territory (Darwin).",
    countries: [
      { name: "Australia (Central - Adelaide & Darwin)", flag: "🇦🇺", capital: "Adelaide / Darwin", region: "Oceania", note: "State of South Australia (ACST/ACDT) and Northern Territory (ACST)" }
    ]
  },
  {
    id: "utc+10",
    offset: 10,
    offsetStr: "UTC+10:00",
    name: "Australian Eastern Standard Time (AEST) / Guam / Vladivostok",
    abbr: "AEST / AEDT / ChST / VLAT",
    sampleTz: "Australia/Sydney",
    lat: -33.8688,
    lng: 151.2093,
    description: "Sydney, Melbourne, Brisbane, Canberra, Guam, Papua New Guinea, Vladivostok.",
    countries: [
      { name: "Australia (Eastern - Sydney & Melbourne)", flag: "🇦🇺", capital: "Sydney / Melbourne / Brisbane / Canberra / Hobart", region: "Oceania", note: "New South Wales, Victoria, Queensland (Brisbane), Tasmania, ACT (AEST/AEDT)" },
      { name: "Papua New Guinea", flag: "🇵🇬", capital: "Port Moresby", region: "Oceania", note: "Mainland territory excluding Bougainville" },
      { name: "Guam (USA)", flag: "🇬🇺", capital: "Hagåtña", region: "Oceania", note: "US island territory in the western Pacific (ChST)" },
      { name: "Northern Mariana Islands (USA)", flag: "🇲🇵", capital: "Saipan", region: "Oceania", note: "Commonwealth territory of the United States" },
      { name: "Russia (Vladivostok Time)", flag: "🇷🇺", capital: "Vladivostok / Khabarovsk", region: "Asia", note: "Primorsky Krai, Khabarovsk Krai, Jewish Autonomous Oblast (VLAT / MSK+7)" },
      { name: "Micronesia (Chuuk & Yap)", flag: "🇫🇲", capital: "Weno / Colonia", region: "Oceania", note: "States of Chuuk and Yap in the Federated States of Micronesia" }
    ]
  },
  {
    id: "utc-10-30-plus",
    offset: 10.5,
    offsetStr: "UTC+10:30",
    name: "Lord Howe Standard Time (LHST)",
    abbr: "LHST / LHDT",
    sampleTz: "Australia/Lord_Howe",
    lat: -31.5553,
    lng: 159.0821,
    description: "Lord Howe Island (Australia) with a unique 30-minute Daylight Saving Time advance.",
    countries: [
      { name: "Australia (Lord Howe Island)", flag: "🇦🇺", capital: "Lord Howe", region: "Oceania", note: "Island group part of New South Wales" }
    ]
  },
  {
    id: "utc+11",
    offset: 11,
    offsetStr: "UTC+11:00",
    name: "Solomon Islands / New Caledonia / Magadan",
    abbr: "SBT / VUT / NCT / MAGT",
    sampleTz: "Pacific/Noumea",
    lat: -22.2758,
    lng: 166.4580,
    description: "Solomon Islands, Vanuatu, New Caledonia, and Magadan/Sakhalin (Russia).",
    countries: [
      { name: "Solomon Islands", flag: "🇸🇧", capital: "Honiara", region: "Oceania", note: "Entire country (SBT)" },
      { name: "Vanuatu", flag: "🇻🇺", capital: "Port Vila", region: "Oceania", note: "Entire country (VUT)" },
      { name: "New Caledonia (France)", flag: "🇳🇨", capital: "Nouméa", region: "Oceania", note: "French sui generis collectivity in the South Pacific (NCT)" },
      { name: "Russia (Magadan Time)", flag: "🇷🇺", capital: "Magadan / Yuzhno-Sakhalinsk", region: "Asia", note: "Magadan Oblast, Sakhalin Island, Kuril Islands (MAGT / MSK+8)" },
      { name: "Micronesia (Pohnpei & Kosrae)", flag: "🇫🇲", capital: "Palikir / Tofol", region: "Oceania", note: "Capital Palikir and states of Pohnpei and Kosrae" },
      { name: "Papua New Guinea (Bougainville)", flag: "🇵🇬", capital: "Buka", region: "Oceania", note: "Autonomous Region of Bougainville" },
      { name: "Norfolk Island (Australia)", flag: "🇳🇫", capital: "Kingston", region: "Oceania", note: "Australian external territory" }
    ]
  },
  {
    id: "utc+12",
    offset: 12,
    offsetStr: "UTC+12:00",
    name: "New Zealand Standard Time (NZST) / Fiji / Kamchatka",
    abbr: "NZST / NZDT / FJT / PETT",
    sampleTz: "Pacific/Auckland",
    lat: -36.8485,
    lng: 174.7633,
    description: "New Zealand (Auckland), Fiji, Tuvalu, Marshall Islands, Kamchatka.",
    countries: [
      { name: "New Zealand", flag: "🇳🇿", capital: "Wellington / Auckland / Christchurch", region: "Oceania", note: "North Island and South Island of New Zealand (NZST/NZDT)" },
      { name: "Fiji", flag: "🇫🇯", capital: "Suva", region: "Oceania", note: "Entire country (FJT)" },
      { name: "Tuvalu", flag: "🇹🇻", capital: "Funafuti", region: "Oceania", note: "Entire country (TVT)" },
      { name: "Nauru", flag: "🇳🇷", capital: "Yaren", region: "Oceania", note: "Entire country (NRT)" },
      { name: "Marshall Islands", flag: "🇲🇭", capital: "Majuro", region: "Oceania", note: "Entire country (MHT)" },
      { name: "Kiribati (Gilbert Islands)", flag: "🇰🇮", capital: "South Tarawa", region: "Oceania", note: "Capital Tarawa and western atolls (GILT)" },
      { name: "Russia (Kamchatka Time)", flag: "🇷🇺", capital: "Petropavlovsk-Kamchatsky / Anadyr", region: "Asia", note: "Kamchatka Krai and Chukotka Autonomous Okrug in the Russian Far East (PETT / MSK+9)" },
      { name: "Wake Island (USA)", flag: "🇺🇲", capital: "Wake Island", region: "Oceania", note: "Unorganized US territory" },
      { name: "Wallis and Futuna (France)", flag: "🇼🇫", capital: "Mata-Utu", region: "Oceania", note: "French overseas collectivity" }
    ]
  },
  {
    id: "utc-12-45-plus",
    offset: 12.75,
    offsetStr: "UTC+12:45",
    name: "Chatham Islands Standard Time (CHAST)",
    abbr: "CHAST / CHADT",
    sampleTz: "Pacific/Chatham",
    lat: -43.9536,
    lng: -176.5597,
    description: "The unique 45-minute offset for the Chatham Islands of New Zealand.",
    countries: [
      { name: "New Zealand (Chatham Islands)", flag: "🇳🇿", capital: "Waitangi", region: "Oceania", note: "Chatham archipelago located ~800 km east of mainland New Zealand" }
    ]
  },
  {
    id: "utc+13",
    offset: 13,
    offsetStr: "UTC+13:00",
    name: "Tonga / Samoa / Phoenix Islands",
    abbr: "TOT / WST / PHOT",
    sampleTz: "Pacific/Tongatapu",
    lat: -21.1789,
    lng: -175.1982,
    description: "Kingdom of Tonga, Independent Samoa, and the Phoenix Islands (Kiribati).",
    countries: [
      { name: "Tonga", flag: "🇹🇴", capital: "Nuku'alofa", region: "Oceania", note: "Kingdom of Tonga (TOT)" },
      { name: "Samoa (Independent)", flag: "🇼🇸", capital: "Apia", region: "Oceania", note: "Independent State of Samoa (WST)" },
      { name: "Kiribati (Phoenix Islands)", flag: "🇰🇮", capital: "Kanton", region: "Oceania", note: "Central island group of Kiribati (PHOT)" },
      { name: "Tokelau (New Zealand)", flag: "🇹🇰", capital: "Fakaofo", region: "Oceania", note: "Territory of New Zealand" }
    ]
  },
  {
    id: "utc+14",
    offset: 14,
    offsetStr: "UTC+14:00",
    name: "Line Islands Time (LINT) — First Place to Greet Each New Day",
    abbr: "LINT",
    sampleTz: "Pacific/Kiritimati",
    lat: 1.8709,
    lng: -157.4278,
    description: "The earliest time zone on Earth (UTC+14), the first location on the planet to welcome sunrise and each new calendar year!",
    countries: [
      { name: "Kiribati (Line Islands / Kiritimati)", flag: "🇰🇮", capital: "Kiritimati (Christmas Island)", region: "Oceania", note: "Kiritimati and the Line Islands — the very first point on Earth to enter each new calendar day and year!" }
    ]
  }
];

// Helper to calculate total countries across all zones
const TOTAL_COUNTRIES_COUNT = WORLD_TIMEZONES.reduce((acc, z) => acc + z.countries.length, 0);


// ==========================================
// PART 2: 3D INTERACTIVE PLANETARY GLOBE
// ==========================================
/**
 * Spac2 Time Zone - Interactive 3D Planetary Globe Module
 * Powered by Three.js with procedural high-definition Earth texture,
 * dynamic solar day/night illumination, interactive city pins,
 * and smooth spherical camera navigation.
 */

class Spac2Globe {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.options = Object.assign({
      radius: 120,
      autoRotate: true,
      autoRotateSpeed: 0.35,
      enableZoom: true,
      onSelectLocation: null
    }, options);

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.globeMesh = null;
    this.atmosphereMesh = null;
    this.pinsGroup = null;
    this.sunLight = null;
    this.targetMarker = null;

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.pins = [];
    this.isTransitioning = false;
    this.transitionProgress = 0;
    this.startQuat = new THREE.Quaternion();
    this.targetQuat = new THREE.Quaternion();

    this.init();
  }

  init() {
    this.setupScene();
    this.createProceduralEarth();
    this.createAtmosphere();
    this.createSolarLighting();
    this.createStarsBackground();
    this.createCityPins();
    this.setupControls();
    this.setupEvents();
    this.animate();
  }

  setupScene() {
    const width = this.container.clientWidth || 600;
    const height = this.container.clientHeight || 450;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 2000);
    this.camera.position.set(0, 30, 360);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;

    this.container.innerHTML = '';
    this.container.appendChild(this.renderer.domElement);

    this.pinsGroup = new THREE.Group();
    this.scene.add(this.pinsGroup);
  }

  /**
   * Procedural Earth texture generation onto Canvas2D
   * Ensures 100% offline capability, zero CORS failures, and crisp vector continents.
   */
  createProceduralEarth() {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    // Ocean background - Monochrome deep space & charcoal
    const oceanGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    if (isDark) {
      oceanGrad.addColorStop(0, '#121212');
      oceanGrad.addColorStop(0.5, '#0a0a0a');
      oceanGrad.addColorStop(1, '#121212');
    } else {
      oceanGrad.addColorStop(0, '#1c1c1c');
      oceanGrad.addColorStop(0.5, '#141414');
      oceanGrad.addColorStop(1, '#1c1c1c');
    }
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle coordinate grid / latitude-longitude lines
    ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;

    // Parallels (Latitude)
    for (let lat = -80; lat <= 80; lat += 20) {
      const y = ((90 - lat) / 180) * canvas.height;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Meridians (Longitude)
    for (let lng = -180; lng <= 180; lng += 30) {
      const x = ((lng + 180) / 360) * canvas.width;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    // Equator highlight
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();

    // Continent landmasses
    this.drawWorldContinents(ctx, canvas.width, canvas.height, isDark);

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();

    const geometry = new THREE.SphereGeometry(this.options.radius, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.7,
      metalness: 0.1
    });

    this.globeMesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.globeMesh);
  }

  drawWorldContinents(ctx, w, h, isDark) {
    ctx.fillStyle = isDark ? '#282828' : '#333333';
    ctx.strokeStyle = isDark ? '#484848' : '#555555';
    ctx.lineWidth = 1.2;

    // Geographic to pixel coordinate projection (Equirectangular)
    const toPx = (lng, lat) => ({
      x: ((lng + 180) / 360) * w,
      y: ((90 - lat) / 180) * h
    });

    // Curated high-fidelity polygons representing Earth's major continents & regions
    const landmasses = [
      // North America
      [[-168, 65], [-140, 70], [-120, 72], [-85, 70], [-60, 60], [-55, 50], [-70, 42], [-75, 35], [-80, 25], [-97, 26], [-90, 21], [-85, 15], [-77, 8], [-85, 10], [-95, 16], [-105, 20], [-115, 30], [-124, 48], [-140, 60], [-165, 60]],
      // South America
      [[-77, 8], [-60, 10], [-50, 0], [-35, -5], [-35, -12], [-40, -22], [-50, -30], [-55, -40], [-65, -55], [-75, -50], [-72, -35], [-78, -15], [-81, -5], [-77, 8]],
      // Europe & Scandinavia
      [[-10, 36], [0, 37], [15, 38], [25, 40], [30, 45], [40, 45], [50, 50], [60, 65], [40, 70], [25, 71], [15, 65], [5, 60], [2, 50], [-5, 48], [-9, 43], [-10, 36]],
      // Africa
      [[-17, 32], [10, 37], [32, 31], [40, 22], [51, 12], [42, -5], [35, -25], [28, -34], [18, -34], [12, -15], [9, 4], [-15, 12], [-17, 32]],
      // Asia
      [[30, 45], [50, 40], [60, 30], [70, 25], [75, 10], [80, 15], [90, 22], [100, 15], [105, 10], [108, 18], [120, 23], [122, 30], [129, 40], [140, 50], [160, 60], [170, 65], [180, 66], [170, 70], [140, 73], [100, 75], [70, 72], [55, 60]],
      // Australia
      [[114, -22], [125, -15], [135, -12], [142, -10], [148, -20], [153, -28], [150, -37], [140, -38], [130, -32], [115, -34], [113, -25]],
      // Greenland
      [[-55, 60], [-40, 60], [-20, 70], [-25, 80], [-45, 83], [-60, 77], [-55, 60]],
      // Great Britain & Ireland
      [[-5, 50], [1, 51], [0, 58], [-4, 58], [-5, 50]],
      // Japan
      [[130, 32], [135, 34], [140, 37], [142, 43], [140, 45], [135, 38], [130, 32]],
      // Madagascar
      [[44, -13], [50, -15], [48, -25], [44, -25], [44, -13]],
      // New Zealand
      [[166, -46], [174, -41], [178, -38], [174, -35], [172, -42], [166, -46]],
      // Antarctica (strip at bottom)
      [[-180, -70], [180, -70], [180, -90], [-180, -90]]
    ];

    landmasses.forEach(poly => {
      if (poly.length < 3) return;
      ctx.beginPath();
      const first = toPx(poly[0][0], poly[0][1]);
      ctx.moveTo(first.x, first.y);
      for (let i = 1; i < poly.length; i++) {
        const pt = toPx(poly[i][0], poly[i][1]);
        ctx.lineTo(pt.x, pt.y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    });

    // Add glowing city dots onto the surface texture
    ctx.fillStyle = '#ffffff';
    GLOBAL_PIN_CITIES.forEach(c => {
      const pt = toPx(c.lng, c.lat);
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 3.5, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  /**
   * Atmosphere Halo Glow effect
   */
  createAtmosphere() {
    const atmoGeo = new THREE.SphereGeometry(this.options.radius * 1.15, 48, 48);
    const atmoMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.2);
          gl_FragColor = vec4(0.85, 0.85, 0.9, 1.0) * intensity * 0.45;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true
    });

    this.atmosphereMesh = new THREE.Mesh(atmoGeo, atmoMat);
    this.scene.add(this.atmosphereMesh);
  }

  /**
   * Calculates realistic solar position based on current UTC time
   */
  createSolarLighting() {
    const ambientLight = new THREE.AmbientLight(0x404868, 1.2);
    this.scene.add(ambientLight);

    this.sunLight = new THREE.DirectionalLight(0xfff7ed, 2.5);
    this.updateSolarPosition();
    this.scene.add(this.sunLight);
  }

  updateSolarPosition() {
    if (!this.sunLight) return;
    const now = new Date();
    const utcHours = now.getUTCHours() + now.getUTCMinutes() / 60;
    // Subsolar point longitude: at 12:00 UTC, sun is at 0° longitude
    const sunLng = (12 - utcHours) * 15;
    const sunLat = 0; // Approximate equinox position

    const pos = this.latLngToVector3(sunLat, sunLng, 500);
    this.sunLight.position.copy(pos);
  }

  createStarsBackground() {
    const starCount = 350;
    const starGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
      const radius = 450 + Math.random() * 300;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 2.2,
      transparent: true,
      opacity: 0.65
    });

    const stars = new THREE.Points(starGeo, starMat);
    this.scene.add(stars);
  }

  createCityPins() {
    const pinGeometry = new THREE.SphereGeometry(2.4, 16, 16);

    GLOBAL_PIN_CITIES.forEach(city => {
      const pos = this.latLngToVector3(city.lat, city.lng, this.options.radius * 1.015);

      const pinMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const pinMesh = new THREE.Mesh(pinGeometry, pinMat);
      pinMesh.position.copy(pos);
      pinMesh.userData = city;

      // Outer beacon ring
      const ringGeo = new THREE.RingGeometry(3.5, 4.6, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xcccccc,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.copy(pos);
      ringMesh.lookAt(pos.clone().multiplyScalar(2));
      ringMesh.userData = city;

      this.pinsGroup.add(pinMesh);
      this.pinsGroup.add(ringMesh);
      this.pins.push(pinMesh);
    });
  }

  setupControls() {
    if (typeof THREE.OrbitControls === 'function') {
      this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.05;
      this.controls.rotateSpeed = 0.6;
      this.controls.minDistance = 160;
      this.controls.maxDistance = 500;
      this.controls.enableZoom = this.options.enableZoom;
    }
  }

  setupEvents() {
    window.addEventListener('resize', () => this.onResize());

    const dom = this.renderer.domElement;
    dom.addEventListener('click', (e) => this.onGlobeClick(e));
    dom.addEventListener('mousemove', (e) => this.onGlobeHover(e));

    // Handle theme change to update globe styling
    window.addEventListener('spac2-theme-toggle', () => {
      if (this.globeMesh) {
        this.scene.remove(this.globeMesh);
        this.createProceduralEarth();
      }
    });
  }

  onResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const width = this.container.clientWidth || 600;
    const height = this.container.clientHeight || 450;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  onGlobeClick(event) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.pinsGroup.children);

    if (intersects.length > 0) {
      const hit = intersects[0].object;
      if (hit.userData && hit.userData.city) {
        if (typeof this.options.onSelectLocation === 'function') {
          this.options.onSelectLocation(hit.userData);
        }
        this.focusOnCoordinate(hit.userData.lat, hit.userData.lng);
      }
    }
  }

  onGlobeHover(event) {
    const tooltip = document.getElementById('globeHoverTooltip');
    if (!tooltip) return;

    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.pinsGroup.children);

    if (intersects.length > 0) {
      const hit = intersects[0].object;
      if (hit.userData && hit.userData.city) {
        const d = hit.userData;
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-US', { timeZone: d.tz, hour: '2-digit', minute: '2-digit' });

        tooltip.innerHTML = `<strong>${d.flag} ${d.city}</strong>, ${d.country}<div class="tooltip-time"><i class="ph-bold ph-clock"></i> ${timeStr}</div>`;
        tooltip.style.left = `${event.clientX - rect.left + 15}px`;
        tooltip.style.top = `${event.clientY - rect.top - 10}px`;
        tooltip.style.opacity = '1';
        this.renderer.domElement.style.cursor = 'pointer';
        return;
      }
    }
    tooltip.style.opacity = '0';
    this.renderer.domElement.style.cursor = 'grab';
  }

  /**
   * Smoothly spins the globe to focus camera on exact lat & lng
   */
  focusOnCoordinate(lat, lng, duration = 1200) {
    this.options.autoRotate = false;

    // Convert lat/lng to normal vector
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    const x = -(this.options.radius * Math.sin(phi) * Math.cos(theta));
    const z = (this.options.radius * Math.sin(phi) * Math.sin(theta));
    const y = (this.options.radius * Math.cos(phi));

    const targetPos = new THREE.Vector3(x, y, z).normalize().multiplyScalar(280);

    // Pulse Target Ring
    this.showTargetMarker(lat, lng);

    const startPos = this.camera.position.clone();
    const startTime = performance.now();

    const animateTransition = (currentTime) => {
      const elapsed = currentTime - startTime;
      const t = Math.min(elapsed / duration, 1);
      // EaseInOutCubic
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      this.camera.position.lerpVectors(startPos, targetPos, ease);
      if (this.controls) this.controls.update();

      if (t < 1) {
        requestAnimationFrame(animateTransition);
      }
    };

    requestAnimationFrame(animateTransition);
  }

  showTargetMarker(lat, lng) {
    if (this.targetMarker) {
      this.scene.remove(this.targetMarker);
    }

    const pos = this.latLngToVector3(lat, lng, this.options.radius * 1.02);
    const markerGeo = new THREE.RingGeometry(4, 7, 32);
    const markerMat = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95
    });

    this.targetMarker = new THREE.Mesh(markerGeo, markerMat);
    this.targetMarker.position.copy(pos);
    this.targetMarker.lookAt(pos.clone().multiplyScalar(2));
    this.scene.add(this.targetMarker);
  }

  latLngToVector3(lat, lng, radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = (radius * Math.sin(phi) * Math.sin(theta));
    const y = (radius * Math.cos(phi));

    return new THREE.Vector3(x, y, z);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    if (this.options.autoRotate && this.globeMesh) {
      this.globeMesh.rotation.y += 0.0015 * this.options.autoRotateSpeed;
      this.pinsGroup.rotation.y += 0.0015 * this.options.autoRotateSpeed;
      if (this.targetMarker) this.targetMarker.rotation.z += 0.02;
    }

    // Pulse beacon rings
    const time = performance.now() * 0.003;
    this.pinsGroup.children.forEach(child => {
      if (child.geometry && child.geometry.type === 'RingGeometry') {
        const s = 1 + Math.sin(time) * 0.15;
        child.scale.set(s, s, s);
      }
    });

    if (this.controls) {
      this.controls.update();
    }

    this.renderer.render(this.scene, this.camera);
  }

  toggleAutoRotate() {
    this.options.autoRotate = !this.options.autoRotate;
    return this.options.autoRotate;
  }

  resetView() {
    this.camera.position.set(0, 30, 360);
    if (this.controls) this.controls.target.set(0, 0, 0);
  }
}


// ==========================================
// PART 3: LIVE WORLD CLOCKS APPLICATION
// ==========================================
/**
 * Spac2 Time Zone - All World Timezone Clocks Engine
 * Renders every timezone on Earth with individual ticking analog and digital clocks.
 * Clicking any clock immediately shows all countries belonging to that timezone.
 * Fully localized in English.
 */

document.addEventListener('DOMContentLoaded', () => {
  // App State
  const state = {
    searchQuery: '',
    activeFilter: 'all',
    use24H: localStorage.getItem('spac2_clock_24h') === 'true',
    soundEnabled: localStorage.getItem('spac2_clock_sound') === 'true',
    userOffsetMinutes: -new Date().getTimezoneOffset(), // e.g. +420 for UTC+7
    userTzString: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
    selectedZone: null
  };

  // Audio Context for subtle ticking sound
  let audioCtx = null;

  // DOM Elements
  const clocksGrid = document.getElementById('clocksGrid');
  const searchInput = document.getElementById('zoneSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const btnJumpMyZone = document.getElementById('btnJumpMyZone');
  const filterPills = document.querySelectorAll('.filter-pill');
  const visibleCountBadge = document.getElementById('visibleCountBadge');
  const userZoneHeroTag = document.getElementById('userZoneHeroTag');
  const countryModal = document.getElementById('countryModal');
  const modalOverlay = document.getElementById('modalOverlay');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalBodyContent = document.getElementById('modalBodyContent');
  const globeToggleBtn = document.getElementById('btnToggleGlobe');
  const globeSection = document.getElementById('globeCollapsibleSection');

  // Initialize 3D Globe engine if Three.js is present
  let globeEngine = null;
  if (typeof THREE !== 'undefined' && document.getElementById('globeCanvasContainer')) {
    try {
      globeEngine = new Spac2Globe('globeCanvasContainer', {
        radius: 120,
        autoRotate: true,
        onSelectLocation: (city) => {
          // Find matching zone
          const matchedZone = WORLD_TIMEZONES.find(z => z.countries.some(c => c.name.toLowerCase().includes(city.country.toLowerCase()) || (c.capital && c.capital.toLowerCase().includes(city.city.toLowerCase()))));
          if (matchedZone) openCountriesModal(matchedZone);
        }
      });
    } catch (e) {
      console.warn('3D Globe init fallback:', e);
    }
  }

  // Header toggles
  setupHeaderControls();

  // Setup search and filters
  setupSearchAndFilters();

  // Render initial clocks grid
  renderClocksGrid();

  // Highlight user's local zone
  updateUserZoneBadge();

  // Main ticking animation loop (every second updates all clocks)
  startClockTickingLoop();

  /**
   * Header controls (Theme, 12h/24h format, Sound, Globe toggle)
   */
  function setupHeaderControls() {
    // Theme toggle
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const cur = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = cur === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        const metaTheme = document.getElementById('themeColorMeta');
        if (metaTheme) metaTheme.content = next === 'dark' ? '#121212' : '#f7f7f8';
        window.dispatchEvent(new CustomEvent('spac2-theme-toggle', { detail: { theme: next } }));
      });
    }

    // 12H / 24H Toggle
    const formatBtn = document.getElementById('clockFormatToggle');
    if (formatBtn) {
      formatBtn.textContent = state.use24H ? '24H' : '12H';
      formatBtn.addEventListener('click', () => {
        state.use24H = !state.use24H;
        localStorage.setItem('spac2_clock_24h', state.use24H);
        formatBtn.textContent = state.use24H ? '24H' : '12H';
        updateAllClocks();
      });
    }

    // Sound Toggle
    const soundBtn = document.getElementById('clockSoundToggle');
    if (soundBtn) {
      soundBtn.classList.toggle('active', state.soundEnabled);
      soundBtn.addEventListener('click', () => {
        state.soundEnabled = !state.soundEnabled;
        localStorage.setItem('spac2_clock_sound', state.soundEnabled);
        soundBtn.classList.toggle('active', state.soundEnabled);
        if (state.soundEnabled) playTickAudio();
      });
    }

    // Globe Collapsible Toggle
    if (globeToggleBtn && globeSection) {
      globeToggleBtn.addEventListener('click', () => {
        const isHidden = globeSection.classList.contains('hidden');
        if (isHidden) {
          globeSection.classList.remove('hidden');
          globeToggleBtn.classList.add('active');
          globeToggleBtn.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor">
              <path d="M228,128a100.86,100.86,0,0,1-23.76,64.29l16.42,16.43a8,8,0,0,1-11.32,11.32l-176-176A8,8,0,0,1,44.66,32.72l17.8,17.8A100.82,100.82,0,0,1,128,28a100.92,100.92,0,0,1,100,100Zm-99.78,79.84A132.84,132.84,0,0,1,103.22,128H73.78l84.44,84.44C145.47,211.39,137,210.37,128.22,207.84Z"/>
            </svg>
            <span>Hide 3D Globe</span>
          `;
          if (globeEngine) globeEngine.onResize();
        } else {
          globeSection.classList.add('hidden');
          globeToggleBtn.classList.remove('active');
          globeToggleBtn.innerHTML = `
            <svg class="icon-globe-svg" width="18" height="18" viewBox="0 0 256 256" fill="currentColor">
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm79.4,96H169.57a149.27,149.27,0,0,0-16.79-67.88A88.22,88.22,0,0,1,207.4,120ZM128,40.16a132.84,132.84,0,0,1,25,79.84H103A132.84,132.84,0,0,1,128,40.16ZM48.6,120A88.22,88.22,0,0,1,103.22,52.12,149.27,149.27,0,0,0,86.43,120Zm0,16H86.43a149.27,149.27,0,0,0,16.79,67.88A88.22,88.22,0,0,1,48.6,136Zm79.4,79.84a132.84,132.84,0,0,1-25-79.84h50A132.84,132.84,0,0,1,128,215.84Zm24.78-11.96A149.27,149.27,0,0,0,169.57,136H207.4A88.22,88.22,0,0,1,152.78,203.88Z"/>
            </svg>
            <span>View 3D Globe</span>
          `;
        }
      });
    }
  }

  /**
   * Sound synthesis using Web Audio API
   */
  function playTickAudio() {
    try {
      if (!audioCtx) {
        const AudioClass = window.AudioContext || window.webkitAudioContext;
        if (AudioClass) audioCtx = new AudioClass();
      }
      if (!audioCtx) return;
      if (audioCtx.state === 'suspended') audioCtx.resume();

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.012);
      gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.012);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.014);
    } catch (e) {}
  }

  /**
   * Setup search input, clear button and filter pills
   */
  function setupSearchAndFilters() {
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim().toLowerCase();
        if (clearSearchBtn) {
          clearSearchBtn.style.display = state.searchQuery ? 'inline-flex' : 'none';
        }
        renderClocksGrid();
      });
    }

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        state.searchQuery = '';
        clearSearchBtn.style.display = 'none';
        renderClocksGrid();
      });
    }

    if (btnJumpMyZone) {
      btnJumpMyZone.addEventListener('click', () => {
        jumpToUserZoneClock();
      });
    }

    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.activeFilter = pill.getAttribute('data-filter');
        renderClocksGrid();
      });
    });

    // Modal close events
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeCountriesModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeCountriesModal);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeCountriesModal();
    });
  }

  /**
   * Checks if a zone matches the user's browser timezone
   */
  function isUserZone(zone) {
    const userOffsetHours = state.userOffsetMinutes / 60;
    return Math.abs(zone.offset - userOffsetHours) < 0.05;
  }

  /**
   * Update top user zone banner
   */
  function updateUserZoneBadge() {
    if (!userZoneHeroTag) return;
    const userOffsetHours = state.userOffsetMinutes / 60;
    const sign = userOffsetHours >= 0 ? '+' : '';
    const formatted = `UTC${sign}${userOffsetHours}`;
    const userZoneObj = WORLD_TIMEZONES.find(z => isUserZone(z));
    const zoneName = userZoneObj ? userZoneObj.name : state.userTzString;

    userZoneHeroTag.innerHTML = `
      <i class="ph-bold ph-map-pin"></i> Your Local Timezone: <strong>${formatted}</strong> (${zoneName})
    `;
  }

  /**
   * Renders the grid of clocks for all matching timezones
   */
  function renderClocksGrid() {
    if (!clocksGrid) return;

    const filtered = WORLD_TIMEZONES.filter(zone => {
      // Filter pills
      if (state.activeFilter === 'myzone') {
        if (!isUserZone(zone)) return false;
      } else if (state.activeFilter === 'fractional') {
        if (Number.isInteger(zone.offset)) return false;
      } else if (state.activeFilter === 'asia' || state.activeFilter === 'europe' || state.activeFilter === 'americas' || state.activeFilter === 'africa' || state.activeFilter === 'oceania') {
        const hasRegion = zone.countries.some(c => c.region.toLowerCase() === state.activeFilter);
        if (!hasRegion) return false;
      }

      // Search query
      if (state.searchQuery) {
        const q = state.searchQuery;
        const matchZone = 
          zone.name.toLowerCase().includes(q) ||
          zone.offsetStr.toLowerCase().includes(q) ||
          zone.abbr.toLowerCase().includes(q);

        const matchCountry = zone.countries.some(c => 
          c.name.toLowerCase().includes(q) ||
          c.capital.toLowerCase().includes(q) ||
          (c.note && c.note.toLowerCase().includes(q))
        );

        if (!matchZone && !matchCountry) return false;
      }

      return true;
    });

    if (visibleCountBadge) {
      visibleCountBadge.innerHTML = `<i class="ph-bold ph-clock"></i> ${filtered.length} / ${WORLD_TIMEZONES.length} Timezones`;
    }

    if (filtered.length === 0) {
      clocksGrid.innerHTML = `
        <div class="empty-search-state">
          <div class="empty-search-icon"><i class="ph-bold ph-magnifying-glass"></i></div>
          <h3>No matching timezones or countries found</h3>
          <p>Try searching by country name (e.g., "United States", "Japan", "United Kingdom", "France", "Vietnam", "Brazil") or timezone ("UTC+7", "EST").</p>
          <button class="btn btn-secondary btn-sm" onclick="document.getElementById('zoneSearchInput').value=''; document.getElementById('zoneSearchInput').dispatchEvent(new Event('input'))">Clear Filters</button>
        </div>
      `;
      return;
    }

    clocksGrid.innerHTML = '';
    filtered.forEach(zone => {
      const card = createTimezoneClockCard(zone);
      clocksGrid.appendChild(card);
    });

    updateAllClocks();
  }

  /**
   * Creates an individual Timezone Clock Card
   */
  function createTimezoneClockCard(zone) {
    const isMine = isUserZone(zone);
    const card = document.createElement('div');
    card.className = `tz-clock-card ${isMine ? 'is-user-zone' : ''}`;
    card.id = `card-${zone.id}`;
    card.setAttribute('data-zone-id', zone.id);

    // Flags preview (first 4 countries + count)
    const previewFlags = zone.countries.slice(0, 4).map(c => c.flag).join(' ');
    const extraCount = zone.countries.length > 4 ? `+${zone.countries.length - 4}` : '';

    card.innerHTML = `
      ${isMine ? `<div class="user-zone-badge-tag"><i class="ph-bold ph-check-circle"></i> Your Timezone</div>` : ''}

      <div class="card-clock-header">
        <span class="tz-offset-pill font-mono">${zone.offsetStr}</span>
        <span class="tz-abbr-pill">${zone.abbr}</span>
      </div>

      <!-- Analog Clock Face -->
      <div class="card-analog-wrapper">
        <div class="analog-clock-container card-dial" id="dial-${zone.id}">
          <div class="clock-dial-marks"></div>
          <div class="analog-clock-hand analog-hour-hand" id="hour-${zone.id}"></div>
          <div class="analog-clock-hand analog-min-hand" id="min-${zone.id}"></div>
          <div class="analog-clock-hand analog-sec-hand" id="sec-${zone.id}"></div>
          <div class="analog-clock-pin"></div>
        </div>
      </div>

      <!-- Digital Readout -->
      <div class="card-digital-block">
        <div class="card-digital-time font-mono" id="time-${zone.id}">--:--:--</div>
        <div class="card-date-line" id="date-${zone.id}">Loading date...</div>
      </div>

      <!-- Timezone Details -->
      <div class="card-zone-info">
        <div class="card-zone-name" title="${zone.name}">${zone.name}</div>
        <div class="card-zone-sub" title="${zone.abbr}">${zone.abbr} &bull; ${zone.countries.length} countries/territories</div>
      </div>

      <!-- Countries Preview Button / Footer -->
      <div class="card-countries-footer">
        <div class="preview-flags-row">
          <span class="flags-str">${previewFlags}</span>
          ${extraCount ? `<span class="flags-extra">${extraCount}</span>` : ''}
        </div>
        <div class="click-see-countries-btn">
          <span>View ${zone.countries.length} countries</span>
          <i class="ph-bold ph-arrow-right"></i>
        </div>
      </div>
    `;

    // Click anywhere on card -> open countries modal!
    card.addEventListener('click', () => {
      openCountriesModal(zone);
    });

    return card;
  }

  /**
   * Main ticking loop updating all clocks synchronously
   */
  function startClockTickingLoop() {
    updateAllClocks();

    setInterval(() => {
      updateAllClocks();
      if (state.soundEnabled) playTickAudio();
    }, 1000);
  }

  /**
   * Updates all clock hands and digital time displays
   */
  function updateAllClocks() {
    const now = new Date();

    WORLD_TIMEZONES.forEach(zone => {
      const hourHand = document.getElementById(`hour-${zone.id}`);
      const minHand = document.getElementById(`min-${zone.id}`);
      const secHand = document.getElementById(`sec-${zone.id}`);
      const timeEl = document.getElementById(`time-${zone.id}`);
      const dateEl = document.getElementById(`date-${zone.id}`);

      // Calculate time for this zone = UTC time + offset
      const utcMs = now.getTime() + (now.getTimezoneOffset() * 60000);
      const zoneDate = new Date(utcMs + (zone.offset * 3600000));

      const hours = zoneDate.getHours();
      const minutes = zoneDate.getMinutes();
      const seconds = zoneDate.getSeconds();

      // Clock hands degrees
      const secDeg = seconds * 6;
      const minDeg = minutes * 6 + seconds * 0.1;
      const hourDeg = (hours % 12) * 30 + minutes * 0.5;

      if (secHand) secHand.style.transform = `rotate(${secDeg}deg)`;
      if (minHand) minHand.style.transform = `rotate(${minDeg}deg)`;
      if (hourHand) hourHand.style.transform = `rotate(${hourDeg}deg)`;

      // Digital display
      if (timeEl) {
        let displayHours = hours;
        let ampm = '';
        if (!state.use24H) {
          ampm = hours >= 12 ? ' PM' : ' AM';
          displayHours = hours % 12 || 12;
        }
        const pad = (n) => String(n).padStart(2, '0');
        timeEl.textContent = `${pad(displayHours)}:${pad(minutes)}:${pad(seconds)}${ampm}`;
      }

      if (dateEl) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const dayName = days[zoneDate.getDay()];
        const monthName = months[zoneDate.getMonth()];
        dateEl.textContent = `${dayName}, ${monthName} ${zoneDate.getDate()}, ${zoneDate.getFullYear()}`;
      }
    });

    // Update active modal clock if open
    if (state.selectedZone && countryModal && countryModal.classList.contains('open')) {
      updateModalLiveClock(state.selectedZone);
    }
  }

  /**
   * Opens the Countries Modal when clicking any clock
   */
  function openCountriesModal(zone) {
    state.selectedZone = zone;
    if (!countryModal || !modalOverlay || !modalBodyContent) return;

    // Focus 3D globe to coordinates of this timezone if globe is active
    if (globeEngine && zone.lat && zone.lng) {
      globeEngine.focusOnCoordinate(zone.lat, zone.lng);
    }

    const diffHours = zone.offset - (state.userOffsetMinutes / 60);
    let diffStr = 'Same time as your browser';
    if (diffHours > 0) diffStr = `Ahead of your browser by ${diffHours} hr(s) (+${diffHours}h)`;
    else if (diffHours < 0) diffStr = `Behind your browser by ${Math.abs(diffHours)} hr(s) (${diffHours}h)`;

    modalBodyContent.innerHTML = `
      <div class="modal-zone-hero">
        <div class="modal-zone-top">
          <span class="tz-offset-pill large font-mono">${zone.offsetStr}</span>
          <span class="tz-abbr-pill large">${zone.abbr}</span>
        </div>
        <h2 class="modal-zone-title">${zone.name}</h2>

        <div class="modal-clock-hero">
          <div class="modal-digital-clock font-mono" id="modalLiveTime">--:--:--</div>
          <div class="modal-date-line" id="modalLiveDate">Loading...</div>
          <div class="modal-diff-badge"><i class="ph-bold ph-hourglass-high"></i> ${diffStr}</div>
        </div>

        ${zone.description ? `<p class="modal-zone-desc"><i class="ph-bold ph-info"></i> ${zone.description}</p>` : ''}
      </div>

      <div class="modal-countries-header">
        <div class="countries-count-title">
          <i class="ph-bold ph-globe"></i> All Countries & Territories (${zone.countries.length}):
        </div>
        <button class="btn btn-secondary btn-sm" id="btnCopyCountriesList">
          <i class="ph-bold ph-copy"></i> Copy List
        </button>
      </div>

      <!-- Countries List Table / Cards -->
      <div class="modal-countries-list">
        ${zone.countries.map((c) => `
          <div class="modal-country-item">
            <div class="country-item-left">
              <span class="modal-country-flag">${c.flag}</span>
              <div class="modal-country-names">
                <strong class="modal-c-name">${c.name}</strong>
                <span class="modal-c-sub">Capital: ${c.capital} &bull; ${c.region}</span>
              </div>
            </div>
            <div class="country-item-right">
              ${c.note ? `<span class="modal-c-note"><i class="ph-bold ph-map-pin"></i> ${c.note}</span>` : `<span class="modal-c-region">${c.region}</span>`}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    countryModal.classList.add('open');
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Hook copy button
    const copyBtn = document.getElementById('btnCopyCountriesList');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const text = zone.countries.map(c => `${c.flag} ${c.name} - Capital: ${c.capital} [${c.note || c.region}]`).join('\n');
        navigator.clipboard.writeText(`${zone.name} (${zone.offsetStr}):\n\n` + text).then(() => {
          showToast(`Copied ${zone.countries.length} countries to clipboard! 📋`);
        });
      });
    }

    updateModalLiveClock(zone);
  }

  function updateModalLiveClock(zone) {
    const timeEl = document.getElementById('modalLiveTime');
    const dateEl = document.getElementById('modalLiveDate');
    if (!timeEl || !dateEl) return;

    const now = new Date();
    const utcMs = now.getTime() + (now.getTimezoneOffset() * 60000);
    const zoneDate = new Date(utcMs + (zone.offset * 3600000));

    const hours = zoneDate.getHours();
    const minutes = zoneDate.getMinutes();
    const seconds = zoneDate.getSeconds();

    let displayHours = hours;
    let ampm = '';
    if (!state.use24H) {
      ampm = hours >= 12 ? ' PM' : ' AM';
      displayHours = hours % 12 || 12;
    }
    const pad = (n) => String(n).padStart(2, '0');
    timeEl.textContent = `${pad(displayHours)}:${pad(minutes)}:${pad(seconds)}${ampm}`;

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    dateEl.textContent = `${days[zoneDate.getDay()]}, ${months[zoneDate.getMonth()]} ${zoneDate.getDate()}, ${zoneDate.getFullYear()}`;
  }

  function closeCountriesModal() {
    if (countryModal) countryModal.classList.remove('open');
    if (modalOverlay) modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  /**
   * Jump straight to user's local timezone clock card
   */
  function jumpToUserZoneClock() {
    // Reset filters
    state.searchQuery = '';
    state.activeFilter = 'all';
    if (searchInput) searchInput.value = '';
    filterPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-filter') === 'all'));
    renderClocksGrid();

    const myZone = WORLD_TIMEZONES.find(z => isUserZone(z));
    if (myZone) {
      const el = document.getElementById(`card-${myZone.id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('highlight-glow');
        setTimeout(() => el.classList.remove('highlight-glow'), 2500);
      }
      showToast(`Jumped to your local timezone: ${myZone.name} (${myZone.offsetStr})`);
    }
  }

  function showToast(msg) {
    const toast = document.getElementById('spac2Toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('visible');
    setTimeout(() => toast.classList.remove('visible'), 2800);
  }
});

