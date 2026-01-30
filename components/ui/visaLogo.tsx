export function VisaLogo({ className = "h-5" }) {
  return (
    <svg
      viewBox="0 0 96 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Visa"
    >
      <path
        d="M2 2h8l6 20 6-20h8l-9 28h-10L2 2z"
        fill="#496AB6"
      />
      <path
        d="M34 2h7v28h-7z"
        fill="#496AB6"
      />
      <path
        d="M47 23c2 1 5 2 8 2 3 0 4-1 4-2 0-4-14-2-14-11 0-5 4-9 12-9 3 0 6 1 8 2l-2 6c-2-1-4-2-6-2-3 0-4 1-4 2 0 4 14 2 14 10 0 6-5 10-13 10-4 0-8-1-10-2l3-6z"
        fill="#496AB6"
      />
      <path
        d="M79 2h7l10 28h-8l-2-6h-9l-2 6h-8L79 2zm1 16h5l-2-7-3 7z"
        fill="#496AB6"
      />
    </svg>
  );
}