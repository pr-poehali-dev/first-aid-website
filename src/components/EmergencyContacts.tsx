import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PhoneCall, Ambulance, GraduationCap, Clock, Globe } from "lucide-react";

const EmergencyContacts = () => {
  const emergencyNumbers = [
    { name: "Единый номер экстренных служб", number: "112", icon: <PhoneCall className="h-5 w-5 text-emergency" /> },
    { name: "Скорая медицинская помощь", number: "103", icon: <Ambulance className="h-5 w-5 text-emergency" /> },
    { name: "Пожарная служба", number: "101", icon: <span className="text-xl">🚒</span> },
    { name: "Полиция", number: "102", icon: <span className="text-xl">👮‍♂️</span> },
    { name: "Газовая служба", number: "104", icon: <span className="text-xl">💨</span> },
    { name: "Служба спасения МЧС", number: "101", icon: <span className="text-xl">🆘</span> }
  ];

  const hotlines = [
    { name: "Горячая линия психологической помощи", number: "8-800-2000-122" },
    { name: "Детский телефон доверия", number: "8-800-2000-122" },
    { name: "Центр антидопинга", number: "8-800-770-03-32" },
    { name: "Центр помощи при отравлениях", number: "8 (495) 628-16-87" }
  ];

  const trainingCenters = [
    { name: "Российский Красный Крест", description: "Курсы первой помощи для всех желающих", website: "www.redcross.ru" },
    { name: "Учебный центр МЧС", description: "Программы по оказанию первой помощи", website: "www.mchs.gov.ru" },
    { name: "Медицинские колледжи", description: "Образовательные программы для населения", website: "Сайты местных учебных заведений" }
  ];

  return (
    <section className="py-12 bg-gray-50" id="emergency-contacts">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Экстренные контакты</h2>
        <p className="text-xl text-center mb-8 text-gray-600">Важные номера, которые должен знать каждый</p>
        
        <Tabs defaultValue="contacts" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="contacts" className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4" />
              <span>Экстренные номера</span>
            </TabsTrigger>
            <TabsTrigger value="hotlines" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Горячие линии</span>
            </TabsTrigger>
            <TabsTrigger value="training" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              <span>Обучение</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="contacts" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {emergencyNumbers.map((contact, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      {contact.icon}
                      <CardTitle className="text-lg">{contact.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-emergency">{contact.number}</p>
                    <p className="text-sm text-gray-500 mt-2">Бесплатно, круглосуточно</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="hotlines" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hotlines.map((hotline, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{hotline.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl font-bold text-emergency">{hotline.number}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="training" className="mt-6">
            <div className="grid grid-cols-1 gap-4">
              {trainingCenters.map((center, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{center.name}</CardTitle>
                    <CardDescription>{center.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-emergency" />
                    <a href={`https://${center.website}`} target="_blank" rel="noopener noreferrer" className="text-emergency hover:underline">
                      {center.website}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 text-center">
          <p className="text-lg mb-2">Помните!</p>
          <p className="text-gray-600">При экстренной ситуации сначала вызовите специалистов, затем приступайте к оказанию первой помощи</p>
        </div>
      </div>
    </section>
  );
};

export default EmergencyContacts;
