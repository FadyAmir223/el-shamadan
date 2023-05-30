import { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTitle } from '../../hooks/useTitle';
import Confetti from 'react-confetti';
import ReactHowler from 'react-howler';
import style from './giveaway.module.css';
import Img from '../../components/img/img.component';

const categories = ['mug', 'bag', 'notebook'];
const imgs = ['king', 'mafia', 'diva', 'hero', 'magician'];

const randELement = (list) => list[Math.floor(Math.random() * list.length)];

const imgPath = (category = '', name = '') => {
  if (!(categories && name))
    (category = randELement(categories)), (name = randELement(imgs));
  return `images/${category}/${name}.png`;
};

const Giveaway = () => {
  const [rotation, setRotation] = useState(0);
  const [src, setSrc] = useState(imgPath);
  const [confetti, setConfetti] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [sound, setSound] = useState({
    error: false,
    win: false,
  });
  const formRef = useRef(null);
  const [t] = useTranslation('giveaway');

  useTitle('giveaway');

  const handleSound = (error = false, win = false) => {
    setSound(() => ({
      error,
      win,
    }));
  };

  useEffect(() => {
    (async () => {
      for (const category of categories)
        for (const name of imgs) {
          const imgSrc = imgPath(category, name);
          const img = new Image();
          img.src = imgSrc;
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
          });
        }
    })();
  }, []);

  const prizeSelect = () => {
    const loops = 10,
      time_ms = 700;
    for (let i = 0; i < loops; i++) {
      setTimeout(function () {
        const imagePath = imgPath();
        setRotation((prevRotation) => prevRotation + 180);

        setTimeout(function () {
          setSrc(imagePath);
        }, time_ms / 2);

        if (i === loops - 1) {
          setTimeout(() => {
            setConfetti(true);
            handleSound(undefined, true);
          }, time_ms);
        }
      }, (i + 1) * time_ms);
    }
  };

  const handleBack = () => {
    setConfetti(false);
    setOverlay(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;

    // const name = form.name.value;
    // const email = form.email.value;
    // const phone = form.phone.value;
    const secret = form.secret.value;

    if (
      // !(name && email && phone && secret) &&
      secret === '9999'
    ) {
      setOverlay(true);
      prizeSelect();
      form.reset();
    } else
      setSound((prevSound) => ({
        ...prevSound,
        error: true,
      }));
  };

  return (
    <article className="contain py-6 mx-auto relative">
      <h1 className="text-yellow text-center mx-auto ltr:font-bold ltr:text-lg rtl:text-2xl center mb-6 max-w-md">
        {t('title')}
      </h1>
      <div className="flex justify-center group">
        <div className="w-28 aspect-[5/7] bg-yellow rounded-lg absolute -translate-x-[10%] -rotate-1 group-hover:-translate-x-[75%] group-hover:translate-y-[16%] group-hover:-rotate-[24deg] time-curve grid place-items-center select-none will-change-transform">
          <Img src="images/bag/king.png" alt="king bag" className="p-3" />
        </div>

        <div className="w-28 aspect-[5/7] bg-purple rounded-lg absolute rotate-2 group-hover:-translate-x-[25%] group-hover:translate-y-[8%] group-hover:-rotate-[8deg] time-curve grid place-items-center select-none will-change-transform">
          <Img
            src="images/notebook/hero.png"
            alt="hero notebook"
            className="p-3"
          />
        </div>

        <div className="w-28 aspect-[5/7] bg-yellow rounded-lg absolute -translate-x-[6%] -rotate-3 group-hover:translate-x-[25%] group-hover:translate-y-[8%] group-hover:rotate-[8deg] time-curve grid place-items-center select-none will-change-transform">
          <Img src="images/mug/hero.png" alt="hero mug" className="p-3" />
        </div>

        <div className="w-28 aspect-[5/7] bg-purple rounded-lg absolute translate-x-[10%] translate-y-[3%] rotate-[5deg] group-hover:translate-x-[75%] group-hover:translate-y-[16%] group-hover:rotate-[24deg] time-curve grid place-items-center overflow-hidden select-none will-change-transform">
          <Img
            src="images/giveaway/stick-real.png"
            alt="real stick"
            className="p-3 h-full"
          />
        </div>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-64"
      >
        {['name', 'email', 'phone', 'secret'].map((i) => (
          <input
            key={i}
            type={i === 'email' ? 'email' : 'text'}
            name={i}
            placeholder={t(i)}
            className="form-input mb-4"
          />
        ))}

        <button className="form-button w-full cursor-pointer">
          {t('submit')}
        </button>
      </form>

      {overlay && (
        <div className="fixed z-50 top-0 left-0 w-full h-screen overflow-hidden grid place-items-center bg-grey">
          <div
            className="absolute top-0 left-0 w-full h-full opacity-[15%]"
            style={{
              backgroundImage: 'url("images/item/background.webp")',
              backgroundSize: '100px',
            }}
          ></div>

          <div
            className={`${style.card} w-52 aspect-[5/7] float-left select-none`}
          >
            <div
              className={`${style.content} absolute w-full h-full transition-transform ease-linear duration-700`}
              style={{
                transform: `rotateY(${rotation}deg)`,
              }}
            >
              <div className={`${style.front} bg-red grid place-items-center`}>
                <Img src={src} alt="" />
              </div>
              <div
                className={`${style.back} bg-purple grid place-items-center`}
              >
                <Img src={src} key={src} alt="" />
              </div>
            </div>
          </div>
          <button
            className={`form-button absolute bottom-[13%] text-xl ${
              !confetti ? 'hidden' : ''
            }`}
            onClick={handleBack}
          >
            {t('back')}
          </button>
          {confetti && <Confetti />}
        </div>
      )}

      <ReactHowler
        src="sounds/error.mp3"
        playing={sound.error}
        onEnd={() => handleSound(false)}
      />
      <ReactHowler
        src="sounds/win.mp3"
        playing={sound.win}
        onEnd={() => handleSound(undefined, false)}
      />
    </article>
  );
};

export default Giveaway;
