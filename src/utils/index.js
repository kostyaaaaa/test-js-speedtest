const { performance } = require("perf_hooks");

const timeWrapper = (title, func, func2, label, label2) => {
  const timesToRepeat = 1000000;
  const start = performance.now();
  for (let i = 0; i < timesToRepeat; i++) {
    func();
  }
  const end = performance.now();
  const result = end - start;

  const start2 = performance.now();
  for (let i = 0; i < timesToRepeat; i++) {
    func2();
  }
  const end2 = performance.now();
  const result2 = end2 - start2;

  console.result(`${title} --- `, result > result2 ? label2 : label);

  return result > result2 ? label2 : label;
};

const defineLoggers = () => {
  console.info = (message) => {
    console.log("\x1b[36m%s\x1b[0m", message);
  };

  console.title = (message) => {
    console.log("\x1b[35m%s\x1b[0m", message);
  };

  console.result = (title, result) => {
    console.log(title + "\x1b[32m%s\x1b[0m", result);
  };
};

module.exports = {
  timeWrapper,
  defineLoggers,
};
