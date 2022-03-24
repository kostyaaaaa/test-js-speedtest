const { createTestArrays } = require("../constants/arrays");

const { timeWrapper } = require("../utils");

const testForEachToMapSpeed = () => {
  const arraysList = createTestArrays();

  console.title("forEach / map\n");

  arraysList.forEach((array, index) => {
    timeWrapper(
      `empty function body ${index + 1} step`,
      () => {
        array.forEach(() => {});
      },
      () => {
        array.map(() => {});
      },
      "forEach",
      "map"
    );
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
      "forEach",
      "map"
    );
  });

  console.info(
    "\nThere is no need to use map, if you don't need new Array as a result of map, use forEach instead\n"
  );
};

const testArraySliceToSpliceSpeed = () => {
  const arraysList = createTestArrays();

  console.title("slice / splice\n");

  arraysList.forEach((array, index) => {
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
      "slice",
      "splice"
    );
  });

  console.info(
    "\nSlice faster then splice, so better to use it, if you don't need to mutate initial array\n"
  );
};

const testArrayToObjectSpeed = () => {
  const arraysList = createTestArrays();

  console.title("array / object\n");

  arraysList.forEach((array, index) => {
    const object = {};
    array.forEach((item, index) => {
      object[index] = item;
    });
    timeWrapper(
      `spread operator to copy entity values ${index + 1} step`,
      () => {
        ({ ...object });
      },
      () => {
        [...array];
      },
      "object",
      "array"
    );
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
      "object",
      "array"
    );
    timeWrapper(
      `changing item ${index + 1} step`,
      () => {
        object[0] = 123;
      },
      () => {
        array[0] = 123;
      },
      "object",
      "array"
    );
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
      "object",
      "array"
    );
  });
  console.info(
    "\nObjects and Arrays are different entities, but in case you can choose between them to implement feature - you can choose arrays, especially for small entities\n"
  );
};

const testForEachToWhileSpeed = () => {
  const arraysList = createTestArrays();

  console.title("while loop / forEach \n");

  arraysList.forEach((array, index) => {
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
      "while",
      "forEach"
    );
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
      "while",
      "forEach"
    );
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
      "while",
      "forEach"
    );
  });
  console.info(
    "\nIf we would run this tests few times, we can see, that the result is always different, performance difference is small, so better to use forEach method, because it looks better \n"
  );
};

const testSpreadOperatorToJSONFunctionsSpeed = () => {
  const arraysList = createTestArrays();

  console.title("spread operator / JSON.parse JSON.stringify \n");

  arraysList.forEach((array, index) => {
    timeWrapper(
      `copy array items ${index + 1} step`,
      () => {
        [...array];
      },
      () => {
        JSON.parse(JSON.stringify(array));
      },
      "Spread operator (...)",
      "JSON.parse(JSON.stringify())"
    );
  });

  console.info(
    "\nSpread operator faster, so we need to use it for any array with 1 level nesting to copy array \n"
  );
};

const testForEachToForSpeed = () => {
  const arraysList = createTestArrays();

  console.title("for loop / forEach \n");

  arraysList.forEach((array, index) => {
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
      "for",
      "forEach"
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
        "for",
        "forEach"
      ),
      timeWrapper(
        `empty body function ${index + 1} step`,
        () => {
          for (let i = 0; i < array.length; i++) {}
        },
        () => {
          array.forEach(() => {});
        },
        "for",
        "forEach"
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
        "for",
        "forEach"
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
        "for",
        "forEach"
      );
  });

  console.info(
    "\nIf we would run this tests few times, we can see, that the result is always different, performance difference is small, so better to use forEach method, because it looks better \n"
  );
};

const runArrayTests = () => {
  console.title("START ARRAYS TEST");
  testForEachToMapSpeed();
  testArraySliceToSpliceSpeed();
  testArrayToObjectSpeed();
  testSpreadOperatorToJSONFunctionsSpeed();
  testForEachToWhileSpeed();
  testForEachToForSpeed();
  console.title("FINISH ARRAYS TESTS");
};

module.exports = runArrayTests;
