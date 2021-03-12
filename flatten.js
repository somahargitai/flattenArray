function flatten_recursive_foreach(inputArray) {
  let flatterArray = [];
  inputArray.forEach((element) => {
    if (Array.isArray(element)) {
      flatterArray.push(...flatten_recursive_foreach(element));
    } else {
      flatterArray.push(element);
    }
  });
  return flatterArray;
}

const flatten_recursive_reduce = (inputArray) =>
  inputArray.reduce((acc, item) => {
    acc.push(
      ...(Array.isArray(item) ? flatten_recursive_reduce(item) : [item]),
    );
    return acc;
  }, []);

const flatten_iterative = (inputArray) => {
  for (let i = 0; i < inputArray.length; i = i + 1) {
    if (Array.isArray(inputArray[i])) {
      inputArray.splice(i, 1, ...inputArray[i]);
    }
    if (Array.isArray(inputArray[i])) {
      i = i - 1;
    }
  }
  return inputArray;
};

module.exports = [
  flatten_recursive_foreach,
  flatten_recursive_reduce,
  flatten_iterative,
];
