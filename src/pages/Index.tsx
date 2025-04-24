
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/CodeBlock";
import { FeatureCard } from "@/components/FeatureCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F2FCE2] to-[#E5DEFF]">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center my-16 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-[#1A1F2C]">Python: Мощь и Простота</h1>
          <p className="text-xl text-gray-700 mb-8">
            Самый популярный язык программирования для веб-разработки, анализа данных, 
            машинного обучения и автоматизации.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">Начать обучение</Button>
            <Button variant="outline" className="border-[#9b87f5] text-[#7E69AB]">Документация</Button>
          </div>
        </section>

        <section className="my-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#1A1F2C]">Почему Python?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              icon="📊" 
              title="Анализ данных" 
              description="Python — стандарт в индустрии анализа данных с библиотеками NumPy, Pandas и Matplotlib." 
            />
            <FeatureCard 
              icon="🤖" 
              title="Машинное обучение" 
              description="TensorFlow, PyTorch и scikit-learn делают Python идеальным для ИИ и машинного обучения." 
            />
            <FeatureCard 
              icon="🌐" 
              title="Веб-разработка" 
              description="Django и Flask — мощные фреймворки для создания веб-приложений любой сложности." 
            />
          </div>
        </section>

        <section className="my-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#1A1F2C]">Пример кода</h2>
          
          <Tabs defaultValue="webdev" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="webdev">Веб-разработка</TabsTrigger>
              <TabsTrigger value="data">Анализ данных</TabsTrigger>
              <TabsTrigger value="ml">Машинное обучение</TabsTrigger>
            </TabsList>
            <TabsContent value="webdev">
              <Card>
                <CardHeader>
                  <CardTitle>Flask: Простой веб-сервер</CardTitle>
                  <CardDescription>Создание минимального веб-сервера на Flask</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock code={`from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Привет, Мир!'

if __name__ == '__main__':
    app.run(debug=True)`} />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Изучить Flask</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="data">
              <Card>
                <CardHeader>
                  <CardTitle>Pandas: Анализ данных</CardTitle>
                  <CardDescription>Базовый анализ данных с Pandas</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock code={`import pandas as pd
import matplotlib.pyplot as plt

# Загрузка данных
df = pd.read_csv('data.csv')

# Базовая статистика
print(df.describe())

# Визуализация
df.plot(kind='bar')
plt.show()`} />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Изучить Pandas</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="ml">
              <Card>
                <CardHeader>
                  <CardTitle>Scikit-learn: Машинное обучение</CardTitle>
                  <CardDescription>Простая модель классификации</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock code={`from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Подготовка данных
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Создание и обучение модели
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Оценка модели
predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
print(f"Точность: {accuracy:.2f}")`} />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Изучить Scikit-learn</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
