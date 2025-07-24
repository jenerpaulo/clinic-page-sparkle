import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ImplantTechniquesPT = () => {
  const techniques = [
    {
      title: "Técnica All-on-4",
      description: "A técnica All-on-Four utiliza apenas quatro implantes dentários para suportar uma prótese fixa total, sendo ideal para pacientes sem dentes ou com dentição comprometida. Proporciona reabilitação rápida, com estabilidade, estética e função mastigatória em menos tempo e com menos intervenções cirúrgicas."
    },
    {
      title: "Implantes Zigomáticos",
      description: "Os implantes zigomáticos são indicados para pacientes com grande perda óssea na maxila, onde os implantes convencionais não são viáveis. Nesta técnica, os implantes dentários fixam-se no osso zigomático (maçã do rosto), proporcionando suporte seguro para próteses e permitindo reabilitação oral sem enxertos ósseos."
    },
    {
      title: "Carga Imediata",
      description: "A técnica de implante dentário com carga imediata permite a colocação do implante e da prótese dentária no mesmo dia ou em até 72 horas após a cirurgia, proporcionando recuperação rápida da estética e da função mastigatória. Ideal para casos selecionados, oferece mais conforto e agilidade ao paciente."
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Técnicas Avançadas de Implantes
          </h2>
          <h3 className="text-xl md:text-2xl text-muted-foreground mb-6">
            Transforme seu sorriso com Implantes Dentários
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A perda de dentes pode impactar não só a estética, mas também a mastigação, a fala e, claro, a autoestima. 
            A boa notícia é que os implantes dentários surgem como uma solução moderna, segura e eficaz. 
            Funcionando como raízes artificiais, eles proporcionam estabilidade e um aspecto natural para quem quer voltar a sorrir com confiança. 
            Com técnicas avançadas como All-on-Four, implantes zigomáticos e carga imediata, existem opções personalizadas para cada situação — 
            até mesmo para aqueles que enfrentaram perda óssea. Veja abaixo as diferentes e modernas técnicas de implantes dentários que podem transformar sua saúde bucal e melhorar sua qualidade de vida.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {techniques.map((technique, index) => (
            <Card key={index} className="border border-border/50 hover:shadow-lg hover:border-accent/50 transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {technique.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {technique.description}
                </CardDescription>
                <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                  Saiba mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImplantTechniquesPT;