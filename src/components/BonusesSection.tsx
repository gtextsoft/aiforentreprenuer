import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Play, BookOpen, Wrench } from "lucide-react";

const BonusesSection = () => {
  const bonuses = [
    {
      icon: Play,
      title: "FREE Masterclass Replay",
      description: "Watch on‑demand, anytime. Lifetime access.",
      value: "Included"
    },
    {
      icon: BookOpen,
      title: "The AI Power Pack",
      description: "Five bestselling eBooks on AI automation, prompting, and strategy",
      value: "$299 Value"
    },
    {
      icon: Wrench,
      title: "Ready‑to‑Use Toolkit",
      description: "Our exact AI prompts, workflow templates, and software stack—implement immediately.",
      value: "Priceless"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-ai-accent text-black border-0">
            <Gift className="w-4 h-4 mr-2" />
            Instant Access Bonuses
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🎁 Instant Access Bonuses <span className="text-ai-accent">(Yours Free When You Register)</span>
          </h2>
        </div>

        {/* Bonuses Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="border-ai-accent/20 hover:shadow-ai transition-smooth bg-gradient-to-b from-ai-accent/5 to-transparent">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-6">
                  <bonus.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-4">{bonus.title}</h3>
                <p className="text-muted-foreground mb-4">{bonus.description}</p>
                <Badge className="bg-ai-accent text-black font-bold">
                  {bonus.value}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;
