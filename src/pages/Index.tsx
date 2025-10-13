import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import logo from "@/assets/lyftemail-logo.png";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Play } from "lucide-react";
import { Diagram } from "@/components/Diagram";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  
  const heroImages = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0"
  ];

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
      <nav className={`sticky top-0 z-50 bg-white/80 border-b border-border/50 backdrop-blur-md transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#overview" className="flex items-center">
              <img src={logo} alt="Lyft Email" className="h-8 sm:h-10" />
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how" className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">
                How It Works
              </a>
              <a href="#pricing" className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">
                Pricing
              </a>
              <Button asChild size="sm">
                <a href="https://join.hotlistai.com/book/">Start My Outreach</a>
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
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 max-w-xl">
                Real replies. Zero fluff. Predictable revenue.
              </h1>
              <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed mb-8 max-w-[540px]">
                Cold email shouldn't feel cold. Lyft Email turns outbound into real conversations that sound human, 
                scale naturally, and book real meetings. Built by Hotlist AI, it combines enterprise‑grade Lead 
                Intelligence with tone modeling that mirrors your own voice—so every message feels personal, not automated.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg">
                  <a href="https://join.hotlistai.com/book/">Start My Outreach</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#how">See How It Works</a>
                </Button>
              </div>
              
              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  Operators 15+ years
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  Real‑time metrics
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  90% inbox placement
                </span>
              </div>
            </motion.div>

            <motion.div 
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Static tile grid of images */}
              <div className="grid grid-cols-2 gap-4">
                {heroImages.map((src, index) => (
                  <div
                    key={src}
                    className={`rounded-2xl overflow-hidden shadow-lg ${
                      index === 0 ? 'col-span-2' : ''
                    }`}
                  >
                    <img
                      src={src}
                      alt={`Dashboard preview ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
                
                {/* Overlay card - Today at a glance */}
                <Card className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:w-80 shadow-xl bg-white/95 backdrop-blur">
                  <CardHeader className="pb-3 space-y-1">
                    <CardTitle className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Today at a glance</CardTitle>
                    <CardDescription className="text-2xl font-bold text-foreground leading-tight">
                      Kid Activity Time
                    </CardDescription>
                    <p className="text-xs text-muted-foreground pt-1">Team bonding session underway</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-foreground font-semibold">75%</span>
                      </div>
                      <div className="h-2 bg-[hsl(var(--eggshell))] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[hsl(var(--golden))] rounded-full transition-all duration-500"
                          style={{ width: '75%' }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explainer Strip */}
      <section className="py-6 bg-white border-y border-border/50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50">
              <span className="font-semibold text-foreground">Open rate:</span>
              <span className="text-accent font-bold">90%+</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50">
              <span className="font-semibold text-foreground">Reply rate:</span>
              <span className="text-accent font-bold">20%+</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50">
              <span className="font-semibold text-foreground">Booked calls:</span>
              <span className="text-accent font-bold">10%+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 sm:py-32 bg-secondary">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 sm:mb-20 fade-up opacity-0 translate-y-8 transition-all duration-700">
            Cold email is broken
          </h2>
          
          {/* Desktop: horizontal step line */}
          <div className="hidden md:block relative">
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-border" />
            <div className="grid grid-cols-3 gap-8 relative">
              {[
                "Cold email feels robotic and gets ignored.",
                "Generic tools flood inboxes instead of opening conversations.",
                "Agencies promise results without transparency or data."
              ].map((text, index) => (
                <div key={index} className="fade-up opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-accent flex items-center justify-center text-xl font-bold text-foreground mb-6 shadow-lg">
                      {index + 1}
                    </div>
                    <p className="text-lg font-semibold">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile: stacked cards */}
          <div className="md:hidden grid gap-6">
            {[
              "Cold email feels robotic and gets ignored.",
              "Generic tools flood inboxes instead of opening conversations.",
              "Agencies promise results without transparency or data."
            ].map((text, index) => (
              <Card key={index} className="fade-up opacity-0 translate-y-8 transition-all duration-700 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{text}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 sm:py-32 bg-muted">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 sm:mb-20 fade-up opacity-0 translate-y-8 transition-all duration-700">
            The Lyft Email approach
          </h2>
          
          {/* Tabbed interface */}
          <Tabs defaultValue="tab1" className="fade-up opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto">
              <TabsTrigger value="tab1" className="text-sm py-3">AI‑Built, Human‑Backed</TabsTrigger>
              <TabsTrigger value="tab2" className="text-sm py-3">Lead Intelligence</TabsTrigger>
              <TabsTrigger value="tab3" className="text-sm py-3">Tone‑Matched</TabsTrigger>
              <TabsTrigger value="tab4" className="text-sm py-3">Predictable Pipeline</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-8">
              <Card className="shadow-lg">
                <CardContent className="pt-6">
                  <p className="text-lg mb-6">Every campaign blends automation with human editing for warmth and clarity.</p>
                  <Diagram type="ai-human" className="h-[200px]" />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tab2" className="mt-8">
              <Card className="shadow-lg">
                <CardContent className="pt-6">
                  <p className="text-lg mb-6">Lead Locator filters millions of records to find motivated, verified, ready‑to‑act prospects.</p>
                  <Diagram type="data-filter" className="h-[240px]" />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tab3" className="mt-8">
              <Card className="shadow-lg">
                <CardContent className="pt-6">
                  <p className="text-lg mb-6">Modeled from your own words so automation feels like you.</p>
                  <Diagram type="tone-model" className="h-[200px]" />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tab4" className="mt-8">
              <Card className="shadow-lg">
                <CardContent className="pt-6">
                  <p className="text-lg mb-6">Systems learn from every reply and get smarter with each send.</p>
                  <Diagram type="pipeline" className="h-[200px]" />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Lead Intelligence callout */}
          <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 shadow-xl border-2 border-accent/20 relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-[0.08] pointer-events-none"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1517433456452-f9633a875f6f)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="absolute inset-0 bg-[hsl(var(--cream))] opacity-90 pointer-events-none" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl">Lead Intelligence Advantage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { label: "Ownership", value: "absentee, corporate, out‑of‑state" },
                  { label: "Motivation", value: "tax delinquent, vacant, expired, pre‑foreclosure" },
                  { label: "Equity and finance", value: "high equity, liens, mortgage age, sale date" },
                  { label: "Property", value: "size, value, lot, year built" },
                  { label: "Timing", value: "ownership length, last transfer, address change" },
                  { label: "Predictive", value: "likely sellers, senior owners, probate, tired landlords" }
                ].map((item, index) => (
                  <div key={index} className="px-4 py-3 bg-secondary/50 rounded-lg border border-border">
                    <div className="font-semibold text-sm text-foreground mb-1">{item.label}</div>
                    <div className="text-xs text-foreground/70">{item.value}</div>
                  </div>
                ))}
              </div>
              <blockquote className="italic text-foreground/80 border-l-4 border-accent pl-4 py-2">
                "Fifteen years in the data mines taught us this: The right list is half the sale. Lyft Email finishes the job."
              </blockquote>
              <Button asChild>
                <a href="https://join.hotlistai.com/book/">Start My Outreach</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 sm:mb-20 fade-up opacity-0 translate-y-8 transition-all duration-700">
            What this gives you
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {[
              { title: "Human Tone Engine", desc: "Every message feels like it came from you." },
              { title: "Lead Locator Advantage", desc: "Intent signals other tools miss." },
              { title: "Proof Over Promises", desc: "Open, reply, and booking rates in plain numbers." }
            ].map((item, index) => (
              <Card key={index} className="fade-up opacity-0 translate-y-8 transition-all duration-700 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all" style={{ transitionDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Video modal */}
          <div className="text-center mb-16 fade-up opacity-0 translate-y-8 transition-all duration-700">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="gap-2">
                  <Play className="w-5 h-5" />
                  See a two‑minute walk‑through
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <div className="aspect-video bg-secondary/50 rounded-lg flex items-center justify-center">
                  <p className="text-foreground/60">[Video placeholder - Add your video URL here]</p>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "What goes on the team",
                items: [
                  "Operators with 15+ years in enterprise lead intelligence and CRM",
                  "Real‑time transparency on open, reply, and booked meetings",
                  "Success measured by booked revenue, not vanity clicks",
                  "Deliverability and data practices documented and shared"
                ]
              },
              {
                title: "Quick setup plan",
                items: [
                  "Voice intake and tone modeling",
                  "Domain and inbox setup with warm‑up",
                  "List build via Lead Locator precision filters",
                  "Launch with live inbox monitoring and Zoom check‑ins"
                ]
              },
              {
                title: "Extra helpful touches",
                items: [
                  "Weekly deliverability and domain audits",
                  "Soft opt‑outs in every message",
                  "Ongoing warm‑up and rotation to keep inboxes trusted"
                ]
              }
            ].map((card, index) => (
              <Card key={index} className="fade-up opacity-0 translate-y-8 transition-all duration-700 bg-secondary shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all" style={{ transitionDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Section */}
      <section id="setup" className="py-20 sm:py-32 bg-muted">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-border" />
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {[
                { title: "Voice Modeling", desc: "Capture your tone so every message sounds like you." },
                { title: "Infrastructure", desc: "Domains, inboxes, warm‑up, and monitoring handled for you." },
                { title: "Lead Locator", desc: "Build intent‑rich lists with verified data and predictive signals." }
              ].map((step, index) => (
                <div key={index} className="fade-up opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shadow-lg flex-shrink-0">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-foreground/70 mb-4 ml-20">{step.desc}</p>
                    <div className="ml-20">
                      <Button asChild size="sm">
                        <a href="https://join.hotlistai.com/book/">Start My Outreach</a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 sm:py-32 bg-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1527430253228-e93688616381)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'rotate(-5deg) scale(1.2)'
          }}
        />
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 fade-up opacity-0 translate-y-8 transition-all duration-700">
            Simple Plans. Serious Results.
          </h2>
          <p className="text-lg sm:text-xl text-center text-foreground/70 max-w-3xl mx-auto mb-16 sm:mb-20 fade-up opacity-0 translate-y-8 transition-all duration-700">
            We price like operators, not agencies. No vague retainers or pay‑per‑appointment gimmicks. 
            Every plan includes voice modeling, domain setup, deliverability protection, and human review.
          </p>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8">
            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 shadow-lg border-2 border-transparent hover:shadow-2xl hover:-translate-y-1 hover:border-accent transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <p className="text-3xl font-bold mt-2">$1,000–1,500<span className="text-base font-normal text-foreground/60">/mo</span></p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Tone modeling and brand voice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>3 domains and 9 inboxes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Light personalization plus live check‑in</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <a href="https://join.hotlistai.com/book/">Start My Outreach</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 shadow-lg border-2 border-primary hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                Most Popular
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-2xl">Growth</CardTitle>
                <p className="text-3xl font-bold mt-2">$1,500–2,500<span className="text-base font-normal text-foreground/60">/mo</span></p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Advanced data enrichment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>3+ variants and A/B tests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Deliverability reporting and predictive segmenting</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <a href="https://join.hotlistai.com/book/">Start My Outreach</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-200 shadow-lg border-2 border-transparent hover:shadow-2xl hover:-translate-y-1 hover:border-accent transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Surge</CardTitle>
                <p className="text-3xl font-bold mt-2">$3,000–4,000<span className="text-base font-normal text-foreground/60">+/mo</span></p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Lead Locator Pro access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Analytics dashboard and CRM routing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Weekly performance calls</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <a href="https://join.hotlistai.com/book/">Start My Outreach</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-sm text-foreground/60 fade-up opacity-0 translate-y-8 transition-all duration-700">
            Average inbox placement: 90%+ | Client retention: 90%+
          </p>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-20 sm:py-32 bg-secondary">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Full Compliance", desc: "CAN‑SPAM and CCPA with plain opt‑outs." },
              { title: "Data Ethics", desc: "Only verified, permission‑safe sources." },
              { title: "Human Oversight", desc: "Every campaign reviewed by a human before sending." }
            ].map((item, index) => (
              <Card key={index} className="fade-up opacity-0 translate-y-8 transition-all duration-700 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all relative" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-accent" />
                </div>
                <CardHeader className="pt-16">
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how" className="py-20 sm:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 sm:mb-20 fade-up opacity-0 translate-y-8 transition-all duration-700">
            How it works
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Intake for tone", 
                desc: "We learn your voice and messaging style",
                imgUrl: "https://images.unsplash.com/photo-1525186402429-b4ff38bedbec"
              },
              { 
                title: "Trusted sending", 
                desc: "Infrastructure setup with domain warm‑up",
                imgUrl: "https://images.unsplash.com/photo-1525186402429-b4ff38bedbec"
              },
              { 
                title: "Lead Locator build", 
                desc: "Precision list creation with verified data",
                imgUrl: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
              },
              { 
                title: "Launch and learn", 
                desc: "Live monitoring with continuous optimization",
                imgUrl: "https://images.unsplash.com/photo-1527430253228-e93688616381"
              }
            ].map((step, index) => (
              <div key={index} className="fade-up opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="text-center">
                  <img 
                    src={step.imgUrl}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-14 h-14 rounded-lg object-cover mx-auto mb-3 border border-[hsl(var(--eggshell))]"
                  />
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground/70 mb-4">{step.desc}</p>
                  <Diagram 
                    type={["intake", "trusted-sending", "lead-locator", "launch-learn"][index] as any}
                    className="h-[180px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book" className="py-20 sm:py-32 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-up opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Ready to lift your outbound?
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 mb-8">
            Schedule a Zoom call and we'll show you how Lyft Email turns cold outreach into warm conversations.
          </p>
          <Button asChild size="lg">
            <a href="https://join.hotlistai.com/book/">Start My Outreach</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(var(--navy))] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            <a href="#overview" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#solution" className="hover:text-primary transition-colors">
              Lead Intelligence
            </a>
            <a href="#pricing" className="hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#features" className="hover:text-primary transition-colors">
              Client Results
            </a>
            <a href="https://join.hotlistai.com/book/" className="hover:text-primary transition-colors">
              Start My Outreach
            </a>
          </div>
          <p className="text-sm text-white/70 text-center">
            © {new Date().getFullYear()} Lyft Email. AI‑built, human‑backed.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
