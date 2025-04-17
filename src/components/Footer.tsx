import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-emergency" />
              <span className="text-xl font-bold">ПерваяПомощь.рф</span>
            </div>
            <p className="text-gray-400">
              Наша миссия — сделать знания о первой помощи доступными для каждого
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">О проекте</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Партнеры</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Контакты</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Обратная связь</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li><a href="#first-aid-types" className="text-gray-400 hover:text-white">Виды первой помощи</a></li>
              <li><a href="#safety-tips" className="text-gray-400 hover:text-white">Советы по безопасности</a></li>
              <li><a href="#first-aid-kit" className="text-gray-400 hover:text-white">Аптечка</a></li>
              <li><a href="#emergency-contacts" className="text-gray-400 hover:text-white">Экстренные контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Правовая информация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Условия использования</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Политика конфиденциальности</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Медицинский дисклеймер</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2023 ПерваяПомощь.рф. Все права защищены.</p>
          <p className="mt-2 text-sm">
            Информация на сайте представлена исключительно в образовательных целях и не заменяет профессиональную медицинскую помощь.
            В экстренных случаях всегда вызывайте скорую помощь по номеру 103 или 112.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
