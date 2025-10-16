import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const logo = "https://hotlistai.com/wp-content/uploads/2025/10/lyft-email-logo.avif";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Shield, Target, TrendingUp, Users, Zap, MessageSquare, BarChart3, Calendar } from "lucide-react";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${scrolled ? "shadow-lg" : ""}`}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#overview" className="flex items-center">
              <img src={logo} alt="Lyft Email" className="h-8 sm:h-10" />
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <Button asChild size="sm" className="rounded-full hover:scale-105 transition-transform">
                <a href="#funnel">Get My Outreach Plan</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="overview" className="py-20 sm:py-32 lg:py-40 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
                We don't send cold emails. We start real conversations.
              </h1>
              <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed mb-8 max-w-[540px]">
                Your voice, your data, your outreach — powered by AI precision and human insight.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="rounded-full hover:scale-105 transition-transform shadow-lg">
                  <a href="#funnel">Get My Outreach Plan</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full hover:scale-105 transition-transform">
                  <a href="#how">See How It Works</a>
                </Button>
              </div>
              
              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 text-sm text-foreground/60 pt-6 border-t border-border">
                <span className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  15+ years experience
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  Real-time analytics
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  90%+ inbox rate
                </span>
              </div>
            </motion.div>

            <motion.div 
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Animated dashboard mockup with cross-fade */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {heroImages.map((src, index) => (
                  <motion.img
                    key={src}
                    src={src}
                    alt={`Dashboard preview ${index + 1}`}
                    className="w-full h-auto"
                    loading="lazy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
                    transition={{ duration: 1 }}
                    style={{ position: index === 0 ? 'relative' : 'absolute', top: 0, left: 0, right: 0 }}
                  />
                ))}
                {/* Amber glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-3xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proof & Trust Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-foreground/60 mb-8 fade-up opacity-0 translate-y-8 transition-all duration-700">
            Trusted by growth-driven teams in home services, SaaS, and pro services.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: MessageSquare,
                text: "Started 17 new conversations in the first month."
              },
              {
                icon: Shield,
                text: "Only verified, permission-safe sources."
              },
              {
                icon: Users,
                text: "Every campaign reviewed by a real human before launch."
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="fade-up opacity-0 translate-y-8 transition-all duration-700 hover:shadow-lg hover:scale-105 transition-all"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6 text-center">
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <p className="text-base font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-20 sm:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 fade-up opacity-0 translate-y-8 transition-all duration-700">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Voice Calibration",
                desc: "We learn your tone and rhythm."
              },
              {
                icon: Shield,
                title: "Trusted Sending",
                desc: "Warmed domains, verified delivery."
              },
              {
                icon: Users,
                title: "Lead Locator Build",
                desc: "Find high-fit prospects."
              },
              {
                icon: TrendingUp,
                title: "Launch & Learn",
                desc: "Live campaign with ongoing optimization."
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="fade-up opacity-0 translate-y-8 transition-all duration-700 hover:shadow-xl hover:scale-105 transition-all text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32 bg-secondary">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 fade-up opacity-0 translate-y-8 transition-all duration-700">
            What Makes Us Different
          </h2>
          
          {/* Value cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Zap,
                title: "AI-Powered, Human-Backed",
                desc: "Technology handles the scale. Humans ensure every message sounds like you."
              },
              {
                icon: Target,
                title: "Lead Intelligence",
                desc: "We find prospects with real intent—not just contact information."
              },
              {
                icon: BarChart3,
                title: "Full Transparency",
                desc: "See every open, reply, and booking in real-time. No black boxes."
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="fade-up opacity-0 translate-y-8 transition-all duration-700 hover:shadow-xl hover:scale-105 transition-all"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <item.icon className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Checklist cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Voice matched to your style", "Permission-verified lists", "Real-time performance data"],
              ["Human QA on every campaign", "Warmed sending infrastructure", "90-day engagement cycles"],
              ["Lead Locator intelligence", "Transparent pricing", "Cancel anytime with 30-day notice"]
            ].map((list, index) => (
              <Card 
                key={index} 
                className="fade-up opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Timeline */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 fade-up opacity-0 translate-y-8 transition-all duration-700">
            Getting Started Is Simple
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-border" />
            
            {[
              {
                step: "1",
                title: "Discovery Call",
                desc: "We learn your business, tone, and ideal customer profile."
              },
              {
                step: "2",
                title: "Campaign Build",
                desc: "Voice calibration, Lead Locator setup, and warm-up (2–3 weeks, no charge)."
              },
              {
                step: "3",
                title: "Launch & Optimize",
                desc: "Your campaigns go live. Billing starts. We refine based on results."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="fade-up opacity-0 translate-y-8 transition-all duration-700 relative"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg relative z-10">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 sm:py-32 bg-secondary">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4 fade-up opacity-0 translate-y-8 transition-all duration-700 text-foreground">
            Simple Plans. Serious Results.
          </h2>
          <p className="text-center text-lg text-foreground mb-16 fade-up opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "100ms" }}>
            Billing starts only when your campaigns go live.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Starter */}
            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all" style={{ transitionDelay: "200ms" }}>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Starter</CardTitle>
                <CardDescription className="text-foreground/70">Perfect for testing outbound</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-4xl font-bold mb-2 text-foreground">$900<span className="text-lg font-normal text-foreground/60">/mo</span></div>
                </div>
                <ul className="space-y-3">
                  {[
                    "1 campaign",
                    "1,000 verified prospects",
                    "Human QA",
                    "Analytics"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full rounded-full">
                  <a href="#funnel">Get Started</a>
                </Button>
              </CardContent>
            </Card>

            {/* Growth - Most Popular */}
            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 shadow-xl hover:shadow-2xl hover:scale-105 transition-all border-2 border-primary relative" style={{ transitionDelay: "300ms" }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Growth</CardTitle>
                <CardDescription className="text-foreground/70">For steady pipeline</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-4xl font-bold mb-2 text-foreground">$1,800<span className="text-lg font-normal text-foreground/60">/mo</span></div>
                </div>
                <ul className="space-y-3">
                  {[
                    "2–3 campaigns",
                    "3,500 prospects",
                    "Voice calibration",
                    "Advanced analytics"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full rounded-full">
                  <a href="#funnel">Get Started</a>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise */}
            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all" style={{ transitionDelay: "400ms" }}>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Enterprise</CardTitle>
                <CardDescription className="text-foreground/70">Unlimited scale</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-4xl font-bold mb-2 text-foreground">$3,000+<span className="text-lg font-normal text-foreground/60">/mo</span></div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Unlimited campaigns",
                    "Advanced targeting",
                    "Team dashboards",
                    "Priority support"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full rounded-full">
                  <a href="#funnel">Contact Sales</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Billing Notes */}
          <Card className="max-w-3xl mx-auto mb-12 fade-up opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "500ms" }}>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-4 text-center text-foreground">Billing Notes</h3>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Setup/warm-up is free (2–3 weeks)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Billing starts when campaigns launch</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>90-day cycles, cancel anytime with 30-day notice</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center fade-up opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "600ms" }}>
            <Button asChild size="lg" className="rounded-full hover:scale-105 transition-transform">
              <a href="#funnel">Get My Outreach Plan</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 fade-up opacity-0 translate-y-8 transition-all duration-700">
            Quick Answers for You.
          </h2>
          
          <Accordion type="single" collapsible className="fade-up opacity-0 translate-y-8 transition-all duration-700">
            <AccordionItem value="item-1">
              <AccordionTrigger>When does billing start?</AccordionTrigger>
              <AccordionContent>
                Billing starts only when your campaigns go live. Setup and warm-up period (2–3 weeks) is completely free.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I cancel anytime?</AccordionTrigger>
              <AccordionContent>
                Yes, you can cancel with 30-day notice. We work on 90-day cycles for best results.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What makes this different from Apollo or HubSpot?</AccordionTrigger>
              <AccordionContent>
                We combine AI-powered personalization with human oversight. Every campaign is reviewed before sending, and we use Lead Locator intelligence to find prospects with real intent.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do I own my data?</AccordionTrigger>
              <AccordionContent>
                Absolutely. All prospect data and campaign results belong to you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Will this hurt my domain reputation?</AccordionTrigger>
              <AccordionContent>
                No. We use proper warm-up protocols and verified, permission-safe sending infrastructure. Our 90%+ inbox placement rate proves it.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>What happens after the first campaign?</AccordionTrigger>
              <AccordionContent>
                We optimize based on results. Each campaign gets smarter with data-driven refinements to messaging, timing, and targeting.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Do you write the emails?</AccordionTrigger>
              <AccordionContent>
                We collaborate with you. Our AI learns your voice, and our team refines every message to sound authentically like you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="funnel" className="py-20 sm:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Ready to lift your outbound?
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              We'll help you turn cold contacts into real conversations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button asChild size="lg" variant="secondary" className="rounded-full hover:scale-105 transition-transform">
                <a href="https://calendly.com/hotlistai/lyftemail" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Get My Outreach Plan
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full hover:scale-105 transition-transform border-white !text-white hover:bg-white/10">
                <a href="#pricing" className="text-white">See Plans & Pricing</a>
              </Button>
            </div>
            <p className="text-sm opacity-75">
              Includes tone analysis, audience targeting, and campaign prep.<br />
              No billing until campaigns go live.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(var(--navy))] text-white py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="#overview" className="hover:text-primary transition-colors text-sm">
              About
            </a>
            <a href="#how" className="hover:text-primary transition-colors text-sm">
              How It Works
            </a>
            <a href="#pricing" className="hover:text-primary transition-colors text-sm">
              Pricing
            </a>
            <a href="#features" className="hover:text-primary transition-colors text-sm">
              Features
            </a>
            <a href="#funnel" className="hover:text-primary transition-colors text-sm">
              Get Started
            </a>
          </div>
          <p className="text-sm text-white/70 text-center">
            © {new Date().getFullYear()} Lyft Email. AI built, human backed.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
