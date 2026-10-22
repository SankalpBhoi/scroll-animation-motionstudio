import React from 'react'

export default function CarIllustration() {
  return (
    <svg className="car-art" viewBox="0 0 650 260" role="img" aria-label="Illustration of an orange performance car">
      <defs>
        <linearGradient id="bodyPaint" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#ffb05e" />
          <stop offset=".45" stopColor="#f56b28" />
          <stop offset="1" stopColor="#bc3b15" />
        </linearGradient>
        <linearGradient id="glass" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#9aa8ad" />
          <stop offset=".55" stopColor="#34434c" />
          <stop offset="1" stopColor="#18252c" />
        </linearGradient>
        <filter id="carShadow" x="-30%" y="-30%" width="160%" height="180%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>
      <ellipse cx="328" cy="213" rx="235" ry="19" fill="#05090b" opacity=".24" filter="url(#carShadow)" />
      <path d="M68 151 L96 124 Q119 112 163 103 L227 57 Q250 40 288 39 L405 42 Q438 44 465 72 L514 105 Q553 114 579 133 L599 159 L588 187 L548 199 L103 199 L72 184 Z" fill="url(#bodyPaint)" stroke="#a63c18" strokeWidth="3" />
      <path d="M183 104 L241 64 Q257 53 287 53 L333 54 L334 105 Z" fill="url(#glass)" stroke="#202b30" strokeWidth="4" />
      <path d="M346 54 L400 57 Q426 60 445 82 L465 105 L346 105 Z" fill="url(#glass)" stroke="#202b30" strokeWidth="4" />
      <path d="M338 54 L339 107" stroke="#172229" strokeWidth="7" />
      <path d="M100 128 L173 112 L208 112 L179 132 L111 145 Z" fill="#ffca86" opacity=".85" />
      <path d="M465 115 L522 129 L553 148 L491 145 Z" fill="#f6a05d" />
      <path d="M82 157 L130 151 L151 162 L130 173 L82 171 Z" fill="#f4f1d9" />
      <path d="M554 154 L585 160 L576 174 L546 173 Z" fill="#ffefc7" />
      <path d="M176 133 L476 133 L511 156 L481 178 L158 178 L126 157 Z" fill="#e95720" opacity=".65" />
      <path d="M200 139 L445 139" stroke="#ffb878" strokeWidth="3" opacity=".7" />
      <path d="M239 185 L250 197 M468 185 L456 197" stroke="#782a16" strokeWidth="4" />
      <path d="M83 180 L110 183 L126 198 L94 198 Z M554 184 L583 178 L590 194 L562 201 Z" fill="#232b2f" />
      <g>
        <circle cx="184" cy="187" r="43" fill="#11191d" />
        <circle cx="184" cy="187" r="28" fill="#667078" stroke="#d7d9d4" strokeWidth="4" />
        <circle cx="184" cy="187" r="12" fill="#252e33" />
        <path d="M184 161 V175 M184 199 V213 M158 187 H172 M196 187 H210 M166 169 L176 179 M192 195 L202 205 M202 169 L192 179 M176 195 L166 205" stroke="#dfe3df" strokeWidth="4" />
      </g>
      <g>
        <circle cx="482" cy="187" r="43" fill="#11191d" />
        <circle cx="482" cy="187" r="28" fill="#667078" stroke="#d7d9d4" strokeWidth="4" />
        <circle cx="482" cy="187" r="12" fill="#252e33" />
        <path d="M482 161 V175 M482 199 V213 M456 187 H470 M494 187 H508 M464 169 L474 179 M490 195 L500 205 M500 169 L490 179 M474 195 L464 205" stroke="#dfe3df" strokeWidth="4" />
      </g>
      <path d="M258 38 L397 40 L407 47 L254 47 Z" fill="#252e33" />
      <path d="M265 31 L387 33 L396 41 L255 40 Z" fill="#f56b28" stroke="#a63c18" strokeWidth="2" />
      <path d="M143 119 L174 114 L154 128 L120 137" fill="none" stroke="#a63c18" strokeWidth="3" />
    </svg>
  )
}
