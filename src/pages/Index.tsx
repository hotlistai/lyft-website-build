import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "@/assets/lyftemail-logo.png";
import { useEffect, useRef } from "react";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

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
      <nav className="sticky top-0 z-50 bg-white border-b border-border/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#overview" className="flex items-center">
              <img src={logo} alt="Lyft Email" className="h-8 sm:h-10" />
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how" className="text-sm font-medium hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
                Pricing
              </a>
              <Button asChild size="sm">
                <a href="#book">Schedule a Zoom</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="overview" className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="fade-up opacity-0 translate-y-8 transition-all duration-700">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Real replies. Zero fluff. Predictable revenue.
              </h1>
              <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed mb-8">
                Cold email shouldn't feel cold. Lyft Email turns outbound into real conversations that sound human, 
                scale naturally, and book real meetings. Built by Hotlist AI, it combines enterprise‑grade Lead 
                Intelligence with tone modeling that mirrors your own voice—so every message feels personal, not automated.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <a href="#book">Schedule a Zoom</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#how">See How It Works</a>
                </Button>
              </div>
            </div>

            <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-200 relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-lg w-full h-48 sm:h-64 object-cover"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
                  alt="Professional workspace"
                  className="rounded-2xl shadow-lg w-full h-48 sm:h-64 object-cover mt-8"
                  loading="lazy"
                />
              </div>
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
                alt="Business meeting"
                className="rounded-2xl shadow-lg w-full h-32 sm:h-40 object-cover mt-4"
                loading="lazy"
              />
              
              <Card className="absolute -bottom-4 left-4 right-4 sm:left-8 sm:right-8 shadow-xl bg-white/95 backdrop-blur">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Today at a glance</CardTitle>
                  <CardDescription className="text-xl font-semibold text-foreground">
                    Kid Activity Time
                  </CardDescription>
                  <p className="text-xs text-muted-foreground">Track engagement in real‑time</p>
                </CardHeader>
                <CardContent>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-3/4 rounded-full"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-16 sm:py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 fade-up opacity-0 translate-y-8 transition-all duration-700">
            Cold email is broken
          </h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Cold email feels robotic and gets ignored.</CardTitle>
              </CardHeader>
            </Card>
            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Generic tools flood inboxes instead of opening conversations.</CardTitle>
              </CardHeader>
            </Card>
            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Agencies promise results without transparency or data.</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-16 sm:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="how" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 fade-up opacity-0 translate-y-8 transition-all duration-700">
            The Lyft Email approach
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">AI‑Built, Human‑Backed</CardTitle>
                <CardDescription className="text-base">
                  Every campaign blends automation with human editing for warmth and clarity.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Lead Intelligence Engine</CardTitle>
                <CardDescription className="text-base">
                  Lead Locator filters millions of records to find motivated, verified, ready‑to‑act prospects.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Tone‑Matched Messaging</CardTitle>
                <CardDescription className="text-base">
                  Modeled from your own words so automation feels like you.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-300 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Predictable Pipeline</CardTitle>
                <CardDescription className="text-base">
                  Systems learn from every reply and get smarter with each send.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 shadow-xl border-2 border-accent/20">
            <CardHeader>
              <CardTitle className="text-2xl">Lead Intelligence Advantage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span><strong>Ownership:</strong> absentee, corporate, out‑of‑state</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span><strong>Motivation:</strong> tax delinquent, vacant, expired, pre‑foreclosure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span><strong>Equity and finance:</strong> high equity, liens, mortgage age, sale date</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span><strong>Property:</strong> size, value, lot, year built</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span><strong>Timing:</strong> ownership length, last transfer, address change</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span><strong>Predictive:</strong> likely sellers, senior owners, probate, tired landlords</span>
                </li>
              </ul>
              <blockquote className="italic text-foreground/80 border-l-4 border-accent pl-4 py-2">
                "Fifteen years in the data mines taught us this: The right list is half the sale. Lyft Email finishes the job."
              </blockquote>
              <Button asChild>
                <a href="#book">Schedule a Zoom</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 fade-up opacity-0 translate-y-8 transition-all duration-700">
            What this gives you
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Human Tone Engine</CardTitle>
                <CardDescription className="text-base">
                  Every message feels like it came from you.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Lead Locator Advantage</CardTitle>
                <CardDescription className="text-base">
                  Intent signals other tools miss.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Proof Over Promises</CardTitle>
                <CardDescription className="text-base">
                  Open, reply, and booking rates in plain numbers.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 bg-secondary shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">What goes on the team</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Operators with 15+ years in enterprise lead intelligence and CRM</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Real‑time transparency on open, reply, and booked meetings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Success measured by booked revenue, not vanity clicks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Deliverability and data practices documented and shared</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 bg-secondary shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Quick setup plan</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Voice intake and tone modeling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Domain and inbox setup with warm‑up</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>List build via Lead Locator precision filters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Launch with live inbox monitoring and Zoom check‑ins</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-200 bg-secondary shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Extra helpful touches</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Weekly deliverability and domain audits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Soft opt‑outs in every message</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Ongoing warm‑up and rotation to keep inboxes trusted</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Setup Section */}
      <section id="setup" className="py-16 sm:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Voice Modeling</CardTitle>
                <CardDescription className="text-base">
                  Capture your tone so every message sounds like you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild size="sm">
                  <a href="#book">Schedule a Zoom</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Infrastructure</CardTitle>
                <CardDescription className="text-base">
                  Domains, inboxes, warm‑up, and monitoring handled for you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild size="sm">
                  <a href="#book">Schedule a Zoom</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Lead Locator</CardTitle>
                <CardDescription className="text-base">
                  Build intent‑rich lists with verified data and predictive signals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild size="sm">
                  <a href="#book">Schedule a Zoom</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 fade-up opacity-0 translate-y-8 transition-all duration-700">
            Simple Plans. Serious Results.
          </h2>
          <p className="text-lg sm:text-xl text-center text-foreground/80 max-w-3xl mx-auto mb-12 sm:mb-16 fade-up opacity-0 translate-y-8 transition-all duration-700">
            We price like operators, not agencies. No vague retainers or pay‑per‑appointment gimmicks. 
            Every plan includes voice modeling, domain setup, deliverability protection, and human review.
          </p>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-primary">
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
                  <a href="#book">Schedule a Zoom</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 shadow-lg hover:shadow-xl transition-shadow border-2 border-primary">
              <div className="bg-primary text-primary-foreground text-center py-2 rounded-t-2xl text-sm font-semibold">
                MOST POPULAR
              </div>
              <CardHeader>
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
                  <a href="#book">Schedule a Zoom</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-200 shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-primary">
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
                  <a href="#book">Schedule a Zoom</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-sm text-foreground/70 fade-up opacity-0 translate-y-8 transition-all duration-700">
            Average inbox placement: 90%+ | Client retention: 90%+
          </p>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-16 sm:py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Full Compliance</CardTitle>
                <CardDescription className="text-base">
                  CAN‑SPAM and CCPA with plain opt‑outs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Data Ethics</CardTitle>
                <CardDescription className="text-base">
                  Only verified, permission‑safe sources.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Human Oversight</CardTitle>
                <CardDescription className="text-base">
                  Every campaign reviewed by a human before sending.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book" className="py-16 sm:py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-up opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to lift your outbound?
          </h2>
          <p className="text-lg sm:text-xl text-foreground/80 mb-8">
            Schedule a Zoom call and we'll show you how Lyft Email turns cold outreach into warm conversations.
          </p>
          <Button asChild size="lg">
            <a href="/signup">Schedule a Zoom</a>
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
            <a href="#book" className="hover:text-primary transition-colors">
              Schedule a Zoom
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
