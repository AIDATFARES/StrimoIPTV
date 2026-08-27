import Image from "next/image";

export default function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Image
      alt="Zyminex IPTV"
      className={`block shrink-0 object-contain object-left drop-shadow-[0_2px_10px_rgba(54,169,255,0.4)] transition-all ${compact ? "h-14 w-40" : "h-20 w-56"}`}
      src="/logo-new.png"
      width={320}
      height={112}
      sizes="(max-width: 768px) 224px, 320px"
      priority
    />
  );
}
