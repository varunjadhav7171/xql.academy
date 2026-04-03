import { memo } from "react";

function StudentsLearningScene() {
  return (
    <svg
      className="students-scene"
      viewBox="0 0 560 500"
      fill="none"
      role="img"
      aria-label="Animated illustration of a focused student learning dashboard"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="studentsPanel" x1="106" y1="78" x2="454" y2="406" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#EAF7FF" />
        </linearGradient>
        <linearGradient id="studentsScreen" x1="172" y1="164" x2="390" y2="318" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F7FCFF" />
          <stop offset="1" stopColor="#E7F7F2" />
        </linearGradient>
        <linearGradient id="studentsGraph" x1="372" y1="308" x2="500" y2="404" gradientUnits="userSpaceOnUse">
          <stop stopColor="#53B8FF" />
          <stop offset="1" stopColor="#31C48D" />
        </linearGradient>
      </defs>

      <circle cx="98" cy="104" r="32" fill="#E8F7FF" opacity="0.7" />
      <circle cx="458" cy="86" r="24" fill="#FFFFFF" opacity="0.38" />
      <circle cx="480" cy="118" r="12" fill="#FFFFFF" opacity="0.55" />

      <g className="students-glow">
        <rect x="94" y="66" width="372" height="332" rx="50" fill="url(#studentsPanel)" />
      </g>

      <g className="students-float-slow">
        <rect x="98" y="132" width="104" height="92" rx="26" fill="#FFF8E0" stroke="#FFE498" strokeWidth="4" />
        <rect x="118" y="154" width="62" height="10" rx="5" fill="#FFD86A" />
        <rect x="118" y="172" width="48" height="10" rx="5" fill="#FFE7A0" />
        <rect x="118" y="190" width="56" height="10" rx="5" fill="#FFE7A0" />
        <text x="150" y="151" textAnchor="middle" fontSize="18" fontWeight="800" fill="#B06C00" fontFamily="'Baloo 2', sans-serif">
          REV
        </text>
      </g>

      <g className="students-float-fast">
        <rect x="414" y="126" width="96" height="92" rx="26" fill="#FFF1F7" stroke="#FFD0E2" strokeWidth="4" />
        <path d="M450 156C450 145 459 136 470 136C481 136 490 145 490 156V182H450V156Z" fill="#FF9F43" />
        <path d="M455 182L463 156H477L485 182" stroke="#B64173" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="458" cy="150" r="5" fill="#53B8FF" />
        <circle cx="482" cy="150" r="5" fill="#58CC02" />
      </g>

      <g className="students-bob">
        <rect x="154" y="122" width="260" height="204" rx="36" fill="#FFFFFF" stroke="#C9EBFF" strokeWidth="6" />
        <rect x="178" y="146" width="212" height="152" rx="28" fill="url(#studentsScreen)" />
        <rect x="228" y="326" width="112" height="18" rx="9" fill="#CFEFFF" />
        <circle cx="284" cy="318" r="12" fill="#53B8FF" />
      </g>

      <g className="students-sway">
        <rect x="194" y="170" width="180" height="108" rx="24" fill="#FFFFFF" />
        <rect x="212" y="188" width="62" height="12" rx="6" fill="#D9F0FF" />
        <rect x="212" y="208" width="118" height="10" rx="5" fill="#EAF6FF" />
        <rect x="212" y="226" width="88" height="10" rx="5" fill="#EAF6FF" />
        <rect x="212" y="244" width="126" height="10" rx="5" fill="#EAF6FF" />
        <path d="M306 240L328 216L346 224L360 198" stroke="#31C48D" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="306" cy="240" r="7" fill="#53B8FF" />
        <circle cx="328" cy="216" r="7" fill="#53B8FF" />
        <circle cx="346" cy="224" r="7" fill="#FF9F43" />
        <circle cx="360" cy="198" r="7" fill="#58CC02" />
      </g>

      <g className="students-float-fast">
        <path
          d="M94 306H156C167 306 176 315 176 326V360C176 371 167 380 156 380H130L112 398V380H94C83 380 74 371 74 360V326C74 315 83 306 94 306Z"
          fill="#FFFFFF"
          stroke="#C9EBFF"
          strokeWidth="4"
        />
        <text x="125" y="342" textAnchor="middle" fontSize="30" fontWeight="800" fill="#0F7CC4" fontFamily="'Baloo 2', sans-serif">
          A+
        </text>
      </g>

      <g className="students-float-slow">
        <rect x="398" y="302" width="118" height="96" rx="28" fill="#FFFFFF" stroke="#BCEFD5" strokeWidth="4" />
        <path d="M420 366V342" stroke="#D7EAF9" strokeWidth="8" strokeLinecap="round" />
        <path d="M446 366V328" stroke="#D7EAF9" strokeWidth="8" strokeLinecap="round" />
        <path d="M472 366V312" stroke="#D7EAF9" strokeWidth="8" strokeLinecap="round" />
        <path d="M420 346L446 332L472 316L494 324" stroke="url(#studentsGraph)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="420" cy="346" r="6" fill="#53B8FF" />
        <circle cx="446" cy="332" r="6" fill="#53B8FF" />
        <circle cx="472" cy="316" r="6" fill="#31C48D" />
        <circle cx="494" cy="324" r="6" fill="#FF9F43" />
      </g>

      <g className="students-orbit">
        <circle cx="280" cy="96" r="7" fill="#53B8FF" opacity="0.45" />
        <circle cx="302" cy="82" r="5" fill="#FF9F43" opacity="0.55" />
        <circle cx="324" cy="100" r="6" fill="#58CC02" opacity="0.45" />
      </g>

      <path d="M216 416C252 406 302 406 340 416" stroke="#CBEBD7" strokeWidth="10" strokeLinecap="round" />
    </svg>
  );
}

export default memo(StudentsLearningScene);
