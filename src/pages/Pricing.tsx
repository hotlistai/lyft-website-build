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
              <div className="text-sm text-text-muted text-center mb-2 font-medium">Launch Fast</div>
              <h3 className="text-3xl font-semibold text-text-dark mb-4 text-center">BASE</h3>
              <div className="mb-6">
                <div className="text-4xl font-bold text-primary mb-1 text-center">$397<span className="text-lg text-text-muted">/mo</span></div>
                <p className="text-sm text-text-muted text-center italic">One-time $500 setup — first payment $897</p>
              </div>
              <Button
                className="bg-transparent text-primary font-semibold py-3.5 px-7 rounded-lg border border-primary hover:bg-primary/5 hover:text-primary-hover transition-all duration-200 w-full mb-6"
                onClick={() => window.open("https://calendly.com/hotlistai/lyftemail", "_blank")}
              >
                Launch My System
              </Button>
              <p className="text-sm font-semibold text-text-dark mb-3">Includes</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-text-dark">1 campaign (3-month minimum)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-text-dark">1 campaign (3-month minimum)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-text-dark">3 series strategic follow-ups</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-text-dark">2,000 leads/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-text-dark">Free 2-3 week warm-up</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-text-dark">and more....</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-border-light text-center">
                <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="text-xs text-text-muted">4.8 stars out of 75 reviews</p>
              </div>
            </div>

            {/* ASSIST PLAN */}
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 border-2 border-primary relative hover:scale-105 transition-transform duration-200">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-sm text-text-muted text-center mb-2 font-medium">Growth Partner</div>
              <h3 className="text-3xl font-semibold text-text-dark mb-4 text-center">ASSIST</h3>
              <div className="mb-6">
                <div className="text-4xl font-bold text-primary mb-1 text-center">$797<span className="text-lg text-text-muted">/mo</span></div>
                <p className="text-sm text-text-muted text-center italic">One-time $700 setup — first payment $1,497</p>
              </div>
              <Button
                className="bg-primary text-white font-semibold py-3.5 px-7 rounded-lg shadow-lg shadow-primary/20 hover:bg-primary-hover hover:shadow-xl transition-all duration-200 w-full mb-6"
                onClick={() => window.open("https://calendly.com/hotlistai/lyftemail", "_blank")}
              >
                Launch My System
              </Button>
              <p className="text-sm font-semibold text-text-dark mb-3">Includes</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-text-dark">3 campaigns (3-month minimum)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-text-dark">5,000 leads/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-text-dark">3 series strategic follow-ups</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-text-dark">Free 2-3 week warm-up</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-text-dark">and more....</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-border-light text-center">
                <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="text-xs text-text-muted">4.8 stars out of 75 reviews</p>
              </div>
            </div>

            {/* ENTERPRISE PLAN */}
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 border border-border-light hover:scale-105 transition-transform duration-200">
              <div className="text-sm text-text-muted text-center mb-2 font-medium">White-Glove, Done-For-You</div>
              <h3 className="text-3xl font-semibold text-text-dark mb-4 text-center">ENTERPRISE</h3>
              <div className="mb-6">
                <div className="text-4xl font-bold text-primary mb-1 text-center">Custom Pricing</div>
              </div>
              <p className="text-base text-text-muted mb-8 text-center">
                For companies running multiple brands, regions, or offers that need a fully customized outbound system. Includes tailored strategy, advanced deliverability management, and ongoing optimization across campaigns.
              </p>
              <Button
                className="bg-transparent text-primary font-semibold py-3.5 px-7 rounded-lg border border-primary hover:bg-primary/5 hover:text-primary-hover transition-all duration-200 w-full mb-8"
                onClick={() => window.open("https://calendly.com/hotlistai/lyftemail", "_blank")}
              >
                Book a Strategy Call
              </Button>
              <div className="mt-auto pt-6 border-t border-border-light text-center">
                <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="text-xs text-text-muted">4.8 stars out of 75 reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BILLING NOTE */}
      <section className="py-12 px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg font-medium text-text-dark">
            Billing starts after campaign launch
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
