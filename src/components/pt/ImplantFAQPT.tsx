import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ImplantFAQPT = () => {
  const faqs = [
    {
      question: "Quanto tempo duram os implantes dentários?",
      answer: "Com os cuidados e manutenção adequados, os implantes dentários podem durar toda a vida. O próprio implante de titânio é projetado para ser permanente, enquanto a coroa pode precisar de substituição após 15-20 anos devido ao desgaste normal."
    },
    {
      question: "O procedimento de implante é doloroso?",
      answer: "A maioria dos pacientes experimenta desconforto mínimo durante e após o procedimento. Usamos anestesia local durante a colocação, e a dor pós-operatória geralmente é controlável com medicamentos de venda livre por 2-3 dias."
    },
    {
      question: "Sou um bom candidato para implantes dentários?",
      answer: "A maioria dos adultos com boa saúde geral e densidade óssea adequada são candidatos para implantes. Avaliaremos sua saúde bucal, histórico médico e estrutura óssea durante sua consulta para determinar a elegibilidade."
    },
    {
      question: "Quanto custam os implantes dentários?",
      answer: "Os custos dos implantes variam com base nas necessidades individuais, número de dentes sendo substituídos e procedimentos adicionais necessários. Oferecemos opções de financiamento e forneceremos um plano de tratamento detalhado com preços transparentes durante sua consulta."
    },
    {
      question: "Como cuido dos meus implantes dentários?",
      answer: "O cuidado com implantes é similar aos dentes naturais - escovação regular, uso do fio dental e limpezas profissionais. Com higiene bucal adequada e visitas regulares ao dentista, os implantes podem manter sua saúde e aparência por décadas."
    },
    {
      question: "Posso comer normalmente com implantes dentários?",
      answer: "Sim! Uma vez totalmente cicatrizados, os implantes funcionam como dentes naturais. Você pode comer todos os seus alimentos favoritos sem restrição, incluindo alimentos duros ou pegajosos que podem ser problemáticos com dentaduras."
    }
  ];

  return (
    <section className="py-16 px-4 bg-cream/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Obtenha respostas para perguntas comuns sobre implantes dentários e o que esperar durante o tratamento.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-lg shadow-card border-0 px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ImplantFAQPT;