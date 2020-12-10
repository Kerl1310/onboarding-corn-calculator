import getTripList from "../trip-list";

describe("TripList", () => {
    test("2 geese 1 corn", () => {
        const cornQuantity = 1;
        const geeseQuantity = 2;

        const output = {
            1:"corn across",
            2:"farmer back",
            3:"goose across",
            4:"farmer and corn back",
            5:"goose across",
            6:"farmer back",
            7:"corn across"
        };

        expect(getTripList(cornQuantity, geeseQuantity)).toEqual(output);
    });

    test("1 goose 2 corn", () => {
        const cornQuantity = 2;
        const geeseQuantity = 1;

        const output = {
            1:"goose across",
            2:"farmer back",
            3:"corn across",
            4:"farmer and goose back",
            5:"corn across",
            6:"farmer back",
            7:"goose across"
        };

        expect(getTripList(cornQuantity, geeseQuantity)).toEqual(output);
    });
});