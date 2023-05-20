import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const nav = ['home', 'products', 'our ads', 'contact us'];
  const products = ['wafer', 'biscuits', 'cake', 'chocolate'];

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="">
        <header className="bg-red py-2">
          <div className="contain flex justify-between items-center">
            <a href="/">
              <img src="/images/logo.png" alt="logo" className="w-10" />
            </a>
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
                      >
                        {item}
                      </button>
                      <div
                        className={`absolute mt-4 rounded-md shadow-2xl bg-red text-center duration-300 overflow-hidden ${
                          isOpen ? 'h-40' : 'h-0'
                        }`}
                      >
                        {products.map((product) => (
                          <a
                            href={`/#/products/${product}`}
                            key={product}
                            className="block p-2 hover:bg-gray-100 transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            {product}
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                else
                  return (
                    <a
                      key={item}
                      href={`/#/${item.replace(' ', '-')}`}
                      className="border-2 border-yellow border-b-transparent p-2 bottom-up-animation"
                    >
                      {item}
                    </a>
                  );
              })}
            </nav>
          </div>
        </header>
      </div>
      {isOpen && (
        <div
          className="absolute z-20 top-0 left-0 w-screen h-full bg-black md:hidden py-14 overflow-hidden"
          onClick={() => setIsOpen(false)}
        >
          <FiX className="text-2xl cursor-pointer absolute top-5 left-5" />
          <nav className="contain flex flex-col space-y-5 text-white">
            {nav.map((i) => (
              <a key={i} href={`/#/${i}`} className="text-center uppercase">
                {i}
              </a>
            ))}
          </nav>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Header;
