import { useContext } from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { StaticContext } from '../context/static.context';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { waferProducts } = useContext(StaticContext);
  const [t] = useTranslation('footer');

  return (
    <footer className="dark:bg-gray-900 bg-gray-300 dark:text-white text-black py-6">
      <div className="contain flex flex-col md:flex-row items-center md:items-start justify-between">
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg lg:text-xl font-bold ltr:font-extrabold ltr:dark:font-bold mb-2 capitalize">
            {t('products')}
          </h3>
          <nav>
            {waferProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="text-center md:text-start block mb-2 hover:text-red capitalize lg:text-lg ltr:font-bold ltr:dark:font-normal"
              >
                {product.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mb-4 md:mb-0 text-center max-w-xs md:text-start">
          <h3 className="text-lg lg:text-xl font-bold ltr:font-extrabold ltr:dark:font-bold mb-2 capitalize">
            {t('address')}
          </h3>
          <p className="lg:text-lg capitalize ltr:font-bold ltr:dark:font-normal">
            {t('addressVal')}
          </p>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-x-4 scale-125">
            <a
              href="https://www.facebook.com/ElShamadan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Facebook page of ElShamadan"
            >
              <FaFacebook className="text-xl dark:text-white text-black hover:text-facebook" />
            </a>
            <a
              href="https://twitter.com/elshamadanco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Twitter page of ElShamadan"
            >
              <FaTwitter className="text-xl dark:text-white text-black hover:text-twitter" />
            </a>
            <a href="mailto:contact@elshamedan.com">
              <span className="dark:text-white text-balck text-xl font-bold dark:font-normal">
                @
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
