import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingUp, Clock, Target } from "lucide-react";

const UrgencySection = () => {
  const urgencyPoints = [
    {
      icon: TrendingUp,
      title: "72% of business leaders",
      description: "say AI gives them a sustainable competitive advantage. (Source: McKinsey)"
    },
    {
      icon: Target,
      title: "30–300% revenue increases",
      description: "Early adopters are already reporting within months of integration."
    },
    {
      icon: Clock,
      title: "Every day you wait",
      description: "is a day a competitor using AI moves closer to taking your market share."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-urgency text-white border-0">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Time-Sensitive Opportunity
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Your Window of Opportunity Is Closing Fast
          </h2>
        </div>

        {/* Urgency Points */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {urgencyPoints.map((point, index) => (
            <Card key={index} className="border-urgency/20 hover:shadow-card transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-urgency/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <point.icon className="w-8 h-8 text-urgency" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-urgency">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-urgency/10 to-ai-primary/10 border-urgency/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                This isn't just about learning AI—it's about <span className="text-urgency">future‑proofing</span> your business.
              </h3>
              <p className="text-lg text-muted-foreground">
                The early adopters are already gaining massive advantages. Don't let your competitors get further ahead while you're still deciding.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
