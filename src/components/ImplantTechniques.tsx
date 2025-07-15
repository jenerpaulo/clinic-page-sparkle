import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ImplantTechniques = () => {
  const techniques = [
    {
      title: "All-on-4 Technique",
      description: "The All-on-Four technique uses only four dental implants to support a complete fixed prosthesis, ideal for patients without teeth or with compromised dentition. It provides rapid rehabilitation with stability, aesthetics, and chewing function in less time and with fewer surgical interventions."
    },
    {
      title: "Zygomatic Implants",
      description: "Zygomatic implants are indicated for patients with significant bone loss in the maxilla, where conventional implants are not viable. In this technique, dental implants are fixed to the zygomatic bone (cheekbone), providing secure support for prostheses and allowing oral rehabilitation without bone grafts."
    },
    {
      title: "Immediate Loading",
      description: "The immediate loading dental implant technique allows placement of the implant and dental prosthesis on the same day or within 72 hours after surgery, providing rapid recovery of aesthetics and chewing function. Ideal for selected cases, it offers more comfort and efficiency for the patient."
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Advanced Implant Techniques
          </h2>
          <h3 className="text-xl md:text-2xl text-muted-foreground mb-6">
            Transform Your Smile with Dental Implants
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Tooth loss can impact not only aesthetics but also chewing, speech, and of course, self-esteem. 
            The good news is that dental implants emerge as a modern, safe, and effective solution. 
            Functioning as artificial roots, they provide stability and a natural appearance for those who want to smile with confidence again. 
            With advanced techniques like All-on-Four, zygomatic implants, and immediate loading, there are personalized options for every situation — 
            even for those who have experienced bone loss. See below the different and modern dental implant techniques that can transform your oral health and improve your quality of life.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {techniques.map((technique, index) => (
            <Card key={index} className="border border-border/50 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {technique.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {technique.description}
                </CardDescription>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImplantTechniques;