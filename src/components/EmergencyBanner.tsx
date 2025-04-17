import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

const EmergencyBanner = () => {
  return (
    <div className="bg-emergency py-4 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <PhoneCall className="h-6 w-6 mr-2" />
            <span className="text-lg font-bold">Экстренный вызов: </span>
            <span className="text-xl font-bold ml-2">112</span>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" className="bg-white text-emergency hover:bg-white/90">
              Скорая: 103
            </Button>
            <Button variant="outline" className="bg-white text-emergency hover:bg-white/90">
              Пожарные: 101
            </Button>
            <Button variant="outline" className="bg-white text-emergency hover:bg-white/90">
              Полиция: 102
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;
