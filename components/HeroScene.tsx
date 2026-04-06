"use client";

import { memo } from "react";
import { useLanguage } from "../app/contexts/LanguageContext";

function HeroScene() {
  const { t } = useLanguage();
  return (
    <div className="hero-scene-wrap">
      <svg viewBox="0 0 420 480" xmlns="http://www.w3.org/2000/svg" className="hero-scene-svg">
        <defs>
          <radialGradient id="glowG" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#58cc02" stopOpacity="0.35"/>
            <stop offset="100%" stopColor="#58cc02" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="bodyG" cx="32%" cy="28%" r="70%">
            <stop offset="0%" stopColor="#8de632"/>
            <stop offset="60%" stopColor="#58cc02"/>
            <stop offset="100%" stopColor="#3a9900"/>
          </radialGradient>
          <radialGradient id="bellyG" cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#b8f060"/>
            <stop offset="100%" stopColor="#7ae632"/>
          </radialGradient>
          <radialGradient id="headG" cx="32%" cy="28%" r="70%">
            <stop offset="0%" stopColor="#8de632"/>
            <stop offset="100%" stopColor="#46a302"/>
          </radialGradient>
          <radialGradient id="coinG" cx="30%" cy="25%" r="70%">
            <stop offset="0%" stopColor="#fff176"/>
            <stop offset="60%" stopColor="#ffd93d"/>
            <stop offset="100%" stopColor="#e6a800"/>
          </radialGradient>
          <radialGradient id="xpG" cx="30%" cy="25%" r="70%">
            <stop offset="0%" stopColor="#ff9f43"/>
            <stop offset="100%" stopColor="#e67e00"/>
          </radialGradient>
          <filter id="owlDrop" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#46a302" floodOpacity="0.5"/>
          </filter>
          <filter id="cardDrop" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000" floodOpacity="0.18"/>
          </filter>
        </defs>

        {/* ── Ripple rings ── */}
        <circle cx="210" cy="240" r="90" fill="none" stroke="#58cc02" strokeWidth="3" strokeOpacity="0.6"
          className="hero-ring1"/>
        <circle cx="210" cy="240" r="90" fill="none" stroke="#58cc02" strokeWidth="2" strokeOpacity="0.4"
          className="hero-ring2"/>

        {/* ── Soft glow ── */}
        <circle cx="210" cy="240" r="130" fill="url(#glowG)" className="hero-glow-pulse"/>

        {/* ── Stars ── */}
        {[
          {cx:80,  cy:100, r:7,  fill:"#ffd93d", delay:"0s"},
          {cx:360, cy:130, r:5,  fill:"#58cc02",  delay:"0.6s"},
          {cx:380, cy:310, r:6,  fill:"#ffd93d", delay:"1.1s"},
          {cx:55,  cy:320, r:5,  fill:"#ff9f43", delay:"0.3s"},
          {cx:310, cy:80,  r:4,  fill:"#53b8ff", delay:"0.9s"},
          {cx:100, cy:400, r:4,  fill:"#58cc02",  delay:"1.4s"},
        ].map((s,i)=>(
          <polygon key={i}
            points={`${s.cx},${s.cy-s.r} ${s.cx+s.r*0.4},${s.cy-s.r*0.4} ${s.cx+s.r},${s.cy} ${s.cx+s.r*0.4},${s.cy+s.r*0.4} ${s.cx},${s.cy+s.r} ${s.cx-s.r*0.4},${s.cy+s.r*0.4} ${s.cx-s.r},${s.cy} ${s.cx-s.r*0.4},${s.cy-s.r*0.4}`}
            fill={s.fill} className="hero-star-pop" style={{animationDelay:s.delay}}/>
        ))}

        {/* ── XP Badge (top-right floating) ── */}
        <g className="hero-float-badge" style={{transformOrigin:"340px 110px"}} filter="url(#cardDrop)">
          <rect x="298" y="86" width="100" height="50" rx="16" fill="url(#xpG)"/>
          <rect x="298" y="86" width="100" height="25" rx="16" fill="rgba(255,255,255,0.15)"/>
          <text x="348" y="107" textAnchor="middle" fontSize="10" fontWeight="800" fill="rgba(255,255,255,0.9)" fontFamily="'Baloo 2',Arial,sans-serif">{t.scene.today}</text>
          <text x="348" y="127" textAnchor="middle" fontSize="16" fontWeight="900" fill="white" fontFamily="'Baloo 2',Arial,sans-serif">+128 XP</text>
        </g>

        {/* ── Streak Badge (top-left floating) ── */}
        <g className="hero-float-badge2" style={{transformOrigin:"80px 110px"}} filter="url(#cardDrop)">
          <rect x="28" y="86" width="110" height="50" rx="16" fill="#fff" stroke="#e2f5cb" strokeWidth="2"/>
          <text x="83" y="107" textAnchor="middle" fontSize="10" fontWeight="800" fill="#617256" fontFamily="'Baloo 2',Arial,sans-serif">{t.scene.streak}</text>
          <text x="83" y="127" textAnchor="middle" fontSize="15" fontWeight="900" fill="#163300" fontFamily="'Baloo 2',Arial,sans-serif">🔥 6 {t.scene.days}</text>
        </g>

        {/* ── Coin (right side floating) ── */}
        <g className="hero-float-coin" style={{transformOrigin:"370px 260px"}} filter="url(#cardDrop)">
          <ellipse cx="370" cy="266" rx="28" ry="28" fill="#cc8800"/>
          <ellipse cx="370" cy="260" rx="28" ry="28" fill="url(#coinG)"/>
          <text x="370" y="266" textAnchor="middle" fontSize="22" fontWeight="900" fill="#9a6200" fontFamily="Arial,sans-serif">$</text>
        </g>

        {/* ── OWL ── */}
        <g className="hero-owl-bob" style={{transformOrigin:"210px 240px"}} filter="url(#owlDrop)">

          {/* tail */}
          <ellipse cx="210" cy="318" rx="40" ry="16" fill="#3a9900"/>

          {/* body */}
          <ellipse cx="210" cy="270" rx="70" ry="76" fill="url(#bodyG)"/>

          {/* belly */}
          <ellipse cx="210" cy="282" rx="46" ry="56" fill="url(#bellyG)"/>

          {/* wing left */}
          <g className="hero-wing-l" style={{transformOrigin:"144px 268px"}}>
            <ellipse cx="144" cy="268" rx="30" ry="14" fill="#3a9900" transform="rotate(-28,144,268)"/>
            <ellipse cx="142" cy="273" rx="22" ry="11" fill="#58cc02" transform="rotate(-28,142,273)"/>
          </g>

          {/* wing right */}
          <g className="hero-wing-r" style={{transformOrigin:"276px 266px"}}>
            <ellipse cx="276" cy="266" rx="30" ry="14" fill="#3a9900" transform="rotate(28,276,266)"/>
            <ellipse cx="278" cy="271" rx="22" ry="11" fill="#58cc02" transform="rotate(28,278,271)"/>
          </g>

          {/* head */}
          <ellipse cx="210" cy="196" rx="62" ry="60" fill="url(#headG)"/>

          {/* ear tufts */}
          <ellipse cx="170" cy="152" rx="17" ry="24" fill="#3a9900" transform="rotate(-16,170,152)"/>
          <ellipse cx="250" cy="152" rx="17" ry="24" fill="#3a9900" transform="rotate(16,250,152)"/>
          <ellipse cx="170" cy="150" rx="11" ry="18" fill="#58cc02" transform="rotate(-16,170,150)"/>
          <ellipse cx="250" cy="150" rx="11" ry="18" fill="#58cc02" transform="rotate(16,250,150)"/>

          {/* eye whites */}
          <ellipse cx="189" cy="194" rx="26" ry="27" fill="white"/>
          <ellipse cx="231" cy="194" rx="26" ry="27" fill="white"/>
          {/* eye shadow top */}
          <ellipse cx="189" cy="180" rx="26" ry="10" fill="rgba(0,0,0,0.06)"/>
          <ellipse cx="231" cy="180" rx="26" ry="10" fill="rgba(0,0,0,0.06)"/>

          {/* blink group left */}
          <g className="hero-blink-l" style={{transformOrigin:"189px 194px"}}>
            <circle cx="189" cy="196" r="16" fill="#1a1a1a"/>
            <g className="hero-pupil-move">
              <circle cx="189" cy="196" r="10" fill="#2a2a2a"/>
              <circle cx="183" cy="190" r="5" fill="white"/>
              <circle cx="192" cy="200" r="2.5" fill="white"/>
            </g>
          </g>

          {/* blink group right */}
          <g className="hero-blink-r" style={{transformOrigin:"231px 194px"}}>
            <circle cx="231" cy="196" r="16" fill="#1a1a1a"/>
            <g className="hero-pupil-move2">
              <circle cx="231" cy="196" r="10" fill="#2a2a2a"/>
              <circle cx="225" cy="190" r="5" fill="white"/>
              <circle cx="234" cy="200" r="2.5" fill="white"/>
            </g>
          </g>

          {/* beak */}
          <path d="M196 216 Q210 234 224 216 Q210 226 196 216Z" fill="#ff9f00"/>
          <path d="M198 220 Q210 230 222 220 Q210 228 198 220Z" fill="#e68900"/>
          <ellipse cx="210" cy="217" rx="14" ry="4" fill="#ffb830"/>

          {/* blush */}
          <ellipse cx="166" cy="212" rx="12" ry="7" fill="rgba(255,100,80,0.2)"/>
          <ellipse cx="254" cy="212" rx="12" ry="7" fill="rgba(255,100,80,0.2)"/>

          {/* feet */}
          <ellipse cx="190" cy="340" rx="18" ry="9" fill="#ff9f00" transform="rotate(-12,190,340)"/>
          <ellipse cx="230" cy="342" rx="18" ry="9" fill="#ff9f00" transform="rotate(12,230,342)"/>
          <ellipse cx="190" cy="338" rx="18" ry="7" fill="#ffb830" transform="rotate(-12,190,338)"/>
          <ellipse cx="230" cy="340" rx="18" ry="7" fill="#ffb830" transform="rotate(12,230,340)"/>
        </g>

        {/* ── Sparkle dots ── */}
        {[
          {cx:130,cy:150,r:4,c:"#ffd93d",d:"0s"},
          {cx:290,cy:160,r:3,c:"#58cc02", d:"0.5s"},
          {cx:320,cy:280,r:4,c:"#ff9f43",d:"1s"},
          {cx:95, cy:280,r:3,c:"#53b8ff",d:"0.7s"},
          {cx:160,cy:370,r:3,c:"#ffd93d",d:"1.3s"},
          {cx:265,cy:360,r:4,c:"#58cc02", d:"0.2s"},
        ].map((s,i)=>(
          <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill={s.c}
            className="hero-sparkle" style={{animationDelay:s.d}}/>
        ))}

      </svg>
    </div>
  );
}

export default memo(HeroScene);
