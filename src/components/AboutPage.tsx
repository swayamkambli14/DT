import { Shield, ArrowLeft, Target, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface AboutPageProps {
  onNavigate: (screen: string) => void;
}

const AboutPage = ({ onNavigate }: AboutPageProps) => {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize the security and privacy of your documents above everything else."
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Our platform is designed with simplicity and user experience at its core."
    },
    {
      icon: Award,
      title: "Reliability",
      description: "99.9% uptime guarantee ensures your documents are always accessible."
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
          <h1 className="text-2xl font-bold">About SafeSpace</h1>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Making Document Management Simple & Secure
          </h2>
          <p className="text-xl text-muted-foreground">
            SafeSpace was created with a simple mission: to provide everyone with a secure, 
            easy-to-use platform for storing and managing their important documents.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              In today's digital age, managing important documents should be simple, secure, and accessible. 
              SafeSpace was born from the frustration of dealing with scattered documents, security concerns, 
              and complicated document management systems.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe everyone deserves access to military-grade security for their personal documents 
              without the complexity typically associated with such systems. Our platform combines 
              enterprise-level security with consumer-friendly design.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These principles guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <Card key={index} className="p-8 shadow-card hover:shadow-elevated transition-smooth text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-primary py-16 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">10,000+</p>
              <p className="text-white/90">Active Users</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">50,000+</p>
              <p className="text-white/90">Documents Stored</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">99.9%</p>
              <p className="text-white/90">Uptime</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">24/7</p>
              <p className="text-white/90">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <Card className="p-12 shadow-elevated text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Join Our Community
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Start securing your documents today with SafeSpace
          </p>
          <Button 
            onClick={() => onNavigate("login")}
            size="lg"
            className="bg-primary hover:bg-primary/90"
          >
            Get Started Free
          </Button>
        </Card>
      </section>
    </div>
  );
};

export default AboutPage;
