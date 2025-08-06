import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const ImplantsHeroPT = () => {
  return (
    <section className="relative bg-gradient-cream py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              <span className="text-primary block"> O Melhor Implante Dentário</span> Em Taubaté.
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Substitua dentes perdidos com implantes dentários permanentes e de aparência natural. 
              Nossa tecnologia avançada e equipe experiente garantem resultados confortáveis e 
              duradouros que restauram função e confiança.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Agendar Consulta
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                Saiba Mais
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm text-foreground"> 5.0 no Google</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm text-foreground">Protocolos Modernos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm text-foreground">Procedimento Indolor</span>
              </div>
            </div>
          </div>
          
          {/* Video Section */}
          <div className="animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-soft bg-card">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/WrrFbbADIfI"
                  title="Procedimento de Colocação de Implante Dentário"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 bg-card">
                <h3 className="font-semibold text-card-foreground mb-2">
                  Assista: Processo de Colocação do Implante
                </h3>
                <p className="text-sm text-muted-foreground">
                  Veja como nosso procedimento minimamente invasivo restaura seu sorriso
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplantsHeroPT;
