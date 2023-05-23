import { Link } from 'react-router-dom';
import { waferProduct } from '../../utils/types';

const ProductCard = ({ product }: { product: waferProduct }) => {
  return (
    <Link to={`/products/${product.id}`} className="relative group">
      <img
        src={product.characterUrl}
        alt={product.name}
        className="w-20 lg:w-28 absolute top-0 lg:-top-7 left-0 group-hover:translate-y-9 lg:group-hover:translate-y-12 will-change-transform duration-500 transition-transform"
      />
      <div className="bg-grey rounded-lg p-4 md:p-6 lg:p-8 relative before:absolute before:left-0 before:top-0 before:bg-purple before:duration-500 before:h-full before:w-0 hover:before:w-1/2 group before:rounded-r-full mt-16 border-t-8 border-l-8 border-t-yellow border-l-yellow">
        <div className="relative z-10">
          <img
            src={product.coverUrl}
            alt={product.name}
            className="w-full h-auto mb-4 group-hover:scale-110 will-change-transform duration-500"
          />
          <p className="text-xl md:text-xl lg:text-2xl mb-2 capitalize text-white">
            {product.name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;