import getTripList from "../trip-list";

describe("TripList", () => {
    test("0 geese 0 corn", () => {
        const cornQuantity = 0;
        const geeseQuantity = 0;

        const output = [];
        expect(getTripList(cornQuantity, geeseQuantity)).toEqual(output);
    });
    test("1 geese 0 corn", () => {
        const cornQuantity = 0;
        const geeseQuantity = 1;

        const output = [
            "goose across"
        ];
        expect(getTripList(cornQuantity, geeseQuantity)).toEqual(output);
    });
    test("3 geese 0 corn", () => {
        const cornQuantity = 0;
        const geeseQuantity = 3;

        const output = [
            "goose across",
            "farmer back",
            "goose across",
            "farmer back",
            "goose across"
        ];
        expect(getTripList(cornQuantity, geeseQuantity)).toEqual(output);
    });
    test("0 geese 1 corn", () => {
        const cornQuantity = 1;
        const geeseQuantity = 0;

        const output = [
            "corn across"
        ];
        expect(getTripList(cornQuantity, geeseQuantity)).toEqual(output);
    });
    test("1 geese 1 corn", () => {
        const cornQuantity = 1;
        const geeseQuantity = 1;

        const output = [
            "corn across",
            "farmer back",
            "goose across",
        ];
        expect(getTripList(cornQuantity, geeseQuantity)).toEqual(output);
    });
    test("2 geese 1 corn", () => {
        const cornQuantity = 1;
        const geeseQuantity = 2;

        const output = [
            "corn across",
            "farmer back",
            "goose across",
            "farmer and corn back",
            "goose across",
            "farmer back",
            "corn across"
        ];

        expect(getTripList(cornQuantity, geeseQuantity)).toEqual(output);
    });

    test("1 goose 2 corn", () => {
        const cornQuantity = 2;
        const geeseQuantity = 1;

        const output = [
            "goose across",
            "farmer back",
            "corn across",
            "farmer and goose back",
            "corn across",
            "farmer back",
            "goose across"
        ];

        expect(getTripList(cornQuantity, geeseQuantity)).toEqual(output);
    });
    test("2 goose 2 corn", () => {
        const cornQuantity = 2;
        const geeseQuantity = 2;

        const output = [];

        expect(getTripList(cornQuantity, geeseQuantity)).toEqual(output);
    });
    test("3 goose 1 corn", () => {
        const cornQuantity = 1;
        const geeseQuantity = 3;

        const output = [];

        expect(getTripList(cornQuantity, geeseQuantity)).toEqual(output);
    });
    test("1 goose 3 corn", () => {
        const cornQuantity = 3;
        const geeseQuantity = 1;

        const output = [];

        expect(getTripList(cornQuantity, geeseQuantity)).toEqual(output);
    });
});