type CardGroupProps = {
  category: string;
};

const CardGroup = ({ category }: CardGroupProps) => {
  return (
    <div className="flex justify-center group absolute">
      <div className="w-28 aspect-[5/7] bg-yellow rounded-lg absolute -translate-x-[10%] -rotate-1 group-hover:-translate-x-[75%] group-hover:translate-y-[16%] group-hover:-rotate-[24deg] time-curve grid place-items-center select-none will-change-transform">
        <img
          src={`images/${category}/diva-180.webp`}
          alt={'diva' + category}
          className="p-3"
        />
      </div>

      <div className="w-28 aspect-[5/7] bg-purple rounded-lg absolute rotate-2 group-hover:-translate-x-[25%] group-hover:translate-y-[8%] group-hover:-rotate-[8deg] time-curve grid place-items-center select-none will-change-transform">
        <img
          src={`images/${category}/hero-180.webp`}
          alt={'hero' + category}
          className="p-3"
        />
      </div>

      <div className="w-28 aspect-[5/7] bg-yellow rounded-lg absolute -translate-x-[6%] -rotate-3 group-hover:translate-x-[25%] group-hover:translate-y-[8%] group-hover:rotate-[8deg] time-curve grid place-items-center select-none will-change-transform">
        <img
          src={`images/${category}/magician-180.webp`}
          alt={'magician' + category}
          className="p-3"
        />
      </div>

      <div className="w-28 aspect-[5/7] bg-purple rounded-lg absolute translate-x-[10%] translate-y-[3%] rotate-[5deg] group-hover:translate-x-[75%] group-hover:translate-y-[16%] group-hover:rotate-[24deg] time-curve grid place-items-center overflow-hidden select-none will-change-transform">
        <img
          src={`images/${category}/king-180.webp`}
          alt={'king' + category}
          className="p-3"
        />
      </div>
    </div>
  );
};

export default CardGroup;
