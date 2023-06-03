import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { StaticContext } from '../../context/static.context';
import { useTitle } from '../../hooks/useTitle';

const SingleProduct = () => {
  const { productName } = useParams();
  const { waferProducts } = useContext(StaticContext);
  const navigate = useNavigate();

  const selectedProductIdx = waferProducts.findIndex(
    (product) => product.id === productName
  );

  const selectedProduct = waferProducts[selectedProductIdx];

  useTitle(selectedProduct.id);

  const handlePrevNext = (direction) => {
    const nextIdx =
      direction === 'next'
        ? (selectedProductIdx + 1) % waferProducts.length
        : (selectedProductIdx - 1 + waferProducts.length) %
          waferProducts.length;

    navigate(`/products/${waferProducts[nextIdx].id}`);
  };

  return (
    selectedProduct && (
      <article className="overflow-hidden relative py-8 md:py-6 h-[calc(100vh-70px)]">
        <FaAngleLeft
          className="select-none text-4xl cursor-pointer dark:text-yellow dark:hover:text-yellow/80 text-purple hover:text-purple/80 focus:outline-0  absolute z-20 top-1/4 md:top-1/2 left-0 -translate-y-1/2"
          onClick={() => handlePrevNext('prev')}
        />
        <FaAngleRight
          className="select-none event text-4xl cursor-pointer dark:text-yellow dark:hover:text-yellow/80 text-purple hover:text-purple/80 focus:outline-0  absolute z-20 top-1/4 md:top-1/2 right-0 -translate-y-1/2 translat"
          onClick={() => handlePrevNext('next')}
        />
        <section className="relative z-10 contain">
          <img
            src={selectedProduct.coverUrl}
            alt={`${selectedProduct.name} box`}
            className="select-none h-28 sm:h-36 md:h-48 rotate-6 mx-auto my-10 hover:scale-110 hover:rotate-3 will-change-transform duration-500 shadow-md"
            key={selectedProduct.id}
          />
          <p className="max-w-md dark:text-white text-black ltr:dark:font-normal ltr:font-bold md:mx-auto md:text-xl rtl:text-2xl">
            {selectedProduct.desc}
          </p>
        </section>
        <img
          src={selectedProduct.characterUrl}
          alt={`${selectedProduct.name} character`}
          className="absolute bottom-0  ltr:right-0 rtl:left-0 ltr:translate-x-[40%] rtl:-translate-x-[40%] dark:opacity-20 opacity-40 h-[80%] sm:h-[90%] object-contain"
          key={selectedProduct.id + '_'}
        />
      </article>
    )
  );
};

export default SingleProduct;
