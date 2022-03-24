const { defineLoggers } = require("./utils");
const { TEST_TYPES } = require("./constants");
const { runAllTests, runSingleTest } = require("./tests");

defineLoggers();

const processArguments = process.argv.slice(2, process.argv.length);

if (processArguments.length) {
  processArguments.forEach((arg) => {
    const testType = Object.values(TEST_TYPES).find((type) =>
      arg.match(new RegExp(`^${type}s?$`, "i"))
    );
    if (testType) {
      runSingleTest(testType);
    }
  });
} else {
  runAllTests();
}
