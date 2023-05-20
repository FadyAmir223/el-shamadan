import ProductCard from '../../components/product-card/product-card.component';
import { Product } from '../../utils/types';

const AllProducts = ({ waferProducts }: { waferProducts: Product[] }) => {
  return (
    <article className="relative">
      <section className="py-10 relative z-10">
        <div className="aspect-w-4 aspect-h-3 max-w-[150px] mx-auto mb-3">
          <img
            src="images/face.png"
            alt="all characters"
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
          <img
            src="images/belt.png"
            alt="all characters"
            className="object-cover w-full h-full"
          />
        </div>
      </section>
      <img
        src="images/magician_.png"
        alt="magician"
        className="absolute top-0 left-0 h-full -translate-x-1/2 opacity-20"
      />
      <img
        src="images/king_.png"
        alt="king"
        className="absolute top-0 right-0 h-full translate-x-1/2 opacity-20"
      />
    </article>
  );
};

export default AllProducts;
