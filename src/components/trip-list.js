function getTripList(cornQuantity, geeseQuantity) {
    let tripList = [];
    if (geeseQuantity && cornQuantity) {
        if (geeseQuantity + cornQuantity > 3) {
            return tripList;
        }
        if (geeseQuantity === 1 && cornQuantity === 1) {
            return [
                "corn across",
                "farmer back",
                "goose across"
            ]
        }
        if (geeseQuantity < cornQuantity) {
            return [
                "goose across",
                "farmer back",
                "corn across",
                "farmer and goose back",
                "corn across",
                "farmer back",
                "goose across"
            ]
        } else {
            return [
                "corn across",
                "farmer back",
                "goose across",
                "farmer and corn back",
                "goose across",
                "farmer back",
                "corn across"
            ];
        }
    }
    if (geeseQuantity) {
        for(let i = 1; i < geeseQuantity; i++) {
            tripList.push("goose across", "farmer back")
        }
        tripList.push("goose across");
    } else if (cornQuantity) {
        for (let i = 1; i < cornQuantity; i++) {
            tripList.push("corn across", "farmer back")
        }
        tripList.push("corn across");
    }
    return tripList;
}

export default getTripList;