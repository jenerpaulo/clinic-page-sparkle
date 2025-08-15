import { Card, CardContent } from "@/components/ui/card";

const ImplantCasesPT = () => {
  const cases = [
    {
      id: 1,
      title: "Implante Unitário Anterior",
      description: "Paciente de 45 anos com perda do incisivo central. Implante com resultado estético excepcional.",
      beforeAlt: "Dente anterior perdido antes do implante",
      afterAlt: "Sorriso restaurado após implante dentário"
    },
    {
      id: 2,
      title: "Reabilitação Múltipla",
      description: "Paciente de 58 anos com múltiplas perdas dentárias. Protocolo completo com implantes.",
      beforeAlt: "Múltiplos dentes perdidos antes do tratamento",
      afterAlt: "Sorriso completo após reabilitação com implantes"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-4">
            Casos de Sucesso
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja a transformação real de nossos pacientes com implantes dentários
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cases.map((case_) => (
            <Card key={case_.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-dark mb-4">
                  {case_.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <h4 className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                      Antes
                    </h4>
                    <div className="bg-gray-200 rounded-lg aspect-[4/3] flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </div>
                        <p className="text-xs">Foto Antes</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                      Depois
                    </h4>
                    <div className="bg-gradient-blue rounded-lg aspect-[4/3] flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                        <p className="text-xs">Resultado Final</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {case_.description}
                </p>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      100% Sucesso
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      Excelente Resultado
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-professional rounded-xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Seu Caso Também Pode Ser Um Sucesso!
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Cada paciente é único. Agende uma consulta para descobrir como podemos transformar seu sorriso.
            </p>
            <button className="bg-white text-blue-dark px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Agendar Consulta Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplantCasesPT;