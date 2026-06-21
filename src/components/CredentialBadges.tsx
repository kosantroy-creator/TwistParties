import { credentials } from "../lib/site";

export default function CredentialBadges({ className = "" }: { className?: string }) {
  const shown = credentials.filter((c) => c.show);
  return (
    <div className={`flex flex-wrap items-center justify-center gap-2.5 ${className}`}>
      {shown.map((c) => (
        <span
          key={c.text}
          className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-4 py-2 text-sm font-semibold text-deepsea shadow-[var(--shadow-soft)]"
        >
          <i className={`ti ${c.icon} text-base text-mint`} aria-hidden="true" />
          {c.text}
        </span>
      ))}
    </div>
  );
}
