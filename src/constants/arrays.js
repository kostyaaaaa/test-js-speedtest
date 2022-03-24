const createTestArrays = () => {
  const stringSmallArray = [];
  const stringMediumArray = [];
  const stringBigArray = [];

  stringSmallArray.length = 10;
  stringMediumArray.length = 100;
  stringBigArray.length = 1000;

  stringSmallArray.fill("hello world", 0);
  stringMediumArray.fill("hello world", 0);
  stringBigArray.fill("hello world", 0);

  const numberSmallArray = [];
  const numberMediumArray = [];
  const numberBigArray = [];

  numberSmallArray.length = 10;
  numberMediumArray.length = 100;
  numberBigArray.length = 1000;

  numberSmallArray.fill(3, 0);
  numberMediumArray.fill(2, 0);
  numberBigArray.fill(1, 0);

  return [
    [...stringSmallArray],
    [...stringMediumArray],
    [...stringBigArray],
    [...numberSmallArray],
    [...numberMediumArray],
    [...numberBigArray],
  ];
};

module.exports = {
  createTestArrays,
};
