
import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // Выставка уже началась
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Дней', value: timeLeft.days },
    { label: 'Часов', value: timeLeft.hours },
    { label: 'Минут', value: timeLeft.minutes },
    { label: 'Секунд', value: timeLeft.seconds }
  ];

  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-exhibition-anthracite to-exhibition-anthracite/95">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-6 reveal">
          <h2 className="text-2xl font-serif font-medium text-exhibition-beige">
            До открытия выставки
          </h2>
        </div>
        
        <div className="flex justify-center space-x-4 md:space-x-6 reveal">
          {timeUnits.map((unit, index) => (
            <Card key={index} className="bg-card/30 border-exhibition-gold/20 backdrop-blur-lg">
              <CardContent className="p-3 md:p-6 text-center">
                <span className="block text-3xl md:text-5xl font-serif font-bold text-exhibition-gold">
                  {unit.value.toString().padStart(2, '0')}
                </span>
                <span className="text-sm text-foreground/70">{unit.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
