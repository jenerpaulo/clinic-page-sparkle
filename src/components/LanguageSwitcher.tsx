import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { Link } from "react-router-dom";

interface LanguageSwitcherProps {
  currentLang: "en" | "pt";
}

const LanguageSwitcher = ({ currentLang }: LanguageSwitcherProps) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-card/95 backdrop-blur-sm rounded-lg shadow-card border p-2">
        <div className="flex items-center gap-2">
          <Languages className="h-4 w-4 text-muted-foreground" />
          {currentLang === "en" ? (
            <Link to="/implantes">
              <Button variant="ghost" size="sm" className="text-xs">
                PT-BR
              </Button>
            </Link>
          ) : (
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-xs">
                EN
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;