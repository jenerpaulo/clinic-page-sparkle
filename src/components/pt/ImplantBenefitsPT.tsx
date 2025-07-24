import { Card, CardContent } from "@/components/ui/card";
import { Smile, Shield, Clock, Heart } from "lucide-react";

const ImplantBenefitsPT = () => {
  const benefits = [
    {
      icon: Smile,
      title: "Aparência Natural",
      description: "Os implantes têm aparência, sensação e funcionam como seus dentes naturais, misturando-se perfeitamente com seu sorriso."
    },
    {
      icon: Shield,
      title: "Solução Duradoura",
      description: "Com os cuidados adequados, os implantes dentários podem durar toda a vida, sendo a opção mais durável para substituição de dentes."
    },
    {
      icon: Clock,
      title: "Preserva a Saúde Óssea",
      description: "Os implantes estimulam o crescimento do osso maxilar, prevenindo a perda óssea que ocorre com dentes ausentes."
    },
    {
      icon: Heart,
      title: "Melhora a Confiança",
      description: "Coma, fale e sorria com total confiança sabendo que seus dentes estão seguros e com aparência natural."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-teal-light/10 to-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Por Que Escolher Implantes Dentários?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Os implantes dentários oferecem benefícios superiores comparados a dentaduras ou pontes, 
            proporcionando uma solução permanente que melhora tanto a saúde bucal quanto a qualidade de vida.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="bg-card hover:shadow-card hover:border-accent/20 transition-all duration-300 border group hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImplantBenefitsPT;