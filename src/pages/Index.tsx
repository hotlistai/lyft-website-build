import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Mic, Target, Rocket, Shield, Brain, BarChart3, Home, Briefcase, Syringe, Hammer, X, TrendingUp, Users, Zap } from "lucide-react";
import logoMain from "@/assets/lyft-logo-main.png";
import logoWhite from "@/assets/lyft-icon-white.png";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <img src={logoMain} alt="Lyft Email" className="h-10" />
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("how-it-works")} className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
                How It Works
              </button>
              <button onClick={() => scrollToSection("results")} className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
                Results
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
                FAQ
              </button>
            </div>
            <Button className="gradient-ui text-white font-semibold px-6 rounded-full hover:shadow-lg transition-all" onClick={() => window.open("https://calendly.com/hotlistai/lyftemail", "_blank")}>
              Get My Outreach Plan
            </Button>
          </div>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Find, Contact & Close <br />
                <span className="gradient-text">Your Ideal Clients</span>
              </h1>
              <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                Replace expensive lead platforms with hyper-personalized outreach that lands in inboxes, starts real conversations, and actually converts—all without the platform tax.
              </p>
              <Button size="lg" className="gradient-ui text-white font-semibold px-8 py-6 text-lg rounded-full hover:shadow-xl transition-all" onClick={() => window.open("https://calendly.com/hotlistai/lyftemail", "_blank")}>
                Get My Outreach Plan
              </Button>
              <div className="flex items-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-secondary" />
                  <span className="text-sm text-foreground/70">Free strategy call</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-secondary" />
                  <span className="text-sm text-foreground/70">No commitment</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 blur-3xl opacity-50 rounded-3xl"></div>
              <div className="relative bg-white border border-border rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-ui flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Analytics</p>
                      <p className="text-xs text-muted-foreground">Campaign Dashboard</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">Live</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-4">
                    <p className="text-sm text-foreground/60 mb-1">Contacted</p>
                    <p className="text-3xl font-bold text-foreground">1,770</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-4">
                    <p className="text-sm text-foreground/60 mb-1">Opened</p>
                    <p className="text-3xl font-bold text-foreground">338</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-4">
                    <p className="text-sm text-foreground/60 mb-1">Replied</p>
                    <p className="text-3xl font-bold text-foreground">44</p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-2xl p-4">
                    <p className="text-sm text-foreground/60 mb-1">Positive</p>
                    <p className="text-3xl font-bold text-foreground">13</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-foreground/60">Revenue</p>
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-3xl font-bold gradient-text">$3,900</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST BAR */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-foreground/70">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-secondary" />
              <span>10,000+ campaigns delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-secondary" />
              <span>89% average inbox rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-secondary" />
              <span>Zero spam complaints</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-secondary" />
              <span>Human QA on every email</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE PROBLEM */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/50 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6">
                Lead costs are out of control.<br />
                And it's only getting worse.
              </h2>
              <div className="text-lg text-foreground/70 space-y-4 leading-relaxed">
                <p>
                  Thumbtack, Angi, and Google Ads raised prices 30-40% in the last year. You're competing with everyone in your market for the same leads. Meanwhile, AI email tools flooded everyone's inbox and killed reply rates across the board.
                </p>
                <p>
                  You're stuck paying more for worse results, with zero alternative.
                </p>
                <p className="font-semibold text-foreground">
                  Unless you own your own pipeline.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-border">
                <div className="space-y-6">
                  <div className="flex items-end gap-2 h-48">
                    <div className="flex-1 bg-gradient-to-t from-red-200 to-red-100 rounded-t-lg" style={{ height: "40%" }}></div>
                    <div className="flex-1 bg-gradient-to-t from-red-300 to-red-200 rounded-t-lg" style={{ height: "60%" }}></div>
                    <div className="flex-1 bg-gradient-to-t from-red-400 to-red-300 rounded-t-lg" style={{ height: "75%" }}></div>
                    <div className="flex-1 bg-gradient-to-t from-red-500 to-red-400 rounded-t-lg" style={{ height: "90%" }}></div>
                    <div className="flex-1 bg-gradient-to-t from-red-600 to-red-500 rounded-t-lg" style={{ height: "100%" }}></div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600">+40%</div>
                    <div className="text-sm text-foreground/60 font-medium">Lead cost increase (2024)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE SHIFT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-primary pl-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-8">
              What if you could reach your ideal customers directly—without the platform tax?
            </h2>
            <div className="text-lg text-foreground/70 space-y-6 leading-relaxed">
              <p>
                That's what Lyft Email does. We build hyper-personalized outbound campaigns that sound human, land in inboxes, and start real conversations. Not templates. Not spam. Not fighting for scraps on lead platforms.
              </p>
              <p>
                We started building this tech for Fortune 500 companies. Then a roofer in Dallas asked if we could help. We applied the same infrastructure—voice modeling, localized messaging, enterprise-grade deliverability—to his local business.
              </p>
              <p>
                Month two: $37.5K contract and 10 free inspections.
              </p>
              <p className="font-semibold text-foreground">
                That's when we realized this wasn't just for enterprise. This kills Thumbtack for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-foreground mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-ui text-white text-2xl font-bold mb-6">
                1
              </div>
              <Mic className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">We Learn Your Voice</h3>
              <p className="text-foreground/70 leading-relaxed">
                Share a quick voice note or sample email. Our AI models your tone, vocabulary, and style so every message sounds like it came from you—not a template.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-ui text-white text-2xl font-bold mb-6">
                2
              </div>
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">We Build Your List</h3>
              <p className="text-foreground/70 leading-relaxed">
                We identify and verify your exact ideal customers (by industry, location, title, whatever matters). No bought lists. No spam traps. Just real people who need what you offer.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-ui text-white text-2xl font-bold mb-6">
                3
              </div>
              <Rocket className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">We Launch & Optimize</h3>
              <p className="text-foreground/70 leading-relaxed">
                Emails go live with human QA on every message. Live dashboard shows opens, replies, and bookings in real time. We adjust based on performance—you just take the calls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: PROOF (RESULTS) */}
      <section id="results" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-foreground mb-16">
            Real businesses. Real results.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-border">
              <div className="text-5xl font-bold gradient-text mb-4">$37.5K</div>
              <p className="text-lg text-foreground mb-2">Contract value closed in month two</p>
              <p className="text-sm text-foreground/50 italic">Roofing • Dallas</p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-border">
              <div className="text-5xl font-bold gradient-text mb-4">10 inspections</div>
              <p className="text-lg text-foreground mb-2">Booked without spending a dollar on ads</p>
              <p className="text-sm text-foreground/50 italic">Roofing • Dallas</p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-border">
              <div className="text-5xl font-bold gradient-text mb-4">89% inbox rate</div>
              <p className="text-lg text-foreground mb-2">Average across all campaigns</p>
              <p className="text-sm text-foreground/50 italic">All Industries</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: COMPARISON */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-foreground mb-16">
            Stop renting. Start owning.
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Old Way (Lead Platforms)</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground/70">Costs rise 30-40% per year</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground/70">You compete with everyone else</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground/70">Zero control over lead quality</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground/70">Pay per lead, win or lose</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground/70">No pipeline visibility</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Lyft Email Way</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground/70">Flat monthly cost, predictable ROI</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground/70">Exclusive access to your targets</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground/70">You approve every list and message</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground/70">Only pay when it's working</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground/70">Live dashboard, full transparency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: THE TECH */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-foreground mb-16">
            Built different.
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center bg-white rounded-3xl p-8 shadow-lg border border-border">
              <div className="w-16 h-16 rounded-2xl gradient-ui flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Deliverability Infrastructure</h3>
              <p className="text-foreground/70 leading-relaxed">
                Domain warming, no tracking pixels, AI inbox monitoring. We engineer inbox placement, not just send volume.
              </p>
            </div>
            <div className="text-center bg-white rounded-3xl p-8 shadow-lg border border-border">
              <div className="w-16 h-16 rounded-2xl gradient-purple flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Hyper-Personalization Engine</h3>
              <p className="text-foreground/70 leading-relaxed">
                Voice modeling, street-level localization, dynamic fields that feel natural. Every email sounds like you wrote it.
              </p>
            </div>
            <div className="text-center bg-white rounded-3xl p-8 shadow-lg border border-border">
              <div className="w-16 h-16 rounded-2xl gradient-ui flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Full Transparency</h3>
              <p className="text-foreground/70 leading-relaxed">
                Live performance dashboards. See opens, replies, and bookings in real time. No black boxes, no guessing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: WHO THIS IS FOR */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-foreground mb-16">
            Built for enterprise. Works for everyone.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted rounded-2xl p-8 border border-border">
              <Home className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Home Services</h3>
              <p className="text-foreground/60 italic">"Thumbtack costs are eating my margins"</p>
            </div>
            <div className="bg-muted rounded-2xl p-8 border border-border">
              <Briefcase className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">B2B SaaS</h3>
              <p className="text-foreground/60 italic">"Cold email tools killed our reply rates"</p>
            </div>
            <div className="bg-muted rounded-2xl p-8 border border-border">
              <Syringe className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Med Spas & Wellness</h3>
              <p className="text-foreground/60 italic">"I need clients, not just clicks"</p>
            </div>
            <div className="bg-muted rounded-2xl p-8 border border-border">
              <Hammer className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Contractors & Trade Services</h3>
              <p className="text-foreground/60 italic">"I can't compete with big ad budgets"</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: RISK REVERSAL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#FFF7E6] rounded-2xl p-12 border-2 border-[#FCA311]">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
              We take the risk, not you.
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed text-center">
              Free domain warm-up. Free list building. Free first campaign setup. You don't pay until emails are landing in inboxes and conversations are starting. If it doesn't work, you don't pay. That's the deal.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 11: TESTIMONIAL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-2xl p-12 shadow-xl border border-border">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-full gradient-ui flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                MT
              </div>
              <div className="flex-1">
                <p className="text-2xl text-foreground leading-relaxed mb-6">
                  "Month two, we closed a $37.5K contract and booked 10 free inspections—all from emails that sounded like me. I thought this stuff only worked for tech companies. Turns out it works way better than Thumbtack ever did."
                </p>
                <div>
                  <p className="text-lg font-bold text-foreground">Mike T.</p>
                  <p className="text-foreground/60">Owner, Apex Roofing • Dallas, TX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: FINAL CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 gradient-ui">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            While your competitors rent leads, you could own the pipeline.
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
            Book a free strategy call. We'll show you the exact campaigns we'd run, who we'd target, and what results to expect—before you commit to anything.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-6 h-auto shadow-xl" onClick={() => window.open("https://calendly.com/hotlistai/lyftemail", "_blank")}>
            Get My Outreach Plan
          </Button>
          <p className="text-sm text-white/80 mt-6">
            15-minute Zoom • See your plan first • No pressure, just proof
          </p>
        </div>
      </section>

      {/* SECTION 13: FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-foreground mb-16">
            Questions you're probably asking.
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-bold text-foreground hover:no-underline">
                How is this different from other cold email tools?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed">
                We're not a tool—we're a done-for-you service. You don't set up domains, write copy, or manage lists. We handle everything from voice modeling to inbox monitoring. You just take the calls.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-bold text-foreground hover:no-underline">
                Will this work for my industry?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed">
                If you have a defined target customer and a clear offer, yes. We've run this for roofers, SaaS companies, med spas, contractors, and more. The infrastructure is the same—we just customize the messaging.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-bold text-foreground hover:no-underline">
                How long until I see results?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed">
                Most campaigns start generating replies within 7-10 days. Deals close anywhere from 2 weeks to 2 months depending on your sales cycle. We optimize as we go.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-bold text-foreground hover:no-underline">
                What if my emails go to spam?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed">
                They won't. We warm domains, avoid tracking pixels, and use AI inbox monitoring to guarantee deliverability. 89% inbox rate average across all campaigns.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-bold text-foreground hover:no-underline">
                Do I have to write the emails?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed">
                Nope. You give us a voice note or sample email. We model your tone and write everything. You review and approve before anything goes live.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-bold text-foreground hover:no-underline">
                How much does this cost?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed">
                We'll walk you through pricing on the strategy call based on your volume and goals. No surprises, no hidden fees. You'll know exactly what it costs before you decide.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-bold text-foreground hover:no-underline">
                What if it doesn't work?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed">
                We don't get paid until emails are landing and conversations are starting. If it's not working, we don't charge. That's the deal.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-bold text-foreground hover:no-underline">
                How do I get started?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed">
                Book a 15-minute strategy call. We'll show you the plan, answer your questions, and you decide if it's a fit. No commitment required.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* SECTION 14: FOOTER */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-100 via-blue-100 to-purple-100">
        <div className="max-w-7xl mx-auto text-center">
          <img src={logoWhite} alt="Lyft Email" className="h-24 mx-auto mb-8" />
          <div className="flex flex-wrap justify-center gap-8 text-foreground/70 mb-8">
            <button onClick={() => scrollToSection("how-it-works")} className="hover:text-primary transition-colors font-medium">
              How It Works
            </button>
            <button onClick={() => window.open("https://calendly.com/hotlistai/lyftemail", "_blank")} className="hover:text-primary transition-colors font-medium">
              Book a Call
            </button>
          </div>
          <p className="text-sm text-foreground/60">
            © 2025 Lyft Email. Built by people who hate spam as much as you do.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
