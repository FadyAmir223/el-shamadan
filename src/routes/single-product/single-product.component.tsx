import { useParams } from 'react-router-dom';
import { Product } from '../../utils/types';

const SingleProduct = ({ waferProducts }: { waferProducts: Product[] }) => {
  const { productName } = useParams();

  const selectedProduct = waferProducts.find(
    (product) => product.name === productName
  );

  if (!selectedProduct) return <div>Product not found</div>;

  return <div className=""></div>;
};

export default SingleProduct;
