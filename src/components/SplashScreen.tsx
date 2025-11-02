import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SplashScreenProps {
  onGetStarted: () => void;
}

const SplashScreen = ({ onGetStarted }: SplashScreenProps) => {
  return (
    <div className="min-h-screen gradient-splash flex flex-col items-center justify-center px-6 animate-fade-in">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="mb-8 relative">
          <Shield className="w-24 h-24 text-white drop-shadow-lg" strokeWidth={1.5} />
          <div className="absolute -inset-4 bg-white/20 rounded-full blur-2xl -z-10"></div>
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-2 text-center">
          Welcome to SafeSpace
        </h1>
        <p className="text-white/90 text-center text-lg">
          Secure Digital Document Storage
        </p>
      </div>
      
      <div className="w-full max-w-sm pb-12">
        <Button 
          onClick={onGetStarted}
          className="w-full h-14 bg-white text-primary hover:bg-white/90 font-semibold text-lg rounded-2xl shadow-elevated"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default SplashScreen;
