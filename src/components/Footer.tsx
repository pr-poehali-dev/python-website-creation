
export const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Python</h3>
            <p className="text-gray-400">Высокоуровневый язык программирования общего назначения с акцентом на читаемость кода.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Ресурсы</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Документация</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">PyPI</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Связаться</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Сообщество</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© 2023 Python.org. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
