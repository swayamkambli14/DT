import { useState } from "react";
import { Shield, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginScreenProps {
  onLogin: (fullName: string) => void;
}

const LoginScreen = ({ onLogin }: LoginScreenProps) => {
  const [fullName, setFullName] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [otp, setOtp] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!fullName.trim()) {
      alert("Please enter your Full Name");
      return;
    }
    
    if (!aadharNumber.trim()) {
      alert("Please enter your Aadhar or Mobile number");
      return;
    }
    
    if (!otp.trim()) {
      alert("Please enter the OTP");
      return;
    }
    
    onLogin(fullName);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col px-6 py-8 animate-fade-in">
      <div className="flex items-center justify-center mb-12 mt-8">
        <div className="relative">
          <Shield className="w-16 h-16 text-primary" strokeWidth={1.5} />
          <div className="absolute -inset-2 bg-primary/10 rounded-full blur-xl -z-10"></div>
        </div>
      </div>

      <div className="flex-1">
        <h1 className="text-3xl font-bold text-foreground mb-2 text-center">
          Login to SafeSpace
        </h1>
        <p className="text-muted-foreground text-center mb-8">
          Access your secure documents
        </p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm font-medium">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="h-12 rounded-xl border-input"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="aadhar" className="text-sm font-medium">
              Aadhar Number / Mobile Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="aadhar"
              type="number"
              placeholder="Enter your Aadhar or Mobile"
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
              className="h-12 rounded-xl border-input"
              required
              maxLength={12}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="otp" className="text-sm font-medium">
              OTP <span className="text-destructive">*</span>
            </Label>
            <Input
              id="otp"
              type="number"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="h-12 rounded-xl border-input"
              required
              maxLength={6}
            />
          </div>

          <Button 
            type="submit"
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-card"
          >
            Login
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button className="text-primary font-medium hover:underline">
            Create New Account
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="w-4 h-4" />
          <span>Your data is encrypted and safe</span>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
