
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { HardDrive, Shield, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F1F0FB] to-[#D3E4FD]">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center my-16 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-[#403E43]">USBfleshdrive</h1>
          <p className="text-xl text-gray-700 mb-8">
            Надежное хранение данных с максимальной скоростью передачи.
            Портативные решения для бизнеса и личного использования.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#0EA5E9] hover:bg-[#0284c7] text-white">Каталог продукции</Button>
            <Button variant="outline" className="border-[#0EA5E9] text-[#0EA5E9]">Подробнее</Button>
          </div>
        </section>

        <section className="my-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#403E43]">Наши преимущества</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-[#E5DEFF] rounded-full">
                    <Zap className="h-8 w-8 text-[#6E59A5]" />
                  </div>
                </div>
                <CardTitle className="text-xl text-center">Высокая скорость</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Скорость передачи данных до 1000 МБ/с благодаря технологии USB 3.2 Gen 2
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-[#FDE1D3] rounded-full">
                    <HardDrive className="h-8 w-8 text-[#F97316]" />
                  </div>
                </div>
                <CardTitle className="text-xl text-center">Большая ёмкость</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Накопители ёмкостью от 32 ГБ до 2 ТБ для хранения любых объёмов данных
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-[#F2FCE2] rounded-full">
                    <Shield className="h-8 w-8 text-[#65a30d]" />
                  </div>
                </div>
                <CardTitle className="text-xl text-center">Безопасность</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Аппаратное шифрование и защита паролем для конфиденциальных данных
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="my-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#403E43]">Популярные модели</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard 
              name="USBfleshdrive Pro" 
              capacity="128 ГБ" 
              speed="800 МБ/с" 
              price="2 990 ₽"
              imagePath="/placeholder.svg"
            />
            <ProductCard 
              name="USBfleshdrive Ultra" 
              capacity="256 ГБ" 
              speed="1000 МБ/с" 
              price="4 490 ₽"
              imagePath="/placeholder.svg"
              featured={true}
            />
            <ProductCard 
              name="USBfleshdrive Compact" 
              capacity="64 ГБ" 
              speed="600 МБ/с" 
              price="1 790 ₽"
              imagePath="/placeholder.svg"
            />
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-[#0EA5E9] hover:bg-[#0284c7] text-white">
              Смотреть все модели
            </Button>
          </div>
        </section>

        <section className="my-16 bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#403E43]">Где купить</h2>
          
          <Tabs defaultValue="online" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="online">Интернет-магазины</TabsTrigger>
              <TabsTrigger value="offline">Розничные магазины</TabsTrigger>
            </TabsList>
            <TabsContent value="online" className="p-4">
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">🛒</div>
                  <div>
                    <h3 className="font-medium">Wildberries</h3>
                    <p className="text-sm text-gray-600">Доставка по всей России</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">🛍️</div>
                  <div>
                    <h3 className="font-medium">Ozon</h3>
                    <p className="text-sm text-gray-600">Быстрая доставка, скидки по промокодам</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">🖥️</div>
                  <div>
                    <h3 className="font-medium">Официальный сайт</h3>
                    <p className="text-sm text-gray-600">Гарантия подлинности, бонусная программа</p>
                  </div>
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="offline" className="p-4">
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">🏪</div>
                  <div>
                    <h3 className="font-medium">DNS</h3>
                    <p className="text-sm text-gray-600">Более 2000 магазинов по всей стране</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">🏬</div>
                  <div>
                    <h3 className="font-medium">М.Видео</h3>
                    <p className="text-sm text-gray-600">Консультация специалистов, можно протестировать</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">🏢</div>
                  <div>
                    <h3 className="font-medium">Эльдорадо</h3>
                    <p className="text-sm text-gray-600">Широкий ассортимент моделей, акции и скидки</p>
                  </div>
                </li>
              </ul>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
