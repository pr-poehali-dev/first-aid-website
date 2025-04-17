import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

interface EmergencyStep {
  title?: string;
  description?: string;
}

interface Emergency {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  steps: string[] | EmergencyStep[];
}

interface EmergencyCardProps {
  emergency: Emergency;
}

const EmergencyCard = ({ emergency }: EmergencyCardProps) => {
  return (
    <Card className="overflow-hidden border-2 border-gray-200">
      <CardHeader className="bg-gray-100">
        <div className="flex items-center gap-3">
          {emergency.icon}
          <div>
            <CardTitle>{emergency.title}</CardTitle>
            <CardDescription>{emergency.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex items-center gap-2 mb-4 text-emergency">
          <AlertTriangle className="h-5 w-5" />
          <p className="font-semibold">Порядок действий:</p>
        </div>
        <div className="space-y-4">
          {emergency.steps.map((step, index) => (
            <div key={index} className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emergency text-white flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              <div>
                {typeof step === 'string' ? (
                  <p>{step}</p>
                ) : (
                  <div>
                    <p className="font-medium">{step.title}</p>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4">
        <div className="text-sm text-gray-600">
          <p>Помните: В экстренных ситуациях действуйте спокойно и последовательно.</p>
        </div>
        <Button className="bg-emergency hover:bg-emergency/90 ml-auto">Подробнее</Button>
      </CardFooter>
    </Card>
  );
};

export default EmergencyCard;
