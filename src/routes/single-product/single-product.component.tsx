import { useParams } from 'react-router-dom';
import { Product } from '../../utils/types';

const SingleProduct = ({ waferProducts }: { waferProducts: Product[] }) => {
  const { productName } = useParams();

  const selectedProduct = waferProducts.find(
    (product) => product.name === productName
  );

  if (!selectedProduct) return <div>Product not found</div>;

  return (
    <section className="bg-black py-8">
      <div className="contain">
        <div className="grid grid-cols-2 gap-4">
          <div key={selectedProduct.name} className="relative group">
            <img
              src={selectedProduct.characterUrl}
              alt={selectedProduct.name}
              className="w-20 absolute top-0 left-0 group-hover:translate-y-9 duration-500 transition-transform"
            />
            <div className="bg-white rounded-lg p-4 relative before:absolute before:left-0 before:top-0 before:bg-purple before:duration-500 before:h-full before:w-0 hover:before:w-1/2 group before:rounded-r-2xl mt-16">
              <div className="relative z-10">
                <img
                  src={selectedProduct.coverUrl}
                  alt={selectedProduct.name}
                  className="w-full h-auto mb-4 group-hover:scale-110 duration-500"
                />
                <h3 className="text-xl font-bold mb-2">
                  {selectedProduct.name}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
