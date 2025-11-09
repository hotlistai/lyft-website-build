import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Check, Mic, Target, Rocket } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoMain from "@/assets/lyft-logo-main.png";
import footerLogo from "@/assets/lyft-footer-logo.png";
import { FloatingBookDemo } from "@/components/FloatingBookDemo";
import { InteractiveEmailClient } from "@/components/InteractiveEmailClient";

const Home = () => {
  const [videoDialogOpen, setVideoDialogOpen] = useState(false);
  const [caseStudyModalOpen, setCaseStudyModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Dynamic Background Waves */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-96 h-96 hero-gradient-overlay rounded-full" style={{ opacity: 0.08 }}></div>
        <div className="absolute top-96 right-20 w-80 h-80 hero-gradient-overlay rounded-full" style={{ opacity: 0.06, animationDelay: '5s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-72 h-72 hero-gradient-overlay rounded-full" style={{ opacity: 0.05, animationDelay: '10s' }}></div>
      </div>

      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border-light">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/">
              <img src={logoMain} alt="Lyft Email" className="h-10" />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-base font-medium text-text-muted hover:text-primary transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("results")}
                className="text-base font-medium text-text-muted hover:text-primary transition-colors"
              >
                Results
              </button>
              <Link
                to="/pricing"
                className="text-base font-medium text-text-muted hover:text-primary transition-colors"
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="text-base font-medium text-text-muted hover:text-primary transition-colors"
              >
                About
              </Link>
            </div>
            <Button
              className="bg-primary text-white font-semibold py-3.5 px-7 rounded-lg shadow-lg shadow-primary/20 hover:bg-primary-hover hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              onClick={() => window.open("https://calendly.com/hotlistai/lyftemail", "_blank")}
            >
              Get My Outreach Plan
            </Button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - CENTERED */}
      <section className="pt-32 pb-20 px-8 bg-white relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-7xl md:text-8xl font-bold text-text-dark mb-8 leading-[1.1] tracking-tight">
              Outbound that sounds human.<br/>
              <span className="gradient-text">Because it is.</span>
            </h1>
            <p className="text-xl md:text-2xl font-normal leading-relaxed text-text-muted mb-12 max-w-3xl mx-auto">
              Stop renting leads. Build your own pipeline with transparent, human-quality outreach that actually lands in inboxes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-primary text-white font-semibold py-4 px-10 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-hover hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-lg"
                onClick={() => window.open("https://calendly.com/hotlistai/lyftemail", "_blank")}
              >
                Get My Outreach Plan
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary font-semibold py-4 px-10 rounded-xl border-2 border-primary hover:bg-primary/5 hover:text-primary-hover transition-all duration-200 text-lg"
                onClick={() => setVideoDialogOpen(true)}
              >
                Watch Case Study
              </Button>
            </div>
          </div>
          
          {/* Centered Interactive Visual */}
          <div className="relative animate-fade-in-up max-w-4xl mx-auto" style={{ animationDelay: '0.2s' }}>
            <InteractiveEmailClient />
          </div>
        </div>
      </section>

      {/* TRUST BAR WITH SCROLLING LOGOS */}
      <section className="py-20 px-8 bg-white relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-text-muted mb-16 font-medium text-lg">Trusted by contractors across North America</p>
          
          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-border-light hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
              <div className="text-6xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                10,000+
              </div>
              <p className="text-base text-text-muted font-medium">Campaigns delivered</p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-border-light hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
              <div className="text-6xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                89%
              </div>
              <p className="text-base text-text-muted font-medium">Average inbox rate</p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-border-light hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
              <div className="text-6xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                100%
              </div>
              <p className="text-base text-text-muted font-medium">Human QA on every email</p>
            </div>
          </div>

          {/* Scrolling Logos Section */}
          <div className="relative overflow-hidden py-8">
            <div className="flex animate-scroll whitespace-nowrap">
              <div className="flex items-center gap-16 px-8">
                <div className="text-2xl font-bold text-text-muted opacity-40">SmartRoof</div>
                <div className="text-2xl font-bold text-text-muted opacity-40">StretchLab</div>
                <div className="text-2xl font-bold text-text-muted opacity-40">Inc.</div>
                <div className="text-2xl font-bold text-text-muted opacity-40">Carrasco</div>
                <div className="text-2xl font-bold text-text-muted opacity-40">HotList AI</div>
                <div className="text-2xl font-bold text-text-muted opacity-40">SmartRoof</div>
                <div className="text-2xl font-bold text-text-muted opacity-40">StretchLab</div>
                <div className="text-2xl font-bold text-text-muted opacity-40">Inc.</div>
                <div className="text-2xl font-bold text-text-muted opacity-40">Carrasco</div>
                <div className="text-2xl font-bold text-text-muted opacity-40">HotList AI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - CENTERED */}
      <section id="how-it-works" className="py-32 px-8 bg-white relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-20 animate-fade-in-up">
            <h2 className="text-6xl md:text-7xl font-bold text-text-dark mb-6 leading-tight tracking-tight">
              How It Works
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Three simple steps to your own transparent outbound engine
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Step 1 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-10 border border-border-light hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Mic className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-text-dark mb-5">We Learn Your Voice</h3>
              <p className="text-lg text-text-muted leading-relaxed">
                Share a quick voice note or sample email. Our AI models your tone so every message sounds like you wrote it.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-10 border border-border-light hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-[#FF6B6B] flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-text-dark mb-5">We Build Your List</h3>
              <p className="text-lg text-text-muted leading-relaxed">
                We identify and verify your exact ideal customers. No bought lists. No spam traps. Just real people.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-10 border border-border-light hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#A855F7] flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-text-dark mb-5">We Launch & Optimize</h3>
              <p className="text-lg text-text-muted leading-relaxed">
                Emails go live with human QA on every message. Live dashboard shows results in real time. You take the calls.
              </p>
            </div>
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button
              size="lg"
              className="bg-primary text-white font-semibold py-4 px-10 rounded-xl shadow-xl shadow-primary/30 hover:bg-primary-hover hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-lg"
              onClick={() => window.open("https://calendly.com/hotlistai/lyftemail", "_blank")}
            >
              Get My Outreach Plan
            </Button>
          </div>
        </div>
      </section>

      {/* RESULTS - CENTERED */}
      <section id="results" className="py-32 px-8 bg-white relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-bold text-text-dark mb-6 leading-tight tracking-tight">
            Real businesses.<br/>Real results.
          </h2>
          <p className="text-xl text-text-muted mb-20 max-w-2xl mx-auto">
            From Dallas roofers to national brands—hyper-personalized outreach that converts.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-10 border border-border-light hover:border-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">$116K</div>
              <p className="text-xl text-text-dark mb-3 font-semibold">Three jobs closed</p>
              <p className="text-base text-text-muted">First month • SmartRoof</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-10 border border-border-light hover:border-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">14+</div>
              <p className="text-xl text-text-dark mb-3 font-semibold">Real conversations</p>
              <p className="text-base text-text-muted">Qualified homeowners</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-10 border border-border-light hover:border-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">89%</div>
              <p className="text-xl text-text-dark mb-3 font-semibold">Inbox rate</p>
              <p className="text-base text-text-muted">Across all industries</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY VIDEO */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <video
                className="w-full rounded-2xl shadow-xl border border-border-light"
                poster="/smartroof-cover.jpg"
                controls
                autoPlay
                muted
                loop
              >
                <source src="/smartroof-case-study.webm" type="video/webm" />
              </video>
              <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg border border-border-light">
                <p className="text-sm font-semibold text-primary">First reply in 24 hours</p>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-text-dark mb-4">Case Study — SmartRoof</h3>
              <p className="text-lg text-text-muted mb-6 italic">
                "The first three leads turned into three roof inspections. One was $37K, then $50K, then $29K. This is the highest close rate I've ever had."
              </p>
              <p className="text-base text-text-muted mb-4">— Keith, SmartRoof Owner</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-text-dark">$116K closed from first three jobs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-text-dark">14-15 real conversations with qualified homeowners</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-text-dark">First reply came in day one—roof on in three weeks</span>
                </li>
              </ul>
              <Button
                className="bg-transparent text-primary font-semibold py-3.5 px-7 rounded-lg border border-primary hover:bg-primary/5 hover:text-primary-hover transition-all duration-200"
                onClick={() => setCaseStudyModalOpen(true)}
              >
                Watch Full Case Study (5:02)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA - CENTERED */}
      <section className="py-32 px-8 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-95"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-7xl font-bold leading-tight text-white mb-8">
            See Your First<br/>Conversation
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Book a 15-minute walkthrough. We'll show you exactly how we'd build your campaign.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary font-semibold py-4 px-10 rounded-xl hover:bg-white/90 hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-lg shadow-2xl"
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
                  <button onClick={() => scrollToSection("how-it-works")} className="text-text-muted hover:text-primary">
                    How It Works
                  </button>
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
                  <button onClick={() => scrollToSection("results")} className="text-text-muted hover:text-primary">
                    Case Studies
                  </button>
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

      {/* VIDEO DIALOG */}
      <Dialog open={videoDialogOpen} onOpenChange={setVideoDialogOpen}>
        <DialogContent className="max-w-4xl">
          <video className="w-full rounded-lg" poster="/smartroof-cover.jpg" controls autoPlay>
            <source src="/smartroof-case-study.webm" type="video/webm" />
          </video>
        </DialogContent>
      </Dialog>

      {/* CASE STUDY MODAL */}
      <Dialog open={caseStudyModalOpen} onOpenChange={setCaseStudyModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <h3 className="text-3xl font-semibold text-text-dark mb-6">SmartRoof Full Case Study (5:02)</h3>
            <div className="aspect-video mb-6">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/wZ-7GYeaGhc"
                title="SmartRoof Case Study"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="space-y-4 mb-6">
              <h4 className="font-semibold text-text-dark">Key Moments:</h4>
              <ul className="space-y-2 text-sm text-text-muted">
                <li>0:00 - Why buying leads doesn't work anymore</li>
                <li>1:00 - Getting real replies in 24 hours</li>
                <li>2:10 - $37K job in week one, $116K total</li>
                <li>3:15 - How fast onboarding really is</li>
                <li>4:10 - Highest close rate ever experienced</li>
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-bg-alt rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-primary">14+</p>
                <p className="text-sm text-text-muted">Real conversations</p>
              </div>
              <div className="bg-bg-alt rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-primary">$116K</p>
                <p className="text-sm text-text-muted">First 3 jobs</p>
              </div>
              <div className="bg-bg-alt rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-primary">24hr</p>
                <p className="text-sm text-text-muted">First reply</p>
              </div>
            </div>
            <Button
              className="bg-primary text-white font-semibold py-3.5 px-7 rounded-lg w-full hover:bg-primary-hover transition-all duration-200"
              onClick={() => {
                setCaseStudyModalOpen(false);
                window.open("https://calendly.com/hotlistai/lyftemail", "_blank");
              }}
            >
              See Your First Conversation
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* FLOATING BOOK DEMO CTA */}
      <FloatingBookDemo />
    </div>
  );
};

export default Home;
