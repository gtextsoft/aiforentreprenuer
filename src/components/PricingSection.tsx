import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Users, Crown, Gift } from "lucide-react";

const PricingSection = () => {
  const offer = {
    name: "Free Masterclass Access",
    originalPrice: 99,
    price: 0,
    badge: "100% FREE",
    badgeColor: "bg-success",
    description: "Complete access to the AI-Powered Business Blueprint masterclass",
    features: [
      "Full Masterclass Replay (Lifetime Access)",
      "The AI Power Pack (5 eBooks - $299 Value)",
      "Ready-to-Use AI Toolkit & Templates",
      "All Bonus Materials Included",
      "No Credit Card Required",
      "Instant Access Upon Registration"
    ],
    cta: "YES! I WANT FREE ACCESS NOW ($99 VALUE)",
    popular: true,
    couponCode: "ENTREPRENEUR"
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-ai-primary text-white border-0">
            <Gift className="w-4 h-4 mr-2" />
            Special Offer for Action‑Takers
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A Special Offer for Action‑Takers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're so confident this masterclass will transform your business that we're giving you full, free access.
            This is a <span className="text-ai-primary font-bold">$99 value</span>—but for serious entrepreneurs who register <span className="text-urgency font-bold">today</span>, access is <span className="text-success font-bold">100% FREE</span>.
          </p>
        </div>

        {/* Main Offer Card */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="relative border-ai-primary shadow-card bg-gradient-to-b from-white to-ai-primary/5">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-success text-white border-0 px-6 py-2">
                <Crown className="w-4 h-4 mr-2" />
                100% FREE ACCESS
              </Badge>
            </div>

            <CardHeader className="text-center pb-8 pt-12">
              {/* Package name and badge */}
              <div className="mb-4">
                <CardTitle className="text-3xl font-bold mb-2">{offer.name}</CardTitle>
                <Badge className={`${offer.badgeColor} text-white border-0`}>
                  {offer.badge}
                </Badge>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-3xl text-muted-foreground line-through">
                    ${offer.originalPrice}
                  </span>
                  <span className="text-6xl font-bold text-success">
                    ${offer.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-lg">{offer.description}</p>
              </div>

              {/* CTA Button */}
              <a href="https://pay.gtextglobal.com/ai-for-entrepreneur-masterclass/?coupon=AIMASTERCLASS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-cta hover:shadow-cta text-black font-bold text-xl px-12 py-6 rounded-full transition-smooth"
              >
                {offer.cta}
              </a>
            </CardHeader>

            <CardContent>
              {/* Features list */}
              <ul className="space-y-4">
                {offer.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Coupon Code Section */}
        <div className="text-center mb-16">
          <Card className="bg-gradient-to-r from-ai-accent/10 to-ai-primary/10 border-ai-accent/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Use coupon code at checkout: <span className="text-ai-accent font-mono bg-ai-accent/20 px-3 py-1 rounded">{offer.couponCode}</span></h3>
              <p className="text-muted-foreground">
                Coupon code <span className="font-mono font-bold">{offer.couponCode}</span> applied on the next page will discount the price to $0. No credit card required.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How to Claim */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Your Next Step Is Simple</h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-ai-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <p className="font-semibold">Click the button above</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-ai-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <p className="font-semibold">Apply coupon code: <span className="text-ai-accent">AIMASTERCLASS</span></p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-ai-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <p className="font-semibold">Watch the price drop to <span className="text-success">$0.00</span></p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-ai-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <p className="font-semibold">Get instant access and start building your AI‑powered empire</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;