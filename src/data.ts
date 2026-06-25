import { RouteInfo, GearItem, Testimonial, RouteType } from './types';
import { publicAsset } from './utils/assetUrl';
import voge900Img from './assets/images/voge-900-ds.jpg';
import voge800Img from './assets/images/voge-800-rally.jpg';
import voge625Img from './assets/images/voge-625-dsx.jpg';

export const ROUTE_TYPES: {
  id: RouteType;
  label: RouteInfo['name'];
  description: RouteInfo['description'];
}[] = [
  {
    id: 'trail',
    label: { es: 'Trail', en: 'Trail' },
    description: {
      es: 'Rutas diseñadas para realizar largas tiradas de kilómetros y tiempo en jornada. Pensadas para quienes buscan autonomía, resistencia y días completos sobre la moto.',
      en: 'Routes designed for long daily stretches of distance and riding time. Built for riders seeking autonomy, endurance, and full days in the saddle.',
    },
  },
  {
    id: 'custom',
    label: { es: 'Custom', en: 'Custom' },
    description: {
      es: 'Rutas diseñadas para disfrutar del camino a velocidad media, con distancias de no más de 200 km. El foco está en el paisaje, las paradas y el placer de rodar sin prisas.',
      en: 'Routes designed to enjoy the journey at a medium pace, with distances of no more than 200 km. Focused on scenery, stops, and unhurried riding pleasure.',
    },
  },
  {
    id: 'offroad',
    label: { es: 'Off-Road', en: 'Off-Road' },
    description: {
      es: 'Rutas diseñadas para recorrer en su mayor parte por pistas fuera de carretera. Aventura pura, tracción, polvo y paisajes a los que solo se accede sin asfalto.',
      en: 'Routes designed to be ridden mostly on off-road tracks. Pure adventure, traction, dust, and landscapes only reachable off the tarmac.',
    },
  },
];

