import {
  useRef,
  useReducer,
  // useEffect
} from 'react';
import { useTranslation } from 'react-i18next';
import Confetti from 'react-confetti';
import ReactHowler from 'react-howler';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

import style from './giveaway.module.css';
import { useTitle } from '../../hooks/useTitle';
import Img from '../../components/img/img.component';
import CardGroup from '../../components/card-group/card-group.component';

const categories = ['t-shirt', 'bag', 'notebook', 'mug'];
const imgs = ['king', 'mafia', 'diva', 'hero', 'magician'];

const randELement = (list) => list[Math.floor(Math.random() * list.length)];

const imgPath = (category = '', name = '') => {
  if (!(categories && name))
    (category = randELement(categories)), (name = randELement(imgs));

  return `images/${category}/${name}.webp`;
};

const getCat_Char = (path) => {
  const x = path.split('/');
  const category = x[1];
  const character = x[2].split('.')[0];
  return { category, character };
};

// reducer

type State = {
  rotation: number;
  src: string;
  confetti: boolean;
  overlay: boolean;
  activeCard: number;
  sound: { error: boolean; win: boolean };
  isDisabled: boolean;
};

type Action =
  | { type: 'SET_ROTATION'; payload: number }
  | { type: 'SET_SRC' }
  | { type: 'SET_CONFETTI' }
  | { type: 'SET_OVERLAY' }
  | { type: 'SET_ACTIVE_CARD'; payload: number }
  | { type: 'SET_SOUND'; payload: { error: boolean; win: boolean } }
  | { type: 'SET_DISABLED'; payload: boolean };

const initialState: State = {
  rotation: 0,
  src: imgPath(),
  confetti: false,
  overlay: false,
  activeCard: 0,
  sound: { error: false, win: false },
  isDisabled: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_ROTATION':
      return { ...state, rotation: action.payload };
    case 'SET_SRC': {
      let newPath;
      do {
        newPath = imgPath();
      } while (state.src === newPath);
      return { ...state, src: newPath };
    }
    case 'SET_CONFETTI':
      return { ...state, confetti: !state.confetti };
    case 'SET_OVERLAY':
      return { ...state, overlay: !state.overlay };
    case 'SET_ACTIVE_CARD':
      return { ...state, activeCard: action.payload };
    case 'SET_SOUND':
      return { ...state, sound: action.payload };
    case 'SET_DISABLED':
      return { ...state, isDisabled: action.payload };
    default:
      return state;
  }
};

const Giveaway = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { rotation, src, confetti, overlay, activeCard, sound, isDisabled } =
    state;

  const formRef = useRef(null);
  const [t, i18n] = useTranslation(['giveaway', 'products']);

  useTitle('giveaway');

  const getPrizeName = () => {
    const { category, character } = getCat_Char(src);

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

  const handleSound = (error = false, win = false) => {
    dispatch({ type: 'SET_SOUND', payload: { error, win } });
  };

  // useEffect(() => {
  //   const isProduction = import.meta.env.PROD;
  //   if (isProduction)
  //     for (const category of categories)
  //       for (const name of imgs) new Image().src = imgPath(category, name);
  // }, []);

  const prizeSelect = () => {
    const loops = 10,
      time_ms = 500;

    setTimeout(() => {
      dispatch({ type: 'SET_ROTATION', payload: state.rotation + 180 * 10 });
    }, time_ms);

    for (let i = 0; i < loops; i++) {
      setTimeout(() => {
        setTimeout(() => {
          dispatch({ type: 'SET_SRC' });
        }, time_ms / 2);

        if (i === loops - 1)
          setTimeout(() => {
            dispatch({ type: 'SET_CONFETTI' });
            handleSound(undefined, true);
          }, time_ms);
      }, (i + 1) * time_ms);
    }
  };

  const handleBack = () => {
    dispatch({ type: 'SET_CONFETTI' });
    dispatch({ type: 'SET_OVERLAY' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;

    // const name = form.name.value;
    // const email = form.email.value;
    // const phone = form.phone.value;
    const secret = form.secret.value;

    // !(name && email && phone && secret) &&
    if (secret === '9999') {
      dispatch({ type: 'SET_OVERLAY' });
      prizeSelect();
      form.reset();
    } else
      dispatch({ type: 'SET_SOUND', payload: { error: true, win: false } });
  };

  const handlePrevNext = (direction: 'prev' | 'next') => {
    dispatch({ type: 'SET_DISABLED', payload: true });
    setTimeout(() => {
      dispatch({ type: 'SET_DISABLED', payload: false });
    }, 300);

    const nextIdx =
      direction === 'next'
        ? (state.activeCard + 1) % categories.length
        : (state.activeCard - 1 + categories.length) % categories.length;
    dispatch({ type: 'SET_ACTIVE_CARD', payload: nextIdx });
  };

  return (
    <article className="contain py-6 mx-auto relative">
      <h1 className="text-yellow text-center mx-auto ltr:font-bold ltr:text-lg rtl:text-2xl center mb-6 max-w-md h-7">
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
                  ? '-translate-x-20 translate-y-24 scale-0'
                  : ''
              } ${
                idx === (activeCard - 1 + categories.length) % categories.length
                  ? 'translate-x-20 translate-y-24 scale-0'
                  : ''
              }`}
            >
              <CardGroup category={i} />
            </span>
          ))}
        </div>
        <div className="mt-48 mb-8 flex justify-around rtl:flex-row-reverse px-10">
          <FaChevronCircleLeft
            className={`text-3xl text-yellow hover:text-yellow/80 cursor-pointer ${
              isDisabled ? 'pointer-events-none' : ''
            }`}
            onClick={() => handlePrevNext('prev')}
          />
          <FaChevronCircleRight
            className={`text-3xl text-yellow hover:text-yellow/80 cursor-pointer ${
              isDisabled ? 'pointer-events-none' : ''
            }`}
            onClick={() => handlePrevNext('next')}
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
              className={`${style.content} absolute w-full h-full transition-transform ease-linear duration-[5s]`}
              style={{
                transform: `rotateY(${rotation}deg)`,
              }}
            >
              <div
                className={`${style.front} bg-purple grid place-items-center`}
              >
                <Img key={src} src={src} alt="" />
              </div>
              <div className={`${style.back} bg-red grid place-items-center`}>
                <Img key={src} src={src} alt="" />
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
