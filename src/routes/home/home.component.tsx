import { useState, useEffect } from 'react';

const waferProducts = [
  {
    name: 'king',
    coverUrl: 'images/king.png',
    characterUrl: 'images/king_.png',
  },
  {
    name: 'mafia',
    coverUrl: 'images/mafia.png',
    characterUrl: 'images/mafia_.png',
  },
  {
    name: 'magician',
    coverUrl: 'images/magician.png',
    characterUrl: 'images/magician_.png',
  },
  {
    name: 'hero',
    coverUrl: 'images/hero.png',
    characterUrl: 'images/hero_.png',
  },
  {
    name: 'joker',
    coverUrl: 'images/joker.png',
    characterUrl: 'images/joker_.png',
  },
  {
    name: 'diva',
    coverUrl: 'images/diva.png',
    characterUrl: 'images/diva_.png',
  },
];

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
    <>
      <section className="py-6 contain">
        <div className="w-fit mx-auto md:mx-0">
          <img
            src="/images/secret.png"
            alt="secret"
            className="max-w-xs mx-auto md:mx-0 mb-4 w-full"
          />

          <div className="text-center grid grid-cols-4 gap-4">
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
      </section>

      <section className="bg-black py-8">
        <h2 className="text-center text-3xl md:text-4xl pb-2 mb-6 uppercase text-white relative before:absolute before:bottom-0 before:w-20 before:left-1/2 before:-translate-x-1/2 before:h-[2px] before:bg-purple">
          products
        </h2>
        <div className="contain">
          <div className="grid grid-cols-2 gap-4">
            {waferProducts.map((product) => (
              <div key={product.name} className="relative group">
                <img
                  src={product.characterUrl}
                  alt={product.name}
                  className="w-20 absolute top-0 left-0 group-hover:translate-y-9 duration-500 transition-transform"
                />
                <div className="bg-white rounded-lg p-4 relative before:absolute before:left-0 before:top-0 before:bg-purple before:duration-500 before:h-full before:w-0 hover:before:w-1/2 group before:rounded-r-2xl mt-16">
                  <div className="relative z-10">
                    <img
                      src={product.coverUrl}
                      alt={product.name}
                      className="w-full h-auto mb-4 group-hover:scale-110 duration-500"
                    />
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
