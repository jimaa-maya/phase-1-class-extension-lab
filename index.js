// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter2() {
        let total = 0;
        for (let i = 0; i < this.sides.length; i++) {
            const side = this.sides[i];

            total = total + side;
        }
        return total;

    }
    get perimeter() {
        let total = 0;
        this.sides.forEach(side => {
            total = total + side;

        });
        return total;
    }
}
class Triangle extends Polygon {
    get isValid() {
        const side1 = this.sides[0];
        const side2 = this.sides[1];
        const side3 = this.sides[2];
        const valid = side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1;
        return valid;
    }
}
class Square extends Polygon {
    get isValid() {
        const side1 = this.sides[0];
        const side2 = this.sides[1];
        const side3 = this.sides[2];
        const side4 = this.sides[3];

        const valid = side1 === side2 && side1 === side3 && side1 === side4;
        return valid;
    }

    get area() {
        return this.sides[0] * this.sides[1];

    }
}

