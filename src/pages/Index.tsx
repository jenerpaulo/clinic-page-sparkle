import { useEffect } from "react";
import ImplantsHero from "@/components/ImplantsHero";
import ImplantBenefits from "@/components/ImplantBenefits";
import ImplantProcess from "@/components/ImplantProcess";
import ImplantTechniques from "@/components/ImplantTechniques";
import ImplantFAQ from "@/components/ImplantFAQ";
import ImplantCTA from "@/components/ImplantCTA";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Index = () => {
  useEffect(() => {
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Dental Implant Placement",
      "description": "Professional dental implant placement and restoration services for missing teeth replacement",
      "procedureType": "Dental Implant Surgery",
      "bodyLocation": "Mouth",
      "provider": {
        "@type": "Dentist",
        "name": "Professional Dental Clinic"
      },
      "benefits": [
        "Permanent tooth replacement",
        "Natural appearance and function", 
        "Preserves jawbone health",
        "95% success rate"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <LanguageSwitcher currentLang="en" />
      {/* SEO Meta tags handled in index.html */}
      <main>
        <ImplantsHero />
        <ImplantBenefits />
        <ImplantProcess />
        <ImplantTechniques />
        <ImplantFAQ />
        <ImplantCTA />
      </main>
    </div>
  );
};

export default Index;