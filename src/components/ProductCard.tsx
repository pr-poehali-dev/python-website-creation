
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  capacity: string;
  speed: string;
  price: string;
  imagePath: string;
  featured?: boolean;
}

export const ProductCard = ({
  name,
  capacity,
  speed,
  price,
  imagePath,
  featured = false
}: ProductCardProps) => {
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-xl ${featured ? 'border-[#0EA5E9] shadow-lg scale-105' : 'border-gray-200'}`}>
      <div className="relative">
        {featured && (
          <Badge className="absolute top-2 right-2 bg-[#0EA5E9]">
            Хит продаж
          </Badge>
        )}
        <img 
          src={imagePath} 
          alt={name} 
          className="w-full h-48 object-contain bg-white p-4"
        />
      </div>
      <CardHeader className="pb-2">
        <h3 className="font-bold text-lg">{name}</h3>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Ёмкость</span>
            <span className="font-medium">{capacity}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Скорость</span>
            <span className="font-medium">{speed}</span>
          </div>
          <div className="mt-4">
            <span className="text-xl font-bold text-[#0EA5E9]">{price}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-[#0EA5E9] hover:bg-[#0284c7]">
          <ShoppingCart className="h-4 w-4 mr-2" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};
