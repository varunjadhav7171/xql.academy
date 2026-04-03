import { memo } from "react";

function KidsLearningScene() {
  return (
    <svg
      className="kids-scene"
      viewBox="0 0 560 500"
      fill="none"
      role="img"
      aria-label="Animated illustration of playful learning for kids"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="kidsCanvas" x1="92" y1="60" x2="460" y2="420" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#F4FFD9" />
        </linearGradient>
        <linearGradient id="kidsScreen" x1="176" y1="140" x2="386" y2="302" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ECFFF5" />
          <stop offset="1" stopColor="#E5F5FF" />
        </linearGradient>
        <linearGradient id="kidsRocket" x1="436" y1="152" x2="510" y2="228" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB347" />
          <stop offset="1" stopColor="#FF6B6B" />
        </linearGradient>
        <filter id="kidsGlow" x="0" y="0" width="560" height="500" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#58CC02" floodOpacity="0.12" />
        </filter>
      </defs>

      <circle cx="116" cy="104" r="34" fill="#FFE56E" opacity="0.7" />
      <circle cx="448" cy="90" r="24" fill="#FFFFFF" opacity="0.42" />
      <circle cx="470" cy="116" r="10" fill="#FFFFFF" opacity="0.6" />
      <circle cx="84" cy="344" r="16" fill="#FFFFFF" opacity="0.55" />

      <g filter="url(#kidsGlow)" className="kids-bob">
        <rect x="84" y="56" width="392" height="340" rx="52" fill="url(#kidsCanvas)" />
      </g>

      <g className="kids-float-slow">
        <rect x="104" y="110" width="104" height="82" rx="28" fill="#FFF8E0" stroke="#FFE498" strokeWidth="4" />
        <rect x="118" y="124" width="24" height="24" rx="8" fill="#FFFFFF" />
        <rect x="144" y="124" width="24" height="24" rx="8" fill="#FFFFFF" />
        <rect x="170" y="124" width="24" height="24" rx="8" fill="#FFFFFF" />
        <text x="130" y="141" textAnchor="middle" fontSize="14" fontWeight="800" fill="#FF9F43" fontFamily="'Baloo 2', sans-serif">
          A
        </text>
        <text x="156" y="141" textAnchor="middle" fontSize="14" fontWeight="800" fill="#53B8FF" fontFamily="'Baloo 2', sans-serif">
          B
        </text>
        <text x="182" y="141" textAnchor="middle" fontSize="14" fontWeight="800" fill="#58CC02" fontFamily="'Baloo 2', sans-serif">
          C
        </text>
        <text x="156" y="171" textAnchor="middle" fontSize="18" fontWeight="800" fill="#163300" fontFamily="'Baloo 2', sans-serif">
          ABC
        </text>
      </g>

      <g className="kids-float-fast">
        <path
          d="M438 184C455 152 486 137 511 140C509 162 497 194 468 213L455 227L438 209L438 184Z"
          fill="url(#kidsRocket)"
        />
        <circle cx="480" cy="172" r="10" fill="#FFFDF2" />
        <path d="M438 210L422 238L454 224Z" fill="#FFB347" />
        <path d="M451 222L440 246L462 228Z" fill="#FF6B6B" />
        <circle cx="425" cy="246" r="12" fill="#FFE498" opacity="0.55" />
      </g>

      <g className="kids-bob">
        <rect x="150" y="118" width="260" height="212" rx="40" fill="#FFFFFF" stroke="#D5F0AC" strokeWidth="6" />
        <rect x="175" y="142" width="210" height="160" rx="28" fill="url(#kidsScreen)" />
        <circle cx="280" cy="332" r="14" fill="#58CC02" />
        <rect x="220" y="346" width="120" height="18" rx="9" fill="#D8F0B7" />
      </g>

      <g className="kids-sway">
        <rect x="206" y="166" width="148" height="112" rx="28" fill="#FFFDF7" />
        <path d="M280 166V278" stroke="#DBE9FF" strokeWidth="4" />
        <text x="235" y="224" textAnchor="middle" fontSize="56" fontWeight="800" fill="#58CC02" fontFamily="'Baloo 2', sans-serif">
          A
        </text>
        <text x="322" y="224" textAnchor="middle" fontSize="48" fontWeight="800" fill="#FF9F43" fontFamily="'Baloo 2', sans-serif">
          3
        </text>
        <circle cx="253" cy="244" r="8" fill="#163300" />
        <circle cx="308" cy="244" r="8" fill="#163300" />
        <path d="M248 262C260 273 279 276 299 259" stroke="#163300" strokeWidth="6" strokeLinecap="round" />
      </g>

      <g className="kids-float-fast">
        <rect x="96" y="286" width="108" height="84" rx="28" fill="#E8F7FF" stroke="#C9EBFF" strokeWidth="4" />
        <text x="150" y="334" textAnchor="middle" fontSize="32" fontWeight="800" fill="#0F7CC4" fontFamily="'Baloo 2', sans-serif">
          1+2
        </text>
      </g>

      <g className="kids-float-slow">
        <path
          d="M434 324H492C503 324 512 333 512 344V370C512 381 503 390 492 390H461L440 408V390H434C423 390 414 381 414 370V344C414 333 423 324 434 324Z"
          fill="#FFFFFF"
          stroke="#C9EBFF"
          strokeWidth="4"
        />
        <text x="464" y="359" textAnchor="middle" fontSize="28" fontWeight="800" fill="#53B8FF" fontFamily="'Baloo 2', sans-serif">
          Hi
        </text>
      </g>

      <g className="kids-twinkle">
        <circle cx="410" cy="288" r="28" fill="#FFF1F7" stroke="#FFD0E2" strokeWidth="4" />
        <path
          d="M410 269L415 281H428L417 288L421 301L410 293L399 301L403 288L392 281H405L410 269Z"
          fill="#FF9F43"
        />
      </g>

      <g className="kids-twinkle">
        <circle cx="250" cy="96" r="8" fill="#58CC02" opacity="0.28" />
        <circle cx="268" cy="84" r="5" fill="#53B8FF" opacity="0.35" />
        <circle cx="288" cy="100" r="6" fill="#FF9F43" opacity="0.35" />
        <circle cx="312" cy="88" r="5" fill="#FFE56E" opacity="0.65" />
      </g>

      <path
        d="M210 402C244 392 294 392 332 402"
        stroke="#D6EFB0"
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}

export default memo(KidsLearningScene);
