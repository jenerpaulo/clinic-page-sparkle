import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const ImplantsHero = () => {
  return (
    <section className="relative bg-gradient-cream py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Restore Your Smile with 
              <span className="text-primary block">Dental Implants</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Replace missing teeth with permanent, natural-looking dental implants. 
              Our advanced implant technology and experienced team ensure comfortable, 
              long-lasting results that restore both function and confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                Learn More
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm text-foreground">95% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm text-foreground">Lifetime Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm text-foreground">Pain-Free Procedure</span>
              </div>
            </div>
          </div>
          
          {/* Video Section */}
          <div className="animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-soft bg-card">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/WrrFbbADIfI"
                  title="Dental Implant Placement Procedure"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 bg-card">
                <h3 className="font-semibold text-card-foreground mb-2">
                  Watch: Implant Placement Process
                </h3>
                <p className="text-sm text-muted-foreground">
                  See how our minimally invasive procedure restores your smile
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplantsHero;