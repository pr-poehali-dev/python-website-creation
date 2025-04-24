
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-white/70 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#9b87f5]">Python</span>
          <span className="text-sm bg-[#FEF7CD] px-2 py-1 rounded-full text-[#403E43]">
            Веб-центр
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-gray-700 hover:text-[#9b87f5] transition-colors">Документация</a>
          <a href="#" className="text-gray-700 hover:text-[#9b87f5] transition-colors">Учебники</a>
          <a href="#" className="text-gray-700 hover:text-[#9b87f5] transition-colors">Сообщество</a>
        </nav>
        
        <div>
          <Button variant="ghost" className="text-[#9b87f5]">Войти</Button>
        </div>
      </div>
    </header>
  );
};
