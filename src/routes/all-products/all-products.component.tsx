import ProductCard from '../../components/product-card/product-card.component';
import { Product } from '../../utils/types';

const AllProducts = ({ waferProducts }: { waferProducts: Product[] }) => {
  return (
    <article className="">
      <section className="bg-black py-10">
        <img
          src="images/all.png"
          alt="all characters"
          className="max-w-md mx-auto mb-6 w-full"
        />
        <div className="contain">
          <div className="grid grid-cols-2 gap-4">
            {waferProducts.map((product) => (
              <a
                key={product.name}
                href={`/#/products/${product.name}`}
                className=""
              >
                <ProductCard product={product} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};

export default AllProducts;
