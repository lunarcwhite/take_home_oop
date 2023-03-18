/* Soal 1
- Buatlah sebuah class dengan nama Shape, dengan property numSides untuk menyimpan jumlah sisi, dan sideLengths untuk menyimpan panjang sisi. Class ini akan memiliki method getNumSides() untuk mengambil jumlah sisi, getSideLengths() untuk mengambil data panjang sisinya, dan getPerimeter() untuk mengambil luasnya.
- Buatlah class Triangle, Rectangle dan Circle yang semuanya adalah class turunan dari class Shape dan dari masing - masing class ada method getArea() untuk mengambil luasnya. */

class Shape
{
    numSides = 0;
    sideLengths = 0;

    constructor(sideLengths, numSides = 2)
    {
        this.numSides = numSides;
        this.sideLengths = sideLengths;
    }

    getNumSides()
    {
        return this.numSides;
    }

    getSideLengths()
    {
        return this.sideLengths;
    }

    getPerimeter()
    {
        return this.sideLengths ** this.numSides;
    }
}

class Triangle extends Shape
{
    perimeter = super.getPerimeter();

    getArea()
    {
        return this.perimeter * 0.5;
    }
}

class Rectangle extends Shape
{
    perimeter = super.getPerimeter();

    getArea()
    {
        return this.perimeter;
    }
}

class Circle extends Shape
{
    perimeter = super.getPerimeter();
    jari = super.getSideLengths();

    getArea()
    {
        let luas = 0;
        let jari;
        if(this.jari % 7 == 0)
        {
            jari = this.jari / 7;
            luas = 22 * this.jari * jari;
        }else{
            luas = 3.14 * this.perimeter;
        }

        return luas;
    }
}

const segitiga = new Triangle(50, 2);
let luas = segitiga.getArea();
console.log(`Luas segitiga adalah : ${luas}`);

const persegi = new Rectangle(10);
luas = persegi.getArea();
console.log(`Luas persegi adalah : ${luas}`);

const lingkaran = new Circle(10);
luas = lingkaran.getArea();
console.log(`Luas lingkaran adalah : ${luas}`);

