import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ImplantFAQ = () => {
  const faqs = [
    {
      question: "How long do dental implants last?",
      answer: "With proper care and maintenance, dental implants can last a lifetime. The titanium implant itself is designed to be permanent, while the crown may need replacement after 15-20 years due to normal wear."
    },
    {
      question: "Is the implant procedure painful?",
      answer: "Most patients experience minimal discomfort during and after the procedure. We use local anesthesia during placement, and post-operative pain is typically manageable with over-the-counter pain medication for 2-3 days."
    },
    {
      question: "Am I a good candidate for dental implants?",
      answer: "Most adults with good general health and adequate bone density are candidates for implants. We'll evaluate your oral health, medical history, and bone structure during your consultation to determine eligibility."
    },
    {
      question: "How much do dental implants cost?",
      answer: "Implant costs vary based on individual needs, number of teeth being replaced, and additional procedures required. We offer financing options and will provide a detailed treatment plan with transparent pricing during your consultation."
    },
    {
      question: "How do I care for my dental implants?",
      answer: "Implant care is similar to natural teeth - regular brushing, flossing, and professional cleanings. With proper oral hygiene and regular dental visits, implants can maintain their health and appearance for decades."
    },
    {
      question: "Can I eat normally with dental implants?",
      answer: "Yes! Once fully healed, implants function just like natural teeth. You can eat all your favorite foods without restriction, including hard or sticky foods that might be problematic with dentures."
    }
  ];

  return (
    <section className="py-16 px-4 bg-cream/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about dental implants and what to expect during treatment.
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

export default ImplantFAQ;