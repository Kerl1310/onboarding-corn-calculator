function getTripList(cornQuantity, geeseQuantity) {
    let tripList;
    if(geeseQuantity < cornQuantity){
        tripList = {
            1: "goose across",
            2: "farmer back",
            3: "corn across",
            4: "farmer and goose back",
            5: "corn across",
            6: "farmer back",
            7: "goose across"
        }
    } else {
        tripList = {
            1:"corn across",
            2:"farmer back",
            3:"goose across",
            4:"farmer and corn back",
            5:"goose across",
            6:"farmer back",
            7:"corn across"
        }
    }
    return tripList;
    // if(cornQuantity > geeseQuantity){
    //     tripList.push("corn across");
    // } else {
    //     tripList.push("goose across");
    // }
    // tripList.push("farmer back");
    // if(cornQuantity > geeseQuantity){
    //     tripList.push("goose across");
    //     tripList.push("farmer and corn back");
    //     tripList.push("goose across");
    // } else {
    //     tripList.push("corn across");
    //     tripList.push("farmer and goose back");
    //     tripList.push("corn across");
    // }
    // tripList.push("farmer back");
    // if(cornQuantity > geeseQuantity){
    //     tripList.push("corn across");
    // } else {
    //     tripList.push("goose across");
    // }
    // return tripList;
}

export default getTripList;