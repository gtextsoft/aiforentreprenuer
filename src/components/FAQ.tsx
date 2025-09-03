import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Is this really free? What's the catch?",
      answer: "Yes, it's completely free! We're so confident in the value of this masterclass that we're giving it away to serious entrepreneurs. The only 'catch' is that you need to use the coupon code 'ENTREPRENEUR' at checkout to get 100% off the $99 value. No credit card required, no hidden fees."
    },
    {
      question: "How quickly will I see results from implementing these AI strategies?",
      answer: "Most entrepreneurs start seeing initial results within 30 days of implementation. Our case studies show an average of 30-300% revenue increases within months of integration. The key is following our proven step-by-step system and taking action immediately."
    },
    {
      question: "Do I need any technical background or AI experience?",
      answer: "Not at all! This masterclass is designed for entrepreneurs at all levels. We start with the fundamentals and build up to advanced implementation. You don't need any technical background - just a willingness to learn and transform your business."
    },
    {
      question: "What if I can't watch the masterclass live?",
      answer: "No problem! You get lifetime access to the masterclass replay, so you can watch it on-demand anytime that works for you. Plus, you'll have access to all the bonus materials and resources immediately upon registration."
    },
    {
      question: "What tools and software will I need to implement these strategies?",
      answer: "We'll provide you with a complete toolkit of recommended AI tools and software in the bonus materials. Many have free tiers to get started, and we've negotiated special discounts for masterclass attendees. Total additional investment is typically $50-200/month depending on your business size."
    },
    {
      question: "Will these AI strategies work for my specific industry?",
      answer: "Absolutely! Our AI implementation strategies work across all industries. We'll show you how to adapt the universal principles to your specific business model, whether you're in e-commerce, consulting, manufacturing, healthcare, real estate, or any other industry."
    },
    {
      question: "How is this different from other AI courses or training?",
      answer: "This isn't just theory - it's a practical, implementation-focused masterclass. You'll get our exact AI prompts, workflow templates, and software stack that you can implement immediately. Plus, you'll learn the proven frameworks used by top entrepreneurs to achieve 6-7 figure results."
    },
    {
      question: "What if I need help implementing these strategies after the masterclass?",
      answer: "You'll have access to our community and resources, plus detailed step-by-step implementation guides. The masterclass includes everything you need to get started, and the bonus materials provide ongoing support for your AI transformation journey."
    },
    {
      question: "Is there a time limit on accessing the masterclass and bonuses?",
      answer: "No time limits! You get lifetime access to the masterclass replay and all bonus materials. This means you can revisit the training anytime and continue to benefit from the resources as your business grows and evolves."
    },
    {
      question: "What if I'm not satisfied with the masterclass?",
      answer: "Since this is completely free with the coupon code, there's no financial risk to you. However, if for any reason you're not completely satisfied with the value you receive, we're confident you'll find the strategies and frameworks incredibly valuable for your business growth."
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-trust text-white border-0">
            <HelpCircle className="w-4 h-4 mr-2" />
            Common Questions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to Know About This Free Masterclass
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've answered the most common questions to help you understand exactly what you're getting with this free masterclass.
            Still have questions? Contact our team directly.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-card transition-smooth"
              >
                <AccordionTrigger className="text-left font-semibold py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still Have Questions CTA */}
        <div className="text-center mt-16">
          <div className="bg-ai-primary/10 border border-ai-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help you make the right decision for your business. 
              Get personalized answers to your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:products@stephenakintayo.com" 
                className="inline-flex items-center justify-center px-6 py-3 bg-ai-primary text-black rounded-lg font-semibold hover:bg-ai-primary-dark transition-smooth"
              >
                Email Our Team
              </a>
              <a 
                href="tel:+234 816 790 1719" 
                className="inline-flex items-center justify-center px-6 py-3 border border-ai-primary text-ai-primary rounded-lg font-semibold hover:bg-ai-primary hover:text-black transition-smooth"
              >
                Call Us: +234 816 790 1719
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;