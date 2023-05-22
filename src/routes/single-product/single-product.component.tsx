import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { StaticContext } from '../../context/static.context';

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
      document.title = 'el-shamedan';
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
      <article className="relative overflow-hidden py-8 md:py-6 min-h-[calc(100vh-66px)]">
        <div className="absolute z-20 top-1/4 sm:top-1/2 left-0 transform -translate-y-1/2">
          <FaAngleLeft
            className="text-4xl cursor-pointer text-yellow hover:text-yellow/80"
            onClick={() => handlePrevNext('prev')}
          />
        </div>
        <div className="absolute z-20 top-1/4 sm:top-1/2 right-0 transform -translate-y-1/2">
          <FaAngleRight
            className="text-4xl cursor-pointer text-yellow hover:text-yellow/80"
            onClick={() => handlePrevNext('next')}
          />
        </div>
        <section className="relative z-10 contain">
          <img
            src={selectedProduct.coverUrl}
            alt={`${selectedProduct.name} box`}
            className="w-2/3 max-w-md rotate-6 mx-auto my-10 hover:scale-110 hover:rotate-3 will-change-transform duration-500 shadow-md"
          />
          <p className="max-w-md text-white md:mx-auto lg:text-xl rtl:text-2xl">
            {selectedProduct.desc}
          </p>
        </section>
        <img
          src={selectedProduct.characterUrl}
          alt={`${selectedProduct.name} character`}
          className="absolute bottom-0  ltr:right-0 rtl:left-0 ltr:translate-x-[40%] rtl:-translate-x-[40%] opacity-20 h-[80%] sm:h-[90%] object-contain"
        />
      </article>
    )
  );
};

export default SingleProduct;
