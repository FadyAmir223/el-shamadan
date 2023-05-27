import { Link } from 'react-router-dom';
import { waferProduct } from '../../utils/types';
import Img from '../img/img.component';

const ProductCard = ({ product }: { product: waferProduct }) => {
  return (
    <Link to={`/products/${product.id}`} className="relative group select-none">
      <Img
        src={product.characterUrl}
        alt={product.name}
        className="w-20 md:w-28 absolute top-0 md:-top-7 left-0 group-hover:translate-y-9 md:group-hover:translate-y-12 will-change-transform duration-500 transition-transform"
      />
      <div className="bg-grey rounded-lg p-4 md:p-6 lg:p-8 relative before:absolute before:left-0 before:top-0 before:bg-purple before:duration-500 before:h-full before:w-0 hover:before:w-1/2 group before:rounded-r-full mt-16 border-t-8 border-l-8 border-t-yellow border-l-yellow">
        <div className="relative z-10">
          <Img
            src={product.coverUrl}
            alt={product.name}
            className="object-contain aspect-[2/1] mb-4 group-hover:scale-110 will-change-transform duration-500 mx-auto"
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
