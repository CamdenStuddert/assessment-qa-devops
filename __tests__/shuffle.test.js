const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test(`Shuffle should return an array`, () => {
    expect.arrayContaining(shuffle)
  });

  test(`Array should match entered length.`, () => {
      expect(shuffle).toHaveLength(shuffle.length)
  })
});
