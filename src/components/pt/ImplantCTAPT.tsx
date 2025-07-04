import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Calendar, MapPin } from "lucide-react";

const ImplantCTAPT = () => {
  return (
    <section className="py-16 px-4 bg-gradient-professional">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Pronto para Restaurar Seu Sorriso?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Dê o primeiro passo em direção a um sorriso confiante e saudável. Agende sua consulta 
            hoje e descubra como os implantes dentários podem transformar sua vida.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-2">Ligue para Nós</h3>
              <p className="text-primary-foreground/80 text-sm">(11) 3456-7890</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-2">Agende Online</h3>
              <p className="text-primary-foreground/80 text-sm">Agendamento 24/7</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-2">Visite-nos</h3>
              <p className="text-primary-foreground/80 text-sm">Centro da Cidade</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold"
          >
            Agende Sua Consulta
          </Button>
          <p className="text-primary-foreground/80 text-sm mt-4">
            Consulta gratuita • Convênios aceitos • Financiamento disponível
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImplantCTAPT;