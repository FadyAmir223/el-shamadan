import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { StaticContext } from '../../context/static.context';

const SingleProduct = () => {
  const { productName } = useParams();
  const { waferProducts } = useContext(StaticContext);

  const selectedProduct = waferProducts.find(
    (product) => product.id === productName
  );

  useEffect(() => {
    if (selectedProduct) document.title = selectedProduct.id;
    return () => {
      document.title = 'el-shamedan';
    };
  }, [selectedProduct]);

  return (
    selectedProduct && (
      <article className="relative overflow-hidden py-6 min-h-[calc(100vh-66px)]">
        <section className="relative z-10 contain">
          <div className="">
            <img
              src={selectedProduct.coverUrl}
              alt={`${selectedProduct.name} box`}
              className="w-2/3 max-w-md rotate-6 mx-auto my-10 hover:scale-110 hover:rotate-3 will-change-transform duration-500 shadow-md"
            />
            <p className="max-w-md text-white md:mx-auto lg:text-xl rtl:text-2xl">
              {selectedProduct.desc}
            </p>
          </div>
        </section>
        <img
          src={selectedProduct.characterUrl}
          alt={`${selectedProduct.name} character`}
          className="absolute bottom-0 -translate-x-[30%] left-0 sm:-translate-x-[40%] opacity-20 h-[80%] sm:h-[90%] object-contain"
        />
      </article>
    )
  );
};

export default SingleProduct;
