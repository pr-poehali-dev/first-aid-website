import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-white shadow-sm">
      <Link to="/" className="flex items-center space-x-2">
        <Heart className="h-6 w-6 text-emergency" />
        <span className="text-xl font-bold">ПерваяПомощь.рф</span>
      </Link>
      
      <div className="hidden md:flex space-x-4">
        <Button variant="ghost" asChild>
          <Link to="/">Главная</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link to="#emergency-contacts">Экстренные контакты</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link to="#about">О проекте</Link>
        </Button>
      </div>

      <Button className="bg-emergency hover:bg-emergency/90">
        <Heart className="mr-2 h-4 w-4" /> Экстренный вызов
      </Button>
    </nav>
  );
};

export default Navbar;