export const ROUTES: RouteInfo[] = [
  {
    id: 'guardianes',
    routeType: 'custom',
    name: { es: 'Ruta de los Guardianes del Silencio: El Legado Templario', en: 'Guardians of Silence Route: The Templar Legacy' },
    tagline: { es: 'Curvas de roca, asfalto indómito y el susurro del Maestrazgo profundo', en: 'Rock curves, untamed tarmac, and the whisper of deep Maestrazgo' },
    distance: '380 km',
    duration: { es: '3 días', en: '3 days' },
    difficulty: { es: 'Media', en: 'Medium' },
    curves: 5,
    terrain: { es: 'Asfalto secundario, carreteras estrechas, puertos revirados y tramos técnicos sin arcén', en: 'Secondary tarmac, narrow roads, winding passes, and technical shoulderless sections' },
    description: {
      es: 'Una incursión mística de tres días diseñada para motoristas que buscan evadirse del mundo. Desafiarás leyes de la física entre cañones colosales tallados en roca viva, devorarás el asfalto de la ruta más magnética de España y descansarás en palacios medievales y refugios premium con el rugir del motor aún resonando en el alma.',
      en: 'A mystical three-day incursion designed for riders seeking to escape the world. You will defy physics between colossal canyons carved in living rock, devour the tarmac of Spain\'s most magnetic road, and rest in medieval palaces and premium lodges with the engine\'s roar still echoing in your soul.',
    },
    highlights: {
      es: [
        'Morella y Mirambel: imponentes fortalezas medievales amuralladas donde el tiempo se detuvo',
        'The Silent Route (A-1702): 50 km de curvas perfectas flanqueadas por los Órganos de Montoro',
        'Puerto del Cuarto Pelado (1.657 m): desafío técnico con vistas de vértigo sobre el horizonte turolense',
        'El Cañón de Aliaga: paisaje geológico lunar y retorcido que te hará sentir diminuto sobre la moto',
        'El Túnel de Castellote: pasadizo excavado en la roca que vigila la antigua frontera templaria',
      ],
      en: [
        'Morella and Mirambel: imposing walled medieval fortresses where time stands still',
        'The Silent Route (A-1702): 50 km of perfect curves flanked by the majestic Órganos de Montoro',
        'Puerto del Cuarto Pelado (1,657 m): a technical challenge with dizzying views over the Teruel horizon',
        'Aliaga Canyon: a twisted lunar geological landscape that makes you feel tiny on the bike',
        'Castellote Tunnel: a spectacular rock-hewn passage guarding the ancient Templar frontier',
      ],
    },
    gallery: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/%C3%93rganos_de_Montoro.jpg/1280px-%C3%93rganos_de_Montoro.jpg',
        caption: {
          es: 'Ruta del Silencio (A-1702) · Órganos de Montoro',
          en: 'The Silent Route (A-1702) · Órganos de Montoro',
        },
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Municipio_de_Cantavieja_%28Teruel%29.jpg/1280px-Municipio_de_Cantavieja_%28Teruel%29.jpg',
        caption: {
          es: 'Cantavieja, capital del Maestrazgo',
          en: 'Cantavieja, capital of Maestrazgo',
        },
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Castillo_de_Morella_01.jpg/1280px-Castillo_de_Morella_01.jpg',
        caption: {
          es: 'Morella, fortaleza medieval amurallada',
          en: 'Morella, walled medieval fortress',
        },
      },
    ],
  },
  {
    id: 'corona',
    routeType: 'custom',
    name: { es: 'Corona del Pirineo: Hecho, Roncal y Benasque', en: 'Pyrenean Crown: Hecho, Roncal and Benasque' },
    tagline: { es: 'Cuatro días entre fronteras, circos glaciares y villas de piedra', en: 'Four days between borders, glacial cirques, and stone villages' },
    distance: '950 km',
    duration: { es: '4 días', en: '4 days' },
    difficulty: { es: 'Media-Alta', en: 'Medium-High' },
    curves: 5,
    terrain: { es: 'Asfalto secundario, valles pirenaicos, puertos revirados y tramos estrechos sin arcén', en: 'Secondary tarmac, Pyrenean valleys, winding passes, and narrow shoulderless sections' },
    description: {
      es: 'Una travesía Custom de cuatro días por el Pirineo aragonés y navarro: viernes tarde de entrada por el Valle de Hecho, sábado y domingo completos entre Belagua, Ordesa y Aínsa, y regreso el lunes por la tarde tras recorrer el Valle de Benasque. Carreteras secundarias, paisajes de vértigo y alojamientos con alma de montaña.',
      en: 'A four-day Custom crossing of the Aragonese and Navarrese Pyrenees: Friday afternoon entry through the Hecho Valley, full Saturday and Sunday between Belagua, Ordesa, and Aínsa, and Monday afternoon return after riding the Benasque Valley. Secondary roads, dizzying landscapes, and mountain lodges with soul.',
    },
    highlights: {
      es: [
        'Valle de Hecho y monasterio de San Pedro de Siresa: románico en la roca viva',
        'Ansó, Roncal y Ochagavía: la Navarra más auténtica sobre dos ruedas',
        'Belagua: circo glaciar y sensación alpina en pleno Pirineo',
        'Ordesa y Torla: el mito del Monte Perdido desde la moto',
        'Aínsa: villa medieval sobre el río Ara, una de las más bellas de España',
        'Valle de Benasque y vistas al Aneto: cierre épico antes del regreso',
      ],
      en: [
        'Hecho Valley and San Pedro de Siresa monastery: Romanesque carved in living rock',
        'Ansó, Roncal, and Ochagavía: the most authentic Navarra on two wheels',
        'Belagua: glacial cirque and alpine atmosphere deep in the Pyrenees',
        'Ordesa and Torla: the Monte Perdido legend from the saddle',
        'Aínsa: medieval village above the Ara river, one of Spain\'s finest',
        'Benasque Valley and Aneto views: an epic finale before heading home',
      ],
    },
    gallery: [
      {
        src: publicAsset('images/routes/corona/ordesa.jpg'),
        caption: {
          es: 'Valle de Ordesa · Parque Nacional',
          en: 'Ordesa Valley · National Park',
        },
      },
      {
        src: publicAsset('images/routes/corona/ochagavia.jpg'),
        caption: {
          es: 'Ochagavía, joya del Valle de Salazar',
          en: 'Ochagavía, jewel of the Salazar Valley',
        },
      },
      {
        src: publicAsset('images/routes/corona/benasque.jpg'),
        caption: {
          es: 'Benasque y el macizo del Aneto',
          en: 'Benasque and the Aneto massif',
        },
      },
    ],
  },
  {
    id: 'travesia',
    routeType: 'trail',
    name: { es: 'La Gran Travesía: Pirineo Íntegro (Ida y Vuelta)', en: 'The Great Crossing: Full Pyrenees (Out & Back)' },
    tagline: { es: 'Siete días y 2.200 km cruzando España y Francia por los puertos más legendarios', en: 'Seven days and 2,200 km across Spain and France via the most legendary passes' },
    distance: '2.260 km',
    duration: { es: '7 días', en: '7 days' },
    difficulty: { es: 'Alta', en: 'High' },
    curves: 5,
    terrain: { es: 'Largas tiradas diarias (300+ km), puertos de montaña, frontera España-Francia y carreteras secundarias', en: 'Long daily stretches (300+ km), mountain passes, Spain–France border crossings, and secondary roads' },
    description: {
      es: 'Trail de siete jornadas en circuito cerrado: salida y llegada en el Atlántico (Hondarribia). Ida por el lado español de oeste a este — Baztán, Roncal, Ordesa, Benasque, Arán y Cerdanya — y vuelta por la vertiente francesa enlazando Tourmalet, Aubisque, Gavarnie, Canigó y Pourtalet. Mínimo 300 km diarios para exprimir el Pirineo entero.',
      en: 'A seven-day Trail loop: start and finish on the Atlantic (Hondarribia). Outbound on the Spanish side west to east — Baztan, Roncal, Ordesa, Benasque, Aran, and Cerdanya — and return on the French side linking Tourmalet, Aubisque, Gavarnie, Canigó, and Pourtalet. Minimum 300 km per day to experience the full Pyrenees.',
    },
    highlights: {
      es: [
        'Circuito ida y vuelta: Atlántico → Pirineo → Atlántico',
        'Ida por España: Belagua, Monte Perdido, Aneto, Bonaigua y Puigcerdà',
        'Vuelta por Francia: Canigó, Collioure, Pailhères, Tourmalet y Aubisque',
        'Col du Tourmalet, Aubisque y Pourtalet — puertos míticos del Tour',
        'Canfranc-Estación y Hondarribia: cierre épico junto al mar',
        'Jornadas Trail de 300+ km con paradas gastronómicas seleccionadas',
      ],
      en: [
        'Out-and-back loop: Atlantic → Pyrenees → Atlantic',
        'Outbound via Spain: Belagua, Monte Perdido, Aneto, Bonaigua, and Puigcerdà',
        'Return via France: Canigó, Collioure, Pailhères, Tourmalet, and Aubisque',
        'Col du Tourmalet, Aubisque, and Pourtalet — legendary Tour de France passes',
        'Canfranc Station and Hondarribia: an epic seaside finale',
        '300+ km Trail days with hand-picked gastronomic stops',
      ],
    },
    gallery: [
      {
        src: publicAsset('images/routes/travesia/hondarribia.jpg'),
        caption: { es: 'Hondarribia · Salida y llegada atlántica', en: 'Hondarribia · Atlantic start and finish' },
      },
      {
        src: publicAsset('images/routes/travesia/tourmalet.jpg'),
        caption: { es: 'Col du Tourmalet · Vuelta por Francia', en: 'Col du Tourmalet · Return through France' },
      },
      {
        src: publicAsset('images/routes/travesia/canfranc.jpg'),
        caption: { es: 'Estación Internacional de Canfranc', en: 'Canfranc International Station' },
      },
    ],
  },
  {
    id: 'dehesa',
    routeType: 'offroad',
    name: { es: 'Travesía de la Dehesa Roja', en: 'Red Meadow Crossing' },
    tagline: { es: 'Pistas compactadas, polvo y horizontes sin asfalto', en: 'Compact tracks, dust, and horizons beyond the tarmac' },
    distance: '130 km',
    duration: { es: '1 día', en: '1 day' },
    difficulty: { es: 'Media', en: 'Medium' },
    curves: 3,
    terrain: { es: 'Pistas de tierra compactada y caminos forestales', en: 'Compact dirt tracks and forest trails' },
    description: { es: 'Off-Road pensado para rodar mayoritariamente fuera de carretera. Cruza dehesas, vadeos secos y senderos forestales con tramos técnicos moderados y paisajes que el asfalto nunca alcanza.', en: 'An Off-Road route built to ride mostly off the tarmac. Cross meadows, dry fords, and forest trails with moderate technical sections and landscapes the road never reaches.' },
    highlights: {
      es: [
        'Tramo principal por pista forestal de 40 km',
        'Mirador natural sobre la llanura cerealista',
        'Cruce de arroyo en zona de dehesa',
        'Regreso por camino rural alternativo sin asfalto'
      ],
      en: [
        'Main 40 km forest track section',
        'Natural viewpoint over the cereal plain',
        'Meadow stream crossing',
        'Return via alternative unpaved rural path'
      ]
    }
  },
  {
    id: 'senderos',
    routeType: 'offroad',
    name: { es: 'Senderos de la Sierra Vieja', en: 'Old Mountain Trails' },
    tagline: { es: 'Tierra, roca y tracción en estado puro', en: 'Dirt, rock, and traction in its purest form' },
    distance: '95 km',
    duration: { es: '1 día', en: '1 day' },
    difficulty: { es: 'Avanzada', en: 'Advanced' },
    curves: 2,
    terrain: { es: 'Pistas off-road técnicas, roderas y tramos rocosos', en: 'Technical off-road tracks, ruts, and rocky sections' },
    description: { es: 'La Off-Road más salvaje del catálogo. Más del 70 % del recorrido transcurre por pistas fuera de carretera entre crestas, rodera y tramos de piedra suelta para pilotos con experiencia off-road.', en: 'The wildest Off-Road in our catalog. Over 70% of the route runs off-road between ridges, ruts, and loose rock sections for riders with off-road experience.' },
    highlights: {
      es: [
        'Ascenso por pista de cresta con vistas 360°',
        'Tramo técnico de rodera y piedra suelta',
        'Descenso por barranco forestal',
        'Enlace final por camino de herradura histórico'
      ],
      en: [
        'Ridge track climb with 360° views',
        'Technical rutted and loose-rock section',
        'Forest gorge descent',
        'Final link via historic mule trail'
      ]
    }
  }
];

