const { createMockedArraysData } = require("../constants/arrays");
const Results = require("../services/resultService");
const { timeWrapper, makeConclusion } = require("../utils");

const testForEachToMapSpeed = ({
  arraysList,
  results,
  testTitle1,
  testTitle2,
}) => {
  arraysList.forEach((array, index) => {
    results.push(
      timeWrapper(
        `empty function body ${index + 1} step`,
        () => {
          array.forEach(() => {});
        },
        () => {
          array.map(() => {});
        },
        testTitle1,
        testTitle2
      ),
      timeWrapper(
        `create variable ${index + 1} step`,
        () => {
          array.forEach((item) => {
            const number = item;
          });
        },
        () => {
          array.map((item) => {
            const number = item;
          });
        },
        testTitle1,
        testTitle2
      )
    );
  });
};

const testArraySliceToSpliceSpeed = ({
  arraysList,
  results,
  testTitle1,
  testTitle2,
}) => {
  arraysList.forEach((array, index) => {
    results.push(
      timeWrapper(
        `remove items from array, ${index + 1} step`,
        () => {
          const newArray = [...array];
          newArray.slice(0, newArray.length);
        },
        () => {
          const newArray = [...array];
          newArray.splice(0, newArray.length);
        },
        testTitle1,
        testTitle2
      )
    );
  });
};

const testArrayToObjectSpeed = ({
  arraysList,
  results,
  testTitle1,
  testTitle2,
}) => {
  arraysList.forEach((array, index) => {
    const object = {};
    array.forEach((item, index) => {
      object[index] = item;
    });
    results.push(
      timeWrapper(
        `spread operator to copy entity values ${index + 1} step`,
        () => {
          ({ ...object });
        },
        () => {
          [...array];
        },
        testTitle1,
        testTitle2
      ),
      timeWrapper(
        `create instance with for loop ${index + 1} step`,
        () => {
          const obj = {};
          for (let i = 0; i < array.length; i++) {
            obj[i] = i;
          }
        },
        () => {
          const arr = [];
          for (let i = 0; i < array.length; i++) {
            arr[i] = i;
          }
        },
        testTitle1,
        testTitle2
      ),
      timeWrapper(
        `changing item ${index + 1} step`,
        () => {
          object[0] = 123;
        },
        () => {
          array[0] = 123;
        },
        testTitle1,
        testTitle2
      ),
      timeWrapper(
        `deleting one item ${index + 1} step`,
        () => {
          if (Object.keys(object).length) {
            delete object[Object.keys(object)[0]];
          }
        },
        () => {
          if (array.length) {
            Object.keys(object).length;
            Object.keys(object)[0];
            array.splice(0, 1);
          }
        },
        testTitle1,
        testTitle2
      )
    );
  });
};

const testWhileToForEachSpeed = ({
  arraysList,
  results,
  testTitle1,
  testTitle2,
}) => {
  arraysList.forEach((array, index) => {
    results.push(
      timeWrapper(
        `empty function body ${index + 1} step`,
        () => {
          let counter = 0;
          while (counter < array.length) {
            counter++;
          }
        },
        () => {
          array.forEach(() => {});
        },
        testTitle1,
        testTitle2
      ),
      timeWrapper(
        `define variable ${index + 1} step`,
        () => {
          let counter = 0;
          while (counter < array.length) {
            const a = 1;
            counter++;
          }
        },
        () => {
          array.forEach(() => {
            const a = 1;
          });
        },
        testTitle1,
        testTitle2
      ),
      timeWrapper(
        `change variable ${index + 1} step`,
        () => {
          let counter = 0;
          while (counter < array.length) {
            let a = 1;
            a = 2;
            a = 5;
            counter++;
          }
        },
        () => {
          array.forEach(() => {
            let a = 1;
            a = 2;
            a = 5;
          });
        },
        testTitle1,
        testTitle2
      )
    );
  });
};

const testSpreadOperatorToJSONFunctionsSpeed = ({
  arraysList,
  results,
  testTitle1,
  testTitle2,
}) => {
  arraysList.forEach((array, index) => {
    results.push(
      timeWrapper(
        `copy array items ${index + 1} step`,
        () => {
          [...array];
        },
        () => {
          JSON.parse(JSON.stringify(array));
        },
        testTitle1,
        testTitle2
      )
    );
  });
};

const testForToForEachSpeed = ({
  arraysList,
  results,
  testTitle1,
  testTitle2,
}) => {
  arraysList.forEach((array, index) => {
    results.push(
      timeWrapper(
        `define variable ${index + 1} step`,
        () => {
          for (let i = 0; i < array.length; i++) {
            const a = 1;
          }
        },
        () => {
          array.forEach(() => {
            const a = 1;
          });
        },
        testTitle1,
        testTitle2
      ),
      timeWrapper(
        `change variable ${index + 1} step`,
        () => {
          for (let i = 0; i < array.length; i++) {
            let a = 1;
            a = 2;
            a = 4;
          }
        },
        () => {
          array.forEach(() => {
            let a = 1;
            a = 2;
            a = 4;
          });
        },
        testTitle1,
        testTitle2
      ),
      timeWrapper(
        `empty body function ${index + 1} step`,
        () => {
          for (let i = 0; i < array.length; i++) {}
        },
        () => {
          array.forEach(() => {});
        },
        testTitle1,
        testTitle2
      ),
      timeWrapper(
        `string split ${index + 1} step`,
        () => {
          for (let i = 0; i < array.length; i++) {
            "hello world".split(" ");
          }
        },
        () => {
          array.forEach(() => {
            "hello world".split(" ");
          });
        },
        testTitle1,
        testTitle2
      ),
      timeWrapper(
        `using array join method ${index + 1} step`,
        () => {
          for (let i = 0; i < array.length; i++) {
            ["1", "2", "3"].join();
          }
        },
        () => {
          array.forEach(() => {
            ["1", "2", "3"].join();
          });
        },
        testTitle1,
        testTitle2
      )
    );
  });
};

const arrayTestsList = {
  "slice / splice": testArraySliceToSpliceSpeed,
  "forEach / map": testForEachToMapSpeed,
  "spread operator / JSON.parse JSON.stringify":
    testSpreadOperatorToJSONFunctionsSpeed,
  "array / object": testArrayToObjectSpeed,
  "while / forEach": testWhileToForEachSpeed,
  "for / forEach": testForToForEachSpeed,
};

const runArrayTests = () => {
  console.title("START ARRAYS TESTS");
  Object.keys(arrayTestsList).forEach((testTitle) => {
    console.title(`${testTitle} \n`);
    const arraysList = createMockedArraysData();

    const [testTitle1, testTitle2] = testTitle.split(" / ");
    const results = new Results(testTitle1, testTitle2);
    arrayTestsList[testTitle]({ arraysList, results, testTitle1, testTitle2 });

    makeConclusion(results.getStats());
  });
  console.title("FINISH ARRAYS TESTS");
};

module.exports = runArrayTests;
