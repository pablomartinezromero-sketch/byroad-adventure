import { RouteInfo, GearItem, Testimonial, RouteType } from './types';
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
    id: 'canones',
    routeType: 'custom',
    name: { es: 'Ruta de los Cañones Profundos', en: 'Deep Canyons Route' },
    tagline: { es: 'Gargantas fluviales y curvas de vértigo esculpidas en piedra', en: 'River gorges and thrilling corners carved in stone' },
    distance: '185 km',
    duration: { es: '1 día', en: '1 day' },
    difficulty: { es: 'Media', en: 'Medium' },
    curves: 5,
    terrain: { es: 'Asfalto revirado, gargantas de piedra caliza', en: 'Twisting tarmac, limestone gorges' },
    description: { es: 'Una jornada Custom para saborear cada curva sin prisa. Carreteras esculpidas en acantilados de piedra, miradores de infarto y paradas gastronómicas a tu ritmo.', en: 'A Custom day to savor every corner unhurriedly. Roads carved into stone cliffs, breathtaking viewpoints, and gastronomic stops at your own pace.' },
    highlights: {
      es: [
        'Paso estrecho del Desfiladero de las Ánimas',
        'Mirador del Nido de Águila a 1.200m',
        'Almuerzo tradicional en el pueblo colgado de piedra',
        'Tramo de curvas continuas de herradura del cañón del Sil'
      ],
      en: [
        'Narrow passage of Desfiladero de las Ánimas',
        'Nido de Águila viewpoint at 1,200m',
        'Traditional lunch in the hanging stone village',
        'Hairpin curves section of the Sil Canyon'
      ]
    }
  },
  {
    id: 'encinas',
    routeType: 'custom',
    name: { es: 'Circuito de las Encinas Milenarias', en: 'Ancient Oak Circuit' },
    tagline: { es: 'Dehesas, pueblos blancos y carreteras sin reloj', en: 'Meadows, white villages, and roads without a clock' },
    distance: '160 km',
    duration: { es: '1 día', en: '1 day' },
    difficulty: { es: 'Fácil', en: 'Easy' },
    curves: 4,
    terrain: { es: 'Carreteras secundarias fluidas y poco transitadas', en: 'Flowing, lightly trafficked backroads' },
    description: { es: 'Ruta Custom ideal para disfrutar del camino a ritmo medio. Recorre dehesas infinitas, cruce de pueblos con encanto y tramos de asfalto perfecto por debajo de los 200 km.', en: 'An ideal Custom route to enjoy the road at a medium pace. Cross endless meadows, charming villages, and perfect tarmac stretches under 200 km.' },
    highlights: {
      es: [
        'Atardecer en mirador sobre la dehesa',
        'Parada en bodega local con cata incluida',
        'Tramo de curvas enlazadas sin tráfico pesado',
        'Pueblo amurallado para paseo a pie al final del día'
      ],
      en: [
        'Sunset viewpoint over the meadow landscape',
        'Stop at a local winery with tasting included',
        'Linked corner sections free of heavy traffic',
        'Walled village for a leisurely walk at day\'s end'
      ]
    }
  },
  {
    id: 'silencio',
    routeType: 'trail',
    name: { es: 'Senda del Olvido y el Silencio', en: 'Path of Oblivion and Silence' },
    tagline: { es: 'Pueblos medievales desiertos y valles donde el tiempo se detuvo', en: 'Deserted medieval villages and valleys frozen in time' },
    distance: '450 km',
    duration: { es: '3 días', en: '3 days' },
    difficulty: { es: 'Fácil', en: 'Easy' },
    curves: 4,
    terrain: { es: 'Carreteras rurales secundarias con poco tráfico', en: 'Secondary rural roads with little to no traffic' },
    description: { es: 'Trail de varias jornadas con largas tiradas diarias por una de las regiones más despobladas de la península. Bosques cerrados, puertos solitarios y horas sobre la moto cada día.', en: 'A multi-day Trail with long daily stretches through one of the peninsula\'s most unpopulated regions. Deep forests, solitary passes, and hours in the saddle each day.' },
    highlights: {
      es: [
        'Visita privada a un monasterio románico abandonado',
        'Cruzar el bosque templado de hayas centenarias',
        'Pernoctación en un pazo histórico del siglo XVII',
        'Carreteras de montaña estrechas sin línea divisoria central'
      ],
      en: [
        'Private visit to an abandoned Romanesque monastery',
        'Cross a temperate forest of ancient beech trees',
        'Overnight stay in a historic 17th-century manor (Pazo)',
        'Narrow mountain roads with no dividing central line'
      ]
    }
  },
  {
    id: 'atlantico',
    routeType: 'trail',
    name: { es: 'Acantilados Atlánticos Salvajes', en: 'Wild Atlantic Cliffs' },
    tagline: { es: 'El rugido del océano bajo tus neumáticos en cabos indómitos', en: 'The roar of the ocean under your tires at untamed capes' },
    distance: '580 km',
    duration: { es: '4 días', en: '4 days' },
    difficulty: { es: 'Avanzada', en: 'Advanced' },
    curves: 5,
    terrain: { es: 'Asfalto costero técnico, microclimas cambiantes', en: 'Technical coastal tarmac, changing microclimates' },
    description: { es: 'Trail exigente con jornadas largas bordeando el continente. Curvas técnicas, vientos marinos y tramos de más de 150 km diarios para pilotos que quieren exprimir cada día.', en: 'A demanding Trail with long days bordering the continent. Technical corners, marine winds, and daily stretches exceeding 150 km for riders who want to make the most of every day.' },
    highlights: {
      es: [
        'Ruta por el faro más occidental del continente',
        'Tramo técnico de subida al Monte del Trueno',
        'Cena de marisco local fresco en un puerto pesquero tradicional',
        'Curvas infinitas al filo de acantilados de 300 metros de caída'
      ],
      en: [
        'Ride along the westernmost lighthouse on the mainland',
        'Technical climbing stretch up Monte del Trueno',
        'Dinner featuring fresh local seafood at a traditional fishing port',
        'Endless sweeping corners bordering 300-meter drop cliffs'
      ]
    }
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
      es: 'La experiencia de rodar por carreteras secundarias gallegas que no aparecen en ninguna guía turística fue increíble. No tuve que llevar mi moto ni preocuparme por facturar mi casco. La Voge 900DSX que me entregaron estaba impecable, y el traje Revit Poseidon me mantuvo seco bajo el diluvio costero.',
      en: 'The experience of riding through secondary roads in Galicia that do not appear in any tourist guide was incredible. I did not have to bring my bike or worry about checking my helmet. The Voge 900DSX they provided was immaculate, and the Revit Poseidon suit kept me completely dry during the coastal storm.'
    },
    route: { es: 'Acantilados Atlánticos Salvajes', en: 'Wild Atlantic Cliffs' },
    rating: 5
  },
  {
    id: 't2',
    name: 'Elena Rostova',
    role: { es: 'Aventurera desde Múnich', en: 'Adventurer from Munich' },
    quote: {
      es: 'Detesto los grupos turísticos abarrotados. Con Byroad Adventures sentí que estaba explorando sola con mis amigos, pero con la tranquilidad de tener un GPS cargado con desvíos fascinantes y un soporte mecánico discreto pero atento. Las chaquetas de cuero y cascos vintage encajaban perfecto con la mística del viaje.',
      en: 'I hate crowded tour groups. With Byroad Adventures, I felt like I was exploring alone with my friends, but with the peace of mind of having a GPS loaded with fascinating detours and a discrete yet attentive mechanical support. The leather jackets and vintage helmets fit the tour mystique perfectly.'
    },
    route: { es: 'Senda del Olvido y el Silencio', en: 'Path of Oblivion and Silence' },
    rating: 5
  },
  {
    id: 't3',
    name: 'Santi Villa',
    role: { es: 'Apasionado de las curvas', en: 'Cornering Enthusiast' },
    quote: {
      es: 'El asfalto del Desfiladero de las Ánimas en la ruta de los Cañones es un sueño húmedo para cualquier motociclista. Curvas perfectas, tráfico inexistente, y la tranquilidad de llevar una Voge 625DSX con neumáticos nuevos y suspensión ajustada a mi peso. El servicio merece cada céntimo.',
      en: 'The tarmac of the Desfiladero de las Ánimas on the Canyons route is an absolute dream for any motorcyclist. Perfect curves, non-existent traffic, and the peace of mind of riding a Voge 625DSX with brand new tires and suspension dialed in for my weight. Outstanding service!'
    },
    route: { es: 'Ruta de los Cañones Profundos', en: 'Deep Canyons Route' },
    rating: 5
  }
];
