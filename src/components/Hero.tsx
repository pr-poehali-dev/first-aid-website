import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative py-16 md:py-24 bg-gradient-to-r from-red-50 to-blue-50">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
          Первая помощь спасает жизни
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-700">
          Узнайте, как правильно оказать помощь в экстренных ситуациях, когда каждая минута на счету
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button className="text-lg py-6 px-8 bg-emergency hover:bg-emergency/90">
            Экстренные случаи
          </Button>
          <Button className="text-lg py-6 px-8" variant="outline">
            Обучающие материалы
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
