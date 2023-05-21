import { useState, useEffect, useContext } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { StaticContext } from '../../context/static.context';
import Footer from '../../components/footer/footer.component';
import { useTranslation } from 'react-i18next';

const INIT_TIME = {
  days: 2,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const Home = () => {
  const [countdown, setCountdown] = useState(INIT_TIME);
  const { waferProducts } = useContext(StaticContext);
  const [t] = useTranslation('home');

  useEffect(() => {
    document.title = 'home';
    return () => {
      document.title = 'el-shamedan';
    };
  }, []);

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
    { label: t('time.days'), value: countdown.days },
    { label: t('time.hours'), value: countdown.hours },
    { label: t('time.minutes'), value: countdown.minutes },
    { label: t('time.seconds'), value: countdown.seconds },
  ];

  return (
    <>
      <article>
        <section className="py-6 contain">
          <div className="w-fit mx-auto md:mx-0">
            <img
              src="images/secret.png"
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
            {t('products')}
          </h2>
          <div className="contain">
            <div className="grid grid-cols-2 gap-4">
              {waferProducts.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </>
  );
};

export default Home;
