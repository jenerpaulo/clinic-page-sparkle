import { Card, CardContent } from "@/components/ui/card";
import { Search, Wrench, Zap, Star, Clock } from "lucide-react";

const ImplantProcess = () => {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Initial Consultation",
      description: "Comprehensive examination, 3D imaging, and personalized treatment planning to ensure the best outcome for your specific case."
    },
    {
      step: "02", 
      icon: Wrench,
      title: "Implant Placement",
      description: "Precise implant placement using advanced surgical techniques and local anesthesia for maximum comfort and minimal recovery time."
    },
    {
      step: "03",
      icon: Zap,
      title: "Healing Period",
      description: "3-6 months osseointegration process where the implant fuses with your jawbone, creating a strong, permanent foundation."
    },
    {
      step: "04",
      icon: Star,
      title: "Crown Restoration",
      description: "Custom-crafted crown is attached to complete your new tooth, perfectly matched to your natural teeth for seamless integration."
    }
  ];

  return (
    <section className="py-16 px-4 bg-warm-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            The Implant Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined, patient-focused approach ensures a comfortable experience 
            and exceptional results from consultation to final restoration.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="relative bg-card border-0 shadow-card hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <div className="absolute -top-4 left-6">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 mt-2">
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
            <span className="text-foreground font-medium">Total Treatment Time: 4-8 months</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplantProcess;