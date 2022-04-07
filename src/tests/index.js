const { TEST_TYPES } = require("../constants");
const runArrayTests = require("./arrays");
const runClassesTests = require("./classes");

const runAllTests = () => {
  Object.values(TEST_TYPES).forEach((type) => runSingleTest(type));
};

const runSingleTest = (type) => {
  switch (type) {
    case TEST_TYPES.ARRAY:
      return runArrayTests();
    case TEST_TYPES.CLASS:
      return runClassesTests();
    default:
      return;
  }
};

const runTests = (processArguments) => {
  if (processArguments.length) {
    processArguments.forEach((arg) => {
      const testType = Object.values(TEST_TYPES).find((type) =>
        arg.match(new RegExp(`^${type}s?$`, "i"))
      );
      if (testType) {
        runSingleTest(testType);
      } else {
        console.warning(`${arg} is not allowed test type`);
      }
    });
  } else {
    runAllTests();
  }
};

module.exports = {
  runAllTests,
  runSingleTest,
  runTests,
};
