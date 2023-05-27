import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { StaticContext } from '../../context/static.context';
import Img from '../../components/img/img.component';

const SingleProduct = () => {
  const { productName } = useParams();
  const { waferProducts } = useContext(StaticContext);
  const navigate = useNavigate();

  const selectedProductIdx = waferProducts.findIndex(
    (product) => product.id === productName
  );

  const selectedProduct = waferProducts[selectedProductIdx];

  useEffect(() => {
    if (selectedProduct) document.title = selectedProduct.id;
    return () => {
      document.title = 'el-shamadan';
    };
  }, [selectedProduct]);

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
          className="select-none text-4xl cursor-pointer text-yellow hover:text-yellow/80 focus:outline-0  absolute z-20 top-1/4 sm:top-1/2 left-0 -translate-y-1/2"
          onClick={() => handlePrevNext('prev')}
        />
        <FaAngleRight
          className="select-none event text-4xl cursor-pointer text-yellow hover:text-yellow/80 focus:outline-0  absolute z-20 top-1/4 sm:top-1/2 right-0 -translate-y-1/2 translat"
          onClick={() => handlePrevNext('next')}
        />
        <section className="relative z-10 contain">
          <Img
            src={selectedProduct.coverUrl}
            alt={`${selectedProduct.name} box`}
            className="select-none w-2/3 max-w-md rotate-6 mx-auto my-10 hover:scale-110 hover:rotate-3 will-change-transform duration-500 shadow-md"
            key={selectedProduct.id}
          />
          <p className="max-w-md text-white md:mx-auto lg:text-xl rtl:text-2xl">
            {selectedProduct.desc}
          </p>
        </section>
        <Img
          src={selectedProduct.characterUrl}
          alt={`${selectedProduct.name} character`}
          className="absolute bottom-0  ltr:right-0 rtl:left-0 ltr:translate-x-[40%] rtl:-translate-x-[40%] opacity-20 h-[80%] sm:h-[90%] object-contain"
          key={selectedProduct.id + '_'}
        />
      </article>
    )
  );
};

export default SingleProduct;
