import { memo } from "react";

function CompetitiveExamsScene() {
  return (
    <svg
      className="exam-scene"
      viewBox="0 0 560 500"
      fill="none"
      role="img"
      aria-label="Animated illustration for competitive exam preparation"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="examPaperBack" x1="130" y1="112" x2="328" y2="318" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF7EC" />
          <stop offset="1" stopColor="#FFE7D0" />
        </linearGradient>
        <linearGradient id="examPaperFront" x1="164" y1="94" x2="392" y2="392" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFDFC" />
          <stop offset="1" stopColor="#FFF1E1" />
        </linearGradient>
        <linearGradient id="examClip" x1="228" y1="74" x2="334" y2="122" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFCC8A" />
          <stop offset="1" stopColor="#FF9A43" />
        </linearGradient>
        <linearGradient id="examAccentWarm" x1="278" y1="204" x2="400" y2="296" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB347" />
          <stop offset="0.56" stopColor="#FF8A3D" />
          <stop offset="1" stopColor="#FF6B6B" />
        </linearGradient>
        <linearGradient id="examAccentCool" x1="376" y1="182" x2="482" y2="324" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8DE8FF" />
          <stop offset="1" stopColor="#58BFFF" />
        </linearGradient>
        <linearGradient id="examPodium" x1="226" y1="320" x2="380" y2="438" gradientUnits="userSpaceOnUse">
          <stop stopColor="#253B5A" />
          <stop offset="1" stopColor="#17263C" />
        </linearGradient>
        <filter
          id="examSceneShadow"
          x="40"
          y="40"
          width="480"
          height="420"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feDropShadow dx="0" dy="24" stdDeviation="24" floodColor="#050D19" floodOpacity="0.28" />
        </filter>
      </defs>

      <circle cx="132" cy="118" r="52" fill="#FFB347" opacity="0.14" />
      <circle cx="436" cy="106" r="44" fill="#58D6FF" opacity="0.1" />
      <circle cx="412" cy="356" r="58" fill="#FF7E5F" opacity="0.08" />
      <ellipse cx="282" cy="432" rx="154" ry="22" fill="#0B1627" opacity="0.24" />

      <g className="exam-float-slow" filter="url(#examSceneShadow)">
        <g transform="rotate(-10 188 214)">
          <rect x="114" y="118" width="160" height="222" rx="26" fill="url(#examPaperBack)" stroke="#FFDAB8" strokeWidth="4" />
          <rect x="142" y="156" width="76" height="12" rx="6" fill="#FFE3C4" />
          <rect x="142" y="182" width="96" height="10" rx="5" fill="#FDEBDD" />
          <rect x="142" y="204" width="82" height="10" rx="5" fill="#FDEBDD" />
          <rect x="142" y="226" width="102" height="10" rx="5" fill="#FDEBDD" />
          <rect x="142" y="258" width="94" height="48" rx="18" fill="#FFF5EA" stroke="#FFDAB8" strokeWidth="3" />
          <path d="M158 286L176 268L194 278L218 248" stroke="url(#examAccentWarm)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="158" cy="286" r="6" fill="#FFB347" />
          <circle cx="176" cy="268" r="6" fill="#FF8A3D" />
          <circle cx="194" cy="278" r="6" fill="#FFD93D" />
          <circle cx="218" cy="248" r="6" fill="#58CC02" />
        </g>
      </g>

      <g className="exam-orbit">
        <circle cx="252" cy="96" r="6" fill="#FFB347" opacity="0.94" />
        <circle cx="280" cy="88" r="7" fill="#FF8A3D" opacity="0.76" />
        <circle cx="308" cy="96" r="6" fill="#58D6FF" opacity="0.86" />
      </g>

      <g className="exam-bob" filter="url(#examSceneShadow)">
        <g transform="rotate(4 286 232)">
          <rect x="152" y="86" width="224" height="302" rx="34" fill="url(#examPaperFront)" stroke="#FFD8BA" strokeWidth="5" />
          <rect x="220" y="66" width="88" height="44" rx="18" fill="url(#examClip)" />
          <rect x="242" y="78" width="44" height="12" rx="6" fill="#FFF4E6" opacity="0.78" />
          <rect x="184" y="132" width="92" height="14" rx="7" fill="#FFE0BF" />
          <rect x="184" y="164" width="150" height="12" rx="6" fill="#FDEBDD" />
          <rect x="184" y="190" width="126" height="12" rx="6" fill="#FDEBDD" />
          <rect x="184" y="216" width="144" height="12" rx="6" fill="#FDEBDD" />
          <rect x="184" y="252" width="160" height="86" rx="24" fill="#FFF7EF" stroke="#FFE0C4" strokeWidth="3" />
          <circle cx="206" cy="278" r="10" fill="#FFF2E3" stroke="#FFD2AF" strokeWidth="3" />
          <path d="M201 278L205 282L212 272" stroke="#58CC02" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="228" y="272" width="92" height="10" rx="5" fill="#FCE4D0" />
          <rect x="228" y="294" width="76" height="10" rx="5" fill="#FCE4D0" />
          <circle cx="206" cy="308" r="10" fill="#FFF2E3" stroke="#FFD2AF" strokeWidth="3" />
          <path d="M201 308L205 312L212 302" stroke="#58CC02" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="228" y="302" width="108" height="10" rx="5" fill="#FCE4D0" />
          <rect x="228" y="324" width="66" height="10" rx="5" fill="#FCE4D0" />
          <rect x="288" y="132" width="60" height="28" rx="14" fill="#FFF5EA" stroke="#FFD8BA" strokeWidth="2" />
          <text
            x="318"
            y="151"
            textAnchor="middle"
            fontSize="13"
            fontWeight="800"
            fill="#B85A00"
            fontFamily="'Baloo 2', sans-serif"
          >
            AIR
          </text>
        </g>
      </g>

      <g className="exam-sway">
        <circle cx="424" cy="214" r="72" fill="rgba(255,255,255,0.08)" />
        <circle cx="424" cy="214" r="56" fill="#FFF8F0" stroke="#FFD8BA" strokeWidth="4" />
        <circle cx="424" cy="214" r="38" fill="#17263C" />
        <circle cx="424" cy="214" r="24" fill="#FFF4E8" stroke="#FFD8BA" strokeWidth="3" />
        <circle cx="424" cy="214" r="9" fill="#FF6B6B" />
        <circle
          cx="424"
          cy="214"
          r="66"
          stroke="#FFD93D"
          strokeWidth="3"
          strokeDasharray="8 10"
          className="exam-rotate-slow"
        />
        <path d="M374 168L412 206" stroke="url(#examAccentCool)" strokeWidth="10" strokeLinecap="round" />
        <path d="M412 206L424 214" stroke="url(#examAccentCool)" strokeWidth="10" strokeLinecap="round" />
        <path d="M424 214L440 200" stroke="url(#examAccentWarm)" strokeWidth="10" strokeLinecap="round" />
        <circle cx="374" cy="168" r="9" fill="#58D6FF" />
        <circle cx="412" cy="206" r="8" fill="#53B8FF" />
        <circle cx="440" cy="200" r="8" fill="#FF8A3D" />
      </g>

      <g className="exam-pulse">
        <circle cx="354" cy="298" r="30" fill="rgba(255,255,255,0.94)" stroke="#FFD8BA" strokeWidth="4" />
        <path d="M354 278L360 292H375L362 300L367 314L354 306L341 314L346 300L333 292H348L354 278Z" fill="#FFB347" />
      </g>

      <g className="exam-glow" filter="url(#examSceneShadow)">
        <rect x="206" y="342" width="78" height="68" rx="18" fill="url(#examPodium)" />
        <rect x="286" y="308" width="88" height="102" rx="20" fill="url(#examPodium)" />
        <rect x="376" y="356" width="70" height="54" rx="18" fill="url(#examPodium)" />
        <text
          x="245"
          y="386"
          textAnchor="middle"
          fontSize="22"
          fontWeight="800"
          fill="#FFD08F"
          fontFamily="'Baloo 2', sans-serif"
        >
          2
        </text>
        <text
          x="330"
          y="368"
          textAnchor="middle"
          fontSize="26"
          fontWeight="800"
          fill="#FFD08F"
          fontFamily="'Baloo 2', sans-serif"
        >
          1
        </text>
        <text
          x="411"
          y="388"
          textAnchor="middle"
          fontSize="20"
          fontWeight="800"
          fill="#FFD08F"
          fontFamily="'Baloo 2', sans-serif"
        >
          3
        </text>
      </g>

      <g className="exam-float-fast">
        <path
          d="M86 320H176C188 320 198 330 198 342V384C198 396 188 406 176 406H136L114 424V406H86C74 406 64 396 64 384V342C64 330 74 320 86 320Z"
          fill="rgba(255,255,255,0.97)"
          stroke="#FFD8BA"
          strokeWidth="4"
        />
        <text
          x="131"
          y="360"
          textAnchor="middle"
          fontSize="30"
          fontWeight="900"
          fill="#FF6B6B"
          fontFamily="'Baloo 2', sans-serif"
        >
          98%
        </text>
        <text
          x="131"
          y="382"
          textAnchor="middle"
          fontSize="14"
          fontWeight="800"
          fill="#B85A00"
          fontFamily="'Baloo 2', sans-serif"
        >
          SCORE
        </text>
      </g>

      <g className="exam-float-slow">
        <rect
          x="388"
          y="332"
          width="128"
          height="98"
          rx="28"
          fill="rgba(255,255,255,0.97)"
          stroke="#FFD8BA"
          strokeWidth="4"
        />
        <path d="M412 378L430 396L482 344" stroke="#58CC02" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M482 344V368" stroke="#58CC02" strokeWidth="8" strokeLinecap="round" />
        <path d="M482 344H458" stroke="#58CC02" strokeWidth="8" strokeLinecap="round" />
        <text
          x="452"
          y="410"
          textAnchor="middle"
          fontSize="18"
          fontWeight="800"
          fill="#B85A00"
          fontFamily="'Baloo 2', sans-serif"
        >
          Mock Clear
        </text>
      </g>
    </svg>
  );
}

export default memo(CompetitiveExamsScene);
