import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Zap } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-ai-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-ai-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Social proof badge */}
        <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 transition-smooth">
          <Users className="w-4 h-4 mr-2" />
          Join 2,500+ Entrepreneurs Already Registered
        </Badge>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          The AI-Powered Business Blueprint
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          How to Automate Operations, 2× Revenue, and Build a Sustainable 6–7‑Figure Empire <span className="text-ai-accent">(without the 80‑hour workweeks)</span>
        </p>

        {/* Secondary subheadline */}
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
          Stop competing and start dominating. This free masterclass reveals the exact AI frameworks used by top entrepreneurs to slash costs by <span className="text-ai-accent font-bold">50%</span>, unlock global clients, and finally create a business that works for you—<span className="text-ai-accent font-bold">not</span> the other way around.
        </p>

        {/* CTA Button */}
        <div className="mb-10">
          <a href="https://pay.gtextglobal.com/ai-for-entrepreneur-masterclass/?coupon=AIMASTERCLASS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-cta hover:shadow-cta text-black font-bold text-xl px-12 py-6 rounded-full transition-smooth"
          >
            YES! I WANT FREE ACCESS NOW ($99 VALUE)
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex justify-center items-center gap-8 text-white/80">
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 mr-2 text-ai-accent" />
            <span className="font-semibold">100% Free Access</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 mr-2 text-ai-accent" />
            <span className="font-semibold">No Credit Card Required</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 mr-2 text-ai-accent" />
            <span className="font-semibold">Lifetime Access</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;