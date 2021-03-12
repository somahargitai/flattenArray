const { it, expect } = require('@jest/globals');
const { resourceLimits } = require('worker_threads');
const [
  flatten_recursive_foreach,
  flatten_recursive_reduce,
  flatten_iterative,
] = require('./flatten');

describe('Flatten function - recursive solution with forEach', () => {
  it('should flatten array with one, deeply nested element', () => {
    const testArray = [[[[[[1]]]]]];
    expect(flatten_recursive_foreach(testArray)).toEqual([1]);
  });

  it('should flatten empty array', () => {
    const testArray = [];
    expect(flatten_recursive_foreach(testArray)).toEqual([]);
  });

  it('should flatten deeply nested empty array', () => {
    const testArray = [[[[[[[]]]]]]];
    expect(flatten_recursive_foreach(testArray)).toEqual([]);
  });

  it('should flatten simple mixed level array', () => {
    expect(flatten_recursive_foreach([1, [2]])).toEqual([1, 2]);
  });

  it('should flatten long flat array with one nested array', () => {
    expect(flatten_recursive_foreach([1, 2, 3, 4, 5, [6], 7, 8, 9])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ]);
  });

  it('should flatten long, mixed level array', () => {
    expect(
      flatten_recursive_foreach([
        1,
        [[2]],
        [3],
        4,
        5,
        [[[[[[6], 7]]]], 8, [[[[[9]]]]]],
      ]),
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should flatten array an eliminate empty array elements', () => {
    expect(
      flatten_recursive_foreach([
        1,
        [2],
        [[3]],
        [],
        [[[[], [4], []]]],
        [[[]]],
        5,
        [],
        [6],
      ]),
    ).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle non-expected types', ()=> {
    const someFunction = (parameter) => parameter;
    expect(flatten_recursive_foreach(
      [undefined,null,'3', {"john": "doe"}, someFunction]
    )).toEqual([undefined,null,'3', {"john": "doe"}, someFunction])
  });
});

describe('Flatten function - recursive solution with reduce', () => {
  it('should flatten array with one, deeply nested element', () => {
    const testArray = [[[[[[1]]]]]];
    expect(flatten_recursive_reduce(testArray)).toEqual([1]);
  });

  it('should flatten empty array', () => {
    const testArray = [];
    expect(flatten_recursive_reduce(testArray)).toEqual([]);
  });

  it('should flatten deeply nested empty array', () => {
    const testArray = [[[[[[[]]]]]]];
    expect(flatten_recursive_reduce(testArray)).toEqual([]);
  });

  it('should flatten simple mixed level array', () => {
    expect(flatten_recursive_reduce([1, [2]])).toEqual([1, 2]);
  });

  it('should flatten long flat array with one nested array', () => {
    expect(flatten_recursive_reduce([1, 2, 3, 4, 5, [6], 7, 8, 9])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ]);
  });

  it('should flatten long, mixed level array', () => {
    expect(
      flatten_recursive_reduce([
        1,
        [[2]],
        [3],
        4,
        5,
        [[[[[[6], 7]]]], 8, [[[[[9]]]]]],
      ]),
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should flatten array an eliminate empty array elements', () => {
    expect(
      flatten_recursive_reduce([
        1,
        [2],
        [[3]],
        [],
        [[[[], [4], []]]],
        [[[]]],
        5,
        [],
        [6],
      ]),
    ).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle non-expected types', ()=> {
    const someFunction = (parameter) => parameter;
    expect(flatten_recursive_reduce(
      [undefined,null,'3', {"john": "doe"}, someFunction]
    )).toEqual([undefined,null,'3', {"john": "doe"}, someFunction])
  });
});

describe('Flatten function - iterative solution', () => {
  it('should flatten array with one, deeply nested element', () => {
    const testArray = [[[[[[1]]]]]];
    expect(flatten_iterative(testArray)).toEqual([1]);
  });

  it('should flatten empty array', () => {
    const testArray = [];
    expect(flatten_iterative(testArray)).toEqual([]);
  });

  it('should flatten deeply nested empty array', () => {
    const testArray = [[[[[[[]]]]]]];
    expect(flatten_iterative(testArray)).toEqual([]);
  });

  it('should flatten simple mixed level array', () => {
    expect(flatten_iterative([1, [2]])).toEqual([1, 2]);
  });

  it('should flatten long flat array with one nested array', () => {
    expect(flatten_iterative([1, 2, 3, 4, 5, [6], 7, 8, 9])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ]);
  });

  it('should flatten long, mixed level array', () => {
    expect(
      flatten_iterative([
        1,
        [[2]],
        [3],
        4,
        5,
        [[[[[[6], 7]]]], 8, [[[[[9]]]]]],
      ]),
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should flatten array an eliminate empty array elements', () => {
    expect(
      flatten_iterative([
        1,
        [2],
        [[3]],
        [],
        [[[[], [4], []]]],
        [[[]]],
        5,
        [],
        [6],
      ]),
    ).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle non-expected types', ()=> {
    const someFunction = (parameter) => parameter;
    expect(flatten_iterative(
      [undefined,null,'3', {"john": "doe"}, someFunction]
    )).toEqual([undefined,null,'3', {"john": "doe"}, someFunction])
  });
});
