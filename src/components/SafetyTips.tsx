import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Phone, Clock, Book, UserCheck, Home, Car, Mountain } from "lucide-react";

const SafetyTips = () => {
  const tips = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-safe" />,
      title: "Подготовка к чрезвычайным ситуациям",
      description: "Имейте дома аптечку первой помощи, знайте местонахождение ближайших медицинских учреждений и номера экстренных служб."
    },
    {
      icon: <Phone className="h-6 w-6 text-emergency" />,
      title: "Вызов экстренных служб",
      description: "При вызове скорой помощи четко назовите адрес, опишите ситуацию и следуйте инструкциям диспетчера."
    },
    {
      icon: <Clock className="h-6 w-6 text-calm" />,
      title: "Фактор времени",
      description: "При многих экстренных состояниях счет идет на минуты. Правильные действия в первые 5-10 минут могут спасти жизнь."
    },
    {
      icon: <Book className="h-6 w-6 text-safe" />,
      title: "Образование",
      description: "Пройдите курсы по оказанию первой помощи. Регулярно обновляйте свои знания и навыки в этой области."
    },
    {
      icon: <UserCheck className="h-6 w-6 text-calm" />,
      title: "Собственная безопасность",
      description: "Прежде чем оказывать помощь, убедитесь, что вам ничто не угрожает. Используйте средства защиты при контакте с кровью."
    },
    {
      icon: <Home className="h-6 w-6 text-safe" />,
      title: "Безопасность дома",
      description: "Храните лекарства и химические вещества в недоступном для детей месте. Установите датчики дыма и угарного газа."
    },
    {
      icon: <Car className="h-6 w-6 text-emergency" />,
      title: "Безопасность на дороге",
      description: "Всегда пристегивайтесь ремнями безопасности. Имейте в автомобиле аптечку первой помощи и огнетушитель."
    },
    {
      icon: <Mountain className="h-6 w-6 text-calm" />,
      title: "Безопасность на природе",
      description: "На природе имейте при себе средства связи, аптечку, запас воды и еды. Сообщайте близким о своих планах."
    }
  ];

  return (
    <section className="py-12 bg-gray-50" id="safety-tips">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Советы по безопасности</h2>
        <p className="text-xl text-center mb-8 text-gray-600">Профилактика и подготовка к чрезвычайным ситуациям</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="p-2 rounded-full bg-white">{tip.icon}</div>
                <CardTitle className="text-lg">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyTips;
