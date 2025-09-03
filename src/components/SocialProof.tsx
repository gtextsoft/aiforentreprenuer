import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, TrendingUp, Users, Play } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Maria E.",
      title: "Business Coach",
      company: "International Coaching Practice",
      image: "ME",
      rating: 5,
      text: "I applied the automated funnel strategy from the masterclass. The result? I signed a $10,000 client from Europe I never would have reached otherwise. This paid for itself a hundred times over.",
      result: "$10,000 Client from Europe"
    },
    {
      name: "Chinedu O.", 
      title: "E‑commerce Founder",
      company: "Online Retail Business",
      image: "CO",
      rating: 5,
      text: "The ad optimization module alone saved my e‑com store over $12,000 in the first quarter. We cut wasted spend and doubled our return. It was a no‑brainer.",
      result: "$12,000 Saved in Q1"
    }
  ];

  const stats = [
    {
      number: "72%",
      label: "Business Leaders Using AI",
      icon: TrendingUp
    },
    {
      number: "30-300%",
      label: "Revenue Increases Reported",
      icon: TrendingUp
    },
    {
      number: "50%",
      label: "Cost Reduction Achieved",
      icon: TrendingUp
    },
    {
      number: "24/7",
      label: "AI Systems Working",
      icon: Star
    }
  ];

  const logos = [
    "Everyday Houston", "Greatday Houston", "Houston Live", "Houston Happens", "BBC Africa", "Forbes"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-success text-white border-0">
            <Star className="w-4 h-4 mr-2" />
            Real Results
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hear From Entrepreneurs Like You
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See what real entrepreneurs are saying about their AI transformation results.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-ai-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Video Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Watch Real Success Stories</h3>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative bg-gradient-to-br from-ai-primary/10 to-ai-secondary/10 h-[500px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-6">
                      <Play className="w-12 h-12 text-black" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4">Video Testimonial Available</h4>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      Watch how Dr. Stephen Akintayo's AI strategies have transformed real businesses and generated incredible results.
                    </p>
                    <a 
                      href="/testimonia/DSA AI TESTIMONIA.mp4" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-cta text-black font-bold rounded-lg hover:shadow-cta transition-smooth"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Watch Video Testimonial
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold mb-2">Real Entrepreneur Success Story</h4>
                  <p className="text-muted-foreground">
                    Click the button above to watch the full video testimonial in a new tab. This approach ensures optimal performance and compatibility across all devices.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Text Testimonials */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center mb-8">What Entrepreneurs Are Saying</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-card transition-smooth h-full">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-ai-accent fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <div className="flex-grow">
                  <Quote className="w-8 h-8 text-ai-primary/20 mb-3" />
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Result Badge */}
                <div className="mb-4">
                  <Badge className="bg-success/10 text-success border-success/20">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {testimonial.result}
                  </Badge>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-12 h-12 bg-gradient-cta rounded-full flex items-center justify-center font-bold text-black">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-ai-primary">{testimonial.title}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Media Mentions */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">As Featured In</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {logos.map((logo, index) => (
              <div key={index} className="text-lg font-bold text-muted-foreground">
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        {/* <Card className="mt-16 bg-gradient-to-r from-success/10 to-trust/10 border-success/20">
          <CardContent className="p-8 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold">30-Day Money-Back Guarantee</div>
                  <div className="text-sm text-muted-foreground">100% Risk-Free Investment</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-trust rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold">Lifetime Community Access</div>
                  <div className="text-sm text-muted-foreground">Network with 2,500+ Entrepreneurs</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </section>
  );
};

export default SocialProof;