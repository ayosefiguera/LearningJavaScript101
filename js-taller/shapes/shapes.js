/**
 * Clase base de figuras geometricas.
 * @param name {string} nombre de la figura.
 */
class Shape {
  constructor(name) {
    this.name = name;
  }
  /**
   * Imprime los datos de la figura.
   */
  print() {
    return `Nombre: ${this.name}`;
  }
  /**
   * Redondemoas un número entrante con dos decimales.
   * @param {float} num Número real que deseamos redondear.
   * @returns {float} Número real redondeado a dos decimales.
   */
  round(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  }
}

/**
 * Clase Círculo, hereda de la clase shape.
 * @param name {string} nombre de la figura.
 * @param radio {number} dimensión de radio.
 */
class Circle extends Shape {
  constructor(name, radio) {
    super(name);
    this.radio = radio;
  }

  /**
   * Calcula el área de la figura.
   * @returns {Numbe} valor del area.
   */
  getArea() {
    return this.round(Math.PI * this.radio ** 2);
  }

  /**
   * Calcula el perímetro de nuestra figura.
   * @returns {Number} perimetro de figura.
   */
  getPerimeter() {
    return this.round(2 * Math.PI * this.radio);
  }
  /**
   * Retorna una cadena con los valores de nuestra fiugra.
   * @returns {string}
   */
  print() {
    return (
      super.print() +
      `\nRadio: ${
        this.radio
      }. \nPerímetro:${this.getPerimeter()}. \nArea: ${this.getArea()}`
    );
  }
}

class rectangle extends Shape {
  constructor(name, wide, high) {
    super(name);
    this.wide = wide;
    this.high = high;
  }

  /**
   * Calcula el area de la figura.
   * @returns {Numbe} valor del area.
   */
  getArea() {
    return this.round(this.wide * this.high);
  }

  /**
   * Calcula el perímetro de nuestra figura.
   * @returns {Number} perimetro de figura.
   */
  getPerimeter() {
    return this.round(this.wide * 2 + this.high * 2);
  }

  /**
   * Retorna una cadena con los valores de nuestra fiugra.
   * @returns {string}
   */
  print() {
    return (
      super.print() +
      `\nAncho: ${this.wide}.\nAlto: ${
        this.high
      }.\nPerímetro:${this.getPerimeter()}. \nArea: ${this.getArea()}`
    );
  }
}

class triangle extends Shape {
  constructor(name, ladoA, ladoB, ladoC) {
    super(name);
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
  }

  /**
   * Calcula el area de la figura mediante la Fórmula de Herón.
   * @returns {Numbe} valor del area.
   */
  getArea() {
    //Semiperímetro
    let s = (this.ladoA + this.ladoB + this.ladoC) / 2;
    //Fórmula de Herón
    let area = Math.sqrt(
      s * (s - this.ladoA) * (s - this.ladoB) * (s - this.ladoC)
    );
    return this.round(area);
  }

  /**
   * Calcula el perímetro de nuestra figura.
   * @returns {Number} perimetro de figura.
   */
  getPerimeter() {
    // necesitamos los lados ¬¬
    return this.round(this.ladoA + this.ladoB + this.ladoC);
  }

  /**
   * Retorna una cadena con los valores de nuestra fiugra.
   * @returns {string}
   */
  print() {
    return (
      super.print() +
      `\nLados: ${this.ladoA} x ${this.ladoB} x ${
        this.ladoC
      }.\nPerímetro:${this.getPerimeter()}.\nArea: ${this.getArea()}.`
    );
  }
}

/**
 * El cuadrado es una clase particular de rectangulo
 * con los lados del mismo valor.
 */
class Square extends rectangle {
  constructor(name, side) {
    super(name, side, side);
  }
}

console.group("Círculo:");
let circulo = new Circle("círculo", 4);
console.log(circulo.print());
console.groupEnd();

console.group("Rectángulo:");
let rectangulo = new rectangle("rectángulo", 5, 4);
console.log(rectangulo.print());
console.groupEnd();

console.group("Cuadrado:");
let cuadrado = new Square("cuadrado", 5);
console.log(cuadrado.print());
console.groupEnd();

console.group("Triangulo:");
let triangulo = new triangle("Triangulo", 3, 4, 5);
console.log(triangulo.print());
console.groupEnd();
