import logo1 from '../assets/logos/logo-proposal-1-compass.svg';
import logo2 from '../assets/logos/logo-proposal-2-monogram.svg';
import logo3 from '../assets/logos/logo-proposal-3-road-s.svg';
import logo4 from '../assets/logos/logo-proposal-4-wordmark.svg';

const proposals = [
  {
    id: 1,
    name: 'Brújula + curva',
    description: 'Brújula con aguja en forma de carretera. Refuerza exploración y rutas guiadas.',
    src: logo1,
    tag: 'Recomendada',
  },
  {
    id: 2,
    name: 'Monograma BA',
    description: 'Iniciales entrelazadas con línea de asfalto. Más corporativo y memorable.',
    src: logo2,
    tag: 'Premium',
  },
  {
    id: 3,
    name: 'Carretera en S',
    description: 'Curvas que forman una S con destino naranja. Comunica carreteras secundarias.',
    src: logo3,
    tag: 'Aventura',
  },
  {
    id: 4,
    name: 'Wordmark refinado',
    description: 'Solo tipografía con línea de asfalto. Cambio mínimo, más editorial.',
    src: logo4,
    tag: 'Minimal',
  },
];

export default function LogoPreview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-[#1c0f08] to-neutral-950 text-stone-200 font-sans">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-orange-500 font-mono text-xs uppercase tracking-widest mb-3">
            Comparativa de logos
          </p>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-white uppercase italic tracking-tight">
            Elige tu logo
          </h1>
          <p className="text-stone-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Cuatro propuestas para Byroad Adventures. Dime el número (1, 2, 3 o 4) y lo integro en la web.
          </p>
          <a
            href="/"
            className="inline-block mt-6 text-xs font-mono text-stone-500 hover:text-orange-500 transition-colors uppercase tracking-widest"
          >
            ← Volver a la web
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proposals.map((proposal) => (
            <article
              key={proposal.id}
              className="frosted-panel rounded-3xl p-8 flex flex-col gap-6 shadow-2xl"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-orange-500 font-mono text-[10px] uppercase tracking-widest">
                    Propuesta {proposal.id}
                  </span>
                  <h2 className="font-display font-bold text-lg text-white mt-1">
                    {proposal.name}
                  </h2>
                </div>
                <span className="text-[10px] font-mono bg-orange-500/10 text-orange-500 border border-orange-500/20 px-2.5 py-1 rounded-full uppercase">
                  {proposal.tag}
                </span>
              </div>

              <p className="text-stone-400 text-sm leading-relaxed">{proposal.description}</p>

              {/* Dark navbar mockup */}
              <div className="rounded-2xl border border-white/10 bg-[#121214]/80 p-5">
                <p className="text-[10px] font-mono text-stone-500 uppercase tracking-widest mb-4">
                  Vista en navbar
                </p>
                <img
                  src={proposal.src}
                  alt={`Logo propuesta ${proposal.id}: ${proposal.name}`}
                  className="h-10 w-auto"
                />
              </div>

              {/* Hero overlay mockup */}
              <div className="rounded-2xl border border-white/10 bg-neutral-950/60 p-5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent pointer-events-none" />
                <p className="text-[10px] font-mono text-stone-500 uppercase tracking-widest mb-4 relative z-10">
                  Vista sobre fondo oscuro
                </p>
                <img
                  src={proposal.src}
                  alt={`Logo propuesta ${proposal.id} sobre fondo oscuro`}
                  className="h-12 w-auto relative z-10"
                />
              </div>

              <a
                href={proposal.src}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-stone-500 hover:text-orange-500 transition-colors"
              >
                Abrir SVG →
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
