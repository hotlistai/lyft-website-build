import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import logoMain from "@/assets/lyft-logo-main.png";
import footerLogo from "@/assets/lyft-footer-logo.png";

const Pricing = () => {
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
              <Link to="/pricing" className="text-base font-medium text-primary transition-colors">
                Pricing
              </Link>
              <Link to="/about" className="text-base font-medium text-text-muted hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-base font-medium text-text-muted hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            <Button
              className="bg-primary text-white font-semibold py-3.5 px-7 rounded-lg shadow-lg shadow-primary/20 hover:bg-primary-hover hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              onClick={() => window.open("https://calendly.com/hotlistai/lyftemail", "_blank")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-text-dark mb-6 leading-tight tracking-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            Choose the plan that fits your growth goals. All plans include human QA and enterprise-grade deliverability.
          </p>
        </div>
      </section>

      {/* PRICING PLANS */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* BASE PLAN */}
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 border border-border-light hover:scale-105 transition-transform duration-200">
              <h3 className="text-3xl font-semibold text-text-dark mb-4">Base</h3>
              <p className="text-base text-text-muted mb-6">
                Ideal for getting started with outreach and achieving initial success.
              </p>
              <div className="mb-8">
                <div className="text-5xl font-bold text-primary mb-2">$2,500<span className="text-lg text-text-muted">/mo</span></div>
                <p className="text-sm text-text-muted">Setup + management</p>
              </div>
              <Button
                className="bg-transparent text-primary font-semibold py-3.5 px-7 rounded-lg border border-primary hover:bg-primary/5 hover:text-primary-hover transition-all duration-200 w-full mb-8"
                onClick={() => window.open("https://calendly.com/hotlistai/lyftemail", "_blank")}
              >
                Get Started
              </Button>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-text-dark">500 verified contacts/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-text-dark">AI voice modeling</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-text-dark">Human QA on every email</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-text-dark">Live reply dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-text-dark">Weekly performance reports</span>
                </li>
              </ul>
            </div>

            {/* ASSIST PLAN */}
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 border-2 border-primary relative hover:scale-105 transition-transform duration-200">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-3xl font-semibold text-text-dark mb-4">Assist</h3>
              <p className="text-base text-text-muted mb-6">
                The most popular features & extended support for growing businesses.
              </p>
              <div className="mb-8">
                <div className="text-5xl font-bold text-primary mb-2">$4,500<span className="text-lg text-text-muted">/mo</span></div>
                <p className="text-sm text-text-muted">Setup + management</p>
              </div>
              <Button
                className="bg-primary text-white font-semibold py-3.5 px-7 rounded-lg shadow-lg shadow-primary/20 hover:bg-primary-hover hover:shadow-xl transition-all duration-200 w-full mb-8"
                onClick={() => window.open("https://calendly.com/hotlistai/lyftemail", "_blank")}
              >
                Get Started
              </Button>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-text-dark">1,500 verified contacts/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-text-dark">Everything in Base</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-text-dark">Multi-channel sequences</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-text-dark">A/B testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-text-dark">Dedicated success manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-text-dark">Priority support (24hr response)</span>
                </li>
              </ul>
            </div>

            {/* ENTERPRISE PLAN */}
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 border border-border-light hover:scale-105 transition-transform duration-200">
              <h3 className="text-3xl font-semibold text-text-dark mb-4">Enterprise</h3>
              <p className="text-base text-text-muted mb-6">
                Individual plans for fast-growing companies & enterprises.
              </p>
              <div className="mb-8">
                <div className="text-5xl font-bold text-primary mb-2">Custom</div>
                <p className="text-sm text-text-muted">Tailored to your needs</p>
              </div>
              <Button
                className="bg-transparent text-primary font-semibold py-3.5 px-7 rounded-lg border border-primary hover:bg-primary/5 hover:text-primary-hover transition-all duration-200 w-full mb-8"
                onClick={() => window.open("https://calendly.com/hotlistai/lyftemail", "_blank")}
              >
                Contact Sales
              </Button>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-text-dark">Custom contact volume</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-text-dark">Everything in Assist</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-text-dark">White-label reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-text-dark">Dedicated infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-text-dark">Custom integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-text-dark">Dedicated account team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="py-20 px-8 bg-bg-alt">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-semibold leading-snug text-center text-text-dark mb-16">
            Add-Ons
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 border border-border-light">
              <h3 className="text-2xl font-semibold text-text-dark mb-4">Extra Contacts</h3>
              <div className="text-3xl font-bold text-primary mb-4">$500</div>
              <p className="text-base text-text-muted mb-6">
                Add 500 additional verified contacts to your monthly allocation
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 border border-border-light">
              <h3 className="text-2xl font-semibold text-text-dark mb-4">Reply Handling</h3>
              <div className="text-3xl font-bold text-primary mb-4">$1,000</div>
              <p className="text-base text-text-muted mb-6">
                We respond to initial replies and qualify leads before passing to you
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 border border-border-light">
              <h3 className="text-2xl font-semibold text-text-dark mb-4">Calendar Booking</h3>
              <div className="text-3xl font-bold text-primary mb-4">$750</div>
              <p className="text-base text-text-muted mb-6">
                We handle booking qualified leads directly into your calendar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RENEWAL NOTE */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-text-dark mb-6">
            Important: Billing starts after campaign launch
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Your first payment isn't due until your campaign goes live—typically 7-10 days after onboarding. This ensures you're only paying once we're actively sending on your behalf and you're seeing results.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-semibold leading-snug text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Book a 15-minute call and we'll show you exactly how we'd build your campaign.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary font-semibold py-3.5 px-8 rounded-lg hover:bg-white/90 transition-all duration-200"
            onClick={() => window.open("https://calendly.com/hotlistai/lyftemail", "_blank")}
          >
            Get My Outreach Plan
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-bg-alt border-t border-border-light py-20">
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

export default Pricing;
