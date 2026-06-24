interface LogoProps {
  className?: string;
  iconClassName?: string;
}

function MonogramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="44" height="44" rx="12" fill="#f97316" />
      <path
        d="M14 10 H22 C26 10 28 12.5 28 15.5 C28 17.5 27 19 25.5 19.8 C27.5 20.5 29 22.2 29 24.8 C29 28.5 26 31 22 31 H14 Z M18 14 V17.5 H21.5 C23 17.5 24 16.8 24 15.7 C24 14.6 23 14 21.5 14 Z M18 21.5 V27.5 H22 C24 27.5 25 26.5 25 24.5 C25 22.5 24 21.5 22 21.5 Z"
        fill="#0a0a0a"
      />
      <path
        d="M32 31 L36 10 H40 L44 31 H40.5 L39.5 27 H36.5 L35.5 31 Z M37 23.5 H39 L38 17.5 Z"
        fill="#0a0a0a"
      />
      <path d="M33 25.5 H43" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M35 25.5 H41"
        stroke="#0a0a0a"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />
    </svg>
  );
}

export default function Logo({ className = '', iconClassName = 'w-9 h-9' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <MonogramIcon
        className={`${iconClassName} flex-shrink-0 transition-transform duration-300 group-hover:rotate-12`}
      />
      <div className="flex flex-col leading-[0.95] text-left">
        <span className="font-display font-black text-base sm:text-[17px] tracking-tighter uppercase italic text-white">
          BYROAD
        </span>
        <span className="font-display font-black text-base sm:text-[17px] tracking-tighter uppercase italic text-orange-500">
          ADVENTURES
        </span>
      </div>
    </div>
  );
}
