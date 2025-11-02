import { ArrowLeft, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQPageProps {
  onNavigate: (screen: string) => void;
}

const FAQPage = ({ onNavigate }: FAQPageProps) => {
  const faqs = [
    {
      question: "How secure is my data on SafeSpace?",
      answer: "Your data is protected with military-grade 256-bit AES encryption. All documents are encrypted both in transit and at rest. We also implement multi-factor authentication and regular security audits to ensure your documents remain completely secure."
    },
    {
      question: "Can I access my documents from any device?",
      answer: "Yes! SafeSpace is fully cloud-based and accessible from any device with an internet connection. You can use our web app on desktop, tablet, or mobile phone. Your documents are automatically synced across all devices."
    },
    {
      question: "What types of documents can I store?",
      answer: "You can store any type of document including PDFs, images (JPG, PNG), Word documents, Excel spreadsheets, and more. We support all major document formats and there are no restrictions on document types."
    },
    {
      question: "How do I share documents with others?",
      answer: "You can securely share documents by generating a secure link or inviting specific people via email. You have full control over permissions - you can set view-only or edit access, and revoke access at any time."
    },
    {
      question: "What happens if I forget my password?",
      answer: "You can reset your password using the 'Forgot Password' option on the login screen. We'll send a verification code to your registered email or mobile number to help you create a new password securely."
    },
    {
      question: "Is there a limit to how many documents I can upload?",
      answer: "The document limit depends on your plan. Free plan allows up to 10 documents, Pro plan offers unlimited documents, and Business plan includes unlimited documents with additional team features. Storage limits vary by plan."
    },
    {
      question: "Can I download my documents?",
      answer: "Absolutely! You can download any of your documents at any time in their original format. We believe your data is yours, and you should have complete control over it."
    },
    {
      question: "How does the verification process work?",
      answer: "When you upload certain documents like Aadhar or PAN cards, our system uses advanced OCR and validation to verify the document's authenticity. This helps ensure the integrity of your stored documents."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods including credit/debit cards, UPI, net banking, and digital wallets. All payments are processed securely through industry-standard payment gateways."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time from your account settings. If you cancel, you'll continue to have access until the end of your billing period. You can also downgrade to the free plan to keep limited access to your documents."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes! We offer email support for all users, priority support for Pro users, and 24/7 phone support for Business plan subscribers. Our support team typically responds within 24 hours for email queries."
    },
    {
      question: "Is my data backed up?",
      answer: "Yes, all your documents are automatically backed up to multiple secure data centers. We maintain redundant copies of your data to ensure it's never lost, even in the unlikely event of a hardware failure."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card shadow-card px-6 py-4 sticky top-0 z-10">
        <div className="container mx-auto flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onNavigate("landing")}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold">Frequently Asked Questions</h1>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
            <HelpCircle className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            How Can We Help You?
          </h2>
          <p className="text-xl text-muted-foreground">
            Find answers to commonly asked questions about SafeSpace
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card shadow-card rounded-xl px-6 border-0"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Still Have Questions?
            </h3>
            <p className="text-lg text-muted-foreground">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <Button 
              onClick={() => onNavigate("contact")}
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
