import calculateTotalPrice from "../calculator"

describe("Calculate", () => {
  test("it should calculate correctly with no corn and no geese", () => {
    const cornQuantity = 0;
    const geeseQuantity = 0;
    const unitPrice = 0.25;

    const output = 0.25;

    expect(calculateTotalPrice(cornQuantity, geeseQuantity, unitPrice)).toEqual(output);
  })

  test("it should calculate correctly with 2 corn and no geese", () => {
    const cornQuantity = 2;
    const geeseQuantity = 0;
    const unitPrice = 0.25;

    const output = 0.75;

    expect(calculateTotalPrice(cornQuantity, geeseQuantity, unitPrice)).toEqual(output);
  })

  test("it should calculate correctly with no corn and 2 geese", () => {
    const cornQuantity = 0;
    const geeseQuantity = 2;
    const unitPrice = 0.25;

    const output = 0.75;

    expect(calculateTotalPrice(cornQuantity, geeseQuantity, unitPrice)).toEqual(output);
  })

  test("it should calculate correctly with 2 corn and 1 goose", () => {
    const cornQuantity = 2;
    const geeseQuantity = 1;
    const unitPrice = 0.25;

    const output = 1.75;

    expect(calculateTotalPrice(cornQuantity, geeseQuantity, unitPrice)).toEqual(output);
  })

  test("it should calculate correctly with 1 corn and 2 geese", () => {
    const cornQuantity = 1;
    const geeseQuantity = 2;
    const unitPrice = 0.25;

    const output = 1.75;

    expect(calculateTotalPrice(cornQuantity, geeseQuantity, unitPrice)).toEqual(output);
  })

  test("it should calculate correctly with 2 corn and 2 geese", () => {
    const cornQuantity = 2;
    const geeseQuantity = 2;
    const unitPrice = 0.25;

    const output = 0;

    expect(calculateTotalPrice(cornQuantity, geeseQuantity, unitPrice)).toEqual(output);
  })
})