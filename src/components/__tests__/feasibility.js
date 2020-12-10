import checkFeasibility from "../feasibility";

describe("Feasibility", () => {
    test("it should not produce a warning if a trip has only one goose", () => {
      const cornQuantity = 1;
      const geeseQuantity = 0;
  
      const output = "";
  
      expect(checkFeasibility(cornQuantity, geeseQuantity)).toEqual(output);
    })

    test("it should not produce a warning if a trip has only one corn", () => {
        const cornQuantity = 0;
        const geeseQuantity = 1;

        const output = "";

        expect(checkFeasibility(cornQuantity, geeseQuantity)).toEqual(output);
    })

    test("it should not produce a warning if a trip has only one goose and two corn", () => {
        const cornQuantity = 2;
        const geeseQuantity = 1;
    
        const output = "";
    
        expect(checkFeasibility(cornQuantity, geeseQuantity)).toEqual(output);
      })
    
      test("it should not produce a warning if a trip has one corn and two geese", () => {
        const cornQuantity = 1;
        const geeseQuantity = 2;
    
        const output = "";
    
        expect(checkFeasibility(cornQuantity, geeseQuantity)).toEqual(output);
      })

  test("it should produce a warning if a trip has too many geese", () => {
    const cornQuantity = 2;
    const geeseQuantity = 2;

    const output = "Goose eats corn";

    expect(checkFeasibility(cornQuantity, geeseQuantity)).toEqual(output);
  })

  test("it should not produce a warning if a trip is feasible", () => {
    const cornQuantity = 1;
    const geeseQuantity = 1;

    const output = "";

    expect(checkFeasibility(cornQuantity, geeseQuantity)).toEqual(output);
  })
})