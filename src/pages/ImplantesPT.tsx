import { useEffect } from "react";
import ImplantsHeroPT from "@/components/pt/ImplantsHeroPT";
import ImplantBenefitsPT from "@/components/pt/ImplantBenefitsPT";
import ImplantProcessPT from "@/components/pt/ImplantProcessPT";
import ImplantTechniquesPT from "@/components/pt/ImplantTechniquesPT";
import ImplantFAQPT from "@/components/pt/ImplantFAQPT";
import ImplantCTAPT from "@/components/pt/ImplantCTAPT";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const ImplantesPT = () => {
  useEffect(() => {
    // Adicionar dados estruturados para SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Colocação de Implante Dentário",
      "description": "Serviços profissionais de colocação e restauração de implantes dentários para substituição de dentes perdidos",
      "procedureType": "Cirurgia de Implante Dentário",
      "bodyLocation": "Boca",
      "provider": {
        "@type": "Dentist",
        "name": "Clínica Odontológica Profissional"
      },
      "benefits": [
        "Substituição permanente de dentes",
        "Aparência e função naturais", 
        "Preserva a saúde do osso maxilar",
        "95% de taxa de sucesso"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Atualizar meta tags para português
    document.title = "Implantes Dentários - Colocação e Restauração Profissional de Implantes";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Descubra os benefícios dos implantes dentários para dentes perdidos. Nossa equipe experiente oferece colocação profissional de implantes, restauração e cuidados abrangentes para saúde bucal duradoura.');
    }

    return () => {
      document.head.removeChild(script);
      // Restaurar título original ao sair da página
      document.title = "Dental Implants - Professional Implant Placement & Restoration";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <LanguageSwitcher currentLang="pt" />
      <main>
        <ImplantsHeroPT />
        <ImplantBenefitsPT />
        <ImplantProcessPT />
        <ImplantTechniquesPT />
        <ImplantFAQPT />
        <ImplantCTAPT />
      </main>
    </div>
  );
};

export default ImplantesPT;