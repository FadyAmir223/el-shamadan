import { useContext } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { StaticContext } from '../../context/static.context';
import { useTranslation } from 'react-i18next';

const Header = ({ isOpen, setIsOpen }) => {
  const { waferProducts } = useContext(StaticContext);
  const [t, i18n] = useTranslation(['header', 'products']);
  const nav = t('nav', {
    returnObjects: true,
  }) as { name: string; link: string }[];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ar' : 'en';
    localStorage.language = newLanguage;
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <div className="relative">
        <header className="bg-red py-2">
          <div className="contain flex justify-between items-center">
            <Link to="/">
              <img src="images/logo.png" alt="logo" className="w-10" />
            </Link>
            <button
              className="p-1 border border-white rounded-lg text-white"
              onClick={toggleLanguage}
            >
              {i18n.language === 'en' ? 'AR' : 'EN'}
            </button>
            <button className="p-2 md:hidden text-2xl" onClick={toggleDropdown}>
              <FiMenu />
            </button>
            <nav className="capitalize tracking-wider hidden md:flex">
              {nav.map((item) =>
                ['products', 'منتجاتنا'].includes(item.name) ? (
                  <div className="relative" key={item.link}>
                    <button
                      className="border-2 border-yellow border-b-transparent p-2 bottom-up-animation text-white"
                      onClick={toggleDropdown}
                    >
                      {item.name}
                    </button>
                    <div
                      className={`absolute z-50 mt-4 rounded-md shadow-2xl bg-red text-center duration-300 overflow-hidden text-white border-red ${
                        isOpen ? 'h-[200px] border  ' : 'h-0'
                      }`}
                    >
                      {waferProducts.map((product) => (
                        <Link
                          key={product.id}
                          to={`/products/${product.id}`}
                          className="block p-2 hover:bg-grey transition-colors duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.link}
                    to={`/${item.link.replace(' ', '-')}`}
                    className="border-2 border-yellow border-b-transparent p-2 bottom-up-animation text-white"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>
          </div>
        </header>
        {isOpen && (
          <div
            className="fixed z-20 top-0 left-0 w-full h-screen bg-black py-14 overflow-hidden md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <FiX className="text-2xl cursor-pointer absolute top-5 left-5 text-white" />
            <nav className="contain flex flex-col text-white">
              {nav.map((item) => (
                <Link
                  key={item.link}
                  to={`/${item.link.replace(' ', '-')}`}
                  className="text-center uppercase hover:text-red border-b border-b-red last:border-b-0 py-4"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
