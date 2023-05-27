const handleImageError = (fallback) => (event) => {
  event.target.src = fallback;
};

const Img = ({ src, ...rest }) => {
  const fallback = src.replace(/\.\w+$/, '.webp');
  return <img src={fallback} onError={handleImageError(src)} {...rest} />;
};

export default Img;
