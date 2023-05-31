import Img from '../../components/img/img.component';

const Fallback = () => {
  return (
    <main className="py-16 flex flex-col items-center font-[roboto]">
      <div className="relative">
        <Img src="images/character/king.png" alt="error" className="h-48" />
        <span className="absolute text-5xl right-0 top-1/2 translate-x-1/3 -scale-x-100">
          ✋
        </span>
      </div>
      <p className="uppercase text-yellow text-2xl pt-3">connection errors</p>
      <p className="text-yellow/90 text-sm">you are offline</p>
    </main>
  );
};

export default Fallback;