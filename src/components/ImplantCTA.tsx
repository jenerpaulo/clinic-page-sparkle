import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Calendar, MapPin } from "lucide-react";

const ImplantCTA = () => {
  return (
    <section className="py-16 px-4 bg-gradient-professional">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Restore Your Smile?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Take the first step towards a confident, healthy smile. Schedule your consultation 
            today and discover how dental implants can transform your life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-2">Call Us</h3>
              <p className="text-primary-foreground/80 text-sm">(555) 123-4567</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-2">Book Online</h3>
              <p className="text-primary-foreground/80 text-sm">24/7 Scheduling</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-2">Visit Us</h3>
              <p className="text-primary-foreground/80 text-sm">Downtown Location</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold"
          >
            Schedule Your Consultation
          </Button>
          <p className="text-primary-foreground/80 text-sm mt-4">
            Free consultation • Insurance accepted • Financing available
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImplantCTA;