import { useState, useEffect } from 'react';

const INIT_TIME = {
  days: 2,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const Home = () => {
  const [countdown, setCountdown] = useState(INIT_TIME);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        const { days, hours, minutes, seconds } = prevCountdown;
        let remainingSeconds =
          days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
        remainingSeconds--;

        if (days === 0) return INIT_TIME;
        // if (remainingSeconds <= 0) return INIT_TIME;

        const newDays = Math.floor(remainingSeconds / (24 * 60 * 60));
        remainingSeconds %= 24 * 60 * 60;
        const newHours = Math.floor(remainingSeconds / (60 * 60));
        remainingSeconds %= 60 * 60;
        const newMinutes = Math.floor(remainingSeconds / 60);
        const newSeconds = remainingSeconds % 60;

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const countdownBlocks = [
    { label: 'days', value: countdown.days },
    { label: 'hours', value: countdown.hours },
    { label: 'minutes', value: countdown.minutes },
    { label: 'seconds', value: countdown.seconds },
  ];

  return (
    <div className="text-center contain my-6">
      {/* <h1 className="text-3xl mb-4">Countdown</h1> */}
      <img src="/images/secret.png" alt="secret" className="max-w-xs mx-auto" />
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-4">
          {countdownBlocks.map((block) => (
            <div key={block.label}>
              <div className="bg-yellow py-2 rounded-lg">
                <span className="text-xl font-bold text-white">
                  {block.value}
                </span>
              </div>
              <span className="block capitalize">{block.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
