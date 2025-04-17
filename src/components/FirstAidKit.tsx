import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Briefcase } from "lucide-react";

const FirstAidKit = () => {
  const kitItems = [
    {
      category: "Перевязочные материалы",
      items: [
        "Стерильные марлевые салфетки разных размеров",
        "Бинты разной ширины (5 см, 10 см)",
        "Стерильные и нестерильные бинты",
        "Лейкопластырь в рулоне",
        "Бактерицидный пластырь разных размеров",
        "Эластичный бинт"
      ]
    },
    {
      category: "Антисептики и препараты",
      items: [
        "Перекись водорода 3%",
        "Хлоргексидин или другой антисептик",
        "Йод или йодный карандаш",
        "Активированный уголь",
        "Парацетамол или ибупрофен",
        "Противоаллергическое средство"
      ]
    },
    {
      category: "Инструменты и приспособления",
      items: [
        "Медицинские перчатки",
        "Ножницы с тупыми концами",
        "Пинцет",
        "Термометр",
        "Жгут кровоостанавливающий",
        "Шприцы разного объема"
      ]
    },
    {
      category: "Дополнительные предметы",
      items: [
        "Одноразовые маски",
        "Пакет-контейнер для льда",
        "Грелка",
        "Спасательное одеяло (изотермическое)",
        "Блокнот и карандаш",
        "Список телефонов экстренных служб"
      ]
    }
  ];

  return (
    <section className="py-12 bg-white" id="first-aid-kit">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Briefcase className="h-8 w-8 text-emergency" />
          <h2 className="text-3xl font-bold text-center">Аптечка первой помощи</h2>
        </div>
        <p className="text-xl text-center mb-8 text-gray-600">Что должно быть в домашней и автомобильной аптечке</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kitItems.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-emergency mr-2">•</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-bold mb-4 text-center">Важно помнить</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center p-4">
              <p className="text-sm">Регулярно проверяйте сроки годности препаратов и заменяйте просроченные</p>
            </div>
            <Separator orientation="vertical" className="hidden md:block" />
            <div className="flex flex-col items-center text-center p-4">
              <p className="text-sm">Храните аптечку в недоступном для детей месте, но так, чтобы взрослые члены семьи знали, где она находится</p>
            </div>
            <Separator orientation="vertical" className="hidden md:block" />
            <div className="flex flex-col items-center text-center p-4">
              <p className="text-sm">Адаптируйте состав аптечки под индивидуальные потребности вашей семьи (хронические заболевания, аллергии)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstAidKit;
