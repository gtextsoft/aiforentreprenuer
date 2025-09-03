import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Award, Globe, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      title: "World‑renowned AI Business Strategist",
      description: "Recognized expert in AI implementation for entrepreneurs"
    },
    {
      icon: Globe,
      title: "International Speaker",
      description: "Shares AI insights with global audiences"
    },
    {
      icon: TrendingUp,
      title: "Serial Entrepreneur",
      description: "Built and scaled multiple 7‑figure businesses"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-ai-primary text-white border-0">
            <User className="w-4 h-4 mr-2" />
            About Your Guide
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Your Guide: Dr. Stephen Akintayo
          </h2>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-ai-primary/10 to-ai-secondary/10 border-ai-primary/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-cta rounded-full mx-auto mb-6 flex items-center justify-center">
                  <User className="w-16 h-16 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Dr. Stephen Akintayo</h3>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
                Dr. Stephen Akintayo is a world‑renowned AI business strategist, international speaker, and serial entrepreneur. 
                Having built and scaled multiple 7‑figure businesses, he now demystifies AI for entrepreneurs worldwide. 
                His practical, no‑fluff frameworks have helped thousands of founders and coaches automate operations and achieve unprecedented growth.
              </p>

              {/* Achievements */}
              <div className="grid md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-ai-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold mb-2">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
