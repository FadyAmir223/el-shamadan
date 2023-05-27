import { useState, useEffect, useContext } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { StaticContext } from '../../context/static.context';
import Footer from '../../components/footer/footer.component';
import { useTranslation } from 'react-i18next';
import Img from '../../components/img/img.component';

const calculateCountdown = () => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 2);

  const nextDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );

  let remainingTime = nextDay.getTime() - Date.now();

  const time_ms = {
    day: 1000 * 60 * 60 * 24,
    hour: 1000 * 60 * 60,
    minute: 1000 * 60,
    second: 1000,
  };

  const days = Math.floor(remainingTime / time_ms.day);
  remainingTime = remainingTime % time_ms.day;

  const hours = Math.floor(remainingTime / time_ms.hour);
  remainingTime = remainingTime % time_ms.hour;

  const minutes = Math.floor(remainingTime / time_ms.minute);
  remainingTime = remainingTime % time_ms.minute;

  const seconds = Math.floor(remainingTime / time_ms.second);

  return { days, hours, minutes, seconds };
};

const Home = () => {
  const { waferProducts } = useContext(StaticContext);
  const [t] = useTranslation('home');

  const [countdown, setCountdown] = useState(calculateCountdown());

  useEffect(() => {
    document.title = 'home';
    return () => {
      document.title = 'el-shamedan';
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newCountdown = calculateCountdown();
      setCountdown(newCountdown);
      if (newCountdown === null) clearInterval(interval);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const countdownBlocks = countdown
    ? [
        { label: t('time.days'), value: countdown.days },
        { label: t('time.hours'), value: countdown.hours },
        { label: t('time.minutes'), value: countdown.minutes },
        { label: t('time.seconds'), value: countdown.seconds },
      ]
    : [];

  return (
    <>
      <article>
        <section className="py-6 relative">
          <div className="contain">
            <Img
              src="images/curtain-left.png"
              alt="curtain-left"
              className="absolute left-0 top-0 h-4/5 opacity-50"
            />

            <Img
              src="images/curtain-right.png"
              alt="curtain-left"
              className="absolute right-0 top-0 h-4/5 opacity-50"
            />
            <div className="w-fit mx-auto md:mx-0 relative">
              <Img
                src="images/secret.png"
                alt="secret"
                className="max-w-xs mx-auto md:mx-0 mb-4 w-full"
              />

              <div className="text-center grid grid-cols-4 gap-4">
                {countdownBlocks.map((block) => (
                  <div key={block.label}>
                    <div className="bg-yellow rounded-lg h-10 grid place-items-center">
                      <span className="rtl:text-2xl ltr:text-xl font-bold text-grey">
                        {block.value}
                      </span>
                    </div>
                    <span className="block capitalize text-white rtl:text-2xl h-5">
                      {block.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-8">
          <h2 className="text-center text-3xl md:text-4xl md:rtl:text-5xl pb-2 mb-6 lg:mb-14 uppercase text-white relative before:absolute before:bottom-0 before:w-20 before:left-1/2 before:-translate-x-1/2 before:h-[2px] before:bg-purple">
            {t('products')}
          </h2>
          <div className="contain">
            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-16">
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
