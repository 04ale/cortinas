import { MessageCircle } from "lucide-react";
import heroBanner from "@/assets/heroBanner.webp";

const heroBtnClass =
  "px-8 py-3.5 text-base md:px-9 md:py-4 [@media(max-height:720px)]:px-6 [@media(max-height:720px)]:py-3 [@media(max-height:720px)]:text-sm";

const HeroBanner = () => {
  return (
    <section
      id="home"
      className="relative flex h-dvh max-h-dvh w-full flex-col overflow-x-hidden bg-background"
    >
      {/* Background with Elegant Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        {/* Liquid Glass Overlay */}
        <div className="absolute inset-0 bg-background/40 lg:bg-linear-to-r lg:from-background lg:via-background/60 lg:to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto flex min-h-0 flex-1 flex-col justify-center px-6 pt-20 pb-8 sm:pt-24 md:px-12 md:pb-10 lg:pt-28">
        <div className="flex max-w-3xl flex-col gap-5 md:max-w-4xl md:gap-6 lg:gap-7 [@media(max-height:720px)]:gap-3.5">
          <div className="inline-flex self-start max-w-full shrink-0 items-center gap-2.5 rounded-full border border-cta/20 bg-cta/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-cta uppercase backdrop-blur-md">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cta opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cta"></span>
            </span>
            <span className="truncate sm:whitespace-normal">Excelência em Design de Interiores</span>
          </div>

          <h1 className="shrink font-heading text-[clamp(2.625rem,5vw+3vh,5.5rem)] font-bold leading-[1] text-foreground lg:text-[clamp(3rem,5.5vw+3vh,6.25rem)] xl:text-[clamp(3.25rem,6vw+3vh,7rem)] [@media(min-height:900px)]:text-[clamp(3.5rem,6.5vw+3vh,8rem)]">
            A Arte do <br />
            <span className="text-cta italic font-light">Refinamento</span>
          </h1>

          <p className="max-w-lg shrink font-sans text-[clamp(1rem,1.5vh+0.55rem,1.25rem)] leading-relaxed text-muted-foreground md:max-w-xl lg:text-[clamp(1.0625rem,1.5vh+0.65rem,1.375rem)]">
            Elegância sob medida para os ambientes mais exclusivos.
            Descubra coleções que unem tecnologia e sofisticação artesanal.
          </p>

          <div className="flex shrink-0 flex-col gap-4 sm:flex-row sm:gap-5">
            <a
              href="https://wa.me/5511932289158?text=Olá! Gostaria de agendar uma consultoria para cortinas na Casa Cort."
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-premium-cta group ${heroBtnClass}`}
            >
              <MessageCircle className="h-6 w-6 transition-transform group-hover:rotate-12" />
              Solicitar Orçamento
            </a>

            <a
              href="#categorias"
              className={`btn-premium border border-foreground/10 bg-white/20 backdrop-blur-xl text-foreground hover:bg-white/40 cursor-pointer ${heroBtnClass}`}
            >
              Explorar Coleções
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-8 pt-2 md:gap-10 md:pt-3">
            <div className="flex flex-col gap-1">
              <span className="font-heading text-3xl font-bold text-foreground md:text-4xl">500+</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/80 md:text-xs">Ambientes de Luxo</span>
            </div>
            <div className="h-12 w-px bg-foreground/10 md:h-14" />
            <div className="flex flex-col gap-1">
              <span className="font-heading text-3xl font-bold text-foreground md:text-4xl">4.9★</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/80 md:text-xs">Satisfação Premium</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — telas largas e altas */}
      <div className="absolute bottom-8 right-8 z-10 hidden flex-col items-center gap-3 opacity-40 xl:right-12 xl:flex [@media(max-height:899px)]:!hidden">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground">
          Descubra
        </span>
        <div className="h-16 w-px bg-linear-to-b from-foreground to-transparent" />
      </div>
    </section>
  );
};

export default HeroBanner;