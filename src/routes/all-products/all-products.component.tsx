import { useContext } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { StaticContext } from '../../context/static.context';
import Img from '../../components/img/img.component';
import { useTitle } from '../../hooks/useTitle';

const AllProducts = () => {
  useTitle('products');

  const { waferProducts } = useContext(StaticContext);

  return (
    <article className="relative overflow-hidden py-7">
      <section className="relative z-10">
        <div className="aspect-w-4 aspect-h-3 max-w-[150px] mx-auto mb-3">
          <Img
            src="images/item/face.png"
            alt="face"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="contain">
          <div className="grid grid-cols-2 gap-4">
            {waferProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
        <div className="aspect-w-4 aspect-h-3 max-w-[150px] mx-auto mt-3">
          <Img
            src="images/item/belt.png"
            alt="belt"
            className="object-cover w-full h-full"
          />
        </div>
      </section>
      <Img
        src="images/character/magician.png"
        alt="magician"
        className="absolute bottom-0 left-0 h-3/4 sm:h-4/5 -translate-x-1/2 opacity-20 object-contain"
      />
      <Img
        src="images/character/king.png"
        alt="king"
        className="absolute bottom-0 right-0 h-3/4 sm:h-4/5 translate-x-1/2 opacity-20 object-contain"
      />
    </article>
  );
};

export default AllProducts;
