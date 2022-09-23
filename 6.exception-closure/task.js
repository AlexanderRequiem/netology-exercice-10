function parseCount(number) {
    let result = Number.parseInt(number);
    if (isNaN(result)) {
        throw new Error('Невалидное значение');
    }

    return result;
}

function validateCount(value) {
    try {
        result = parseCount(value);
        return result;
    } 
    catch(e) {
        return e;
    }
}
