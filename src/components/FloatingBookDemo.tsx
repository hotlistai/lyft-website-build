import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";

export const FloatingBookDemo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 600px (past hero section)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Button
        size="lg"
        className="bg-primary text-white font-semibold py-4 px-8 rounded-full shadow-2xl shadow-primary/30 hover:bg-primary-hover hover:shadow-primary/40 hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
        onClick={() => window.open("https://calendly.com/hotlistai/lyftemail", "_blank")}
      >
        <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
        <span>Book Demo</span>
      </Button>
    </div>
  );
};
