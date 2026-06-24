import { RouteAccommodation, RouteStage, Localized } from '../types';

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
  canones: {
    routeDetail: stages(
      [
        {
          title: { es: 'Mañana — Gargantas del Sil', en: 'Morning — Sil Gorges' },
          distance: '85 km',
          content: {
            es: 'Salida suave hacia el Desfiladero de las Ánimas. Carretera estrecha entre paredes de piedra caliza y curvas enlazadas sin prisa.',
            en: 'A gentle start toward Desfiladero de las Ánimas. A narrow road between limestone walls and unhurried linked corners.',
          },
        },
        {
          title: { es: 'Tarde — Miradores y pueblo colgado', en: 'Afternoon — Viewpoints and hanging village' },
          distance: '100 km',
          content: {
            es: 'Subida al Nido de Águila (1.200 m), tramo de herraduras del cañón y parada gastronómica en el pueblo de piedra.',
            en: 'Climb to Nido de Águila (1,200 m), canyon hairpin section, and a gastronomic stop in the stone village.',
          },
        },
      ],
      [
        {
          title: { es: 'Morning — Sil Gorges', en: 'Morning — Sil Gorges' },
          distance: '85 km',
          content: {
            es: 'Salida suave hacia el Desfiladero de las Ánimas. Carretera estrecha entre paredes de piedra caliza y curvas enlazadas sin prisa.',
            en: 'A gentle start toward Desfiladero de las Ánimas. A narrow road between limestone walls and unhurried linked corners.',
          },
        },
        {
          title: { es: 'Afternoon — Viewpoints and hanging village', en: 'Afternoon — Viewpoints and hanging village' },
          distance: '100 km',
          content: {
            es: 'Subida al Nido de Águila (1.200 m), tramo de herraduras del cañón y parada gastronómica en el pueblo de piedra.',
            en: 'Climb to Nido de Águila (1,200 m), canyon hairpin section, and a gastronomic stop in the stone village.',
          },
        },
      ]
    ),
    accommodations: [
      {
        name: { es: 'Casa Rural El Mirador del Cañón', en: 'El Mirador del Cañón Country House' },
        location: { es: 'Entorno del cañón del Sil', en: 'Sil Canyon area' },
        type: { es: 'Casa rural con encanto', en: 'Charming country house' },
        description: {
          es: 'Pernoctación en entorno natural tras la jornada, con cena local y desayuno contemplando las gargantas.',
          en: 'Overnight in a natural setting after the ride, with local dinner and breakfast overlooking the gorges.',
        },
        image: 'https://picsum.photos/seed/mirador-canon/800/500',
      },
    ],
  },
  encinas: {
    routeDetail: stages(
      [
        {
          title: { es: 'Jornada única — Dehesas y encinas milenarias', en: 'Single day — Meadows and ancient oaks' },
          distance: '160 km',
          content: {
            es: 'Circuito fluido por carreteras secundarias: dehesas abiertas, pueblos blancos, bodega con cata y atardecer en mirador.',
            en: 'A flowing loop on secondary roads: open meadows, white villages, winery tasting, and sunset at a viewpoint.',
          },
        },
      ],
      [
        {
          title: { es: 'Single day — Meadows and ancient oaks', en: 'Single day — Meadows and ancient oaks' },
          distance: '160 km',
          content: {
            es: 'Circuito fluido por carreteras secundarias: dehesas abiertas, pueblos blancos, bodega con cata y atardecer en mirador.',
            en: 'A flowing loop on secondary roads: open meadows, white villages, winery tasting, and sunset at a viewpoint.',
          },
        },
      ]
    ),
    accommodations: [
      {
        name: { es: 'Hacienda de la Dehesa', en: 'Hacienda de la Dehesa' },
        location: { es: 'Corazón de la dehesa extremeña', en: 'Heart of the Extremadura meadow' },
        type: { es: 'Boutique rural', en: 'Rural boutique' },
        description: {
          es: 'Alojamiento con patio interior, cocina de proximidad y ambiente tranquilo para cerrar el día a ritmo Custom.',
          en: 'Lodging with inner courtyard, farm-to-table cuisine, and a calm atmosphere to end the Custom-paced day.',
        },
        image: 'https://picsum.photos/seed/hacienda-dehesa/800/500',
      },
    ],
  },
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
  silencio: {
    routeDetail: stages(
      [
        {
          title: { es: 'Día 1 — Valles despoblados', en: 'Day 1 — Unpopulated valleys' },
          distance: '~150 km',
          content: { es: 'Entrada a la comarca más silenciosa: carreteras sin línea central y primer puerto solitario.', en: 'Entry into the quietest region: roads with no center line and the first solitary pass.' },
        },
        {
          title: { es: 'Día 2 — Bosque de hayas', en: 'Day 2 — Beech forest' },
          distance: '~150 km',
          content: { es: 'Travesía del hayedo centenario y visita al monasterio románico abandonado.', en: 'Crossing the ancient beech forest and visit to the abandoned Romanesque monastery.' },
        },
        {
          title: { es: 'Día 3 — Regreso por la sierra', en: 'Day 3 — Return through the sierra' },
          distance: '~150 km',
          content: { es: 'Última tirada Trail por crestas y valles antes del cierre del circuito.', en: 'Final Trail stretch along ridges and valleys before closing the loop.' },
        },
      ],
      [
        {
          title: { es: 'Day 1 — Unpopulated valleys', en: 'Day 1 — Unpopulated valleys' },
          distance: '~150 km',
          content: { es: 'Entrada a la comarca más silenciosa: carreteras sin línea central y primer puerto solitario.', en: 'Entry into the quietest region: roads with no center line and the first solitary pass.' },
        },
        {
          title: { es: 'Day 2 — Beech forest', en: 'Day 2 — Beech forest' },
          distance: '~150 km',
          content: { es: 'Travesía del hayedo centenario y visita al monasterio románico abandonado.', en: 'Crossing the ancient beech forest and visit to the abandoned Romanesque monastery.' },
        },
        {
          title: { es: 'Day 3 — Return through the sierra', en: 'Day 3 — Return through the sierra' },
          distance: '~150 km',
          content: { es: 'Última tirada Trail por crestas y valles antes del cierre del circuito.', en: 'Final Trail stretch along ridges and valleys before closing the loop.' },
        },
      ]
    ),
    accommodations: [
      {
        name: { es: 'Pazo Histórico del Silencio', en: 'Historic Pazo of Silence' },
        location: { es: 'Valle interior, Galicia interior', en: 'Inland valley, interior Galicia' },
        type: { es: 'Pazo del s. XVII', en: '17th-century manor' },
        description: { es: 'Dos noches en manor de piedra con jardines y cocina de autor entre jornadas largas.', en: 'Two nights in a stone manor with gardens and fine dining between long riding days.' },
        image: 'https://picsum.photos/seed/pazo-silencio/800/500',
      },
    ],
  },
  atlantico: {
    routeDetail: stages(
      [
        { title: { es: 'Día 1 — Cabo occidental', en: 'Day 1 — Western cape' }, distance: '~145 km', content: { es: 'Faro más occidental del continente y primeras curvas al filo del acantilado.', en: 'Mainland\'s westernmost lighthouse and first cliff-edge corners.' } },
        { title: { es: 'Día 2 — Monte del Trueno', en: 'Day 2 — Monte del Trueno' }, distance: '~150 km', content: { es: 'Subida técnica y tramos expuestos al viento atlántico.', en: 'Technical climb and stretches exposed to Atlantic wind.' } },
        { title: { es: 'Día 3 — Rías y puertos', en: 'Day 3 — Estuaries and harbors' }, distance: '~140 km', content: { es: 'Carretera costera entre rías y cena de marisco en puerto pesquero.', en: 'Coastal road between estuaries and seafood dinner at a fishing port.' } },
        { title: { es: 'Día 4 — Cierre épico', en: 'Day 4 — Epic finale' }, distance: '~145 km', content: { es: 'Últimas curvas infinitas sobre acantilados de 300 m de caída.', en: 'Final endless corners above 300 m drop cliffs.' } },
      ],
      [
        { title: { es: 'Day 1 — Western cape', en: 'Day 1 — Western cape' }, distance: '~145 km', content: { es: 'Faro más occidental del continente y primeras curvas al filo del acantilado.', en: 'Mainland\'s westernmost lighthouse and first cliff-edge corners.' } },
        { title: { es: 'Day 2 — Monte del Trueno', en: 'Day 2 — Monte del Trueno' }, distance: '~150 km', content: { es: 'Subida técnica y tramos expuestos al viento atlántico.', en: 'Technical climb and stretches exposed to Atlantic wind.' } },
        { title: { es: 'Day 3 — Estuaries and harbors', en: 'Day 3 — Estuaries and harbors' }, distance: '~140 km', content: { es: 'Carretera costera entre rías y cena de marisco en puerto pesquero.', en: 'Coastal road between estuaries and seafood dinner at a fishing port.' } },
        { title: { es: 'Day 4 — Epic finale', en: 'Day 4 — Epic finale' }, distance: '~145 km', content: { es: 'Últimas curvas infinitas sobre acantilados de 300 m de caída.', en: 'Final endless corners above 300 m drop cliffs.' } },
      ]
    ),
    accommodations: [
      {
        name: { es: 'Casa Marítima Costa Salvaje', en: 'Wild Coast Seaside House' },
        location: { es: 'Litoral atlántico', en: 'Atlantic coastline' },
        type: { es: 'Boutique costero', en: 'Coastal boutique' },
        description: { es: 'Alojamientos rotativos junto al mar con vistas al océano cada noche del Trail.', en: 'Rotating seaside lodgings with ocean views each night of the Trail.' },
        image: 'https://picsum.photos/seed/casa-maritima/800/500',
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
