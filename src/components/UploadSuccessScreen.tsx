import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UploadSuccessScreenProps {
  onNavigate: (screen: string) => void;
}

const UploadSuccessScreen = ({ onNavigate }: UploadSuccessScreenProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 animate-fade-in">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative mb-8">
          <CheckCircle2 className="w-32 h-32 text-success animate-scale-in" strokeWidth={1.5} />
          <div className="absolute -inset-8 bg-success/10 rounded-full blur-3xl -z-10"></div>
        </div>
        
        <h1 className="text-3xl font-bold text-foreground mb-2 text-center">
          Upload Successful
        </h1>
        <p className="text-muted-foreground text-center text-lg mb-8">
          Your document has been securely stored
        </p>
      </div>
      
      <div className="w-full max-w-sm pb-12 space-y-3">
        <Button 
          onClick={() => onNavigate("document-details")}
          className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl"
        >
          View Document
        </Button>
        <Button 
          onClick={() => onNavigate("dashboard")}
          variant="outline"
          className="w-full h-12 rounded-xl border-border"
        >
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default UploadSuccessScreen;
