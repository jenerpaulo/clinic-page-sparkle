import { Card, CardContent } from "@/components/ui/card";
import { Smile, Shield, Clock, Heart } from "lucide-react";

const ImplantBenefits = () => {
  const benefits = [
    {
      icon: Smile,
      title: "Natural Appearance",
      description: "Implants look, feel, and function just like your natural teeth, seamlessly blending with your smile."
    },
    {
      icon: Shield,
      title: "Long-Lasting Solution",
      description: "With proper care, dental implants can last a lifetime, making them the most durable tooth replacement option."
    },
    {
      icon: Clock,
      title: "Preserves Bone Health",
      description: "Implants stimulate jawbone growth, preventing bone loss that occurs with missing teeth."
    },
    {
      icon: Heart,
      title: "Improved Confidence",
      description: "Eat, speak, and smile with complete confidence knowing your teeth are secure and natural-looking."
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose Dental Implants?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dental implants offer superior benefits compared to dentures or bridges, 
            providing a permanent solution that enhances both oral health and quality of life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="bg-card hover:shadow-card transition-all duration-300 border-0 shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
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

export default ImplantBenefits;