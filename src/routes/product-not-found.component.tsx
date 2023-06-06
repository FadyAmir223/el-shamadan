import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';
import { useTranslation } from 'react-i18next';
import { waferProduct } from '../utils/types';
import { ReactComponent as CharacterNotFound } from '../assets/svg/draw-character.svg';

const getRandomCharacter = (productName, waferProducts) => {
  let hash = 0,
    chr;
  for (let i = 0; i < productName.length; i++) {
    chr = productName.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }

  const idx = Math.abs(hash % waferProducts.length);
  return waferProducts[idx];
};

const ProductNotFound = ({ waferProducts }) => {
  const { productName } = useParams();
  const [t] = useTranslation('errors');
  const [character, setCharacter] = useState({} as waferProduct);

  useTitle('Not Found');

  useEffect(() => {
    setCharacter(getRandomCharacter(productName, waferProducts));
  }, [productName, waferProducts]);

  return (
    <main className="py-16 flex flex-col items-center font-[roboto]">
      <div className="relative">
        <CharacterNotFound className="h-48" />
      </div>
      <p className="capitalize dark:text-yellow text-purple text-lg pt-3 text-center leading-8">
        {t('productNotFound.line_1')}
        <br />

        <Link
          to={`/products/${character.id}`}
          className="px-2 py-1 rounded-md text-yellow bg-purple hover:bg-purple/80"
        >
          {t('productNotFound.line_2', {
            character: character.name,
          })}
        </Link>
      </p>
    </main>
  );
};

export default ProductNotFound;