export interface Motorcycle {
  id: string;
  name: string;
  type: { es: string; en: string };
  engine: string;
  weight: string;
  description: { es: string; en: string };
  suitability: { es: string; en: string };
  image: string;
}

export const MOTORCYCLES: Motorcycle[] = [
  {
    id: 'voge900ds',
    name: 'Voge 900DSX',
    type: { es: 'Aventura Gran Turismo', en: 'Grand Touring Adventure' },
    engine: '895 cc | 95 CV',
    weight: '238 kg',
    description: {
      es: 'Nuestra apuesta premium. Motor bicilíndrico en paralelo de 895 cc con quickshifter, cuatro modos de conducción y suspensión KYB ajustable. Potencia fluida, protección aerodinámica y equipamiento de serie de alto nivel para devorar curvas en carreteras secundarias con máximo confort.',
      en: 'Our premium flagship. An 895 cc parallel-twin engine with quickshifter, four riding modes, and adjustable KYB suspension. Smooth power delivery, aerodynamic protection, and high-end standard equipment to devour backroad corners in maximum comfort.'
    },
    suitability: {
      es: 'Ideal para pilotos exigentes que buscan tecnología avanzada, estabilidad en rutas largas y sensaciones premium en cada tramo.',
      en: 'Ideal for demanding riders seeking advanced technology, stability on long routes, and a premium feel on every stretch of road.'
    },
    image: voge900Img
  },
  {
    id: 'voge800rally',
    name: 'Voge DS800 Rally',
    type: { es: 'Aventura Rally', en: 'Rally Adventure' },
    engine: '798 cc | 92 CV',
    weight: '213 kg',
    description: {
      es: 'Espíritu rally puro con alma de gran turismo. Motor bicilíndrico de 798 cc, depósito de 24 litros para autonomía extendida y suspensión KYB de largo recorrido totalmente ajustable. Ágil en tierra compactada y muy estable en carreteras secundarias reviradas.',
      en: 'Pure rally spirit with grand-touring soul. A 798 cc twin-cylinder engine, 24-liter fuel tank for extended range, and fully adjustable long-travel KYB suspension. Agile on compact dirt and highly stable on winding backroads.'
    },
    suitability: {
      es: 'Perfecta para pilotos que buscan versatilidad off-road, gran autonomía y una conducción dinámica sin renunciar al confort en ruta.',
      en: 'Perfect for riders seeking off-road versatility, long range, and dynamic handling without sacrificing on-road comfort.'
    },
    image: voge800Img
  },
  {
    id: 'voge625dsx',
    name: 'Voge 625DSX',
    type: { es: 'Aventura Media Trail', en: 'Mid-Size Trail Adventure' },
    engine: '581 cc | 64 CV',
    weight: '206 kg',
    description: {
      es: 'Equilibrio perfecto entre agilidad y capacidad de ruta. Motor bicilíndrico de 581 cc con embrague anti-rebote, ABS, control de tracción y suspensión KYB ajustable. Ligera, versátil y muy divertida en carreteras secundarias sin renunciar a la protección de una auténtica adventure.',
      en: 'The perfect balance of agility and touring capability. A 581 cc twin-cylinder engine with slipper clutch, ABS, traction control, and adjustable KYB suspension. Light, versatile, and hugely fun on backroads without sacrificing true adventure-bike protection.'
    },
    suitability: {
      es: 'Ideal para pilotos intermedios o avanzados que quieren una moto manejable, tecnológica y capaz tanto en asfalto revirado como en tramos ligeros off-road.',
      en: 'Ideal for intermediate or advanced riders who want a manageable, tech-rich bike capable on twisty tarmac and light off-road sections alike.'
    },
    image: voge625Img
  }
];

