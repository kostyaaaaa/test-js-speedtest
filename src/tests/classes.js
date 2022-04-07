const Results = require("../services/resultService");
const { timeWrapper, makeConclusion } = require("../utils");

const testClassToObjectSpeed = ({ results, testTitle1, testTitle2 }) => {
  class Empty {
    func() {}
  }

  const emptyClass = new Empty();
  const emptyObject = {
    func: () => {},
  };
  results.push(
    timeWrapper(
      `test class to function speed`,
      () => {
        emptyClass.func();
      },
      () => {
        emptyObject.func();
      },
      testTitle1,
      testTitle2
    )
  );
};

const classesTestsList = {
  "class / object": testClassToObjectSpeed,
};

const runClassesTests = () => {
  console.title("START CLASSES TESTS");

  Object.keys(classesTestsList).forEach((testTitle) => {
    console.title(`${testTitle} \n`);

    const [testTitle1, testTitle2] = testTitle.split(" / ");
    const results = new Results(testTitle1, testTitle2);
    classesTestsList[testTitle]({ results, testTitle1, testTitle2 });

    makeConclusion(results.getStats());
  });

  console.title("FINISH CLASSES TESTS");
};

module.exports = runClassesTests;
