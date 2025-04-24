
import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#403E43] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">USBfleshdrive</h3>
            <p className="text-gray-400">Производитель высокоскоростных USB-накопителей с передовыми технологиями защиты данных.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О компании</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Гарантия</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Условия использования</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Связаться с нами</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: info@usbfleshdrive.ru</li>
              <li className="text-gray-400">Телефон: 8-800-555-35-35</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
          <p>© 2023 USBfleshdrive. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
