function checkFeasibility(cornQuantity, geeseQuantity) {
    
    if (cornQuantity && geeseQuantity) {
        if (cornQuantity + geeseQuantity > 3) {
            return "Goose eats corn";
        }
    }

    return "";
}

export default checkFeasibility