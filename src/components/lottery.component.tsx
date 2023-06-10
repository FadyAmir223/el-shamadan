import { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';
import { useTranslation } from 'react-i18next';
import Modal from '../components/modal.component';
import style from '../styles/lottery.module.css';

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

  const randSrc = (src) => {
    let newPath;
    do {
      newPath = imgPath();
    } while (src.face === newPath || src.back === newPath);
    return newPath;
  };

  const [src, setSrc] = useState({ face: '', back: '' });

  const [rotation, setRotation] = useState(0);
  const [confetti, setConfetti] = useState(false);

  const [t, i18n] = useTranslation(['giveaway', 'products']);

  const handleBack = () => {
    setConfetti(false);
    setOverlay();
  };

  const getPrizeName = () => {
    const { category, character } = getCat_Char(src.back);

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
    setSrc({ face: randSrc(src), back: randSrc(src) });

    const loops = 5;
    const init_ms = 1000;
    const duration_ms = 500;

    setTimeout(() => {
      setRotation(180 * 10);
    }, init_ms);

    for (let i = 0; i < loops; i++)
      setTimeout(() => {
        setSrc(() => ({
          face: randSrc(src),
          back: randSrc(src),
        }));
      }, init_ms + (i * 2 + 1) * duration_ms + duration_ms / 2);

    setTimeout(() => {
      setConfetti(true);
      handleSound(undefined, true);
    }, init_ms + loops * 2 * duration_ms);
  }, []);

  return (
    <Modal>
      <div className="fixed z-50 top-0 left-0 w-full h-screen overflow-hidden grid place-items-center dark:bg-grey bg-gray-300">
        <div
          className="absolute top-0 left-0 w-full h-full dark:opacity-[15%]"
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
              <img key={src.back} src={src.back} alt="" />
            </div>
            <div
              className={`${style.back} card-side bg-red grid place-items-center`}
            >
              <img key={src.face} src={src.face} alt="" />
            </div>
          </div>
        </div>

        {confetti && (
          <>
            <span className="absolute top-[15%] dark:text-yellow text-purple ltr:text-xl rtl:text-2xl ltr:capitalize ltr:font-bold">
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
