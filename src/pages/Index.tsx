import { useState } from "react";
import LandingPage from "@/components/LandingPage";
import LoginScreen from "@/components/LoginScreen";
import DashboardScreen from "@/components/DashboardScreen";
import UploadDocumentScreen from "@/components/UploadDocumentScreen";
import UploadSuccessScreen from "@/components/UploadSuccessScreen";
import DocumentDetailsScreen from "@/components/DocumentDetailsScreen";
import DeleteConfirmationModal from "@/components/DeleteConfirmationModal";
import InsuranceGuideScreen from "@/components/InsuranceGuideScreen";
import AboutPage from "@/components/AboutPage";
import ContactPage from "@/components/ContactPage";
import FAQPage from "@/components/FAQPage";
import { Language } from "@/lib/translations";

type Screen = 
  | "landing"
  | "login" 
  | "dashboard" 
  | "upload" 
  | "upload-success" 
  | "document-details" 
  | "delete-confirmation"
  | "insurance-guide"
  | "about"
  | "contact"
  | "faq";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("landing");
  const [userName, setUserName] = useState("User");
  const [language, setLanguage] = useState<Language>("en");

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleDeleteConfirm = () => {
    setCurrentScreen("dashboard");
  };

  const handleDeleteCancel = () => {
    setCurrentScreen("document-details");
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "landing":
        return <LandingPage onGetStarted={() => handleNavigate("login")} onNavigate={handleNavigate} />;
      
      case "login":
        return <LoginScreen onLogin={(fullName) => {
          setUserName(fullName);
          handleNavigate("dashboard");
        }} />;
      
      case "dashboard":
        return (
          <DashboardScreen 
            onNavigate={handleNavigate} 
            userName={userName}
            language={language}
            onLanguageChange={setLanguage}
          />
        );
      
      case "insurance-guide":
        return <InsuranceGuideScreen onNavigate={handleNavigate} language={language} />;
      
      case "upload":
        return <UploadDocumentScreen onNavigate={handleNavigate} />;
      
      case "upload-success":
        return <UploadSuccessScreen onNavigate={handleNavigate} />;
      
      case "document-details":
        return <DocumentDetailsScreen onNavigate={handleNavigate} />;
      
      case "delete-confirmation":
        return (
          <>
            <DocumentDetailsScreen onNavigate={handleNavigate} />
            <DeleteConfirmationModal 
              onConfirm={handleDeleteConfirm}
              onCancel={handleDeleteCancel}
            />
          </>
        );
      
      case "about":
        return <AboutPage onNavigate={handleNavigate} />;
      
      case "contact":
        return <ContactPage onNavigate={handleNavigate} />;
      
      case "faq":
        return <FAQPage onNavigate={handleNavigate} />;
      
      default:
        return <LandingPage onGetStarted={() => handleNavigate("login")} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className={`${currentScreen === "landing" || currentScreen === "about" || currentScreen === "contact" || currentScreen === "faq" || currentScreen === "dashboard" ? "w-full" : "max-w-md mx-auto shadow-2xl"} bg-background min-h-screen`}>
      {renderScreen()}
    </div>
  );
};

export default Index;
