const { TEST_TYPES } = require("../constants");
const runArrayTests = require("./arrays");

const runAllTests = () => {
  Object.values(TEST_TYPES).forEach((type) => runSingleTest(type));
};

const runSingleTest = (type) => {
  switch (type) {
    case TEST_TYPES.ARRAY:
      return runArrayTests();
    default:
      return;
  }
};

module.exports = {
  runAllTests,
  runSingleTest,
};
