import { RouteAccommodation, RouteStage, Localized } from '../types';
import { publicAsset } from '../utils/assetUrl';

function stages(es: RouteStage[], en: RouteStage[]): Localized<RouteStage[]> {
  return { es, en };
}

export const ROUTE_DETAIL_FALLBACK: Localized<string> = {
  es: 'El detalle etapa a etapa de esta ruta estará disponible próximamente. Mientras tanto, consulta los puntos clave en la descripción.',
  en: 'The stage-by-stage detail for this route will be available soon. In the meantime, see the key highlights in the description.',
};

export const ACCOMMODATIONS_FALLBACK: Localized<string> = {
  es: 'Los alojamientos seleccionados para esta ruta se confirman al reservar según disponibilidad y temporada.',
  en: 'Selected accommodations for this route are confirmed upon booking based on availability and season.',
};

export const ROUTE_EXTRAS: Record<
  string,
  { routeDetail: Localized<RouteStage[]>; accommodations: RouteAccommodation[] }
> = {
  guardianes: {
    routeDetail: stages(
      [
        {
          title: { es: 'Día 1 (Viernes tarde) — Rumbo a la Fortaleza del Maestrazgo', en: 'Day 1 (Friday afternoon) — Toward the Maestrazgo Fortress' },
          content: {
            es: `El objetivo de esta tarde es salir del bullicio, adaptarse al ritmo de las carreteras secundarias y llegar a dormir al corazón de la comarca.

Ruta aproximada: Entrada al Maestrazgo por la zona del Bajo Aragón/Matarraña hacia Morella o Cantavieja (dependiendo de tu punto de origen exacto, tomaremos como punto de encuentro neurálgico la aproximación por Alcañiz o por la costa/Castellón hacia Morella).

El tramo: La subida por la N-232 (ya remodelada) o el desvío por la CV-14 hacia Morella es un preludio perfecto. Si vienes desde el norte/Zaragoza, bajar por la A-226 desde Calanda hacia Mas de las Matas ya te introduce en el terreno de juego.

Parada recomendada: Una breve parada al atardecer en el mirador de la CV-125 o contemplar la impresionante silueta amurallada de Morella iluminada.

Cena y alojamiento premium:
• Opción 1 (Morella): Hotel Cardenal Ram. Un palacio del siglo XVI reformado en pleno casco histórico, con ambiente medieval y comodidades contemporáneas.
• Opción 2 (Mirambel/Cantavieja): Hotel Balfagón Alto Maestrazgo (Cantavieja). Spa ideal para quitarse la tensión del viaje y uno de los mejores restaurantes de la zona.

Restaurante con encanto: En Cantavieja, el restaurante del Hotel Balfagón (trufa, setas y carnes de la zona). En Morella, Restaurante Daluan (alta cocina del Maestrazgo, con encanto íntimo).`,
            en: `The goal this afternoon is to leave the bustle behind, adapt to the rhythm of secondary roads, and sleep at the heart of the region.

Approximate route: Entry into Maestrazgo from Lower Aragon/Matarraña toward Morella or Cantavieja (depending on your exact starting point; our key meeting approach is via Alcañiz or from the coast/Castellón toward Morella).

The stretch: The climb on the N-232 (recently upgraded) or the detour on the CV-14 toward Morella is a perfect prelude. Coming from the north/Zaragoza, descending the A-226 from Calanda toward Mas de las Matas already puts you on the playground.

Recommended stop: A brief sunset stop at the CV-125 viewpoint or admire Morella's impressive illuminated walled silhouette.

Dinner and premium lodging:
• Option 1 (Morella): Hotel Cardenal Ram. A restored 16th-century palace in the historic center, medieval atmosphere with contemporary comfort.
• Option 2 (Mirambel/Cantavieja): Hotel Balfagón Alto Maestrazgo (Cantavieja). Spa to unwind after the ride and one of the area's finest restaurants.

Charming dining: In Cantavieja, Hotel Balfagón's restaurant (truffle, mushrooms, and local meats). In Morella, Restaurante Daluan (high Maestrazgo cuisine with intimate charm).`,
          },
        },
        {
          title: { es: 'Día 2 (Sábado) — El Corazón de las Curvas y The Silent Route', en: 'Day 2 (Saturday) — The Heart of the Curves and The Silent Route' },
          content: {
            es: `El día grande. Kilómetros de curvas reviradas, desfiladeros, puertos de montaña y asfalto rugoso del bueno.

Ruta: Morella/Cantavieja → Mirambel → Iglesuela del Cid → Mosqueruela → Linares de Mora → Rubielos de Mora → Cedrillas → Aliaga → The Silent Route (A-1702) → Cantavieja/Villarluengo.

Por la mañana:
Arranca temprano visitando Mirambel, un pueblo joya totalmente amurallado y silencioso. Toma la A-227 y A-1701 hacia Mosqueruela y Linares de Mora: espectacular, cruzando bosques de pino negro y bajando a valles profundos. Llegada a mediodía a Rubielos de Mora, uno de los pueblos más bonitos de España. Sus palacios y calles empedradas merecen un paseo corto con el casco en la mano.

Almuerzo con encanto: En Rubielos de Mora, Restaurante Portal de la Editorial o El Trinquete. Cocina tradicional con toque vanguardista en patios o salones empedrados preciosos.

Por la tarde (el plato fuerte):
Pon rumbo norte hacia la joya de la corona: la carretera A-1702, mundialmente conocida como "The Silent Route". Unos 50 km entre Gargallo y Cantavieja. Pasarás por Aliaga (paisaje geológico de otro planeta), Villarluengo colgado en la roca y el impresionante Puerto del Cuarto Pelado. Parada obligatoria en el monumento al motorista (el Silbato) y disfruta de los Órganos de Montoro.

Cena y alojamiento con encanto: Hostal de la Trucha (Villarluengo), renovado con categoría de 4 estrellas en entorno idílico junto al río Pitarque, o volver al confort premium del Hotel Balfagón.`,
            en: `The big day. Kilometers of winding curves, gorges, mountain passes, and proper rugged tarmac.

Route: Morella/Cantavieja → Mirambel → Iglesuela del Cid → Mosqueruela → Linares de Mora → Rubielos de Mora → Cedrillas → Aliaga → The Silent Route (A-1702) → Cantavieja/Villarluengo.

Morning:
Start early visiting Mirambel, a jewel of a fully walled, silent village. Take the A-227 and A-1701 toward Mosqueruela and Linares de Mora — spectacular, crossing black pine forests and descending into deep valleys. Arrive midday at Rubielos de Mora, one of Spain's most beautiful villages. Its palaces and cobbled streets deserve a short stroll helmet in hand.

Charming lunch: In Rubielos de Mora, Restaurante Portal de la Editorial or El Trinquete. Traditional cuisine with a modern touch in beautiful cobbled patios or halls.

Afternoon (the main course):
Head north toward the crown jewel: the A-1702, world-famous as "The Silent Route". About 50 km between Gargallo and Cantavieja. You'll pass Aliaga (otherworldly geology), Villarluengo perched on the rock, and the impressive Puerto del Cuarto Pelado. Mandatory stop at the biker monument (the Whistle) and enjoy the Órganos de Montoro.

Dinner and charming lodging: Hostal de la Trucha (Villarluengo), recently renovated to 4-star standard in an idyllic setting by the Pitarque river, or return to the premium comfort of Hotel Balfagón.`,
          },
        },
        {
          title: { es: 'Día 3 (Domingo) — Desfiladeros, Nacimientos y Regreso', en: 'Day 3 (Sunday) — Gorges, Springs, and Return' },
          content: {
            es: `Una mañana de paisajes colosales en roca y agua antes de emprender la vuelta a casa.

Ruta: Villarluengo/Cantavieja → Cañada de Benatanduz → Fortanete → Villarluengo → Pitarque (opcional) → Molinos → Castellote → Desembocadura hacia tu destino.

Por la mañana:
Recorre la carretera entre Cantavieja y Fortanete (A-226), tramo técnico de curvas enlazadas impecables subiendo el Puerto de Cuarto Pelado. Baja hacia Castellote, pasando por su imponente túnel excavado en la roca — entrada a un reino medieval custodiado por las ruinas de su castillo templario. Si os apetece caminar (~45 min sin demasiada pendiente), la ruta a pie al Nacimiento del Río Pitarque es sobrecogedora. Si preferís moto pura, desvíate a las Grutas de Cristal de Molinos.

Comida del domingo: En Castellote, Restaurante El Secanito (comida casera espectacular, ambiente motero pero cuidado). Para despedir el viaje con algo más refinado, desvíate al Matarraña a La Torre del Visco (Fuentespalda), hotel-restaurante Relais & Châteaux — la definición de premium con encanto en la zona.

Tarde: Enlace con vías principales (N-211 o N-232) para iniciar el retorno relajado a casa con la retina llena de curvas y piedra.`,
            en: `A morning of colossal rock-and-water landscapes before heading home.

Route: Villarluengo/Cantavieja → Cañada de Benatanduz → Fortanete → Villarluengo → Pitarque (optional) → Molinos → Castellote → Link toward your destination.

Morning:
Ride the road between Cantavieja and Fortanete (A-226), a technical stretch of flawless linked curves climbing Puerto de Cuarto Pelado. Descend toward Castellote through its imposing rock-hewn tunnel — like entering a medieval realm guarded by Templar castle ruins. Fancy a walk (~45 min, moderate grade)? The trail to the Pitarque River spring is breathtaking. Prefer pure riding? Detour to the Crystal Caves of Molinos.

Sunday lunch: In Castellote, Restaurante El Secanito (spectacular home cooking, biker-friendly but well-kept). For a more refined farewell, detour to Matarraña and La Torre del Visco (Fuentespalda), a Relais & Châteaux hotel-restaurant — absolute premium charm in the area.

Afternoon: Connect to main roads (N-211 or N-232) for a relaxed ride home with your eyes full of curves and stone.`,
          },
        },
        {
          title: { es: 'Consejos para la ruta', en: 'Route tips' },
          content: {
            es: `Gasolina: En el corazón del Maestrazgo las gasolineras escasean. Reposta siempre que veas una (hay en Morella, Cantavieja y Rubielos de Mora). No apures los depósitos.

Ritmo: Las carreteras secundarias del Maestrazgo (A o CV de tres dígitos) están en general bien asfaltadas pero son estrechas y no tienen arcén. El encanto es ir disfrutando del paisaje y trazando fino.

Equipación: Al ser zona de media/alta montaña (pasarás de los 1.300 m con facilidad en los puertos), las tardes y mañanas de viernes y domingo pueden ser frescas incluso en verano. Lleva ropa térmica ligera por si acaso.`,
            en: `Fuel: Gas stations are scarce in the heart of Maestrazgo. Refuel whenever you see one (available in Morella, Cantavieja, and Rubielos de Mora). Don't run your tank low.

Pace: Maestrazgo secondary roads (three-digit A or CV routes) are generally well paved but narrow with no shoulder. The charm is enjoying the landscape and riding precise lines.

Gear: As a mid/high mountain area (you'll easily exceed 1,300 m on the passes), Friday and Sunday mornings and evenings can be cool even in summer. Pack light thermal layers just in case.`,
          },
        },
      ],
      [
        {
          title: { es: 'Day 1 (Friday afternoon) — Toward the Maestrazgo Fortress', en: 'Day 1 (Friday afternoon) — Toward the Maestrazgo Fortress' },
          content: {
            es: `El objetivo de esta tarde es salir del bullicio, adaptarse al ritmo de las carreteras secundarias y llegar a dormir al corazón de la comarca.

Ruta aproximada: Entrada al Maestrazgo por la zona del Bajo Aragón/Matarraña hacia Morella o Cantavieja (dependiendo de tu punto de origen exacto, tomaremos como punto de encuentro neurálgico la aproximación por Alcañiz o por la costa/Castellón hacia Morella).

El tramo: La subida por la N-232 (ya remodelada) o el desvío por la CV-14 hacia Morella es un preludio perfecto. Si vienes desde el norte/Zaragoza, bajar por la A-226 desde Calanda hacia Mas de las Matas ya te introduce en el terreno de juego.

Parada recomendada: Una breve parada al atardecer en el mirador de la CV-125 o contemplar la impresionante silueta amurallada de Morella iluminada.

Cena y alojamiento premium:
• Opción 1 (Morella): Hotel Cardenal Ram. Un palacio del siglo XVI reformado en pleno casco histórico, con ambiente medieval y comodidades contemporáneas.
• Opción 2 (Mirambel/Cantavieja): Hotel Balfagón Alto Maestrazgo (Cantavieja). Spa ideal para quitarse la tensión del viaje y uno de los mejores restaurantes de la zona.

Restaurante con encanto: En Cantavieja, el restaurante del Hotel Balfagón (trufa, setas y carnes de la zona). En Morella, Restaurante Daluan (alta cocina del Maestrazgo, con encanto íntimo).`,
            en: `The goal this afternoon is to leave the bustle behind, adapt to the rhythm of secondary roads, and sleep at the heart of the region.

Approximate route: Entry into Maestrazgo from Lower Aragon/Matarraña toward Morella or Cantavieja (depending on your exact starting point; our key meeting approach is via Alcañiz or from the coast/Castellón toward Morella).

The stretch: The climb on the N-232 (recently upgraded) or the detour on the CV-14 toward Morella is a perfect prelude. Coming from the north/Zaragoza, descending the A-226 from Calanda toward Mas de las Matas already puts you on the playground.

Recommended stop: A brief sunset stop at the CV-125 viewpoint or admire Morella's impressive illuminated walled silhouette.

Dinner and premium lodging:
• Option 1 (Morella): Hotel Cardenal Ram. A restored 16th-century palace in the historic center, medieval atmosphere with contemporary comfort.
• Option 2 (Mirambel/Cantavieja): Hotel Balfagón Alto Maestrazgo (Cantavieja). Spa to unwind after the ride and one of the area's finest restaurants.

Charming dining: In Cantavieja, Hotel Balfagón's restaurant (truffle, mushrooms, and local meats). In Morella, Restaurante Daluan (high Maestrazgo cuisine with intimate charm).`,
          },
        },
        {
          title: { es: 'Day 2 (Saturday) — The Heart of the Curves and The Silent Route', en: 'Day 2 (Saturday) — The Heart of the Curves and The Silent Route' },
          content: {
            es: `El día grande. Kilómetros de curvas reviradas, desfiladeros, puertos de montaña y asfalto rugoso del bueno.

Ruta: Morella/Cantavieja → Mirambel → Iglesuela del Cid → Mosqueruela → Linares de Mora → Rubielos de Mora → Cedrillas → Aliaga → The Silent Route (A-1702) → Cantavieja/Villarluengo.

Por la mañana:
Arranca temprano visitando Mirambel, un pueblo joya totalmente amurallado y silencioso. Toma la A-227 y A-1701 hacia Mosqueruela y Linares de Mora: espectacular, cruzando bosques de pino negro y bajando a valles profundos. Llegada a mediodía a Rubielos de Mora, uno de los pueblos más bonitos de España. Sus palacios y calles empedradas merecen un paseo corto con el casco en la mano.

Almuerzo con encanto: En Rubielos de Mora, Restaurante Portal de la Editorial o El Trinquete. Cocina tradicional con toque vanguardista en patios o salones empedrados preciosos.

Por la tarde (el plato fuerte):
Pon rumbo norte hacia la joya de la corona: la carretera A-1702, mundialmente conocida como "The Silent Route". Unos 50 km entre Gargallo y Cantavieja. Pasarás por Aliaga (paisaje geológico de otro planeta), Villarluengo colgado en la roca y el impresionante Puerto del Cuarto Pelado. Parada obligatoria en el monumento al motorista (el Silbato) y disfruta de los Órganos de Montoro.

Cena y alojamiento con encanto: Hostal de la Trucha (Villarluengo), renovado con categoría de 4 estrellas en entorno idílico junto al río Pitarque, o volver al confort premium del Hotel Balfagón.`,
            en: `The big day. Kilometers of winding curves, gorges, mountain passes, and proper rugged tarmac.

Route: Morella/Cantavieja → Mirambel → Iglesuela del Cid → Mosqueruela → Linares de Mora → Rubielos de Mora → Cedrillas → Aliaga → The Silent Route (A-1702) → Cantavieja/Villarluengo.

Morning:
Start early visiting Mirambel, a jewel of a fully walled, silent village. Take the A-227 and A-1701 toward Mosqueruela and Linares de Mora — spectacular, crossing black pine forests and descending into deep valleys. Arrive midday at Rubielos de Mora, one of Spain's most beautiful villages. Its palaces and cobbled streets deserve a short stroll helmet in hand.

Charming lunch: In Rubielos de Mora, Restaurante Portal de la Editorial or El Trinquete. Traditional cuisine with a modern touch in beautiful cobbled patios or halls.

Afternoon (the main course):
Head north toward the crown jewel: the A-1702, world-famous as "The Silent Route". About 50 km between Gargallo and Cantavieja. You'll pass Aliaga (otherworldly geology), Villarluengo perched on the rock, and the impressive Puerto del Cuarto Pelado. Mandatory stop at the biker monument (the Whistle) and enjoy the Órganos de Montoro.

Dinner and charming lodging: Hostal de la Trucha (Villarluengo), recently renovated to 4-star standard in an idyllic setting by the Pitarque river, or return to the premium comfort of Hotel Balfagón.`,
          },
        },
        {
          title: { es: 'Day 3 (Sunday) — Gorges, Springs, and Return', en: 'Day 3 (Sunday) — Gorges, Springs, and Return' },
          content: {
            es: `Una mañana de paisajes colosales en roca y agua antes de emprender la vuelta a casa.

Ruta: Villarluengo/Cantavieja → Cañada de Benatanduz → Fortanete → Villarluengo → Pitarque (opcional) → Molinos → Castellote → Desembocadura hacia tu destino.

Por la mañana:
Recorre la carretera entre Cantavieja y Fortanete (A-226), tramo técnico de curvas enlazadas impecables subiendo el Puerto de Cuarto Pelado. Baja hacia Castellote, pasando por su imponente túnel excavado en la roca — entrada a un reino medieval custodiado por las ruinas de su castillo templario. Si os apetece caminar (~45 min sin demasiada pendiente), la ruta a pie al Nacimiento del Río Pitarque es sobrecogedora. Si preferís moto pura, desvíate a las Grutas de Cristal de Molinos.

Comida del domingo: En Castellote, Restaurante El Secanito (comida casera espectacular, ambiente motero pero cuidado). Para despedir el viaje con algo más refinado, desvíate al Matarraña a La Torre del Visco (Fuentespalda), hotel-restaurante Relais & Châteaux — la definición de premium con encanto en la zona.

Tarde: Enlace con vías principales (N-211 o N-232) para iniciar el retorno relajado a casa con la retina llena de curvas y piedra.`,
            en: `A morning of colossal rock-and-water landscapes before heading home.

Route: Villarluengo/Cantavieja → Cañada de Benatanduz → Fortanete → Villarluengo → Pitarque (optional) → Molinos → Castellote → Link toward your destination.

Morning:
Ride the road between Cantavieja and Fortanete (A-226), a technical stretch of flawless linked curves climbing Puerto de Cuarto Pelado. Descend toward Castellote through its imposing rock-hewn tunnel — like entering a medieval realm guarded by Templar castle ruins. Fancy a walk (~45 min, moderate grade)? The trail to the Pitarque River spring is breathtaking. Prefer pure riding? Detour to the Crystal Caves of Molinos.

Sunday lunch: In Castellote, Restaurante El Secanito (spectacular home cooking, biker-friendly but well-kept). For a more refined farewell, detour to Matarraña and La Torre del Visco (Fuentespalda), a Relais & Châteaux hotel-restaurant — absolute premium charm in the area.

Afternoon: Connect to main roads (N-211 or N-232) for a relaxed ride home with your eyes full of curves and stone.`,
          },
        },
        {
          title: { es: 'Route tips', en: 'Route tips' },
          content: {
            es: `Gasolina: En el corazón del Maestrazgo las gasolineras escasean. Reposta siempre que veas una (hay en Morella, Cantavieja y Rubielos de Mora). No apures los depósitos.

Ritmo: Las carreteras secundarias del Maestrazgo (A o CV de tres dígitos) están en general bien asfaltadas pero son estrechas y no tienen arcén. El encanto es ir disfrutando del paisaje y trazando fino.

Equipación: Al ser zona de media/alta montaña (pasarás de los 1.300 m con facilidad en los puertos), las tardes y mañanas de viernes y domingo pueden ser frescas incluso en verano. Lleva ropa térmica ligera por si acaso.`,
            en: `Fuel: Gas stations are scarce in the heart of Maestrazgo. Refuel whenever you see one (available in Morella, Cantavieja, and Rubielos de Mora). Don't run your tank low.

Pace: Maestrazgo secondary roads (three-digit A or CV routes) are generally well paved but narrow with no shoulder. The charm is enjoying the landscape and riding precise lines.

Gear: As a mid/high mountain area (you'll easily exceed 1,300 m on the passes), Friday and Sunday mornings and evenings can be cool even in summer. Pack light thermal layers just in case.`,
          },
        },
      ]
    ),
    accommodations: [
      {
        name: { es: 'Hotel Cardenal Ram', en: 'Hotel Cardenal Ram' },
        location: { es: 'Morella — casco histórico amurallado', en: 'Morella — walled historic center' },
        type: { es: 'Palacio s. XVI · Noche 1', en: '16th-c. palace · Night 1' },
        description: {
          es: 'Palacio del siglo XVI reformado en pleno casco histórico. Ambiente medieval con comodidades contemporáneas. Cena recomendada en Restaurante Daluan.',
          en: 'Restored 16th-century palace in the historic center. Medieval atmosphere with contemporary comfort. Recommended dinner at Restaurante Daluan.',
        },
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Castillo_de_Morella_01.jpg/1280px-Castillo_de_Morella_01.jpg',
      },
      {
        name: { es: 'Hotel Balfagón Alto Maestrazgo', en: 'Hotel Balfagón Alto Maestrazgo' },
        location: { es: 'Cantavieja — Plaza Mayor', en: 'Cantavieja — Main Square' },
        type: { es: 'Hotel con spa · Noches 1 y 2', en: 'Spa hotel · Nights 1 & 2' },
        description: {
          es: 'Spa, restaurante de referencia (trufa, setas y carnes) y uno de los mejores alojamientos premium del Maestrazgo.',
          en: 'Spa, flagship restaurant (truffle, mushrooms, and local meats), and one of Maestrazgo\'s finest premium stays.',
        },
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Municipio_de_Cantavieja_%28Teruel%29.jpg/1280px-Municipio_de_Cantavieja_%28Teruel%29.jpg',
      },
      {
        name: { es: 'Hostal de la Trucha', en: 'Hostal de la Trucha' },
        location: { es: 'Villarluengo — río Pitarque', en: 'Villarluengo — Pitarque river' },
        type: { es: '4 estrellas · Noche 2', en: '4 stars · Night 2' },
        description: {
          es: 'Recientemente renovado, en entorno natural idílico. Opción única en mitad de la nada tras rodar The Silent Route.',
          en: 'Recently renovated in an idyllic natural setting. A unique option in the middle of nowhere after riding The Silent Route.',
        },
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/%C3%93rganos_de_Montoro.jpg/1280px-%C3%93rganos_de_Montoro.jpg',
      },
    ],
  },
  corona: {
    routeDetail: stages(
      [
        {
          title: { es: 'Día 1 (Viernes tarde) — Entrada mística por el Valle de Hecho', en: 'Day 1 (Friday afternoon) — Mystical entry through the Hecho Valley' },
          content: {
            es: `El objetivo de esta tarde es abandonar la autovía y entrar en modo montaña. Punto de encuentro habitual: Jaca o salida directa desde Zaragoza por la A-23.

Ruta aproximada: Zaragoza → A-23 → Jaca → A-176 (Valle de Hecho) → Siresa → Hecho.

El tramo: La A-176 es un preludio perfecto — curvas enlazadas, paredes de roca y pueblos de piedra. Parada recomendada en el Monasterio de San Pedro de Siresa (s. XI) o breve desvío a la Selva de Oza si la luz lo permite.

Cena y alojamiento con encanto:
• Usón Hotel (Siresa/Hecho) — piedra, madera y entorno de montaña.
• Alternativa: Casa Ricaso en el pueblo de Hecho.

Restaurante: Casa Lastor o cocina de montaña en el casco de Hecho (chistorra, setas, cordero).`,
            en: `The goal this afternoon is to leave the highway behind and switch to mountain mode. Usual meeting point: Jaca or direct departure from Zaragoza via the A-23.

Approximate route: Zaragoza → A-23 → Jaca → A-176 (Hecho Valley) → Siresa → Hecho.

The stretch: The A-176 is a perfect prelude — linked corners, rock walls, and stone villages. Recommended stop at San Pedro de Siresa monastery (11th century) or a brief detour to Selva de Oza if light allows.

Dinner and charming lodging:
• Usón Hotel (Siresa/Hecho) — stone, wood, and mountain atmosphere.
• Alternative: Casa Ricaso in Hecho village.

Dining: Casa Lastor or mountain cuisine in Hecho (sausage, mushrooms, lamb).`,
          },
        },
        {
          title: { es: 'Día 2 (Sábado) — Ansó, Roncal y Belagua', en: 'Day 2 (Saturday) — Ansó, Roncal and Belagua' },
          content: {
            es: `El día grande del Pirineo navarro. Kilómetros de curvas en valles legendarios y uno de los paisajes más brutales del norte peninsular.

Ruta: Hecho → CV-678 (valle de Ansó) → Berroeta → NA-2010 (valle de Roncal) → Isaba → subida a Belagua → bajada → Ochagavía / Roncal.

Por la mañana:
La CV-678 por Ansó es estrecha, verde y cinematográfica. Cruza el valle de Roncal con su quesería D.O. y arquitectura pastoral. La subida a Belagua te mete en un circo glaciar con sensación alpina pura.

Almuerzo con encanto: sidrería o asador en Roncal, o mesón en Ochagavía — uno de los pueblos más bonitos de Navarra.

Cena y alojamiento premium:
• Casa Gatsazarra (Ansó) — encanto rural en valle espectacular.
• Hotel Roncal o alojamientos en el valle — ambiente íntimo tras Belagua.`,
            en: `The big Navarrese Pyrenees day. Kilometers of curves in legendary valleys and one of northern Spain's most brutal landscapes.

Route: Hecho → CV-678 (Ansó valley) → Berroeta → NA-2010 (Roncal valley) → Isaba → climb to Belagua → descent → Ochagavía / Roncal.

Morning:
The CV-678 through Ansó is narrow, green, and cinematic. Cross Roncal valley with its D.O. cheese and pastoral architecture. The climb to Belagua drops you into a glacial cirque with pure alpine atmosphere.

Charming lunch: cider house or grill in Roncal, or an inn in Ochagavía — one of Navarra's most beautiful villages.

Dinner and premium lodging:
• Casa Gatsazarra (Ansó) — rural charm in a spectacular valley.
• Hotel Roncal or valley lodgings — intimate atmosphere after Belagua.`,
          },
        },
        {
          title: { es: 'Día 3 (Domingo) — Ordesa, Torla y Aínsa', en: 'Day 3 (Sunday) — Ordesa, Torla and Aínsa' },
          content: {
            es: `Domingo de iconos pirenaicos: el Parque Nacional de Ordesa y la villa medieval de Aínsa.

Ruta: Roncal/Ansó → Biescas → A-1603 → Broto → Torla → miradores de Ordesa → A-138 (garganta del Ara) → Aínsa.

Por la mañana:
La A-1603 hasta Torla es la antesala del Monte Perdido. Parada en miradores del valle de Ordesa. Si te apetece estirar las piernas: paseo corto hacia el Circo de Soaso (casco en la mano).

Almuerzo del domingo: Mesón de L'Ainsa o Restaurante Callizo — cocina altoaragonesa en plaza medieval.

Cena y alojamiento con encanto:
• Hotel Aínsa — en la plaza, experiencia única para moteros con gusto.
• Parador de Bielsa — si prefieres subir un nivel (spa y entorno de montaña).`,
            en: `A Sunday of Pyrenean icons: Ordesa National Park and the medieval village of Aínsa.

Route: Roncal/Ansó → Biescas → A-1603 → Broto → Torla → Ordesa viewpoints → A-138 (Ara gorge) → Aínsa.

Morning:
The A-1603 to Torla is the prelude to Monte Perdido. Stop at Ordesa valley viewpoints. Fancy a stretch? Short walk toward Circo de Soaso (helmet in hand).

Sunday lunch: Mesón de L'Ainsa or Restaurante Callizo — high Aragon cuisine in a medieval square.

Dinner and charming lodging:
• Hotel Aínsa — on the main square, a unique experience for discerning riders.
• Parador de Bielsa — if you prefer to step up (spa and mountain setting).`,
          },
        },
        {
          title: { es: 'Día 4 (Lunes) — Benasque y regreso por la tarde', en: 'Day 4 (Monday) — Benasque and afternoon return' },
          content: {
            es: `Cierre en altura y vuelta a casa sin prisas por la tarde.

Ruta mañana: Aínsa/Bielsa → Graus → A-139 (Valle de Benasque) → Castejón de Sos → Benasque → miradores hacia el Aneto.

Ruta tarde (regreso): Benasque → A-139 → Graus → A-22 / N-330 → Jaca → A-23 → Zaragoza.

Parada final: Benasque con el macizo del Aneto al fondo. Desvío opcional a Canfranc-Estación (30 min) si el tiempo acompaña — la estación internacional es pura fotogenia.

Comida de despedida: Hotel Ciria o Borda Beret en Benasque. En el regreso, parada en Graus antes de enlazar con autovía.

Tarde: retorno relajado con la retina llena de curvas y piedra.`,
            en: `A high-altitude finale and an unhurried afternoon ride home.

Morning route: Aínsa/Bielsa → Graus → A-139 (Benasque Valley) → Castejón de Sos → Benasque → viewpoints toward Aneto.

Afternoon return: Benasque → A-139 → Graus → A-22 / N-330 → Jaca → A-23 → Zaragoza.

Final stop: Benasque with the Aneto massif in the background. Optional detour to Canfranc Station (30 min) if time allows — the international station is pure photo gold.

Farewell lunch: Hotel Ciria or Borda Beret in Benasque. On the return, a stop in Graus before linking to the highway.

Afternoon: relaxed ride home with your eyes full of curves and stone.`,
          },
        },
        {
          title: { es: 'Consejos para la ruta', en: 'Route tips' },
          content: {
            es: `Gasolina: Reposta en Hecho, Roncal, Biescas, Aínsa y Benasque. En Belagua y puertos altos no cuentes con servicios.

Restricciones: Belagua y algunos accesos de montaña tienen horarios o limitaciones según temporada (confirmar antes de salir, especialmente fuera de julio-agosto).

Ritmo: Las NA-, CV- y A- secundarias son estrechas y sin arcén. El valor está en el trazado y el paisaje, no en los km/h.

Equipación: Por encima de 1.500–1.800 m hace frío incluso en verano. Capa térmica y guantes de recambio. Reserva alojamientos con antelación en pueblos pequeños.`,
            en: `Fuel: Refuel in Hecho, Roncal, Biescas, Aínsa, and Benasque. Don't count on services in Belagua or high passes.

Restrictions: Belagua and some mountain access roads have seasonal schedules or limitations (confirm before departure, especially outside July–August).

Pace: NA-, CV-, and secondary A-roads are narrow with no shoulder. Value is in the lines and landscape, not km/h.

Gear: Above 1,500–1,800 m it gets cold even in summer. Pack a thermal layer and spare gloves. Book small-village lodging well in advance.`,
          },
        },
      ],
      [
        {
          title: { es: 'Day 1 (Friday afternoon) — Mystical entry through the Hecho Valley', en: 'Day 1 (Friday afternoon) — Mystical entry through the Hecho Valley' },
          content: {
            es: `The goal this afternoon is to leave the highway behind and switch to mountain mode. Usual meeting point: Jaca or direct departure from Zaragoza via the A-23.

Approximate route: Zaragoza → A-23 → Jaca → A-176 (Hecho Valley) → Siresa → Hecho.

The stretch: The A-176 is a perfect prelude — linked corners, rock walls, and stone villages. Recommended stop at San Pedro de Siresa monastery (11th century) or a brief detour to Selva de Oza if light allows.

Dinner and charming lodging:
• Usón Hotel (Siresa/Hecho) — stone, wood, and mountain atmosphere.
• Alternative: Casa Ricaso in Hecho village.

Dining: Casa Lastor or mountain cuisine in Hecho (sausage, mushrooms, lamb).`,
            en: `The goal this afternoon is to leave the highway behind and switch to mountain mode. Usual meeting point: Jaca or direct departure from Zaragoza via the A-23.

Approximate route: Zaragoza → A-23 → Jaca → A-176 (Hecho Valley) → Siresa → Hecho.

The stretch: The A-176 is a perfect prelude — linked corners, rock walls, and stone villages. Recommended stop at San Pedro de Siresa monastery (11th century) or a brief detour to Selva de Oza if light allows.

Dinner and charming lodging:
• Usón Hotel (Siresa/Hecho) — stone, wood, and mountain atmosphere.
• Alternative: Casa Ricaso in Hecho village.

Dining: Casa Lastor or mountain cuisine in Hecho (sausage, mushrooms, lamb).`,
          },
        },
        {
          title: { es: 'Day 2 (Saturday) — Ansó, Roncal and Belagua', en: 'Day 2 (Saturday) — Ansó, Roncal and Belagua' },
          content: {
            es: `The big Navarrese Pyrenees day. Kilometers of curves in legendary valleys and one of northern Spain's most brutal landscapes.

Route: Hecho → CV-678 (Ansó valley) → Berroeta → NA-2010 (Roncal valley) → Isaba → climb to Belagua → descent → Ochagavía / Roncal.

Morning:
The CV-678 through Ansó is narrow, green, and cinematic. Cross Roncal valley with its D.O. cheese and pastoral architecture. The climb to Belagua drops you into a glacial cirque with pure alpine atmosphere.

Charming lunch: cider house or grill in Roncal, or an inn in Ochagavía — one of Navarra's most beautiful villages.

Dinner and premium lodging:
• Casa Gatsazarra (Ansó) — rural charm in a spectacular valley.
• Hotel Roncal or valley lodgings — intimate atmosphere after Belagua.`,
            en: `The big Navarrese Pyrenees day. Kilometers of curves in legendary valleys and one of northern Spain's most brutal landscapes.

Route: Hecho → CV-678 (Ansó valley) → Berroeta → NA-2010 (Roncal valley) → Isaba → climb to Belagua → descent → Ochagavía / Roncal.

Morning:
The CV-678 through Ansó is narrow, green, and cinematic. Cross Roncal valley with its D.O. cheese and pastoral architecture. The climb to Belagua drops you into a glacial cirque with pure alpine atmosphere.

Charming lunch: cider house or grill in Roncal, or an inn in Ochagavía — one of Navarra's most beautiful villages.

Dinner and premium lodging:
• Casa Gatsazarra (Ansó) — rural charm in a spectacular valley.
• Hotel Roncal or valley lodgings — intimate atmosphere after Belagua.`,
          },
        },
        {
          title: { es: 'Day 3 (Sunday) — Ordesa, Torla and Aínsa', en: 'Day 3 (Sunday) — Ordesa, Torla and Aínsa' },
          content: {
            es: `A Sunday of Pyrenean icons: Ordesa National Park and the medieval village of Aínsa.

Route: Roncal/Ansó → Biescas → A-1603 → Broto → Torla → Ordesa viewpoints → A-138 (Ara gorge) → Aínsa.

Morning:
The A-1603 to Torla is the prelude to Monte Perdido. Stop at Ordesa valley viewpoints. Fancy a stretch? Short walk toward Circo de Soaso (helmet in hand).

Sunday lunch: Mesón de L'Ainsa or Restaurante Callizo — high Aragon cuisine in a medieval square.

Dinner and charming lodging:
• Hotel Aínsa — on the main square, a unique experience for discerning riders.
• Parador de Bielsa — if you prefer to step up (spa and mountain setting).`,
            en: `A Sunday of Pyrenean icons: Ordesa National Park and the medieval village of Aínsa.

Route: Roncal/Ansó → Biescas → A-1603 → Broto → Torla → Ordesa viewpoints → A-138 (Ara gorge) → Aínsa.

Morning:
The A-1603 to Torla is the prelude to Monte Perdido. Stop at Ordesa valley viewpoints. Fancy a stretch? Short walk toward Circo de Soaso (helmet in hand).

Sunday lunch: Mesón de L'Ainsa or Restaurante Callizo — high Aragon cuisine in a medieval square.

Dinner and charming lodging:
• Hotel Aínsa — on the main square, a unique experience for discerning riders.
• Parador de Bielsa — if you prefer to step up (spa and mountain setting).`,
          },
        },
        {
          title: { es: 'Day 4 (Monday) — Benasque and afternoon return', en: 'Day 4 (Monday) — Benasque and afternoon return' },
          content: {
            es: `A high-altitude finale and an unhurried afternoon ride home.

Morning route: Aínsa/Bielsa → Graus → A-139 (Benasque Valley) → Castejón de Sos → Benasque → viewpoints toward Aneto.

Afternoon return: Benasque → A-139 → Graus → A-22 / N-330 → Jaca → A-23 → Zaragoza.

Final stop: Benasque with the Aneto massif in the background. Optional detour to Canfranc Station (30 min) if time allows.

Farewell lunch: Hotel Ciria or Borda Beret in Benasque. On the return, a stop in Graus before linking to the highway.`,
            en: `A high-altitude finale and an unhurried afternoon ride home.

Morning route: Aínsa/Bielsa → Graus → A-139 (Benasque Valley) → Castejón de Sos → Benasque → viewpoints toward Aneto.

Afternoon return: Benasque → A-139 → Graus → A-22 / N-330 → Jaca → A-23 → Zaragoza.

Final stop: Benasque with the Aneto massif in the background. Optional detour to Canfranc Station (30 min) if time allows.

Farewell lunch: Hotel Ciria or Borda Beret in Benasque. On the return, a stop in Graus before linking to the highway.`,
          },
        },
        {
          title: { es: 'Route tips', en: 'Route tips' },
          content: {
            es: `Fuel: Refuel in Hecho, Roncal, Biescas, Aínsa, and Benasque. Don't count on services in Belagua or high passes.

Restrictions: Belagua and some mountain access roads have seasonal schedules or limitations (confirm before departure).

Pace: Narrow roads with no shoulder — enjoy the lines and landscape.

Gear: Cold above 1,500 m even in summer. Thermal layer and spare gloves. Book lodging in advance.`,
            en: `Fuel: Refuel in Hecho, Roncal, Biescas, Aínsa, and Benasque. Don't count on services in Belagua or high passes.

Restrictions: Belagua and some mountain access roads have seasonal schedules or limitations (confirm before departure).

Pace: Narrow roads with no shoulder — enjoy the lines and landscape.

Gear: Cold above 1,500 m even in summer. Thermal layer and spare gloves. Book lodging in advance.`,
          },
        },
      ]
    ),
    accommodations: [
      {
        name: { es: 'Usón Hotel', en: 'Usón Hotel' },
        location: { es: 'Siresa — Valle de Hecho', en: 'Siresa — Hecho Valley' },
        type: { es: 'Hotel con encanto · Noche 1', en: 'Charming hotel · Night 1' },
        description: {
          es: 'Piedra, madera y entorno de montaña junto al monasterio de Siresa. Ideal para aterrizar el viernes tarde con cena de producto en Hecho.',
          en: 'Stone, wood, and mountain atmosphere beside Siresa monastery. Ideal for landing on Friday evening with local dining in Hecho.',
        },
        image: publicAsset('images/routes/corona/hecho.png'),
      },
      {
        name: { es: 'Casa Gatsazarra', en: 'Casa Gatsazarra' },
        location: { es: 'Ansó — Valle de Ansó', en: 'Ansó — Ansó Valley' },
        type: { es: 'Casa rural premium · Noche 2', en: 'Premium country house · Night 2' },
        description: {
          es: 'Alojamiento con alma en uno de los valles más espectaculares de Navarra, tras rodar Roncal y Belagua.',
          en: 'Lodging with soul in one of Navarra\'s most spectacular valleys, after riding Roncal and Belagua.',
        },
        image: publicAsset('images/routes/corona/ochagavia.jpg'),
      },
      {
        name: { es: 'Hotel Aínsa', en: 'Hotel Aínsa' },
        location: { es: 'Aínsa — Plaza Mayor medieval', en: 'Aínsa — medieval main square' },
        type: { es: 'Boutique histórico · Noche 3', en: 'Historic boutique · Night 3' },
        description: {
          es: 'En plena villa medieval, a dos pasos del castillo. La pernoctación perfecta tras Ordesa y la garganta del Ara.',
          en: 'In the heart of the medieval town, steps from the castle. The perfect overnight after Ordesa and the Ara gorge.',
        },
        image: publicAsset('images/routes/corona/ainsa.jpg'),
      },
    ],
  },
  travesia: {
    routeDetail: stages(
      [
        {
          title: { es: 'Día 1 — Atlántico → Roncal y Belagua', en: 'Day 1 — Atlantic → Roncal and Belagua' },
          distance: '~310 km',
          content: {
            es: `Circuito: salida y llegada en Hondarribia. Ida por España (días 1-3), vuelta por Francia (días 4-7).

Ruta: Hondarribia → costa guipuzcoana (GI secundarias) → Baztán → Olite → Estella → Roncal → Belagua → Ochagavía → Biescas.

Paradas: pintxos en Hondarribia, castillo de Olite, circo glaciar de Belagua.

Cena: sidrería o asador en Roncal. Alojamiento: Casa Gatsazarra (Ansó) o Hotel Roncal.`,
            en: `Loop: start and finish in Hondarribia. Outbound via Spain (days 1–3), return via France (days 4–7).

Route: Hondarribia → Basque coast (secondary GIs) → Baztan → Olite → Estella → Roncal → Belagua → Ochagavía → Biescas.

Stops: pintxos in Hondarribia, Olite castle, Belagua glacial cirque.

Dinner: cider house or grill in Roncal. Lodging: Casa Gatsazarra (Ansó) or Hotel Roncal.`,
          },
        },
        {
          title: { es: 'Día 2 — Ordesa, Aínsa, Aneto y Valle de Arán', en: 'Day 2 — Ordesa, Aínsa, Aneto and Aran Valley' },
          distance: '~330 km',
          content: {
            es: `Ruta: Biescas → Torla/Ordesa → A-138 → Aínsa → Graus → Benasque → Cerler → Bonaigua → Vielha → Salardú → Arties → Bossòst → Puigcerdà.

Picos míticos: Monte Perdido (vistas), Aneto/Maladeta desde Benasque, Puerto de Bonaigua (1.972 m).

Almuerzo: Aínsa o Benasque. Cena: Eth Pourtau (Arties). Alojamiento: Hotel Villa Paulita (Puigcerdà).`,
            en: `Route: Biescas → Torla/Ordesa → A-138 → Aínsa → Graus → Benasque → Cerler → Bonaigua → Vielha → Salardú → Arties → Bossòst → Puigcerdà.

Iconic peaks: Monte Perdido (views), Aneto/Maladeta from Benasque, Bonaigua pass (1,972 m).

Lunch: Aínsa or Benasque. Dinner: Eth Pourtau (Arties). Lodging: Hotel Villa Paulita (Puigcerdà).`,
          },
        },
        {
          title: { es: 'Día 3 — Pallars, Ripollès y cruce a Francia', en: 'Day 3 — Pallars, Ripollès and crossing into France' },
          distance: '~320 km',
          content: {
            es: `Ruta: Puigcerdà → La Pobla de Segur → Sort → Tremp → enlaces por Lleida interior → Ripoll → Camprodon → Molló → Coll de Puymorens → Pas de la Casa → Font-Romeu.

Última gran jornada española con bucle por el Pallars y el Ripollès antes de entrar en la Cerdagne francesa.

Almuerzo: Sort o Tremp. Cena: Auberge du Donezan (Odeillo). Alojamiento: Hôtel le Mas Fleuri (Font-Romeu).`,
            en: `Route: Puigcerdà → La Pobla de Segur → Sort → Tremp → links through interior Lleida → Ripoll → Camprodon → Molló → Puymorens pass → Pas de la Casa → Font-Romeu.

Last major Spanish day looping through Pallars and Ripollès before entering French Cerdanya.

Lunch: Sort or Tremp. Dinner: Auberge du Donezan (Odeillo). Lodging: Hôtel le Mas Fleuri (Font-Romeu).`,
          },
        },
        {
          title: { es: 'Día 4 — Cerdagne, Canigó y Conflent', en: 'Day 4 — Cerdanya, Canigó and Conflent' },
          distance: '~340 km',
          content: {
            es: `Ruta: Font-Romeu → Les Angles → Mont-Louis → Formiguères → Prades → Villefranche-de-Conflent (UNESCO) → Vernet-les-Bains → Collioure (toque mediterráneo) → Ax-les-Thermes.

Jornada 100 % francesa: alta montaña, pueblos fortificados y acercamiento al Mediterráneo en Collioure.

Almuerzo: Collioure (pescado). Cena: cocina ariégeoise en Ax. Alojamiento: Hôtel du Lion d'Or (Ax-les-Thermes).`,
            en: `Route: Font-Romeu → Les Angles → Mont-Louis → Formiguères → Prades → Villefranche-de-Conflent (UNESCO) → Vernet-les-Bains → Collioure (Mediterranean touch) → Ax-les-Thermes.

Full French day: high mountains, fortified villages, and a Mediterranean approach at Collioure.

Lunch: Collioure (seafood). Dinner: Ariège cuisine in Ax. Lodging: Hôtel du Lion d'Or (Ax-les-Thermes).`,
          },
        },
        {
          title: { es: 'Día 5 — Ariège, Pailhères y Luchon', en: 'Day 5 — Ariège, Pailhères and Luchon' },
          distance: '~310 km',
          content: {
            es: `Ruta: Mérens → Foix → Tarascon-sur-Ariège → Col de Pailhères (2.001 m) → Saint-Girons → Bagnères-de-Luchon.

Pasos salvajes del Ariège y llegada a Luchon, puerta del Pirineo central francés. Desvío opcional por Andorra (Envalira).

Almuerzo: Tarascon-sur-Ariège. Cena: Brasserie du Lyon (Luchon). Alojamiento: Hôtel de France (Luchon).`,
            en: `Route: Mérens → Foix → Tarascon-sur-Ariège → Col de Pailhères (2,001 m) → Saint-Girons → Bagnères-de-Luchon.

Wild Ariège passes and arrival in Luchon, gateway to the central French Pyrenees. Optional Andorra detour (Envalira).

Lunch: Tarascon-sur-Ariège. Dinner: Brasserie du Lyon (Luchon). Lodging: Hôtel de France (Luchon).`,
          },
        },
        {
          title: { es: 'Día 6 — Tourmalet, Gavarnie, Aubisque y Ossau', en: 'Day 6 — Tourmalet, Gavarnie, Aubisque and Ossau' },
          distance: '~350 km',
          content: {
            es: `Ruta: Luchon → Col de Peyresourde → Luz-Saint-Sauveur → Gavarnie (circo UNESCO) → Col du Tourmalet (2.115 m) → Barèges → Col d'Aubisque (1.709 m) → Laruns → Valle d'Ossau → Pau.

El día cumbre francés: tres puertos de leyenda del Tour de France y el circo de Gavarnie.

Almuerzo: Luz o Barèges. Cena: Auberge du Lien (Laruns). Alojamiento: Hôtel Mercure Pau / Château de Bétharram.`,
            en: `Route: Luchon → Col de Peyresourde → Luz-Saint-Sauveur → Gavarnie (UNESCO cirque) → Col du Tourmalet (2,115 m) → Barèges → Col d'Aubisque (1,709 m) → Laruns → Ossau Valley → Pau.

The pinnacle French day: three legendary Tour de France passes and the Gavarnie cirque.

Lunch: Luz or Barèges. Dinner: Auberge du Lien (Laruns). Lodging: Hôtel Mercure Pau / Château de Bétharram.`,
          },
        },
        {
          title: { es: 'Día 7 — Ossau, Pourtalet, Canfranc y cierre en Hondarribia', en: 'Day 7 — Ossau, Pourtalet, Canfranc and return to Hondarribia' },
          distance: '~300 km',
          content: {
            es: `Ruta: Pau → Valle d'Aspe → Col du Pourtalet (1.794 m) → Canfranc-Estación → Jaca → Valle de Hecho (opcional) → Doneztebe → Hondarribia.

Cierre del circuito: frontera occidental, estación de Canfranc y regreso al Atlántico. Cena de celebración: pintxos en Hondarribia.

Documentación obligatoria en frontera. Repostar en Pau, Jaca y antes del Pourtalet.`,
            en: `Route: Pau → Aspe Valley → Col du Pourtalet (1,794 m) → Canfranc Station → Jaca → Hecho Valley (optional) → Doneztebe → Hondarribia.

Loop finale: western border, Canfranc station, and return to the Atlantic. Celebration dinner: pintxos in Hondarribia.

ID/passport required at the border. Refuel in Pau, Jaca, and before Pourtalet.`,
          },
        },
        {
          title: { es: 'Consejos para la ruta', en: 'Route tips' },
          content: {
            es: `Ritmo: salidas a las 8:00–8:30. Jornadas de 300+ km con paradas cortas (20–40 min).

Gasolina: nunca por debajo de 1/3 de depósito en zona de montaña. Repostar en Roncal, Aínsa, Vielha, Puigcerdà, Pau y Jaca.

Frontera: DNI o pasaporte. Puymorens, Pourtalet y opcional Andorra (día 5).

Temporada: junio–septiembre para Tourmalet, Pailhères y Bonaigua sin nieve.

Equipación: capas térmicas obligatorias (0–2.100 m). Reservar alojamientos con 4–6 semanas de antelación.`,
            en: `Pace: departures at 8:00–8:30. 300+ km days with short stops (20–40 min).

Fuel: never below 1/3 tank in the mountains. Refuel in Roncal, Aínsa, Vielha, Puigcerdà, Pau, and Jaca.

Border: ID or passport. Puymorens, Pourtalet, and optional Andorra (day 5).

Season: June–September for Tourmalet, Pailhères, and Bonaigua without snow.

Gear: thermal layers essential (0–2,100 m). Book lodging 4–6 weeks ahead.`,
          },
        },
      ],
      [
        {
          title: { es: 'Day 1 — Atlantic → Roncal and Belagua', en: 'Day 1 — Atlantic → Roncal and Belagua' },
          distance: '~310 km',
          content: {
            es: `Loop: start and finish in Hondarribia. Outbound via Spain (days 1–3), return via France (days 4–7).

Route: Hondarribia → Basque coast → Baztan → Olite → Estella → Roncal → Belagua → Ochagavía → Biescas.

Stops: pintxos in Hondarribia, Olite castle, Belagua glacial cirque.

Dinner: cider house or grill in Roncal. Lodging: Casa Gatsazarra (Ansó) or Hotel Roncal.`,
            en: `Loop: start and finish in Hondarribia. Outbound via Spain (days 1–3), return via France (days 4–7).

Route: Hondarribia → Basque coast → Baztan → Olite → Estella → Roncal → Belagua → Ochagavía → Biescas.

Stops: pintxos in Hondarribia, Olite castle, Belagua glacial cirque.

Dinner: cider house or grill in Roncal. Lodging: Casa Gatsazarra (Ansó) or Hotel Roncal.`,
          },
        },
        {
          title: { es: 'Day 2 — Ordesa, Aínsa, Aneto and Aran Valley', en: 'Day 2 — Ordesa, Aínsa, Aneto and Aran Valley' },
          distance: '~330 km',
          content: {
            es: `Route: Biescas → Torla/Ordesa → Aínsa → Benasque → Bonaigua → Aran Valley → Puigcerdà.

Iconic peaks: Monte Perdido, Aneto views, Bonaigua pass (1,972 m).

Lunch: Aínsa or Benasque. Dinner: Eth Pourtau (Arties). Lodging: Hotel Villa Paulita (Puigcerdà).`,
            en: `Route: Biescas → Torla/Ordesa → Aínsa → Benasque → Bonaigua → Aran Valley → Puigcerdà.

Iconic peaks: Monte Perdido, Aneto views, Bonaigua pass (1,972 m).

Lunch: Aínsa or Benasque. Dinner: Eth Pourtau (Arties). Lodging: Hotel Villa Paulita (Puigcerdà).`,
          },
        },
        {
          title: { es: 'Day 3 — Pallars, Ripollès and crossing into France', en: 'Day 3 — Pallars, Ripollès and crossing into France' },
          distance: '~320 km',
          content: {
            es: `Route: Puigcerdà → Sort → Tremp → Ripoll → Camprodon → Puymorens → Font-Romeu.

Last major Spanish day before French Cerdanya.

Lunch: Sort or Tremp. Dinner: Auberge du Donezan. Lodging: Hôtel le Mas Fleuri (Font-Romeu).`,
            en: `Route: Puigcerdà → Sort → Tremp → Ripoll → Camprodon → Puymorens → Font-Romeu.

Last major Spanish day before French Cerdanya.

Lunch: Sort or Tremp. Dinner: Auberge du Donezan. Lodging: Hôtel le Mas Fleuri (Font-Romeu).`,
          },
        },
        {
          title: { es: 'Day 4 — Cerdanya, Canigó and Conflent', en: 'Day 4 — Cerdanya, Canigó and Conflent' },
          distance: '~340 km',
          content: {
            es: `Route: Font-Romeu → Mont-Louis → Prades → Villefranche-de-Conflent → Collioure → Ax-les-Thermes.

Full French day with Mediterranean touch at Collioure.

Lunch: Collioure. Dinner: Ax-les-Thermes. Lodging: Hôtel du Lion d'Or.`,
            en: `Route: Font-Romeu → Mont-Louis → Prades → Villefranche-de-Conflent → Collioure → Ax-les-Thermes.

Full French day with Mediterranean touch at Collioure.

Lunch: Collioure. Dinner: Ax-les-Thermes. Lodging: Hôtel du Lion d'Or.`,
          },
        },
        {
          title: { es: 'Day 5 — Ariège, Pailhères and Luchon', en: 'Day 5 — Ariège, Pailhères and Luchon' },
          distance: '~310 km',
          content: {
            es: `Route: Foix → Tarascon → Col de Pailhères (2,001 m) → Bagnères-de-Luchon.

Wild Ariège passes. Optional Andorra detour.

Lunch: Tarascon. Dinner: Brasserie du Lyon (Luchon). Lodging: Hôtel de France (Luchon).`,
            en: `Route: Foix → Tarascon → Col de Pailhères (2,001 m) → Bagnères-de-Luchon.

Wild Ariège passes. Optional Andorra detour.

Lunch: Tarascon. Dinner: Brasserie du Lyon (Luchon). Lodging: Hôtel de France (Luchon).`,
          },
        },
        {
          title: { es: 'Day 6 — Tourmalet, Gavarnie, Aubisque and Ossau', en: 'Day 6 — Tourmalet, Gavarnie, Aubisque and Ossau' },
          distance: '~350 km',
          content: {
            es: `Route: Luchon → Gavarnie → Col du Tourmalet → Col d'Aubisque → Laruns → Pau.

Three legendary Tour de France passes and the Gavarnie cirque.

Lunch: Luz or Barèges. Dinner: Auberge du Lien (Laruns). Lodging: Château de Bétharram / Pau.`,
            en: `Route: Luchon → Gavarnie → Col du Tourmalet → Col d'Aubisque → Laruns → Pau.

Three legendary Tour de France passes and the Gavarnie cirque.

Lunch: Luz or Barèges. Dinner: Auberge du Lien (Laruns). Lodging: Château de Bétharram / Pau.`,
          },
        },
        {
          title: { es: 'Day 7 — Pourtalet, Canfranc and Hondarribia', en: 'Day 7 — Pourtalet, Canfranc and Hondarribia' },
          distance: '~300 km',
          content: {
            es: `Route: Pau → Col du Pourtalet → Canfranc → Jaca → Hondarribia.

Loop complete. Celebration pintxos in Hondarribia.`,
            en: `Route: Pau → Col du Pourtalet → Canfranc → Jaca → Hondarribia.

Loop complete. Celebration pintxos in Hondarribia.`,
          },
        },
        {
          title: { es: 'Route tips', en: 'Route tips' },
          content: {
            es: `300+ km daily pace. Fuel, passport, June–September season, thermal layers, book lodging ahead.`,
            en: `300+ km daily pace. Fuel, passport, June–September season, thermal layers, book lodging ahead.`,
          },
        },
      ]
    ),
    accommodations: [
      {
        name: { es: 'Casa Gatsazarra', en: 'Casa Gatsazarra' },
        location: { es: 'Ansó — Valle de Ansó', en: 'Ansó — Ansó Valley' },
        type: { es: 'Casa rural premium · Noche 1', en: 'Premium country house · Night 1' },
        description: {
          es: 'Primera pernoctación tras Roncal y Belagua. Encanto rural en uno de los valles más espectaculares de Navarra.',
          en: 'First night after Roncal and Belagua. Rural charm in one of Navarra\'s finest valleys.',
        },
        image: publicAsset('images/routes/travesia/ochagavia.jpg'),
      },
      {
        name: { es: 'Hotel Villa Paulita', en: 'Hotel Villa Paulita' },
        location: { es: 'Puigcerdà — Cerdanya', en: 'Puigcerdà — Cerdanya' },
        type: { es: 'Hotel histórico · Noche 2', en: 'Historic hotel · Night 2' },
        description: {
          es: 'Tras Ordesa, Benasque, Bonaigua y el Arán completo. Elegancia ceretana tras una jornada de 330 km.',
          en: 'After Ordesa, Benasque, Bonaigua, and the full Aran Valley. Cerdanya elegance after a 330 km day.',
        },
        image: publicAsset('images/routes/travesia/ordesa.jpg'),
      },
      {
        name: { es: 'Hôtel le Mas Fleuri', en: 'Hôtel le Mas Fleuri' },
        location: { es: 'Font-Romeu — Cerdagne francesa', en: 'Font-Romeu — French Cerdanya' },
        type: { es: 'Hotel con encanto · Noche 3', en: 'Charming hotel · Night 3' },
        description: {
          es: 'Primera noche en Francia tras cruzar el Puymorens. Base perfecta en la alta Cerdagne.',
          en: 'First night in France after crossing Puymorens. Perfect base in high Cerdanya.',
        },
        image: publicAsset('images/routes/travesia/collioure.jpg'),
      },
      {
        name: { es: "Hôtel du Lion d'Or", en: "Hôtel du Lion d'Or" },
        location: { es: 'Ax-les-Thermes — Ariège', en: 'Ax-les-Thermes — Ariège' },
        type: { es: 'Hotel termal · Noche 4', en: 'Spa hotel · Night 4' },
        description: {
          es: 'Tras Collioure, Conflent y el Canigó. Aguas termales y cocina ariégeoise para recuperar.',
          en: 'After Collioure, Conflent, and Canigó. Thermal waters and Ariège cuisine to recover.',
        },
        image: publicAsset('images/routes/travesia/aubisque.jpg'),
      },
      {
        name: { es: 'Hôtel de France', en: 'Hôtel de France' },
        location: { es: 'Bagnères-de-Luchon — Hautes-Pyrénées', en: 'Bagnères-de-Luchon — Hautes-Pyrénées' },
        type: { es: 'Palacio del s. XIX · Noche 5', en: '19th-c. palace · Night 5' },
        description: {
          es: 'Tras el Col de Pailhères. Luchon es la puerta histórica del Pirineo central francés.',
          en: 'After Col de Pailhères. Luchon is the historic gateway to the central French Pyrenees.',
        },
        image: publicAsset('images/routes/travesia/tourmalet.jpg'),
      },
      {
        name: { es: 'Château de Bétharram', en: 'Château de Bétharram' },
        location: { es: 'Pau — Valle de Ossau', en: 'Pau — Ossau Valley' },
        type: { es: 'Château boutique · Noche 6', en: 'Boutique château · Night 6' },
        description: {
          es: 'Tras Tourmalet, Gavarnie y Aubisque. Noche de rey antes del Pourtalet y el regreso al Atlántico.',
          en: 'After Tourmalet, Gavarnie, and Aubisque. A regal night before Pourtalet and the return to the Atlantic.',
        },
        image: publicAsset('images/routes/travesia/canfranc.jpg'),
      },
    ],
  },
  dehesa: {
    routeDetail: stages(
      [
        {
          title: { es: 'Jornada off-road — Dehesa y pistas forestales', en: 'Off-road day — Meadow and forest tracks' },
          distance: '130 km',
          content: { es: '40 km de pista forestal principal, vadeos secos, mirador cerealista y regreso sin asfalto.', en: '40 km main forest track, dry fords, cereal plain viewpoint, and unpaved return.' },
        },
      ],
      [
        {
          title: { es: 'Off-road day — Meadow and forest tracks', en: 'Off-road day — Meadow and forest tracks' },
          distance: '130 km',
          content: { es: '40 km de pista forestal principal, vadeos secos, mirador cerealista y regreso sin asfalto.', en: '40 km main forest track, dry fords, cereal plain viewpoint, and unpaved return.' },
        },
      ]
    ),
    accommodations: [
      {
        name: { es: 'Finca La Dehesa Roja', en: 'La Dehesa Roja Estate' },
        location: { es: 'Entorno rural off-road', en: 'Off-road rural setting' },
        type: { es: 'Cortijo boutique', en: 'Boutique farmhouse' },
        description: { es: 'Pernoctación tras la travesía con ducha, cena campestre y garaje seguro.', en: 'Overnight after the crossing with shower, country dinner, and secure parking.' },
        image: 'https://picsum.photos/seed/finca-dehesa/800/500',
      },
    ],
  },
  senderos: {
    routeDetail: stages(
      [
        {
          title: { es: 'Jornada técnica — Crestas y barrancos', en: 'Technical day — Ridges and gorges' },
          distance: '95 km',
          content: { es: 'Ascenso por cresta 360°, rodera, descenso por barranco forestal y camino de herradura final.', en: '360° ridge climb, rutted track, forest gorge descent, and final mule trail.' },
        },
      ],
      [
        {
          title: { es: 'Technical day — Ridges and gorges', en: 'Technical day — Ridges and gorges' },
          distance: '95 km',
          content: { es: 'Ascenso por cresta 360°, rodera, descenso por barranco forestal y camino de herradura final.', en: '360° ridge climb, rutted track, forest gorge descent, and final mule trail.' },
        },
      ]
    ),
    accommodations: [
      {
        name: { es: 'Refugio de Montaña Sierra Vieja', en: 'Sierra Vieja Mountain Lodge' },
        location: { es: 'Pie de sierra', en: 'Foothills of the sierra' },
        type: { es: 'Refugio premium', en: 'Premium lodge' },
        description: { es: 'Alojamiento rústico-chic con spa muscular y cena energética tras la jornada off-road.', en: 'Rustic-chic lodging with muscle recovery spa and hearty dinner after the off-road day.' },
        image: 'https://picsum.photos/seed/refugio-sierra/800/500',
      },
    ],
  },
};
