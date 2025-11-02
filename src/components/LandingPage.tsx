import { Shield, Lock, Cloud, Users, CheckCircle, Star, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import heroImage from "@/assets/hero-image.jpg";
import featureSecurity from "@/assets/feature-security.jpg";
import featureStorage from "@/assets/feature-storage.jpg";
import featureSharing from "@/assets/feature-sharing.jpg";
interface LandingPageProps {
  onGetStarted: () => void;
  onNavigate: (screen: string) => void;
}
const LandingPage = ({
  onGetStarted,
  onNavigate
}: LandingPageProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const features = [{
    icon: Lock,
    image: featureSecurity,
    title: "Bank-Level Security",
    description: "Military-grade 256-bit encryption keeps your documents completely secure and private."
  }, {
    icon: Cloud,
    image: featureStorage,
    title: "Unlimited Cloud Storage",
    description: "Store all your important documents in one secure place, accessible from anywhere."
  }, {
    icon: Users,
    image: featureSharing,
    title: "Easy Sharing",
    description: "Securely share documents with family, employers, or institutions with just a few taps."
  }];
  const testimonials = [{
    name: "Priya Sharma",
    role: "Software Engineer",
    content: "SafeSpace has made managing my documents so much easier. I can access everything from anywhere!",
    rating: 5
  }, {
    name: "Rajesh Kumar",
    role: "Business Owner",
    content: "The security features are outstanding. I trust SafeSpace with all my important business documents.",
    rating: 5
  }, {
    name: "Anita Desai",
    role: "Teacher",
    content: "Simple, secure, and reliable. SafeSpace is exactly what I needed for document management.",
    rating: 5
  }];
  const pricingPlans = [{
    name: "Free",
    price: "₹0",
    period: "/month",
    features: ["5 GB Storage", "Basic Security", "Up to 10 Documents", "Email Support"],
    popular: false
  }, {
    name: "Pro",
    price: "₹299",
    period: "/month",
    features: ["50 GB Storage", "Advanced Security", "Unlimited Documents", "Priority Support", "Document Sharing", "Version History"],
    popular: true
  }, {
    name: "Business",
    price: "₹999",
    period: "/month",
    features: ["500 GB Storage", "Enterprise Security", "Unlimited Everything", "24/7 Phone Support", "Team Collaboration", "Custom Branding", "API Access"],
    popular: false
  }];
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm shadow-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">SafeSpace</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-foreground hover:text-primary transition-smooth">Features</a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-smooth">Testimonials</a>
              
              <button onClick={() => onNavigate("about")} className="text-foreground hover:text-primary transition-smooth">About</button>
              <button onClick={() => onNavigate("contact")} className="text-foreground hover:text-primary transition-smooth">Contact</button>
              <Button onClick={onGetStarted} className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && <div className="md:hidden pt-4 pb-2 space-y-3">
              <a href="#features" className="block py-2 text-foreground hover:text-primary transition-smooth">Features</a>
              <a href="#testimonials" className="block py-2 text-foreground hover:text-primary transition-smooth">Testimonials</a>
              <a href="#pricing" className="block py-2 text-foreground hover:text-primary transition-smooth">Pricing</a>
              <button onClick={() => onNavigate("about")} className="block py-2 text-foreground hover:text-primary transition-smooth w-full text-left">About</button>
              <button onClick={() => onNavigate("contact")} className="block py-2 text-foreground hover:text-primary transition-smooth w-full text-left">Contact</button>
              <Button onClick={onGetStarted} className="w-full bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </div>}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Your Documents,
              <span className="text-primary"> Secure & Accessible</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Store, manage, and share your important documents with military-grade security. 
              Access them anytime, anywhere, from any device.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={onGetStarted} size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 shadow-elevated">
                Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button onClick={() => onNavigate("about")} size="lg" variant="outline" className="h-14 px-8 text-lg">
                Learn More
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => <div key={i} className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>)}
              </div>
              <div>
                <p className="font-semibold text-foreground">10,000+ Users</p>
                <p className="text-sm text-muted-foreground">Trust SafeSpace</p>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <img src={heroImage} alt="Secure document storage visualization" className="rounded-3xl shadow-elevated w-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-secondary/30 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Why Choose SafeSpace?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built with security, simplicity, and accessibility in mind
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => <Card key={index} className="p-8 shadow-card hover:shadow-elevated transition-smooth cursor-pointer group">
                <div className="mb-6 rounded-2xl overflow-hidden">
                  <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover group-hover:scale-105 transition-smooth" />
                </div>
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by thousands across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="p-8 shadow-card hover:shadow-elevated transition-smooth">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                </div>
                <p className="text-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="p-12 lg:p-16 shadow-elevated bg-gradient-primary text-center bg-zinc-800">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Documents?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust SafeSpace for their document storage needs.
              Get started today with our free plan!
            </p>
            <Button onClick={onGetStarted} size="lg" className="h-14 px-12 text-lg bg-white text-primary hover:bg-white/90 shadow-elevated">
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-xl font-bold">SafeSpace</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Secure digital document storage for everyone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-smooth">Features</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-smooth">Pricing</a></li>
                <li><button onClick={() => onNavigate("faq")} className="hover:text-primary transition-smooth">FAQ</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => onNavigate("about")} className="hover:text-primary transition-smooth">About Us</button></li>
                <li><button onClick={() => onNavigate("contact")} className="hover:text-primary transition-smooth">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 SafeSpace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default LandingPage;