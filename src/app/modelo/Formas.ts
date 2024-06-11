export abstract class Formas {
  abstract calcularPerimetro(): number;
}

export class Circulo extends Formas {
  radio: number;

  constructor(radio:number) {
  super();
  this.radio = radio;
}

override calcularPerimetro(): number {
  return 2 * Math.PI * this.radio;
}
}


export class TrianguloEscaleno extends Formas {

lado1: number;
lado2: number;
lado3: number;

constructor(lado1: number, lado2: number, lado3: number ) {
  super();
  this.lado1 = lado1;
  this.lado2 = lado2;
  this.lado3 = lado3;
}

override calcularPerimetro(): number {
  return this.lado1 + this.lado2 + this.lado3;
}
}




export class TrianguloEquilatero extends Formas {
  lado:number;

  constructor(lado:number) {
  super()
  this.lado = lado;

}

override calcularPerimetro(): number {
  return 3 * this.lado;

}
}


