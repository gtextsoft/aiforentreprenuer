import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Target, Zap, Globe, Users, TrendingUp } from "lucide-react";

const EventDetails = () => {
  const learningModules = [
    {
      icon: TrendingUp,
      title: "The Profit Engine",
      description: "Identify and automate your most costly manual tasks, potentially saving $10,000+ per year in operational waste."
    },
    {
      icon: Target,
      title: "The Automated Client Acquisition System",
      description: "Go from AI‑driven lead generation to hyper‑personalized pitches that close deals while you sleep."
    },
    {
      icon: BookOpen,
      title: "The Content Machine",
      description: "Build a never‑ending stream of high‑quality blogs, social content, and emails that attract customers 24/7."
    },
    {
      icon: Globe,
      title: "The Global Expansion Key",
      description: "Tap international markets with AI‑powered translation, cultural adaptation, and campaigns that resonate globally."
    },
    {
      icon: Users,
      title: "The Freedom Framework",
      description: "Streamline customer service, project management, and sales so you can focus on vision and growth."
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-ai-primary text-white border-0">
            <BookOpen className="w-4 h-4 mr-2" />
            What You'll Learn
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What You'll Learn in This Exclusive Masterclass
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            In this value‑packed session, you'll get a clear, actionable roadmap to integrate AI into the core of your business.
          </p>
        </div>

        {/* Learning Modules */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {learningModules.map((module, index) => (
            <Card key={index} className="border-ai-primary/20 hover:shadow-ai transition-smooth bg-gradient-to-b from-ai-primary/5 to-transparent">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-6">
                  <module.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-4">{module.title}</h3>
                <p className="text-muted-foreground">{module.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;