import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border px-4 py-1 text-sm mb-6">
              <Heart className="h-4 w-4 text-emergency mr-2" />
              <span>Знания, которые спасают жизни</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Первая помощь <span className="text-emergency">спасает жизни</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Узнайте, как правильно оказывать первую помощь в различных ситуациях.
              Ваши знания и навыки могут спасти чью-то жизнь в критический момент.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emergency hover:bg-emergency/90">
                Изучить виды помощи
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Скачать памятку
              </Button>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden h-[400px]">
            <img
              src="/placeholder.svg"
              alt="Первая помощь"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-white text-center p-6">
                <h2 className="text-2xl font-bold mb-2">Будь готов помочь!</h2>
                <p>Навыки первой помощи - это ответственность каждого</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
          <div className="p-6 rounded-lg border bg-white shadow-sm">
            <div className="w-12 h-12 rounded-full bg-emergency/10 flex items-center justify-center mb-4">
              <span className="text-2xl">🚑</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Быстрое реагирование</h3>
            <p className="text-gray-600">Первые минуты после происшествия критически важны для спасения жизни.</p>
          </div>
          
          <div className="p-6 rounded-lg border bg-white shadow-sm">
            <div className="w-12 h-12 rounded-full bg-safe/10 flex items-center justify-center mb-4">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Правильные знания</h3>
            <p className="text-gray-600">Актуальные рекомендации по оказанию первой помощи от профессионалов.</p>
          </div>
          
          <div className="p-6 rounded-lg border bg-white shadow-sm">
            <div className="w-12 h-12 rounded-full bg-calm/10 flex items-center justify-center mb-4">
              <span className="text-2xl">👐</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Уверенные действия</h3>
            <p className="text-gray-600">Пошаговые инструкции помогут действовать спокойно и эффективно.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
