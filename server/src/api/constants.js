const BASE_URL = "https://api.mercadolibre.com";

const author = {
  author: {
    name: "Andrés",
    lastname: "Cuellar",
  },
};

const getNumberOfDecimals = (number) => {
  return number.toString().split(".")[1]?.length ?? 0;
};

const sortArrayOfObjectsByKey = (arrayOfObjects, key) => {
  return arrayOfObjects.sort((a, b) => (a[key] > b[key] ? 1 : -1));
};

module.exports = {
  BASE_URL,
  author,
  getNumberOfDecimals,
  sortArrayOfObjectsByKey,
};
