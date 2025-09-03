import { Badge } from "@/components/ui/badge";
import { Clock, Users, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const UrgencyBar = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 27,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;
        let newDays = prev.days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }

        return {
          days: Math.max(0, newDays),
          hours: Math.max(0, newHours),
          minutes: Math.max(0, newMinutes),
          seconds: Math.max(0, newSeconds)
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-urgency to-urgency/80 text-white py-3 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left side - Urgency message */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 animate-pulse" />
              <span className="font-bold text-lg">Free Access Available For:</span>
            </div>
            
            {/* Countdown timer */}
            <div className="flex items-center gap-3">
              <div className="bg-white/20 rounded-lg px-3 py-1 text-center min-w-[50px]">
                <div className="text-xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
                <div className="text-xs opacity-80">DAYS</div>
              </div>
              <div className="text-xl font-bold">:</div>
              <div className="bg-white/20 rounded-lg px-3 py-1 text-center min-w-[50px]">
                <div className="text-xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-xs opacity-80">HRS</div>
              </div>
              <div className="text-xl font-bold">:</div>
              <div className="bg-white/20 rounded-lg px-3 py-1 text-center min-w-[50px]">
                <div className="text-xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-xs opacity-80">MIN</div>
              </div>
              <div className="text-xl font-bold">:</div>
              <div className="bg-white/20 rounded-lg px-3 py-1 text-center min-w-[50px]">
                <div className="text-xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-xs opacity-80">SEC</div>
              </div>
            </div>
          </div>

          {/* Right side - Scarcity indicators */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="text-sm">2,500+ entrepreneurs registered</span>
            </div>
            <Badge className="bg-ai-accent text-black font-bold px-3 py-1 animate-bounce">
              <Zap className="w-4 h-4 mr-1" />
              100% FREE!
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBar;