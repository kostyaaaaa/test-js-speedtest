const { defineLoggers } = require("./utils");
const { TEST_TYPES } = require("./constants");
const { runAllTests, runSingleTest } = require("./tests");

defineLoggers();

const processArguments = process.argv.slice(2, process.argv.length);

if (processArguments.length) {
  Object.values(TEST_TYPES).forEach((type) => {
    if (processArguments.includes(type)) {
      runSingleTest(type);
    }
  });
} else {
  runAllTests();
}
