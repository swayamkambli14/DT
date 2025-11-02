import { ArrowLeft, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Language, translations } from "@/lib/translations";
interface InsuranceGuideScreenProps {
  onNavigate: (screen: string) => void;
  language: Language;
}
const InsuranceGuideScreen = ({
  onNavigate,
  language
}: InsuranceGuideScreenProps) => {
  const t = translations[language].insuranceGuide;
  const steps = Object.values(t.steps);
  return <div className="min-h-screen bg-background animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-primary text-white px-6 py-6 sticky top-0 z-10 shadow-elevated bg-slate-900 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => onNavigate("dashboard")} className="p-2 hover:bg-white/20 rounded-lg transition-smooth">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold">{t.title}</h1>
            <p className="text-sm text-white/90">{t.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Introduction */}
        <Card className="p-6 shadow-card rounded-2xl bg-primary/5 border-primary/20">
          <p className="text-foreground leading-relaxed">{t.introduction}</p>
        </Card>

        {/* Steps */}
        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-primary" />
            {t.stepsTitle}
          </h2>
          <div className="space-y-4">
            {steps.map((step, index) => <Card key={index} className="p-5 shadow-card hover:shadow-elevated transition-smooth rounded-xl">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>)}
          </div>
        </div>

        {/* Required Documents */}
        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-accent" />
            {t.documentsTitle}
          </h2>
          <Card className="p-6 shadow-card rounded-2xl">
            <ul className="space-y-3">
              {t.documentsRequired.map((doc, index) => <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-foreground">{doc}</span>
                </li>)}
            </ul>
          </Card>
        </div>

        {/* Important Notes */}
        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-destructive" />
            {t.importantNotesTitle}
          </h2>
          <Card className="p-6 shadow-card rounded-2xl bg-accent/5 border-accent/20">
            <ul className="space-y-3">
              {t.importantNotes.map((note, index) => <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                  <span className="text-foreground text-sm">{note}</span>
                </li>)}
            </ul>
          </Card>
        </div>

        {/* Back Button */}
        <div className="pb-6">
          <Button onClick={() => onNavigate("dashboard")} className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl">
            {t.backToDashboard}
          </Button>
        </div>
      </div>
    </div>;
};
export default InsuranceGuideScreen;