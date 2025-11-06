type NorthStarLogoProps = {
  className?: string;
};

export function NorthStarLogo({ className }: NorthStarLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 180"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="northStarRoofingLogoTitle northStarRoofingLogoDesc"
    >
      <title id="northStarRoofingLogoTitle">North Star Roofing logo</title>
      <desc id="northStarRoofingLogoDesc">
        Stylized roofline beneath a guiding north star.
      </desc>
      <defs>
        <linearGradient
          id="roofGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="50%" stopColor="#1d3557" />
          <stop offset="100%" stopColor="#3a6ea5" />
        </linearGradient>
        <linearGradient id="starGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#eab308" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="#f8fafc" rx="16" />
      <path
        d="M60 120 L155 40 L260 120"
        fill="none"
        stroke="url(#roofGradient)"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M110 120 L152 88 L190 120"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="155" cy="120" r="38" fill="#0f172a" opacity="0.04" />
      <path
        d="M155 32 L168 72 L210 72 L175 97 L188 137 L155 112 L122 137 L135 97 L100 72 L142 72 Z"
        fill="url(#starGradient)"
        stroke="#0f172a"
        strokeOpacity="0.15"
        strokeWidth="2"
      />
      <text
        x="160"
        y="160"
        textAnchor="middle"
        fontFamily="'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
        fontSize="28"
        fontWeight="600"
        letterSpacing="4"
        fill="#0f172a"
      >
        NORTH STAR
      </text>
      <text
        x="160"
        y="178"
        textAnchor="middle"
        fontFamily="'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
        fontSize="18"
        fontWeight="400"
        letterSpacing="3"
        fill="#3b82f6"
      >
        ROOFING
      </text>
    </svg>
  );
}
