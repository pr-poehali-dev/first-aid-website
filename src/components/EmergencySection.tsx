import { Heart, Activity, Thermometer, HeartPulse } from "lucide-react";
import EmergencyCard from "./EmergencyCard";

const EmergencySection = () => {
  const emergencies = [
    {
      title: "Остановка сердца",
      description: "Сердечно-легочная реанимация (СЛР) и использование дефибриллятора",
      icon: <Heart className="h-6 w-6 text-emergency" />,
      urgency: "high" as const,
    },
    {
      title: "Инсульт",
      description: "Распознавание симптомов и оказание первой помощи",
      icon: <Activity className="h-6 w-6 text-calm" />,
      urgency: "high" as const,
    },
    {
      title: "Ожоги",
      description: "Первая помощь при термических и химических ожогах",
      icon: <Thermometer className="h-6 w-6 text-emergency" />,
      urgency: "medium" as const,
    },
    {
      title: "Кровотечения",
      description: "Остановка кровотечений и обработка ран",
      icon: <HeartPulse className="h-6 w-6 text-emergency" />,
      urgency: "high" as const,
    },
    {
      title: "Отравления",
      description: "Первая помощь при пищевых и химических отравлениях",
      icon: <Thermometer className="h-6 w-6 text-calm" />,
      urgency: "medium" as const,
    },
    {
      title: "Переломы",
      description: "Иммобилизация и первая помощь при переломах",
      icon: <Activity className="h-6 w-6 text-safe" />,
      urgency: "medium" as const,
    },
  ];

  return (
    <section className="py-12 bg-gray-50" id="emergency-cases">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Экстренные случаи</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emergencies.map((emergency, index) => (
            <EmergencyCard
              key={index}
              title={emergency.title}
              description={emergency.description}
              icon={emergency.icon}
              urgency={emergency.urgency}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;