export const GEAR_ITEMS: GearItem[] = [
  {
    id: 'h-adv',
    name: 'Shoei Hornet ADV Carbon',
    category: 'helmet',
    brand: 'Shoei',
    material: { es: 'Fibra de carbono AIM+', en: 'Carbon fiber AIM+' },
    features: {
      es: ['Visor solar integrado', 'Aerodinámica optimizada contra turbulencias', 'Intercomunicador Cardo integrado pre-instalado'],
      en: ['Integrated sun visor', 'Optimized aerodynamics against high-speed buffetting', 'Integrated pre-installed Cardo intercom']
    }
  },
  {
    id: 'h-retro',
    name: 'Bell Bullitt Carbon Carbon',
    category: 'helmet',
    brand: 'Bell',
    material: { es: 'Fibra de carbono ultra ligera', en: 'Ultra-lightweight carbon fiber' },
    features: {
      es: ['Estilo vintage con seguridad de vanguardia', 'Visor de burbuja con amplio campo visual', 'Intercomunicador clásico Sena Slim'],
      en: ['Vintage styling with modern state-of-the-art safety', 'Bubble visor with exceptionally wide field of vision', 'Classic Sena Slim intercom']
    }
  },
  {
    id: 'j-adv',
    name: 'Revit Poseidon 3 GTX',
    category: 'jacket',
    brand: 'Revit',
    material: { es: 'Membrana Gore-Tex tricapa de alta resistencia', en: 'Heavy-duty 3-layer Gore-Tex membrane' },
    features: {
      es: ['100% impermeable y transpirable', 'Protecciones nivel 2 en espalda, hombros y codos', 'Ventilación magnética directa al pecho'],
      en: ['100% waterproof and breathable', 'CE Level 2 armor in back, shoulders, and elbows', 'Direct magnetic ventilation panels at chest']
    }
  },
  {
    id: 'j-retro',
    name: 'Spidi Tracker Leather',
    category: 'jacket',
    brand: 'Spidi',
    material: { es: 'Cuero de oveja curtido premium italiano 1.2mm', en: 'Premium 1.2mm Italian tanned sheepskin leather' },
    features: {
      es: ['Tratamiento repelente al agua', 'Forro térmico desmontable', 'Protecciones Warrior Lite ultra-finas homologadas'],
      en: ['Water-repellent treatment', 'Detachable thermal lining', 'CE-approved ultra-thin Warrior Lite armor']
    }
  },
  {
    id: 'g-adv',
    name: 'Alpinestars Toucan Gore-Tex',
    category: 'gloves',
    brand: 'Alpinestars',
    material: { es: 'Piel de cabra y membrana Gore-Tex Grip', en: 'Goatskin and Gore-Tex Grip membrane' },
    features: {
      es: ['Protector de nudillos de polímero inyectado', 'Refuerzos de aramida anti-abrasión', 'Zonas flexibles de acordeón para máxima tactilidad'],
      en: ['Injected polymer knuckle protector', 'Anti-abrasion aramid reinforcements', 'Accordion flex zones for maximum tactile feedback']
    }
  },
  {
    id: 'g-retro',
    name: 'Garibaldi Heritage Leather',
    category: 'gloves',
    brand: 'Garibaldi',
    material: { es: 'Piel flor de cabra microperforada', en: 'Micro-perforated full-grain goatskin' },
    features: {
      es: ['Protecciones invisibles de TPU en nudillos', 'Costuras externas para evitar rozaduras', 'Compatibilidad total con pantallas táctiles'],
      en: ['Invisible TPU protective knuckles', 'External seams to avoid pressure points and chafing', 'Full touchscreen compatibility']
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Carlos Mendoza',
    role: { es: 'Rider desde Barcelona', en: 'Rider from Barcelona' },
    quote: {
      es: 'Dos mil kilómetros de Pirineo en una semana: Tourmalet, Aubisque, Ordesa y el regreso por Canfranc hasta Hondarribia. Jornadas de 300 km que te dejan la retina llena. La Voge 900DSX impecable y el soporte logístico invisible.',
      en: 'Two thousand kilometres of Pyrenees in one week: Tourmalet, Aubisque, Ordesa, and the return via Canfranc to Hondarribia. 300 km days that fill your eyes. The Voge 900DSX was flawless and logistical support was invisible.',
    },
    route: { es: 'La Gran Travesía: Pirineo Íntegro', en: 'The Great Crossing: Full Pyrenees' },
    rating: 5
  },
  {
    id: 't2',
    name: 'Elena Rostova',
    role: { es: 'Aventurera desde Múnich', en: 'Adventurer from Munich' },
    quote: {
      es: 'La vuelta por el lado francés es otro mundo: Collioure, Tourmalet, Gavarnie… Todo con GPS pensado y hoteles con encanto cada noche. Para rodar muchos kilómetros sin perderte nada, esta Trail es la definición de aventura organizada.',
      en: 'The return leg on the French side is another world: Collioure, Tourmalet, Gavarnie… All with thoughtful GPS routes and charming hotels every night. For riding long miles without missing a thing, this Trail is organized adventure defined.',
    },
    route: { es: 'La Gran Travesía: Pirineo Íntegro', en: 'The Great Crossing: Full Pyrenees' },
    rating: 5
  },
  {
    id: 't3',
    name: 'Santi Villa',
    role: { es: 'Apasionado de las curvas', en: 'Cornering Enthusiast' },
    quote: {
      es: 'Las curvas del Maestrazgo en la ruta de los Guardianes del Silencio son pura adicción. The Silent Route, Morella al atardecer y alojamientos con historia: todo fluye sin prisas pero con intensidad. La Voge 625DSX con suspensión ajustada fue la compañera perfecta.',
      en: 'The Maestrazgo curves on the Guardians of Silence route are pure addiction. The Silent Route, Morella at sunset, and historic lodgings — everything flows unhurried yet intense. The Voge 625DSX with dialed-in suspension was the perfect companion.',
    },
    route: { es: 'Ruta de los Guardianes del Silencio', en: 'Guardians of Silence Route' },
    rating: 5
  }
];
