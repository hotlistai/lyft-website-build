import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import logoMain from "@/assets/lyft-logo-main.png";
import footerLogo from "@/assets/lyft-footer-logo.png";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border-light">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/">
              <img src={logoMain} alt="Lyft Email" className="h-10" />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-base font-medium text-text-muted hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/pricing" className="text-base font-medium text-text-muted hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link to="/about" className="text-base font-medium text-text-muted hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-base font-medium text-primary transition-colors">
                Contact
              </Link>
            </div>
            <Button
              className="bg-primary text-white font-semibold py-3.5 px-7 rounded-lg shadow-lg shadow-primary/20 hover:bg-primary-hover hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              onClick={() => window.open("https://calendly.com/hotlistai/lyftemail", "_blank")}
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </nav>

      {/* HERO + FORM */}
      <section className="pt-32 pb-24 px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-text-dark mb-6 leading-tight tracking-tight">
              Let's Talk
            </h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Have a question or want to learn more about how Lyft Email can help your business? Send us a message and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-12 shadow-xl shadow-black/5 border border-border-light">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-base font-medium text-text-dark mb-2 block">
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 text-base border-border-light focus:border-primary focus:ring-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-base font-medium text-text-dark mb-2 block">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 text-base border-border-light focus:border-primary focus:ring-primary"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <Label htmlFor="company" className="text-base font-medium text-text-dark mb-2 block">
                  Company
                </Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="h-12 text-base border-border-light focus:border-primary focus:ring-primary"
                  placeholder="Your company name (optional)"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-base font-medium text-text-dark mb-2 block">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[150px] text-base border-border-light focus:border-primary focus:ring-primary resize-none"
                  placeholder="Tell us about your business and what you're looking to achieve..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-white font-semibold py-3.5 px-7 rounded-lg shadow-lg shadow-primary/20 hover:bg-primary-hover hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <p className="text-base text-text-muted mb-4">
              Prefer to schedule a call directly?
            </p>
            <Button
              variant="outline"
              className="bg-transparent text-primary font-semibold py-3.5 px-7 rounded-lg border border-primary hover:bg-primary/5 hover:text-primary-hover transition-all duration-200"
              onClick={() => window.open("https://calendly.com/hotlistai/lyftemail", "_blank")}
            >
              Book a 15-Minute Call
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-border-light py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-semibold text-text-dark mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-text-muted hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-text-muted hover:text-primary">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-text-dark mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-text-muted hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-text-muted hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-text-dark mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-text-muted hover:text-primary">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-text-dark mb-4">Get Started</h4>
              <Button
                className="bg-primary text-white font-semibold py-2.5 px-5 rounded-lg hover:bg-primary-hover transition-all duration-200 w-full"
                onClick={() => window.open("https://calendly.com/hotlistai/lyftemail", "_blank")}
              >
                Book a Demo
              </Button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border-light">
            <img src={footerLogo} alt="Lyft Email" className="h-8 mb-4 md:mb-0" />
            <p className="text-sm text-text-muted">© 2024 Lyft Email. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
