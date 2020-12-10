function getTripList(cornQuantity, geeseQuantity) {
    let tripList;
    if(geeseQuantity && cornQuantity){
        if(geeseQuantity === 1 && cornQuantity === 1){
            return tripList = [
                "corn across",
                "farmer back",
                "goose across"
            ]
        }
        if(geeseQuantity < cornQuantity){
            return tripList = [
                "goose across",
                "farmer back",
                "corn across",
                "farmer and goose back",
                "corn across",
                "farmer back",
                "goose across"
            ]
        } else {
            return tripList = [
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
    tripList = [];
    if(geeseQuantity){
        for(let i=1; i<geeseQuantity; i++){
            geeseQuantity.forEach(i => tripList.push("goose across", "farmer back"))
        }
        tripList.push("goose across");
    } else {
        for(let i=1; i<geeseQuantity; i++){
            geeseQuantity.forEach(i => tripList.push("corn across", "farmer back"))
        }
        tripList.push("corn across");
    }
    return tripList;
}

export default getTripList;