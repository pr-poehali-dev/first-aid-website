import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Heart className="h-6 w-6 text-emergency" />
            <span className="text-xl font-bold">ПерваяПомощь.рф</span>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="hover:text-emergency transition-colors">
              О проекте
            </a>
            <a href="#" className="hover:text-emergency transition-colors">
              Контакты
            </a>
            <a href="#" className="hover:text-emergency transition-colors">
              Правовая информация
            </a>
          </div>
        </div>
        
        <div className="text-center text-gray-400 text-sm">
          <p className="mb-2">
            Информация на сайте носит справочный характер и не заменяет консультации врача.
          </p>
          <p>© 2023 ПерваяПомощь.рф. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
