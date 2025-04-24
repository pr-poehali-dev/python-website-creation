
import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white/70 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#0EA5E9]">USBfleshdrive</span>
          <span className="text-sm bg-[#E5DEFF] px-2 py-1 rounded-full text-[#6E59A5] hidden sm:inline-block">
            Премиум накопители
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-gray-700 hover:text-[#0EA5E9] transition-colors">Каталог</a>
          <a href="#" className="text-gray-700 hover:text-[#0EA5E9] transition-colors">О нас</a>
          <a href="#" className="text-gray-700 hover:text-[#0EA5E9] transition-colors">Доставка</a>
          <a href="#" className="text-gray-700 hover:text-[#0EA5E9] transition-colors">Контакты</a>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-gray-700">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-700">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-700 md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="hidden md:inline-flex border-[#0EA5E9] text-[#0EA5E9]">
            Войти
          </Button>
        </div>
      </div>
    </header>
  );
};
