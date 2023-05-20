import { Product } from '../../utils/types';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="relative group">
      <img
        src={product.characterUrl}
        alt={product.name}
        className="w-20 absolute top-0 left-0 group-hover:translate-y-9 duration-500 transition-transform"
      />
      <div className="bg-white rounded-lg p-4 relative before:absolute before:left-0 before:top-0 before:bg-purple before:duration-500 before:h-full before:w-0 hover:before:w-1/2 group before:rounded-r-2xl mt-16">
        <div className="relative z-10">
          <img
            src={product.coverUrl}
            alt={product.name}
            className="w-full h-auto mb-4 group-hover:scale-110 duration-500"
          />
          <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
