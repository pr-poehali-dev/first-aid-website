import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface EmergencyCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  urgency: "high" | "medium" | "low";
}

const EmergencyCard = ({ title, description, icon, urgency }: EmergencyCardProps) => {
  const urgencyColor = {
    high: "bg-emergency/10 border-emergency/20",
    medium: "bg-calm/10 border-calm/20",
    low: "bg-safe/10 border-safe/20",
  };

  return (
    <Card className={`${urgencyColor[urgency]} transition-all hover:shadow-md`}>
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="p-2 rounded-full bg-white">{icon}</div>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="text-foreground/70">
            {urgency === "high" 
              ? "Требуется немедленная помощь" 
              : urgency === "medium" 
                ? "Важно оказать помощь быстро" 
                : "Несрочная ситуация"}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4">{description}</p>
        <Button className="w-full" variant={urgency === "high" ? "default" : "outline"}>
          Инструкция
        </Button>
      </CardContent>
    </Card>
  );
};

export default EmergencyCard;
