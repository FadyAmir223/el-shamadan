import { useTranslation } from 'react-i18next';

const Giveaway = () => {
  const [t] = useTranslation('giveaway');

  return (
    <article className="contain py-6 mx-auto relative">
      <h1 className="text-yellow text-center mx-auto ltr:font-bold ltr:text-lg rtl:text-2xl center mb-6 max-w-md">
        {t('title')}
      </h1>
      <div className="flex justify-center group">
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
    </article>
  );
};

export default Giveaway;
