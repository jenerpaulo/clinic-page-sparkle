import { Card, CardContent } from "@/components/ui/card";
import { Search, Wrench, Zap, Star, Clock } from "lucide-react";

const ImplantProcessPT = () => {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Consulta Inicial",
      description: "Exame abrangente, imagem 3D e planejamento personalizado do tratamento para garantir o melhor resultado para seu caso específico."
    },
    {
      step: "02", 
      icon: Wrench,
      title: "Colocação do Implante",
      description: "Colocação precisa do implante usando técnicas cirúrgicas avançadas e anestesia local para máximo conforto e tempo mínimo de recuperação."
    },
    {
      step: "03",
      icon: Zap,
      title: "Período de Cicatrização",
      description: "Processo de osseointegração de 3-6 meses onde o implante se funde com seu osso maxilar, criando uma base forte e permanente."
    },
    {
      step: "04",
      icon: Star,
      title: "Restauração da Coroa",
      description: "Coroa personalizada é fixada para completar seu novo dente, perfeitamente combinada com seus dentes naturais para integração perfeita."
    }
  ];

  return (
    <section className="py-16 px-4 bg-warm-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            O Processo do seu Implante Dentário em Taubaté
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa abordagem simplificada e focada no paciente garante uma experiência confortável 
            e resultados excepcionais da consulta à restauração final.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="relative bg-card border-0 shadow-card hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <div className="absolute -top-4 left-6">
                    <div className="w-8 h-8 bg-gradient-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/10 rounded-lg flex items-center justify-center mb-4 mt-2">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-accent px-6 py-3 rounded-full">
            <Clock className="h-5 w-5 text-primary" />
            <span className="text-foreground font-medium">Tempo Total de Tratamento varias de acordo com o método escolhido.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplantProcessPT;
