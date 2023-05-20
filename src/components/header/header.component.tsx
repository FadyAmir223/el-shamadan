import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const nav = ['home', 'products', 'our ads', 'contact us'];

const Header = ({ products }: { products: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative">
        <header className="bg-red py-2">
          <div className="contain flex justify-between items-center">
            <Link to="/">
              <img src="/images/logo.png" alt="logo" className="w-10" />
            </Link>
            <button className="p-2 md:hidden text-2xl" onClick={toggleDropdown}>
              <FiMenu />
            </button>
            <nav className="capitalize tracking-wider hidden md:flex">
              {nav.map((item) => {
                if (item === 'products')
                  return (
                    <div className="relative" key={item}>
                      <button
                        className="border-2 border-yellow border-b-transparent p-2 bottom-up-animation"
                        onClick={toggleDropdown}
                        key={item}
                      >
                        {item}
                      </button>
                      <div
                        className={`absolute mt-4 rounded-md shadow-2xl bg-red text-center duration-300 overflow-hidden ${
                          isOpen ? 'h-[200px]' : 'h-0'
                        }`}
                      >
                        {products.map((product) => (
                          <Link
                            key={product}
                            to={`/products/${product}`}
                            className="block p-2 hover:bg-gray-100 transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            {product}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                else
                  return (
                    <Link
                      key={item}
                      to={`/${item.replace(' ', '-')}`}
                      className="border-2 border-yellow border-b-transparent p-2 bottom-up-animation"
                    >
                      {item}
                    </Link>
                  );
              })}
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
              {nav.map((i) => (
                <Link
                  key={i}
                  to={`/${i.replace(' ', '-')}`}
                  className="text-center uppercase hover:text-red border-b border-b-red last:border-b-0 py-4"
                >
                  {i}
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
