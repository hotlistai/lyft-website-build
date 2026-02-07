"use client";

import { Button } from "@/components/ui/button";
import {
  Globe,
  Heart,
  Sparkles,
  Key,
  Zap,
  Users as UsersIcon,
} from "lucide-react";
import Link from "next/link";
import logoMain from "@/assets/lyft-logo-main.png";
import footerLogo from "@/assets/lyft-footer-logo.png";
import { BookDemoButton } from "@/components/BookDemoButton";

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border-light">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/">
              <img src={logoMain.src} alt="Lyft Email" className="h-10" />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-base font-medium text-text-muted hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/pricing"
                className="text-base font-medium text-text-muted hover:text-primary transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-base font-medium text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-base font-medium text-text-muted hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
            <BookDemoButton
              eventLocation="nav"
              className="bg-primary text-white font-semibold py-3.5 px-7 rounded-lg shadow-lg shadow-primary/20 hover:bg-primary-hover hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Started
            </BookDemoButton>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-24 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-text-dark mb-6 leading-tight tracking-tight">
            Our goal is to enable passionate people to grow the business they
            love!
          </h1>
          <p className="text-lg text-text-muted leading-relaxed max-w-3xl mx-auto">
            We are fascinated by products, where you can see that a passionate
            team has invested a lot of love and energy to develop the simplest
            and most beautiful solution. Our world doesn't need more, it needs
            less - but better - experiences.
          </p>
        </div>
      </section>

      {/* MISSION VISUAL */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-16 shadow-xl shadow-black/5 border border-border-light text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-semibold leading-snug text-text-dark mb-8">
                Redefine what outreach feels like to you.
              </h2>
              <p className="text-lg text-text-muted leading-relaxed">
                We started Lyft Email because we saw talented business owners
                trapped in a cycle—overpaying for low-quality leads and
                competing with hundreds of others for the same tired prospects.
                We knew there was a better way: direct, personalized outreach
                that sounds human and lands in inboxes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-semibold text-text-dark mb-6">
                How we started
              </h3>
              <p className="text-lg text-text-muted leading-relaxed mb-4">
                We built our email infrastructure for Fortune 500
                companies—optimizing deliverability, training voice models, and
                creating systems that could handle millions of messages per
                month. The technology worked. The results were undeniable.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                Then a roofer in Dallas asked us: "Can this work for me?"
              </p>
            </div>
            <div className="bg-primary/5 rounded-2xl p-12 border border-primary/20">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">
                  $37.5K
                </div>
                <p className="text-lg text-text-dark mb-2">
                  First contract, month two
                </p>
                <p className="text-base text-text-muted">
                  That's when we knew this wasn't just for enterprise.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white rounded-2xl p-12 border border-border-light shadow-lg shadow-black/5">
              <div className="text-center">
                <UsersIcon className="w-16 h-16 text-primary mx-auto mb-6" />
                <p className="text-lg text-text-dark leading-relaxed">
                  "We saw talented business owners trapped in a cycle—overpaying
                  for low-quality leads. We built Lyft Email to break that
                  cycle."
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-text-dark mb-6">
                What we believe
              </h3>
              <p className="text-lg text-text-muted leading-relaxed mb-4">
                Lead platforms took control away from you. They made you compete
                on their terms, at their prices, for prospects they chose. Lyft
                Email gives you your pipeline back.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                You own the conversations. You control the message. You decide
                who you reach. That's how it should be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PRINCIPLES */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-semibold leading-snug text-center text-text-dark mb-16">
            Our 6 cherished values & principles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 border border-border-light text-center hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-text-dark mb-4">
                Full transparency
              </h3>
              <p className="text-base text-text-muted leading-relaxed">
                & openness. Giving open feedback ensures that we become the best
                version of ourselves and the fun of working together never
                stops.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 border border-border-light text-center hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-semibold text-text-dark mb-4">
                Succeed with joy
              </h3>
              <p className="text-base text-text-muted leading-relaxed">
                Life is too short for a job we don't love. We help each other
                keep that fresh in our minds.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 border border-border-light text-center hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-text-dark mb-4">
                Less, but better
              </h3>
              <p className="text-base text-text-muted leading-relaxed">
                We believe in quality over quantity. Something mediocre doesn't
                make us or our customers happy. Less quantity, better quality.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 border border-border-light text-center hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Key className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-text-dark mb-4">
                Full ownership
              </h3>
              <p className="text-base text-text-muted leading-relaxed">
                We believe that fulfillment only comes when we enjoy full
                responsibility and freedom in our work. And we live that.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 border border-border-light text-center hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-text-dark mb-4">
                Think design
              </h3>
              <p className="text-base text-text-muted leading-relaxed">
                Design is much more than appearance, it's the whole experience.
                It is the sensation we feel when we interact with something.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 border border-border-light text-center hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 rounded-full bg-yellow-600/10 flex items-center justify-center mx-auto mb-6">
                <UsersIcon className="w-8 h-8 text-yellow-700" />
              </div>
              <h3 className="text-2xl font-semibold text-text-dark mb-4">
                Customer obsession
              </h3>
              <p className="text-base text-text-muted leading-relaxed">
                We only work on projects that we know in advance will be loved
                and used by our amazing and hard working clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-semibold leading-snug text-text-dark mb-6">
            Ready to start a conversation?
          </h2>
          <p className="text-lg text-text-muted mb-8">
            We'd love to hear about your business and show you how Lyft Email
            can help you own your pipeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookDemoButton
              size="lg"
              eventLocation="about-cta"
              className="bg-primary text-white font-semibold py-3.5 px-8 rounded-lg shadow-lg shadow-primary/20 hover:bg-primary-hover hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Book a Demo
            </BookDemoButton>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-primary font-semibold py-3.5 px-8 rounded-lg border border-primary hover:bg-primary/5 hover:text-primary-hover transition-all duration-200"
            >
              <Link href="/contact">Contact Us</Link>
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
                  <Link href="/" className="text-text-muted hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-text-muted hover:text-primary"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-text-dark mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-text-muted hover:text-primary"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-text-muted hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-text-dark mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-text-muted hover:text-primary">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-text-dark mb-4">Get Started</h4>
              <BookDemoButton
                eventLocation="about-footer"
                className="bg-primary text-white font-semibold py-2.5 px-5 rounded-lg hover:bg-primary-hover transition-all duration-200 w-full"
              >
                Book a Demo
              </BookDemoButton>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border-light">
            <img
              src={footerLogo.src}
              alt="Lyft Email"
              className="h-8 mb-4 md:mb-0"
            />
            <p className="text-sm text-text-muted">
              © 2024 Lyft Email. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
