const { defineLoggers } = require("./utils");
const { runTests } = require("./tests");

class App {
  constructor(processArguments) {
    this.processArguments = processArguments;
  }

  applyProcessOptions = () => {
    return this;
  };

  defineLoggers = () => {
    defineLoggers();
    return this;
  };

  runTests = () => {
    runTests(this.processArguments);
    return this;
  };
}

const processArguments = process.argv.slice(2, process.argv.length);

const app = new App(processArguments);

app.applyProcessOptions().defineLoggers().runTests();
