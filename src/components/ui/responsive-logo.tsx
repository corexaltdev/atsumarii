import React from 'react';

interface ResponsiveLogoProps {
  className?: string;
  maxWidth?: string;
  responsive?: boolean;
}

const ResponsiveLogo: React.FC<ResponsiveLogoProps> = ({
  className = '',
  maxWidth = '150px',
  responsive = true,
}) => {
  return (
    <svg
      className={`logo ${className}`}
      role="img"
      aria-label="Atsumarii Logo"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 55 37"
      style={{
        width: responsive ? '100%' : 'auto',
        height: responsive ? 'auto' : 'auto',
        maxWidth: responsive ? maxWidth : undefined,
      }}
    >
      <rect width="55" height="37" fill="url(#pattern0_169_132)" />
      <defs>
        <pattern
          id="pattern0_169_132"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_169_132"
            transform="matrix(0.000808566 0 0 0.00120192 -0.00454545 0)"
          />
        </pattern>
        <image
          id="image0_169_132"
          width="1248"
          height="832"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABOAAAANACAIAAAANYoVHAAADMmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1sbnM6SXB0YzR4bXBFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgZXhpZjpEYXRlVGltZU9yaWdpbmFsPSIyMDI1LTEwLTA3VDAyOjQwOjA2KzAwOjAwIiBJcHRjNHhtcEV4dDpEaWdpdGFsU291cmNlRmlsZVR5cGU9Imh0dHA6Ly9jdi5pcHRjLm9yZy9uZXdzY29kZXMvZGlnaXRhbHNvdXJjZXR5cGUvY29tcG9zaXRlV2l0aFRyYWluZWRBbGdvcml0aG1pY01lZGlhIiBJcHRjNHhtcEV4dDpEaWdpdGFsU291cmNlVHlwZT0iaHR0cDovL2N2LmlwdGMub3JnL25ld3Njb2Rlcy [... omitted end of long line]"
        />
      </defs>
    </svg>
  );
};

export default ResponsiveLogo;
