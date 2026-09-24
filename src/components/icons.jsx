// Small original SVG icon set used across the site.

export function Chevron({ size = 16, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Plus({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Check({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Star({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17.8 5.9 20.4l1.5-6.8L2.2 9l6.9-.7L12 2z" />
    </svg>
  );
}

export function Calendar({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect x="5" y="8" width="30" height="27" rx="6" fill="#fff" />
      <rect x="5" y="8" width="30" height="8" rx="6" fill="#f43f5e" />
      <rect x="11" y="4" width="3.4" height="8" rx="1.7" fill="#09090b" />
      <rect x="25.6" y="4" width="3.4" height="8" rx="1.7" fill="#09090b" />
      <rect x="10" y="20" width="6" height="5" rx="1.4" fill="#e4e4e7" />
      <rect x="18" y="20" width="6" height="5" rx="1.4" fill="#f43f5e" />
      <rect x="26" y="20" width="4" height="5" rx="1.4" fill="#e4e4e7" />
      <rect x="10" y="28" width="6" height="5" rx="1.4" fill="#e4e4e7" />
      <rect x="18" y="28" width="6" height="5" rx="1.4" fill="#e4e4e7" />
    </svg>
  );
}

export function Globe({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function ArrowLeft({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Close({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ExternalLink({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M14 4h6v6M20 4l-8 8M18 13v5a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// WhatsApp-style glyph (phone in a speech bubble) for contact buttons.
export function WhatsApp({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="#25D366" />
      <path
        d="M16 7.2c-4.86 0-8.8 3.94-8.8 8.8 0 1.55.41 3.06 1.18 4.39L7.2 24.8l4.53-1.18a8.77 8.77 0 004.27 1.1c4.86 0 8.8-3.94 8.8-8.8s-3.94-8.72-8.8-8.72z"
        fill="#fff"
      />
      <path
        d="M20.7 18.2c-.26-.13-1.53-.75-1.76-.84-.24-.09-.41-.13-.58.13-.17.26-.67.84-.82 1.01-.15.17-.3.19-.56.06-.26-.13-1.09-.4-2.08-1.28-.77-.69-1.29-1.53-1.44-1.79-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.8-1.92-.21-.5-.42-.43-.58-.44l-.5-.01c-.17 0-.45.06-.68.32-.24.26-.9.88-.9 2.15 0 1.27.92 2.49 1.05 2.66.13.17 1.81 2.77 4.39 3.88.61.26 1.09.42 1.46.54.61.2 1.17.17 1.61.1.49-.07 1.53-.62 1.74-1.23.22-.6.22-1.12.15-1.23-.06-.11-.23-.17-.49-.3z"
        fill="#25D366"
      />
    </svg>
  );
}

// Simple calendar/phone-style camera glyph for the primary call-to-action.
export function MeetIcon({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48">
      <rect x="4" y="14" width="26" height="20" rx="4" fill="#fff" />
      <path d="M30 21l10-6v18l-10-6z" fill="#00ac47" />
      <path d="M4 18v12a4 4 0 004 4h18V14H8a4 4 0 00-4 4z" fill="#2684fc" />
      <path d="M30 21v6l10 6V15z" fill="#00ac47" />
      <path d="M30 27l-8-6v13h4a4 4 0 004-4v-3z" fill="#ffba00" />
      <path d="M30 21l-8 6-4-3 4-3h8z" fill="#ea4335" />
      <path d="M4 18a4 4 0 014-4h4v20H8a4 4 0 01-4-4V18z" fill="#0066da" />
    </svg>
  );
}

const socialPaths = {
  x: "M4 4l7 8.5L4.5 20H7l5-5.6L16.5 20H20l-7.3-8.9L19.5 4H17l-4.6 5.2L8.4 4H4z",
  ig: null,
  th: null,
  in: "M6.94 8.5H4.5V19h2.44V8.5zM5.72 4a1.42 1.42 0 100 2.83 1.42 1.42 0 000-2.83zM19.5 19h-2.44v-5.6c0-1.5-.54-2.3-1.7-2.3-.9 0-1.4.6-1.64 1.2-.08.2-.1.5-.1.8V19H11.2s.03-8.5 0-9.4h2.44v1.33c.32-.5.9-1.2 2.2-1.2 1.6 0 2.86 1.05 2.86 3.32V19z",
  be: null,
};

export function Social({ k, size = 20 }) {
  if (k === "ig") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
      </svg>
    );
  }
  if (k === "th") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21c-4.5 0-7.5-3-7.5-9S7.5 3 12 3c3.3 0 5.6 1.6 6.6 4M9 13c.4-1.7 1.7-2.6 3.4-2.6 2 0 3.1 1.2 3.1 3.2 0 2.4-1.8 3.4-3.6 3.4-1.4 0-2.4-.7-2.4-1.9 0-1 .8-1.7 2-1.7 1.7 0 2.8 1.2 2.8 3"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (k === "be") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M3 6.5h4.5c1.7 0 2.8.8 2.8 2.3 0 1-.6 1.7-1.5 2 1.1.2 1.9 1 1.9 2.3 0 1.7-1.3 2.4-3.1 2.4H3v-9zm2 3.6h2c.7 0 1.1-.3 1.1-.9 0-.6-.4-.9-1.1-.9H5v1.8zm0 3.6h2.2c.8 0 1.2-.3 1.2-1 0-.6-.4-1-1.2-1H5v2zM14 8.5h4.5M14.2 13c0-1.9 1.3-3.3 3.2-3.3 1.9 0 3.1 1.3 3.1 3.5v.5h-4.6c.1 1 .8 1.6 1.8 1.6.7 0 1.2-.3 1.5-.8l1.2.7c-.5.9-1.5 1.5-2.8 1.5-1.9 0-3.4-1.3-3.4-3.2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d={socialPaths[k]} />
    </svg>
  );
}
