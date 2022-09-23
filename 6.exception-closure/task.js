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


class Triangle {
    constructor(a, b, c) {
        if (a+b < c || b+c < a || c + a < b) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.A = a;
        this.B = b;
        this.C = c;
    }

    getPerimeter() {
        return this.A + this.B + this.C;
    }
    
    getArea() {
        const p = 0.5 * this.getPerimeter();
        const mul = p * (p - this.A) * (p - this.B) * (p - this.C);
        const res = Math.sqrt(mul);
        return +res.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        const result = new Triangle(a, b, c);
        return result;
    }
    catch(e) {
        let result = {
            getArea : function() {
                return 'Ошибка! Треугольник не существует';
            },

            getPerimeter : function() {
                return 'Ошибка! Треугольник не существует';
            }
        }
        return result;
    }
}