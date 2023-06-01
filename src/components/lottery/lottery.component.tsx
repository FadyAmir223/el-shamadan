import ReactConfetti from 'react-confetti';
import style from './lottery.module.css';
import Img from '../../components/img/img.component';
// import Modal from '../../components/modal/modal';

const Lottery = ({ rotation, src, confetti, getPrizeName, handleBack, t }) => {
  return (
    // </Modal><Modal>
    <div className="fixed z-50 top-0 left-0 w-full h-screen overflow-hidden grid place-items-center bg-grey">
      <div
        className="absolute top-0 left-0 w-full h-full opacity-[15%]"
        style={{
          backgroundImage: 'url("images/item/background.webp")',
          backgroundSize: '100px',
        }}
      ></div>

      <div className={`${style.card} w-52 aspect-[5/7] float-left select-none`}>
        <div
          className={`${style.content} absolute w-full h-full transition-transform ease-linear duration-[5s]`}
          style={{
            transform: `rotateY(${rotation}deg)`,
          }}
        >
          <div className={`${style.front} bg-purple grid place-items-center`}>
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
      {confetti && <ReactConfetti />}
    </div>
  );
};

export default Lottery;
