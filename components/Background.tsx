import Image from "next/image";

/**
 * Vaste foto-achtergrond achter de hele site, met een lichte sluier zodat
 * de donkere tekst leesbaar blijft. Geoptimaliseerd via next/image.
 */
export function Background() {
  return (
    <div className="fixed inset-0 -z-50" aria-hidden="true">
      <Image
        src="/m.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* lichte sluier voor leesbaarheid */}
      <div className="absolute inset-0 bg-night/72" />
      {/* zachte cinematische vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(34,32,28,0.22))]" />
    </div>
  );
}
