import Img from '../img/img.component';

type CardGroupProps = {
  category: string;
};

const CardGroup = ({ category }: CardGroupProps) => {
  return (
    <div className="flex justify-center group absolute">
      <div className="w-28 aspect-[5/7] bg-yellow rounded-lg absolute -translate-x-[10%] -rotate-1 group-hover:-translate-x-[75%] group-hover:translate-y-[16%] group-hover:-rotate-[24deg] time-curve grid place-items-center select-none will-change-transform">
        <Img
          src={`images/${category}/king.png`}
          alt="king bag"
          className="p-3"
        />
      </div>

      <div className="w-28 aspect-[5/7] bg-purple rounded-lg absolute rotate-2 group-hover:-translate-x-[25%] group-hover:translate-y-[8%] group-hover:-rotate-[8deg] time-curve grid place-items-center select-none will-change-transform">
        <Img
          src={`images/${category}/magician.png`}
          alt="hero notebook"
          className="p-3"
        />
      </div>

      <div className="w-28 aspect-[5/7] bg-yellow rounded-lg absolute -translate-x-[6%] -rotate-3 group-hover:translate-x-[25%] group-hover:translate-y-[8%] group-hover:rotate-[8deg] time-curve grid place-items-center select-none will-change-transform">
        <Img
          src={`images/${category}/hero.png`}
          alt="hero mug"
          className="p-3"
        />
      </div>

      <div className="w-28 aspect-[5/7] bg-purple rounded-lg absolute translate-x-[10%] translate-y-[3%] rotate-[5deg] group-hover:translate-x-[75%] group-hover:translate-y-[16%] group-hover:rotate-[24deg] time-curve grid place-items-center overflow-hidden select-none will-change-transform">
        <Img
          src={`images/${category}/diva.png`}
          alt="real stick"
          className="p-3"
        />
      </div>
    </div>
  );
};

export default CardGroup;
