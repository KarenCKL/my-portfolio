import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { img } from "@/lib/utils";

const images = [
  { src: "/assets/diploma.png", alt: "Diploma" },
  { src: "/assets/obligation.png", alt: "Obligation" },
  { src: "/assets/lifelong_reminder.png", alt: "Lifelong Reminder" },
  { src: "/assets/calling_of_an_engineer.png", alt: "Calling of an Engineer" },
  { src: "/assets/iron_ceremony.png", alt: "Iron Ring Ceremony" },
  { src: "/assets/iron_ring.png", alt: "Iron Ring" },
  { src: "/assets/honored.png", alt: "Honored" },
  { src: "/assets/engineering_guide.png", alt: "Engineering Guide" },
  { src: "/assets/CDEL_CO-OP.png", alt: "CDEL CO-OP" },
  { src: "/assets/WBD_CO-OP.png", alt: "WBD CO-OP" },
  { src: "/assets/CO-OP_lunch.png", alt: "CO-OP Lunch" },
  { src: "/assets/impact_day.png", alt: "Impact Day" },
  { src: "/assets/painting.png", alt: "Painting" },
  { src: "/assets/dean_fall22.png", alt: "Dean's List Fall 2022" },
  { src: "/assets/dean_winter23.png", alt: "Dean's List Winter 2023" },
  { src: "/assets/dean_summer23.png", alt: "Dean's List Summer 2023" },
  { src: "/assets/dean_fall23.png", alt: "Dean's List Fall 2023" },
  { src: "/assets/dean_winter24.png", alt: "Dean's List Winter 2024" },
  { src: "/assets/dean_summer24.png", alt: "Dean's List Summer 2024" },
  { src: "/assets/dean_fall24.png", alt: "Dean's List Fall 2024" },
  { src: "/assets/dean_winter25.png", alt: "Dean's List Winter 2025" },
  { src: "/assets/dean_summer25.png", alt: "Dean's List Summer 2025" },
  { src: "/assets/dean_fall25.png", alt: "Dean's List Fall 2025" },
  { src: "/assets/FCP_Certificate.png", alt: "FCP Certificate" },
  { src: "/assets/cambridge_certificate.png", alt: "Cambridge Certificate" },

];

export const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryImages = images.map((imgItem) => ({
    ...imgItem,
    src: img(imgItem.src),
  }));

  const cardsPerView = 3;
  const maxIndex = Math.max(0, galleryImages.length - cardsPerView);

  const next = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + cardsPerView, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - cardsPerView, 0));
  }, []);

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [prev, next]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeydown = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") setLightboxIndex((prev) => Math.max(prev - 1, 0));
      if (e.key === "ArrowRight") setLightboxIndex((prev) => Math.min(prev + 1, galleryImages.length - 1));
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [lightboxIndex]);

  const visibleImages = galleryImages.slice(currentIndex, currentIndex + cardsPerView);
  const totalSlides = Math.ceil(galleryImages.length / cardsPerView);

  return (
    <section id="gallery" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Gallery
        </h2>

        <div className="px-8">
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {visibleImages.map((img, i) => (
                <div
                  key={currentIndex + i}
                  className="aspect-[4/3] rounded-lg overflow-hidden bg-card border border-border shadow-xs cursor-pointer"
                  onClick={() => setLightboxIndex(currentIndex + i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {currentIndex > 0 && (
              <button
                onClick={prev}
                className="absolute right-full mr-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card border border-border shadow-md hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 z-10 hidden md:block"
                aria-label="Previous images"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {currentIndex < maxIndex && (
              <button
                onClick={next}
                className="absolute left-full ml-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card border border-border shadow-md hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 z-10 hidden md:block"
                aria-label="Next images"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 mt-6">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * cardsPerView)}
              className={`h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / cardsPerView) === i
                  ? "w-8 bg-primary"
                  : "w-2 bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-4 md:hidden">
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="p-3 rounded-full bg-card border border-border shadow-xs disabled:opacity-30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            aria-label="Previous images"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="p-3 rounded-full bg-card border border-border shadow-xs disabled:opacity-30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            aria-label="Next images"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {lightboxIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => prev - 1); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          <img
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {lightboxIndex < galleryImages.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => prev + 1); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/50 px-4 py-1.5 rounded-full">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
};
