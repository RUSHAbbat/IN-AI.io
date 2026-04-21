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
  Slide9,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14
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
  Slide9,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14
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

    const handleMouseDown = (e: MouseEvent) => {
      // 0 is left click, 2 is right click
      if (e.button === 0) {
        // Only trigger if clicking on background elements, not interactive ones
        const target = e.target as HTMLElement;
        if (!target.closest('button') && !target.closest('a')) {
          nextSlide();
        }
      } else if (e.button === 2) {
        prevSlide();
      }
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("contextmenu", handleContextMenu);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = SLIDES[currentSlide];

  return (
    <div className="h-screen bg-background text-foreground flex flex-col dark overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      {/* Header */}
      <header className="relative z-20 p-6 flex justify-between items-center border-b border-border/40 backdrop-blur-md bg-background/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">AI</div>
          <span className="font-bold tracking-tight uppercase text-sm">Strategy 2026</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 overflow-hidden p-6 md:p-8 lg:p-12 flex items-center justify-center">
        <div className="max-w-7xl w-full h-full flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSlide} 
              className="w-full"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <CurrentSlideComponent />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer / Controls */}
      <footer className="relative z-20 p-6 flex justify-between items-center border-t border-border/40 backdrop-blur-md bg-background/50">
        <div className="flex items-center gap-4 text-[10px] md:text-xs text-muted-foreground font-medium uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Keyboard className="w-4 h-4 text-blue-500" />
            <span>Стрелки / Пробел</span>
          </div>
          <div className="w-px h-4 bg-border/50" />
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <span className="px-1.5 py-0.5 rounded border border-border/50 bg-background">ЛКМ</span>
              <span className="px-1.5 py-0.5 rounded border border-border/50 bg-background text-blue-500">Вперед</span>
            </div>
            <div className="flex gap-1">
              <span className="px-1.5 py-0.5 rounded border border-border/50 bg-background">ПКМ</span>
              <span className="px-1.5 py-0.5 rounded border border-border/50 bg-background text-blue-500">Назад</span>
            </div>
          </div>
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
