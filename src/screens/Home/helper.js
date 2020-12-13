export const getHeight = (isChart, value) => {
  const height = Math.round(value / 10);
  if (isChart) {
    return height;
  } else {
    return 10 - height;
  }
};
