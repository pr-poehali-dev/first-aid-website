import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, HeartPulse, Bandage, ThermometerSnowflake } from "lucide-react";
import EmergencyCard from "./EmergencyCard";

const EmergencySection = () => {
  const emergencies = [
    {
      id: "cardiac",
      title: "Сердечный приступ / остановка сердца",
      icon: <HeartPulse className="h-6 w-6 text-emergency" />,
      description: "Признаки и первая помощь при остановке сердца и сердечном приступе",
      steps: [
        "Вызовите скорую помощь (103 или 112)",
        "Уложите пострадавшего на спину на твердую поверхность",
        "Проверьте наличие сознания и дыхания",
        "При отсутствии дыхания начните СЛР: 30 компрессий грудной клетки, затем 2 вдоха",
        "Продолжайте СЛР до прибытия скорой помощи или восстановления дыхания"
      ]
    },
    {
      id: "bleeding",
      title: "Сильное кровотечение",
      icon: <Bandage className="h-6 w-6 text-emergency" />,
      description: "Меры по остановке сильного кровотечения и предотвращению шока",
      steps: [
        "Прижмите рану, используя чистую ткань или бинт",
        "Если возможно, поднимите травмированную конечность выше уровня сердца",
        "Наложите давящую повязку",
        "При артериальном кровотечении наложите жгут выше места ранения",
        "Вызовите скорую помощь (103 или 112)"
      ]
    },
    {
      id: "hypothermia",
      title: "Переохлаждение",
      icon: <ThermometerSnowflake className="h-6 w-6 text-calm" />,
      description: "Первая помощь при переохлаждении и обморожении",
      steps: [
        "Переместите пострадавшего в теплое помещение",
        "Снимите мокрую одежду и укутайте в теплые сухие одеяла",
        "Дайте теплое (не горячее) питье без алкоголя и кофеина",
        "Согревайте постепенно, начиная с центра тела",
        "При обморожении конечностей согревайте их теплой водой (37-42°C)"
      ]
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <AlertTriangle className="h-12 w-12 text-emergency mb-4" />
          <h2 className="text-3xl font-bold mb-2 text-center">Экстренные ситуации</h2>
          <p className="text-xl text-center max-w-2xl text-gray-600">
            Быстрое реагирование в критических ситуациях может спасти жизнь. Изучите основные алгоритмы действий.
          </p>
        </div>
        
        <Tabs defaultValue="cardiac" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            {emergencies.map((emergency) => (
              <TabsTrigger key={emergency.id} value={emergency.id} className="flex items-center gap-2">
                {emergency.icon}
                <span className="hidden md:inline">{emergency.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {emergencies.map((emergency) => (
            <TabsContent key={emergency.id} value={emergency.id}>
              <EmergencyCard emergency={emergency} />
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-emergency hover:bg-emergency/90">
            Изучить все экстренные ситуации
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;
