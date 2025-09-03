import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, ShoppingCart, GraduationCap, Briefcase, Globe, Target } from "lucide-react";

const ProblemSolution = () => {
  const targetAudience = [
    {
      icon: Users,
      title: "Startup Founders",
      description: "Ship products faster and outmaneuver competitors with AI‑driven market analysis."
    },
    {
      icon: ShoppingCart,
      title: "E‑commerce Owners",
      description: "Transform your ad strategy—students routinely cut ad spend by 40–50% while increasing conversion rates."
    },
    {
      icon: GraduationCap,
      title: "Coaches & Consultants",
      description: "Automate client onboarding, content creation, and delivery to scale your impact 10×."
    },
    {
      icon: Briefcase,
      title: "Agency Owners & Freelancers",
      description: "Systemize service delivery to handle more high‑value clients without hiring."
    },
    {
      icon: Globe,
      title: "Ambitious Global Entrepreneurs",
      description: "Use AI to break into international markets and command premium fees ($5k–$20k/project)."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-ai-primary text-white border-0">
            <Target className="w-4 h-4 mr-2" />
            Who This Is For
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            This is not a theoretical lecture. It's a strategic briefing for committed builders ready to leverage the biggest shift since the internet.
          </h2>
        </div>

        {/* Target Audience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {targetAudience.map((audience, index) => (
            <Card key={index} className="border-ai-primary/20 hover:shadow-ai transition-smooth bg-gradient-to-b from-ai-primary/5 to-transparent">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-6">
                  <audience.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-4">{audience.title}</h3>
                <p className="text-muted-foreground">{audience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;