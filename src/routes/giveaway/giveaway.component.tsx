import { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTitle } from '../../hooks/useTitle';
import Confetti from 'react-confetti';
import ReactHowler from 'react-howler';
import style from './giveaway.module.css';
import Img from '../../components/img/img.component';
import CardGroup from '../../components/card-group/card-group.component';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

const categories = ['bag', 'notebook', 'mug'];
const imgs = ['king', 'mafia', 'diva', 'hero', 'magician'];

const randELement = (list) => list[Math.floor(Math.random() * list.length)];

const imgPath = (category = '', name = '') => {
  if (!(categories && name))
    (category = randELement(categories)), (name = randELement(imgs));
  return `images/${category}/${name}.png`;
};

const getCat_Char = (path) => {
  const x = path.split('/');
  const category = x[1];
  const character = x[2].split('.')[0];
  return { category, character };
};

const Giveaway = () => {
  const [rotation, setRotation] = useState(0);
  const [src, setSrc] = useState(imgPath);
  const [confetti, setConfetti] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [sound, setSound] = useState({
    error: false,
    win: false,
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const formRef = useRef(null);
  const [t] = useTranslation(['giveaway', 'products']);

  useTitle('giveaway');

  const handleSound = (error = false, win = false) => {
    setSound(() => ({
      error,
      win,
    }));
  };

  useEffect(() => {
    for (const category of categories)
      for (const name of imgs) new Image().src = imgPath(category, name);
  }, []);

  const prizeSelect = () => {
    const loops = 10,
      time_ms = 500;
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

  const handlePrevNext = (direction) => {
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 300);

    const nextIdx =
      direction === 'next'
        ? (activeCard + 1) % categories.length
        : (activeCard - 1 + categories.length) % categories.length;
    setActiveCard(nextIdx);
  };

  return (
    <article className="contain py-6 mx-auto relative">
      <h1 className="text-yellow text-center mx-auto ltr:font-bold ltr:text-lg rtl:text-2xl center mb-6 max-w-md">
        {t('title')}
      </h1>

      <div className="max-w-xs mx-auto">
        <div className="flex justify-center">
          {categories.map((i, idx) => (
            <span
              key={i}
              className={`will-change-transform transition-transform ease-linear duration-[400ms] ${
                idx !== activeCard ? 'scale-0' : ''
              } ${
                idx === (activeCard + 1) % categories.length
                  ? '-translate-x-16 translate-y-24 scale-0'
                  : ''
              } ${
                idx === (activeCard - 1 + categories.length) % categories.length
                  ? 'translate-x-16 translate-y-24 scale-0'
                  : ''
              }`}
            >
              <CardGroup category={i} />
            </span>
          ))}
        </div>
        <div className="mt-48 mb-8 flex justify-around px-10">
          <FaChevronCircleRight
            className={`text-3xl text-yellow hover:text-yellow/80 cursor-pointer ${
              isDisabled ? 'pointer-events-none' : ''
            }`}
            onClick={() => handlePrevNext('next')}
          />
          <FaChevronCircleLeft
            className={`text-3xl text-yellow hover:text-yellow/80 cursor-pointer ${
              isDisabled ? 'pointer-events-none' : ''
            }`}
            onClick={() => handlePrevNext('prev')}
          />
        </div>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="max-w-md mx-auto">
        {['name', 'email', 'phone', 'secret'].map((i) => (
          <input
            key={i}
            type={i === 'email' ? 'email' : 'text'}
            name={i}
            placeholder={t(`form.${i}`)}
            className="form-input mb-4"
          />
        ))}

        <button className="form-button w-full cursor-pointer">
          {t(t('form.submit'))}
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
              className={`${style.content} absolute w-full h-full transition-transform ease-linear duration-500`}
              style={{
                transform: `rotateY(${rotation}deg)`,
              }}
            >
              <div
                className={`${style.front} bg-purple grid place-items-center`}
              >
                <Img src={src} alt="" />
              </div>
              <div className={`${style.back} bg-red grid place-items-center`}>
                <Img src={src} key={src} alt="" />
              </div>
            </div>
          </div>
          {confetti && (
            <>
              <span className="absolute top-[20%] text-yellow ltr:text-xl rtl:text-2xl">
                {`${t(`prize.${getCat_Char(src).category}`)} ${t(
                  `${getCat_Char(src).character}.name`,
                  {
                    ns: 'products',
                  }
                )}`}
              </span>

              <button
                className={`form-button absolute bottom-[13%] text-xl`}
                onClick={handleBack}
              >
                {t('back')}
              </button>
            </>
          )}
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
