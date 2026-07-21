import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { img } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const imageSrcs = [
  "/assets/diploma.png",
  "/assets/achievement.png",
  "/assets/mother.png",
  "/assets/Family.png",
  "/assets/uOttawa.png",
  "/assets/Graduation_Ceremony.png",
  "/assets/Graduation_Photo.png",
  "/assets/graduation_gifts.png",
  "/assets/a_day_to_cherish.png",
  "/assets/obligation.png",
  "/assets/lifelong_reminder.png",
  "/assets/calling_of_an_engineer.png",
  "/assets/iron_ceremony.png",
  "/assets/iron_ring.png",
  "/assets/honored.png",
  "/assets/engineering_guide.png",
  "/assets/CDEL_CO-OP.png",
  "/assets/WBD_CO-OP.png",
  "/assets/CO-OP_lunch.png",
  "/assets/impact_day.png",
  "/assets/painting.png",
  "/assets/dean_fall22.png",
  "/assets/dean_winter23.png",
  "/assets/dean_summer23.png",
  "/assets/dean_fall23.png",
  "/assets/dean_winter24.png",
  "/assets/dean_summer24.png",
  "/assets/dean_fall24.png",
  "/assets/dean_winter25.png",
  "/assets/dean_summer25.png",
  "/assets/dean_fall25.png",
  "/assets/FCP_Certificate.png",
  "/assets/cambridge_certificate.png",
];

export const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const { t } = useLanguage();

  const galleryImages = imageSrcs.map((src, i) => ({
    src: img(src),
    alt: t.gallery.images[i].alt,
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
  }, [lightboxIndex, galleryImages.length]);

  const visibleImages = galleryImages.slice(currentIndex, currentIndex + cardsPerView);
  const totalSlides = Math.ceil(galleryImages.length / cardsPerView);

  return (
    <section id="gallery" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t.gallery.title}
        </h2>

        <div className="px-8">
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {visibleImages.map((imgItem, i) => (
                <div
                  key={currentIndex + i}
                  className="aspect-[4/3] rounded-lg overflow-hidden bg-card border border-border shadow-xs cursor-pointer"
                  onClick={() => setLightboxIndex(currentIndex + i)}
                >
                  <img
                    src={imgItem.src}
                    alt={imgItem.alt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {currentIndex > 0 && (
              <button
                onClick={prev}
                className="absolute right-full mr-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card border border-border shadow-md hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 z-10 hidden md:block"
                aria-label={t.gallery.prevLabel}
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {currentIndex < maxIndex && (
              <button
                onClick={next}
                className="absolute left-full ml-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card border border-border shadow-md hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 z-10 hidden md:block"
                aria-label={t.gallery.nextLabel}
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
            aria-label={t.gallery.prevLabel}
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="p-3 rounded-full bg-card border border-border shadow-xs disabled:opacity-30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            aria-label={t.gallery.nextLabel}
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
            aria-label={t.gallery.closeLabel}
          >
            <X size={28} />
          </button>

          {lightboxIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => prev - 1); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
              aria-label={t.gallery.prevImage}
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
              aria-label={t.gallery.nextImage}
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
