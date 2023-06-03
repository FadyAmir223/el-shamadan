import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

import { StaticContext } from '../../context/static.context';
import { useTranslation } from 'react-i18next';
import Modal from '../modal/modal';

const Header = ({ isOpen, setIsOpen, isMuted, isDark, setIsDark }) => {
  const { waferProducts } = useContext(StaticContext);
  const [t, i18n] = useTranslation('header');
  const nav = t('nav', {
    returnObjects: true,
  }) as { name: string; link: string }[];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDark((prevDark) => {
      localStorage.isDark = !prevDark;
      return !prevDark;
    });
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ar' : 'en';
    localStorage.i18nextLng = newLanguage;
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <main className="relative">
        <header className="bg-red py-2 h-[60px]">
          <div className="contain flex justify-between items-center">
            <div className="flex justify-between w-[calc(50%+53px)] md:w-1/2">
              <Link to="/">
                <img
                  src="images/logo.webp"
                  alt="logo"
                  className="w-8 select-none"
                />
              </Link>
              <div className="flex items-center gap-x-3 md:mx-20 lg:mx-0 ">
                <button
                  className="select-none p-1 border dark:border-white border-black rounded-lg dark:text-white text-black scale-[114%]"
                  id="mute-btn"
                  aria-label={isMuted ? 'Mute' : 'Unmute'}
                >
                  {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>
                <button
                  className="select-none py-[2px] px-1 border dark:border-white border-black rounded-lg dark:text-white text-black uppercase dark:font-normal font-[500] text-[15px] rtl:font-[roboto]"
                  onClick={toggleLanguage}
                >
                  {i18n.language === 'en' ? 'en' : 'ar'}
                </button>
                <button
                  className="select-none p-1 border dark:border-white border-black rounded-lg dark:text-white text-black scale-[114%]"
                  aria-label={isDark ? 'Light Mode' : 'Dark Mode'}
                  onClick={toggleDarkMode}
                >
                  {isDark ? <BsMoonFill /> : <BsSunFill />}
                </button>
              </div>
            </div>
            <button
              className="select-none p-2 md:hidden text-2xl dark:text-white text-black"
              onClick={toggleDropdown}
              aria-label="dropdown"
            >
              <FiMenu />
            </button>
            <nav className="capitalize tracking-wider hidden md:flex ltr:lg:text-sm">
              {nav.map((item) =>
                ['products', 'منتجاتنا'].includes(item.name) ? (
                  <div className="relative" key={item.link}>
                    <button
                      className="border-2 border-b-transparent border-yellow p-2 bottom-up-animation dark:text-white text-black"
                      onClick={toggleDropdown}
                    >
                      {item.name}
                    </button>
                    <div
                      className={`absolute z-50 mt-4 rounded-md shadow-2xl bg-red text-center duration-300 overflow-hidden dark:text-white text-black border-red ${
                        isOpen ? 'h-[240px] border  ' : 'h-0'
                      }`}
                    >
                      {waferProducts.map((product) => (
                        <Link
                          key={product.id}
                          to={`/products/${product.id}`}
                          className="block p-2 dark:hover:bg-grey hover:bg-grey-light transition-colors duration-300"
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
                    className="border-2 border-yellow border-b-transparent p-2 bottom-up-animation dark:text-white text-black"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>
          </div>
        </header>
        {isOpen && (
          <Modal>
            <div
              className="fixed z-50 top-0 left-0 w-full h-screen dark:bg-black bg-white py-14 overflow-hidden md:hidden ltr:text-lg rtl:text-xl ltr:font-bold ltr:dark:font-normal"
              onClick={() => setIsOpen(false)}
            >
              <FiX className="text-3xl cursor-pointer absolute top-5 left-5 dark:text-white text-black" />
              <nav className="contain flex flex-col dark:text-white text-black">
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
          </Modal>
        )}
      </main>
    </>
  );
};

export default Header;
