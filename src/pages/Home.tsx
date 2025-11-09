import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Check, Users, Mic, Target, Rocket } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoMain from "@/assets/lyft-logo-main.png";
import footerLogo from "@/assets/lyft-footer-logo.png";

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
    <div className="min-h-screen bg-white">
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

      {/* HERO SECTION */}
      <section className="pt-32 pb-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-6xl font-bold text-text-dark mb-6 leading-tight tracking-tight">
                Reach People,<br />
                Not Inboxes
              </h1>
              <p className="text-lg font-normal leading-relaxed text-text-dark mb-8">
                Your next customer isn't a data point. Our system blends AI and human review to create natural, one-to-one outreach that converts quietly and consistently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-white font-semibold py-3.5 px-7 rounded-lg shadow-lg shadow-primary/20 hover:bg-primary-hover hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                  onClick={() => window.open("https://calendly.com/hotlistai/lyftemail", "_blank")}
                >
                  Get My Outreach Plan
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary font-semibold py-3.5 px-7 rounded-lg border border-primary hover:bg-primary/5 hover:text-primary-hover transition-all duration-200"
                  onClick={() => setVideoDialogOpen(true)}
                >
                  Watch Case Study
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 border border-border-light">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text-dark">Live Conversations</p>
                      <p className="text-xs text-text-muted">Campaign Dashboard</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-xs font-medium text-green-600">Live</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="bg-white rounded-xl p-4 border border-border-light hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-sm font-semibold text-text-dark">Re: Roof inspection this week?</p>
                      <span className="text-xs text-text-muted">2m ago</span>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed">
                      "Hey John, yeah, we're looking for estimates. Thanks for reaching out."
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-border-light hover:shadow-md transition-all opacity-90">
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-sm font-semibold text-text-dark">Re: Your solar question</p>
                      <span className="text-xs text-text-muted">8m ago</span>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed">
                      "Appreciate the info. Can we schedule a quick call?"
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-border-light hover:shadow-md transition-all opacity-80">
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-sm font-semibold text-text-dark">Re: Expansion project</p>
                      <span className="text-xs text-text-muted">15m ago</span>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed">
                      "This is exactly what we need. Let's talk specifics..."
                    </p>
                  </div>
                </div>

                <div className="bg-bg-alt rounded-2xl p-4 border border-border-light">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-text-dark">13</p>
                      <p className="text-sm text-text-muted">real conversations this week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-20 px-8 bg-bg-alt border-t border-border-light">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-text-muted mb-8 font-medium">You're in good company:</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="text-center">
              <Check className="w-5 h-5 text-primary mx-auto mb-2" />
              <span className="text-base text-text-dark font-medium">10,000+ campaigns delivered</span>
            </div>
            <div className="text-center">
              <Check className="w-5 h-5 text-primary mx-auto mb-2" />
              <span className="text-base text-text-dark font-medium">89% average inbox rate</span>
            </div>
            <div className="text-center">
              <Check className="w-5 h-5 text-primary mx-auto mb-2" />
              <span className="text-base text-text-dark font-medium">Human QA on every email</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-semibold leading-snug text-center text-text-dark mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-6">
                1
              </div>
              <Mic className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-semibold text-text-dark mb-4">We Learn Your Voice</h3>
              <p className="text-base font-normal text-text-muted leading-relaxed">
                Share a quick voice note or sample email. Our AI models your tone, vocabulary, and style so every message sounds like it came from you—not a template.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-6">
                2
              </div>
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-semibold text-text-dark mb-4">We Build Your List</h3>
              <p className="text-base font-normal text-text-muted leading-relaxed">
                We identify and verify your exact ideal customers (by industry, location, title, whatever matters). No bought lists. No spam traps. Just real people who need what you offer.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-6">
                3
              </div>
              <Rocket className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-semibold text-text-dark mb-4">We Launch & Optimize</h3>
              <p className="text-base font-normal text-text-muted leading-relaxed">
                Emails go live with human QA on every message. Live dashboard shows opens, replies, and bookings in real time. We adjust based on performance—you just take the calls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="py-24 px-8 bg-bg-alt">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-semibold leading-snug text-center text-text-dark mb-16">
            Real businesses. Real results.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 border border-border-light hover:scale-105 transition-transform duration-200">
              <div className="text-5xl font-bold text-primary mb-4">$150K</div>
              <p className="text-lg text-text-dark mb-2">Contract value closed in 90 days</p>
              <p className="text-sm text-text-muted italic">Roofing • Dallas</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 border border-border-light hover:scale-105 transition-transform duration-200">
              <div className="text-5xl font-bold text-primary mb-4">15</div>
              <p className="text-lg text-text-dark mb-2">Live conversations per week</p>
              <p className="text-sm text-text-muted italic">Across all campaigns</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 border border-border-light hover:scale-105 transition-transform duration-200">
              <div className="text-5xl font-bold text-primary mb-4">89%</div>
              <p className="text-lg text-text-dark mb-2">Average inbox rate</p>
              <p className="text-sm text-text-muted italic">All Industries</p>
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
                <p className="text-sm font-semibold text-primary">$150K closed in 90 days</p>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-text-dark mb-4">Case Study — SmartRoof</h3>
              <p className="text-lg text-text-muted mb-6 italic">
                "In week one we closed a 37K job. Then two more at 50K and 29K."
              </p>
              <p className="text-base text-text-muted mb-4">— Keith, SmartRoof</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-text-dark">Three jobs closed for $116K in three weeks</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-text-dark">Fifteen live homeowner conversations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-text-dark">From first reply to install in about three weeks</span>
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

      {/* FINAL CTA */}
      <section className="py-24 px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-semibold leading-snug text-white mb-6">
            See your first conversation
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Book a 15-minute walkthrough and we'll show you exactly how we'd build your campaign.
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
              <h4 className="font-semibold text-text-dark">Chapters:</h4>
              <ul className="space-y-2 text-sm text-text-muted">
                <li>0:00 - Why lead platforms failed</li>
                <li>1:00 - First-day replies</li>
                <li>2:10 - Three wins = $116K</li>
                <li>3:15 - Onboarding speed</li>
                <li>4:10 - Fit and expectations</li>
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-bg-alt rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-primary">3</p>
                <p className="text-sm text-text-muted">Jobs closed</p>
              </div>
              <div className="bg-bg-alt rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-primary">$116K</p>
                <p className="text-sm text-text-muted">Total value</p>
              </div>
              <div className="bg-bg-alt rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-primary">~3 weeks</p>
                <p className="text-sm text-text-muted">Time to install</p>
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
    </div>
  );
};

export default Home;
