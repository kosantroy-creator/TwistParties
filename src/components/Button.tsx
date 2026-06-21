import type { ReactNode, Ref } from "react";
import { Link } from "react-router-dom";
import { useButtonFx } from "../lib/buttonFx";

type Variant = "orange" | "blue" | "ghost" | "outline" | "whatsapp";
type Size = "md" | "sm" | "lg";

const base =
  "btn-shine relative overflow-hidden inline-flex items-center justify-center gap-2 font-body font-semibold rounded-full cursor-pointer will-change-transform";

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-[1.02rem]",
  lg: "px-8 py-4 text-lg",
};

const variants: Record<Variant, string> = {
  orange: "bg-twist text-white shadow-[0_10px_22px_-8px_rgba(255,122,31,0.6)]",
  blue: "bg-deepsea text-white shadow-[0_10px_22px_-8px_rgba(11,91,168,0.5)]",
  ghost: "bg-white/15 text-white border-2 border-white/60 backdrop-blur-sm",
  outline: "bg-white text-deepsea border-2 border-hairline hover:border-sky",
  whatsapp: "bg-[#25D366] text-white shadow-[0_10px_22px_-8px_rgba(37,211,102,0.6)]",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: string;
};

type Props = CommonProps &
  (
    | { to: string; href?: never; onClick?: never }
    | { href: string; to?: never; onClick?: never }
    | { onClick: () => void; to?: never; href?: never }
    | { to?: never; href?: never; onClick?: never }
  );

export default function Button({
  children,
  variant = "orange",
  size = "md",
  className = "",
  icon,
  ...rest
}: Props) {
  const fx = useButtonFx();
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const inner = (
    <span className="relative z-10 inline-flex items-center gap-2">
      {icon && <i className={`ti ${icon} text-[1.15em]`} aria-hidden="true" />}
      {children}
    </span>
  );

  if ("to" in rest && rest.to) {
    return (
      <Link ref={fx as unknown as Ref<HTMLAnchorElement>} to={rest.to} className={cls}>
        {inner}
      </Link>
    );
  }
  if ("href" in rest && rest.href) {
    return (
      <a ref={fx as unknown as Ref<HTMLAnchorElement>} href={rest.href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  if ("onClick" in rest && rest.onClick) {
    return (
      <button ref={fx as unknown as Ref<HTMLButtonElement>} type="button" onClick={rest.onClick} className={cls}>
        {inner}
      </button>
    );
  }
  return (
    <span ref={fx as unknown as Ref<HTMLSpanElement>} className={cls}>
      {inner}
    </span>
  );
}
