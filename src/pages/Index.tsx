import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const logo = "https://hotlistai.com/wp-content/uploads/2025/10/lyft-email-logo.avif";
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
                <a href="https://calendly.com/hotlistai/lyftemail">Start My Outreach</a>
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
                  <a href="https://calendly.com/hotlistai/lyftemail">Start My Outreach</a>
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
                
                {/* Overlay card - Live Results */}
                <Card className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:w-80 shadow-xl bg-white/95 backdrop-blur">
                  <CardHeader className="pb-2 space-y-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xs text-muted-foreground font-medium">Campaign: Q1 Outreach</CardTitle>
                      <span className="inline-flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                    </div>
                    <CardDescription className="text-sm font-semibold text-foreground leading-tight">
                      "Hey Sarah, noticed you just expanded into Austin..."
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Delivered 8:42 AM</span>
                      <span className="text-accent font-semibold">Opened 8:51 AM</span>
                    </div>
                    <div className="p-3 rounded-lg bg-secondary/30 border border-accent/20">
                      <p className="text-xs italic text-foreground/80 leading-relaxed">
                        "This is exactly what we need. Can we jump on a call this week?"
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">— Sarah M. • 9:03 AM</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <div className="text-center">
                        <p className="text-lg font-bold text-accent">92%</p>
                        <p className="text-xs text-muted-foreground">Opens</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-accent">24%</p>
                        <p className="text-xs text-muted-foreground">Replies</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-accent">12%</p>
                        <p className="text-xs text-muted-foreground">Booked</p>
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
                <a href="https://calendly.com/hotlistai/lyftemail">Start My Outreach</a>
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
                        <a href="https://calendly.com/hotlistai/lyftemail">Start My Outreach</a>
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
      <section id="pricing" className="py-20 sm:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-center mb-4"
          >
            Simple Plans. Serious Results.
          </motion.h2>
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-center text-foreground/60 mb-16 max-w-3xl mx-auto"
          >
            No retainers. No gimmicks. Just data-driven, human-sounding emails that book real conversations.
          </motion.p>

          {/* Why 3 Months Section */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl mx-auto mb-12 bg-white rounded-xl p-8 shadow-sm border border-border"
          >
            <h3 className="text-xl font-semibold text-center mb-4">Why 3 Months?</h3>
            <p className="text-center text-foreground/60 text-sm">
              Inbox trust and follow-ups (43% of appointments) require consistency.
            </p>
          </motion.div>

          {/* Setup Fee */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-white rounded-xl px-8 py-4 shadow-sm border border-border">
              <p className="text-lg font-semibold">
                One-Time Setup: <span className="text-primary">$500 flat</span>
              </p>
              <p className="text-sm text-foreground/60 mt-1">
                (covers domain setup, warm-up, voice model, and list sourcing)
              </p>
            </div>
          </motion.div>

          {/* Monthly Plans Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-2">Monthly Plans</h3>
            <p className="text-sm text-foreground/60">Three-month minimum — because real results take consistency.</p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            {/* Starter Card */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full bg-white border border-border shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 rounded-xl">
                <CardHeader className="pb-4 text-center">
                  <div className="text-4xl mb-3">📨</div>
                  <CardTitle className="text-xl font-semibold">Starter</CardTitle>
                  <div className="mt-3">
                    <span className="text-3xl font-bold">$800</span>
                    <span className="text-foreground/60 text-sm">/mo</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground/60 text-center">
                    For local tests — 3 domains, tone model, 2K contacts.
                  </p>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm font-medium text-center">Target: 4–10 booked per month</p>
                  </div>
                  <Button asChild className="w-full rounded-full" size="lg">
                    <a href="https://calendly.com/hotlistai/lyftemail">Start My Outreach</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Growth Card - Most Popular */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="h-full bg-white border-2 border-primary shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 rounded-xl relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold shadow-sm">
                    Most Popular
                  </span>
                </div>
                <CardHeader className="pb-4 text-center pt-6">
                  <div className="text-4xl mb-3">🚀</div>
                  <CardTitle className="text-xl font-semibold">Growth</CardTitle>
                  <div className="mt-3">
                    <span className="text-3xl font-bold">$1,500</span>
                    <span className="text-foreground/60 text-sm">/mo</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground/60 text-center">
                    For steady pipeline — 5–7 domains, A/B testing, CRM routing.
                  </p>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm font-medium text-center">Target: 12–25 booked per month</p>
                  </div>
                  <Button asChild className="w-full rounded-full" size="lg">
                    <a href="https://calendly.com/hotlistai/lyftemail">Start My Outreach</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Surge Card */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="h-full bg-white border border-border shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 rounded-xl">
                <CardHeader className="pb-4 text-center">
                  <div className="text-4xl mb-3">📊</div>
                  <CardTitle className="text-xl font-semibold">Surge</CardTitle>
                  <div className="mt-3">
                    <span className="text-3xl font-bold">$2,500</span>
                    <span className="text-foreground/60 text-sm">/mo</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground/60 text-center">
                    For multi-market scale — 10+ domains, analytics dashboard, dedicated ops & data.
                  </p>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm font-medium text-center">Target: 30–50 booked per month</p>
                  </div>
                  <Button asChild className="w-full rounded-full" size="lg">
                    <a href="https://calendly.com/hotlistai/lyftemail">Start My Outreach</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Guarantees */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-3xl mx-auto mb-16 text-center space-y-2 text-sm text-foreground/60"
          >
            <p>
              <span className="font-semibold text-foreground">🛠 Make-Good:</span> invalids credited/replaced in 48h
            </p>
            <p>
              <span className="font-semibold text-foreground">🎯 Ramp Credit:</span> if 3-month results below plan → 25% renewal credit
            </p>
          </motion.div>

          {/* Custom Pay-Per-Lead */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <div className="border-t border-border pt-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-3">Custom Pay-Per-Lead</h3>
                <p className="text-foreground/60">Prefer performance-only pricing?</p>
              </div>
              
              <Card className="bg-secondary/30 border border-border shadow-sm rounded-xl">
                <CardContent className="pt-6 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div className="text-center p-4 bg-white rounded-lg">
                      <p className="font-semibold mb-1">$1,000 setup</p>
                      <p className="text-xs text-foreground/60">+ $180 per lead</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <p className="font-semibold mb-1">No monthly base</p>
                      <p className="text-xs text-foreground/60">Perfect for roofing, solar, HVAC</p>
                    </div>
                  </div>
                  <p className="text-xs text-center text-foreground/60 pt-2">
                    Includes 48-hour make-good and optional 2–3% close-fee alignment
                  </p>
                  <Button asChild className="w-full rounded-full mt-4" variant="outline">
                    <a href="https://calendly.com/hotlistai/lyftemail">Contact us for Custom PPL Pricing</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Results Footer */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center"
          >
            <p className="text-sm text-foreground/60">
              Inbox placement 90%+ · Retention 90%+ · "Lead" = booked conversation
            </p>
          </motion.div>
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
                diagramType: "intake" as const
              },
              { 
                title: "Trusted sending", 
                desc: "Infrastructure setup with domain warm‑up",
                diagramType: "trusted-sending" as const
              },
              { 
                title: "Lead Locator build", 
                desc: "Precision list creation with verified data",
                diagramType: "lead-locator" as const
              },
              { 
                title: "Launch and learn", 
                desc: "Live monitoring with continuous optimization",
                diagramType: "launch-learn" as const
              }
            ].map((step, index) => (
              <div key={index} className="fade-up opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="text-center">
                  <div className="mb-4 h-32 flex items-center justify-center">
                    <Diagram type={step.diagramType} className="h-full w-full" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground/70">{step.desc}</p>
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
            <a href="https://calendly.com/hotlistai/lyftemail">Start My Outreach</a>
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
            <a href="https://calendly.com/hotlistai/lyftemail" className="hover:text-primary transition-colors">
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
