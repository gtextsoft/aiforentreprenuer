import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Shield, Users, Zap } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const quickLinks = [
    "Event Details",
    "Speakers",
    "Pricing",
    "FAQ",
    "Contact"
  ];

  const policies = [
    "Privacy Policy",
    "Terms of Service", 
    "Refund Policy",
    "Code of Conduct"
  ];

  return (
    <footer className="bg-ai-primary text-white">
      {/* Final CTA Section */}
      <div className="bg-gradient-to-r from-ai-primary to-ai-primary-dark py-16">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-6 bg-ai-accent text-black border-0">
            <Zap className="w-4 h-4 mr-2" />
            Last Chance - Early Bird Ends Soon!
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join 2,500+ entrepreneurs who've already secured their seats. 
            Don't miss the opportunity to 10x your revenue with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a 
              href="https://app.mailingboss.com/lists/68b9bf7a365ba/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-cta hover:shadow-cta transition-smooth font-bold text-black rounded-lg"
            >
              Secure My Seat Now
            </a>
            <a 
              href="https://app.mailingboss.com/lists/68b9bf7a365ba/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-black hover:bg-white hover:text-ai-primary font-semibold rounded-lg transition-smooth"
            >
              View All Packages
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">AI for Entrepreneurs Summit</h3>
              <p className="opacity-90 mb-6 leading-relaxed">
                The world's premier AI implementation event for entrepreneurs. 
                Transform your business with cutting-edge AI strategies and hands-on training 
                from industry experts who've generated over $50M in AI-driven revenue.
              </p>
              
              {/* Newsletter signup */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Get AI Business Tips Weekly</h4>
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                  <a 
                    href="https://app.mailingboss.com/lists/68b9bf7a365ba/subscribe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2 bg-ai-accent text-black hover:bg-ai-accent/90 font-semibold rounded-md transition-smooth"
                  >
                    Subscribe
                  </a>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-ai-accent" />
                  <span className="text-sm opacity-90">2,500+ Alumni</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                       className="opacity-80 hover:opacity-100 transition-opacity">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Policies */}
            <div>
              <h4 className="font-semibold mb-6">Contact & Support</h4>
              
              {/* Contact info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-ai-accent" />
                  <span className="text-sm opacity-90">products@stephenakintayo.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-ai-accent" />
                  <span className="text-sm opacity-90">+234 816 790 1719</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-ai-accent" />
                  <span className="text-sm opacity-90">512, Westgreen, BLVD., Katy, Texas, USA</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-ai-accent" />
                  <span className="text-sm opacity-90">24/7 Support</span>
                </div>
              </div>

              {/* Policies */}
              <div>
                <h5 className="font-semibold mb-3 text-sm">Legal</h5>
                <ul className="space-y-2">
                  {policies.map((policy, index) => (
                    <li key={index}>
                      <a href={`/${policy.toLowerCase().replace(/\s+/g, '-')}`} 
                         className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                        {policy}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Bottom Bar */}
      <div className="py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-70">
              © 2025 AI for Entrepreneurs Summit. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm opacity-70">
              <span>Powered by AI Innovation Lab</span>
              <span>•</span>
              <span>Made with ❤️ for entrepreneurs</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;