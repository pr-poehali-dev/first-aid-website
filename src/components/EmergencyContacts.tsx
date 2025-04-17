import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, Ambulance, FireExtinguisher } from "lucide-react";

const EmergencyContacts = () => {
  return (
    <section className="py-12 bg-white" id="emergency-contacts">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Экстренные контакты</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-emergency/20">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 rounded-full bg-emergency/10">
                <PhoneCall className="h-6 w-6 text-emergency" />
              </div>
              <CardTitle>Единый номер</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4">112</p>
              <p className="text-sm mb-4">Для вызова экстренных служб с мобильного телефона</p>
              <Button className="w-full bg-emergency hover:bg-emergency/90">
                Позвонить
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-calm/20">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 rounded-full bg-calm/10">
                <Ambulance className="h-6 w-6 text-calm" />
              </div>
              <CardTitle>Скорая помощь</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4">103</p>
              <p className="text-sm mb-4">Для вызова скорой медицинской помощи</p>
              <Button className="w-full bg-calm hover:bg-calm/90">
                Позвонить
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-safe/20">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 rounded-full bg-safe/10">
                <FireExtinguisher className="h-6 w-6 text-safe" />
              </div>
              <CardTitle>Пожарная служба</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4">101</p>
              <p className="text-sm mb-4">Для вызова пожарной охраны и спасателей</p>
              <Button className="w-full bg-safe hover:bg-safe/90">
                Позвонить
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EmergencyContacts;
