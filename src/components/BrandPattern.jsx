import React from 'react';

// Exact official Scaleezy Geometric "S" Monogram vector path from brand assets
const SCALEEZY_PATH = "M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z";

/**
 * Scaleezy Monogram Brand Pattern
 * Authentic luxury haute-couture diamond repeat with the official Scaleezy "S" emblem
 * and delicate bespoke tailoring cross-stitch accents.
 */
export function BrandPatternMonogram({ 
  className = "", 
  opacity = 0.04, 
  color = "currentColor", 
  size = 80,
  angle = 0
}) {
  const patternId = React.useId();
  const s = size;
  const half = s / 2;
  const scale = (s * 0.32) / 48; // scale glyph to ~32% of pattern cell
  const glyphW = 48 * scale;
  const glyphH = 46 * scale;
  const offsetX = glyphW / 2;
  const offsetY = glyphH / 2;

  return (
    <svg 
      className={`absolute inset-0 w-full h-full pointer-events-none select-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <pattern 
          id={patternId} 
          width={s} 
          height={s} 
          patternUnits="userSpaceOnUse"
          patternTransform={angle !== 0 ? `rotate(${angle})` : undefined}
        >
          {/* Center Scaleezy "S" Monogram */}
          <g transform={`translate(${half - offsetX}, ${half - offsetY}) scale(${scale})`}>
            <path d={SCALEEZY_PATH} fill={color} />
          </g>

          {/* 4 Corner Scaleezy "S" Monograms (Seamless Half-drop Repeat) */}
          <g transform={`translate(${-offsetX}, ${-offsetY}) scale(${scale})`}>
            <path d={SCALEEZY_PATH} fill={color} />
          </g>
          <g transform={`translate(${s - offsetX}, ${-offsetY}) scale(${scale})`}>
            <path d={SCALEEZY_PATH} fill={color} />
          </g>
          <g transform={`translate(${-offsetX}, ${s - offsetY}) scale(${scale})`}>
            <path d={SCALEEZY_PATH} fill={color} />
          </g>
          <g transform={`translate(${s - offsetX}, ${s - offsetY}) scale(${scale})`}>
            <path d={SCALEEZY_PATH} fill={color} />
          </g>

          {/* Tailoring Starburst / Cross-stitch Intersections */}
          <g fill={color} opacity="0.6">
            {/* North midpoint star */}
            <path d={`M${half} ${-2.5} L${half + 2.5} 0 L${half} 2.5 L${half - 2.5} 0 Z`} />
            <path d={`M${half} ${s - 2.5} L${half + 2.5} ${s} L${half} ${s + 2.5} L${half - 2.5} ${s} Z`} />
            {/* West/East midpoint stars */}
            <path d={`M${-2.5} ${half} L0 ${half - 2.5} L2.5 ${half} L0 ${half + 2.5} Z`} />
            <path d={`M${s - 2.5} ${half} L${s} ${half - 2.5} L${s + 2.5} ${half} L${s} ${half + 2.5} Z`} />
            {/* Micro stitch points */}
            <circle cx={half / 2} cy={half / 2} r="0.75" />
            <circle cx={half + half / 2} cy={half / 2} r="0.75" />
            <circle cx={half / 2} cy={half + half / 2} r="0.75" />
            <circle cx={half + half / 2} cy={half + half / 2} r="0.75" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}

/**
 * Scaleezy Textile Weave Brand Pattern
 * Represents the warp, weft, and precise measuring grid of garment manufacturing.
 */
export function BrandPatternWeave({ 
  className = "", 
  opacity = 0.04, 
  color = "currentColor", 
  size = 48 
}) {
  const patternId = React.useId();
  const half = size / 2;

  return (
    <svg 
      className={`absolute inset-0 w-full h-full pointer-events-none select-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <pattern 
          id={patternId} 
          width={size} 
          height={size} 
          patternUnits="userSpaceOnUse"
        >
          {/* Micro dashed basting stitches */}
          <path 
            d={`M0 ${half} L${size} ${half} M${half} 0 L${half} ${size}`} 
            stroke={color} 
            strokeWidth="0.75" 
            strokeDasharray="2 4" 
          />
          {/* Fine diagonal weave line */}
          <line x1="0" y1="0" x2={size} y2={size} stroke={color} strokeWidth="0.5" opacity="0.35" />
          
          {/* Scaleezy Brand Diamond Node at Center */}
          <path 
            d={`M${half} ${half - 3} L${half + 3} ${half} L${half} ${half + 3} L${half - 3} ${half} Z`} 
            fill={color} 
          />
          {/* Corner anchor dots */}
          <circle cx="0" cy="0" r="1" fill={color} opacity="0.5" />
          <circle cx={size} cy="0" r="1" fill={color} opacity="0.5" />
          <circle cx="0" cy={size} r="1" fill={color} opacity="0.5" />
          <circle cx={size} cy={size} r="1" fill={color} opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}

/**
 * Scaleezy Tailoring Pinstripe Pattern
 * Elegant diagonal fine pinstripes with repeating micro Scaleezy S-glyphs.
 */
export function BrandPatternPinstripe({
  className = "",
  opacity = 0.035,
  color = "currentColor",
  size = 60
}) {
  const patternId = React.useId();
  const scale = (size * 0.2) / 48;

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none select-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={patternId}
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          {/* Continuous pinstripe */}
          <line x1="0" y1={size / 2} x2={size} y2={size / 2} stroke={color} strokeWidth="1" strokeDasharray="6 4 2 4" />
          {/* Micro Scaleezy glyph */}
          <g transform={`translate(${size / 2 - (48 * scale) / 2}, ${size / 2 - (46 * scale) / 2}) scale(${scale})`}>
            <path d={SCALEEZY_PATH} fill={color} />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}

/**
 * Giant Scaleezy Monogram Watermark
 * Large architectural brand mark that sits gracefully in the background with soft ambient vignette.
 */
export function BrandWatermark({ 
  className = "", 
  opacity = 0.03, 
  color = "currentColor", 
  size = 600,
  blur = 0
}) {
  return (
    <div 
      className={`absolute pointer-events-none select-none flex items-center justify-center ${className}`} 
      style={{ 
        width: size, 
        height: size, 
        opacity,
        filter: blur ? `blur(${blur}px)` : undefined 
      }}
      aria-hidden="true"
    >
      <svg 
        viewBox="0 0 48 46" 
        className="w-full h-full"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          fill={color} 
          d={SCALEEZY_PATH} 
        />
      </svg>
    </div>
  );
}

/**
 * Scaleezy Atelier Sewing & Tailoring Pattern
 * Hand-sketched haute-couture apparel atelier motif:
 * shears, tape measure, thread spools, buttons, pins, French curve rulers, and dashed basting stitches.
 */
export function BrandPatternAtelier({ 
  className = "", 
  opacity = 0.12, 
  size = 360,
  mode = "light",
  vignette = false
}) {
  const bgSize = typeof size === 'number' ? `${size}px ${size}px` : size;
  const isDark = mode === 'dark';

  return (
    <div 
      className={`absolute inset-0 w-full h-full pointer-events-none select-none z-0 ${
        isDark ? 'invert mix-blend-screen' : 'mix-blend-multiply'
      } ${className}`}
      style={{
        opacity,
        backgroundImage: "url('/assets/tailoring-pattern.png')",
        backgroundRepeat: 'repeat',
        backgroundSize: bgSize,
        ...(vignette ? {
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)'
        } : {})
      }}
      aria-hidden="true"
    />
  );
}
