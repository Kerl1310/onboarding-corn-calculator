function Calculate(cornQuantity, geeseQuantity, unitPrice) {
    
    if (cornQuantity === 0 && geeseQuantity === 0) {
        return 0;
    }

    if (cornQuantity && geeseQuantity) {
        if (cornQuantity + geeseQuantity > 3) {
            return 0;
        }

        if (cornQuantity > 1 || geeseQuantity > 1) {
            return 1.75
        }
    }

    const totalUnits = cornQuantity + geeseQuantity

    const totalPrice = ((totalUnits * 2) * unitPrice) - unitPrice

    return totalPrice;
}

export default Calculate