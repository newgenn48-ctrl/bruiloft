import { LanguageProvider, LanguageToggle } from "@/components/LanguageProvider";
import { AudioProvider, AudioToggle } from "@/components/AudioProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Background } from "@/components/Background";
import { ScrollProgress } from "@/components/ScrollProgress";
import { EnvelopeGate } from "@/components/EnvelopeGate";
import { Hero } from "@/components/Hero";
import { Ayah } from "@/components/Ayah";
import { Countdown } from "@/components/Countdown";
import { Location } from "@/components/Location";
import { Notes } from "@/components/Notes";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <Background />
        <AudioProvider>
          <LanguageToggle />
          <AudioToggle />
          <ScrollProgress />

          {/* gouden luxe kaderlijn met lopend lichtje */}
          <div
            className="glow-frame pointer-events-none fixed inset-2.5 z-40 rounded-sm border border-gold/25"
            aria-hidden="true"
          />

          {/* filmkorrel over de hele site (cinematisch) */}
          <div className="grain pointer-events-none fixed inset-0 z-[55]" aria-hidden="true" />

          <EnvelopeGate>
            <main>
              <Hero />
              <Ayah />
              <Countdown />
              <Location />
              <Notes />
            </main>
            <Footer />
          </EnvelopeGate>
        </AudioProvider>
      </SmoothScroll>
    </LanguageProvider>
  );
}
