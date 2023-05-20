import { FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = ({ products }: { products: string[] }) => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="contain flex flex-col md:flex-row items-center md:items-start justify-between">
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Products</h3>
          <nav>
            {products.map((product) => (
              <a
                key={product}
                href={`/#/products/${product}`}
                className="text-center md:text-start block mb-2 hover:text-red capitalize"
              >
                {product}
              </a>
            ))}
          </nav>
        </div>
        <div className="mb-4 md:mb-0 text-center max-w-xs md:text-left">
          <h3 className="text-lg font-bold mb-2">Address</h3>
          <p>P.O Box 544 Om Zegheiw way, El-Dekheila, Alexandria, Egypt.</p>
        </div>
        <div className="flex items-center">
          <div className="flex items-center space-x-4 scale-125">
            <a
              href="https://www.facebook.com/ElShamadan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-white text-xl" />
            </a>
            <a
              href="https://twitter.com/elshamadanco"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white text-xl" />
            </a>
            <a href="mailto:contact@example.com">
              <span className="text-white text-xl">@</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
