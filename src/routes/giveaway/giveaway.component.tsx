import { useRef, useReducer, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

import { useTitle } from '../../hooks/useTitle';
import CardGroup from '../../components/card-group/card-group.component';

const Lottery = lazy(
  () => import('../../components/lottery/lottery.component')
);

type State = {
  overlay: boolean;
  activeCard: number;
  sound: { error: boolean; win: boolean };
  isDisabled: boolean;
};

type Action =
  | { type: 'SET_ROTATION'; payload: number }
  | { type: 'SET_CONFETTI' }
  | { type: 'SET_OVERLAY' }
  | { type: 'SET_ACTIVE_CARD'; payload: number }
  | { type: 'SET_SOUND'; payload: { error: boolean; win: boolean } }
  | { type: 'SET_DISABLED'; payload: boolean };

const initialState: State = {
  overlay: false,
  activeCard: 0,
  sound: { error: false, win: false },
  isDisabled: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
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

const categories = ['t-shirt', 'bag', 'notebook', 'mug'];

const Giveaway = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { overlay, activeCard, sound, isDisabled } = state;

  const formRef = useRef(null);
  const [t] = useTranslation(['giveaway', 'products']);

  useTitle('giveaway');

  const handleSound = (error = false, win = false) => {
    dispatch({ type: 'SET_SOUND', payload: { error, win } });
  };

  const setOverlay = () => {
    dispatch({ type: 'SET_OVERLAY' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;

    const secret = form.secret.value;

    // const name = form.name.value;
    // const email = form.email.value;
    // const phone = form.phone.value;
    // !(name && email && phone && secret) &&

    if (secret === '9999' || secret === '٩٩٩٩') {
      dispatch({ type: 'SET_OVERLAY' });
      form.reset();
    } else
      dispatch({ type: 'SET_SOUND', payload: { error: true, win: false } });
  };

  const handlePrevNext = (direction: 'prev' | 'next') => {
    dispatch({ type: 'SET_DISABLED', payload: true });
    setTimeout(() => {
      dispatch({ type: 'SET_DISABLED', payload: false });
    }, 320);

    const nextIdx =
      direction === 'next'
        ? (state.activeCard + 1) % categories.length
        : (state.activeCard - 1 + categories.length) % categories.length;
    dispatch({ type: 'SET_ACTIVE_CARD', payload: nextIdx });
  };

  return (
    <article className="contain py-6 mx-auto relative">
      <h1 className="dark:text-yellow text-purple text-center mx-auto ltr:font-bold ltr:text-lg rtl:text-2xl center mb-6 max-w-md h-7">
        {t('title')}
      </h1>

      <div className="max-w-xs mx-auto">
        <div className="flex justify-center">
          {categories.map((i, idx) => (
            <span
              key={i}
              className={`will-change-transform ease-linear duration-[400ms] ${
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
            className={`text-3xl dark:text-yellow text-purple dark:hover:text-yellow/80 hover:text-purple/80 cursor-pointer ${
              isDisabled ? 'pointer-events-none' : ''
            }`}
            onClick={() => handlePrevNext('prev')}
          />
          <FaChevronCircleRight
            className={`text-3xl dark:text-yellow text-purple dark:hover:text-yellow/80 hover:text-purple/80 cursor-pointer ${
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

        <button id="win-btn" className="form-button w-full cursor-pointer">
          {t(t('form.submit'))}
        </button>
      </form>

      {overlay && (
        <Lottery
          categories={categories}
          handleSound={handleSound}
          setOverlay={setOverlay}
        />
      )}

      {sound.error && (
        <audio
          src="sounds/error.mp3"
          autoPlay
          onEnded={() => handleSound(false)}
        />
      )}

      {sound.win && (
        <audio
          src="sounds/win.mp3"
          autoPlay
          onEnded={() => handleSound(undefined, false)}
        />
      )}
    </article>
  );
};

export default Giveaway;
