import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTitle } from '../../hooks/useTitle';
import style from './giveaway.module.css';
import Confetti from 'react-confetti';

const categories = ['mug', 'bag', 'notebook'];
const imgs = ['king', 'mafia', 'diva', 'hero', 'magician'];

const randELement = (list) => list[Math.floor(Math.random() * list.length)];

const img = () => {
  const category = randELement(categories);
  const name = randELement(imgs);
  return `images/${category}/${name}.png`;
};

const Giveaway = () => {
  const [rotation, setRotation] = useState(0);
  const [src, setSrc] = useState(img);
  const [confetti, setConfetti] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const formRef = useRef(null);
  const [t] = useTranslation('giveaway');
  useTitle('giveaway');

  const prizeSelect = () => {
    const loops = 10;
    for (let i = 0; i < loops; i++) {
      setTimeout(function () {
        const imagePath = img();
        setRotation((prevRotation) => prevRotation + 180);

        setTimeout(function () {
          setSrc(imagePath);
        }, 500);

        if (i === loops - 1) {
          setTimeout(() => {
            setConfetti(true);
          }, 500);
        }
      }, (i + 1) * 1000);
    }
  };

  const handleBack = () => {
    setConfetti(false);
    setOverlay(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const secret = form.secret.value;

    // if (!(name && email && phone && secret))
    if (secret === '9999') setOverlay(true);

    prizeSelect();
    form.reset();
  };

  return (
    <article className="contain py-6 mx-auto relative">
      <h1 className="text-yellow text-center mx-auto ltr:font-bold ltr:text-lg rtl:text-2xl center mb-6 max-w-md">
        {t('title')}
      </h1>
      <div className="flex justify-center group h-56">
        <div className="w-28 aspect-[5/7] bg-red rounded-lg absolute -translate-x-[10%] -rotate-1 group-hover:-translate-x-[75%] group-hover:translate-y-[16%] group-hover:-rotate-[24deg] time-curve grid place-items-center">
          <img src="images/mug/hero.png" alt="hero mug" className="p-3" />
        </div>

        <div className="w-28 aspect-[5/7] bg-grey rounded-lg absolute rotate-2 group-hover:-translate-x-[25%] group-hover:translate-y-[8%] group-hover:-rotate-[8deg] time-curve grid place-items-center">
          <img
            src="images/notebook/hero.png"
            alt="hero notebook"
            className="p-3"
          />
        </div>

        <div className="w-28 aspect-[5/7] bg-purple rounded-lg absolute -translate-x-[6%] -rotate-3 group-hover:translate-x-[25%] group-hover:translate-y-[8%] group-hover:rotate-[8deg] time-curve grid place-items-center">
          <img
            src="images/giveaway/stick-real.png"
            alt="real stick"
            className="p-3 h-full"
          />
        </div>

        <div className="w-28 aspect-[5/7] bg-yellow rounded-lg absolute translate-x-[10%] translate-y-[3%] rotate-[5deg] group-hover:translate-x-[75%] group-hover:translate-y-[16%] group-hover:rotate-[24deg] time-curve grid place-items-center overflow-hidden">
          <img src="images/bag/king.png" alt="king bag" className="p-3" />
        </div>
      </div>

      <form ref={formRef} onSubmit={handleSubmit}>
        {['name', 'email', 'phone', 'secret'].map((i) => (
          <input
            key={i}
            type={i === 'email' ? 'email' : 'text'}
            name={i}
            placeholder={t(i)}
            className="form-input mb-4"
          />
        ))}

        <button className="form-button w-full">{t('submit')}</button>
      </form>

      {overlay && (
        <div className="fixed z-50 top-0 left-0 w-full h-screen overflow-hidden grid place-items-center bg-black">
          <div
            className={`${style.card} w-52 aspect-[5/7] float-left`}
            onClick={prizeSelect}
          >
            <div
              className={`${style.content} transition-transform ease-linear duration-1000`}
              style={{
                transform: `rotateY(${rotation}deg)`,
              }}
            >
              <div className={`${style.front} bg-red grid place-items-center`}>
                <img src={src} alt="" />
              </div>
              <div
                className={`${style.back} bg-purple grid place-items-center`}
              >
                <img src={src} key={src} alt="" />
              </div>
            </div>
          </div>
          <button
            className={`form-button absolute bottom-[13%] ${
              !confetti ? 'hidden' : ''
            }`}
            onClick={handleBack}
          >
            {t('back')}
          </button>
          {confetti && <Confetti />}
        </div>
      )}
    </article>
  );
};

export default Giveaway;
