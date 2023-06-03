import { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';
import style from './lottery.module.css';
import { useTranslation } from 'react-i18next';
import Modal from '../../components/modal/modal';

const imgs = ['king', 'mafia', 'diva', 'hero', 'magician'];

const randELement = (list) => list[Math.floor(Math.random() * list.length)];

const getCat_Char = (path) => {
  const x = path.split('/');
  const category = x[1];
  const character = x[2].split('.')[0];
  return { category, character };
};

const Lottery = ({ categories, handleSound, setOverlay }) => {
  const imgPath = () => {
    const category = randELement(categories);
    const name = randELement(imgs);
    return `images/${category}/${name}.webp`;
  };

  const [src, setSrc] = useState(imgPath());
  const [rotation, setRotation] = useState(0);
  const [confetti, setConfetti] = useState(false);
  const [visibleSrc, setVisibleSrc] = useState(src);

  const [t, i18n] = useTranslation(['giveaway', 'products']);

  const handleBack = () => {
    setConfetti(false);
    setOverlay();
  };

  const getPrizeName = () => {
    const { category, character } = getCat_Char(visibleSrc);

    const categoryLocale = t(`prize.${category}`);
    const characterLocale = t(`${character}.name`, {
      ns: 'products',
    });

    const str =
      i18n.dir() === 'ltr'
        ? `${characterLocale} ${categoryLocale}`
        : `${categoryLocale} ${characterLocale}`;

    return str;
  };

  useEffect(() => {
    const loops = 10;
    const time_ms = 500;

    setTimeout(() => {
      setRotation(180 * 10);
    }, time_ms);

    for (let i = 1; i < loops; i++)
      setTimeout(() => {
        setSrc(() => {
          let newPath;
          do {
            newPath = imgPath();
          } while (visibleSrc === newPath);
          return newPath;
        });
      }, (i + 1) * time_ms + time_ms / 2);

    setTimeout(() => {
      setConfetti(true);
      handleSound(undefined, true);
    }, time_ms + loops * time_ms);
  }, []);

  useEffect(() => {
    setVisibleSrc(imgPath());
  }, [src]);

  return (
    <Modal>
      <div className="fixed z-50 top-0 left-0 w-full h-screen overflow-hidden grid place-items-center bg-grey">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-[15%]"
          style={{
            backgroundImage: 'url("images/item/background.webp")',
            backgroundSize: '100px',
          }}
        ></div>

        <div className={`${style.card} w-52 aspect-[5/7] select-none`}>
          <div
            className={`${style.content} absolute w-full h-full transition-transform ease-linear duration-[5s]`}
            style={{
              transform: `rotateY(${rotation}deg)`,
            }}
          >
            <div
              className={`${style.front} card-side bg-purple grid place-items-center`}
            >
              <img key={visibleSrc} src={visibleSrc} alt="" />
            </div>
            <div
              className={`${style.back} card-side bg-red grid place-items-center`}
            >
              <img key={src} src={src} alt="" />
            </div>
          </div>
        </div>

        {confetti && (
          <>
            <span className="absolute top-[15%] text-yellow ltr:text-xl rtl:text-2xl ltr:capitalize ltr:font-bold">
              {getPrizeName()}
            </span>

            <button
              className="form-button absolute bottom-[10%] text-xl ltr:capitalize"
              onClick={handleBack}
            >
              {t('back')}
            </button>
            <ReactConfetti />
          </>
        )}
      </div>
    </Modal>
  );
};

export default Lottery;
