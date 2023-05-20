import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { StaticContext } from '../../context/static.context';

const SingleProduct = () => {
  const { productName } = useParams();
  const { waferProducts } = useContext(StaticContext);

  const selectedProduct = waferProducts.find(
    (product) => product.name === productName
  );

  return (
    selectedProduct && (
      <article className="relative overflow-hidden py-6 min-h-[calc(100vh-66px)]">
        <section className="relative z-10 contain">
          <div className="">
            <img
              src={selectedProduct.coverUrl}
              alt={`${selectedProduct.name} box`}
              className="w-1/2 rotate-6 mx-auto my-10 hover:scale-110 hover:rotate-3 duration-500"
            />
            <p className="max-w-md text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque et perspiciatis dicta ea nulla culpa numquam minus fuga
              corrupti, amet omnis at neque quasi incidunt, perferendis quaerat
              quae qui est?
            </p>
          </div>
        </section>
        <img
          src={selectedProduct.characterUrl}
          alt={`${selectedProduct.name} character`}
          className="absolute top-0 left-0 -translate-x-[40%] opacity-20 h-[500px]"
        />
      </article>
    )
  );
};

export default SingleProduct;
