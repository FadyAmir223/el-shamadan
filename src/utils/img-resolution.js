function getImageResolution(baseURL, numbers) {
  const extensionIndex = baseURL.lastIndexOf('.');
  const extension = baseURL.slice(extensionIndex);

  return numbers.map(
    (i) => baseURL.slice(0, extensionIndex) + '-' + i + extension
  );
}

const screenSizes = {
  sm: '480w',
  md: '768w',
  lg: '976w',
};

export { screenSizes, getImageResolution };
