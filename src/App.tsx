import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { 
  Slide1, 
  Slide2, 
  Slide3, 
  Slide4, 
  Slide5, 
  Slide6,
  Slide7,
  Slide8,
  Slide9
} from "@/src/components/Slides";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Keyboard } from "lucide-react";

const SLIDES = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = SLIDES[currentSlide];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col dark">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center border-b border-border/40 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-white">AI</div>
          <span className="font-bold tracking-tight uppercase text-sm">Strategy 2026</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            {SLIDES.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 w-8 rounded-full transition-all duration-300 ${
                  i === currentSlide ? "bg-blue-500 w-12" : "bg-muted"
                }`} 
              />
            ))}
          </div>
          <span className="text-xs font-mono text-muted-foreground ml-2">
            {String(currentSlide + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-8 md:p-16 max-w-7xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <div key={currentSlide} className="w-full h-full">
            <CurrentSlideComponent />
          </div>
        </AnimatePresence>
      </main>

      {/* Footer / Controls */}
      <footer className="relative z-10 p-6 flex justify-between items-center border-t border-border/40 backdrop-blur-sm">
        <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium uppercase tracking-widest">
          <Keyboard className="w-4 h-4" />
          <span>Используйте стрелки для навигации</span>
        </div>
        <div className="flex gap-4">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={prevSlide}
            className="rounded-full border-border/50 hover:bg-blue-500/10 hover:text-blue-500 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={nextSlide}
            className="rounded-full border-border/50 hover:bg-blue-500/10 hover:text-blue-500 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </footer>
    </div>
  );
}
