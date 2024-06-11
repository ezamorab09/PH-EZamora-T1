import { Component, OnInit } from '@angular/core';
import { IonInput, IonList, IonItem, IonButton } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { TrianguloEquilatero } from '../modelo/Formas';

@Component({
  selector: 'app-triangulo-equilatero',
  templateUrl: './triangulo-equilatero.component.html',
  styleUrls: ['./triangulo-equilatero.component.scss'],
  standalone: true,
  imports: [FormsModule, IonButton, IonList, IonItem, IonInput]
})

export class TrianguloEquilateroComponent implements OnInit  {
  lado: number = 0;
  trianguloEquilateroStr: string = "";
  resultado: string = "";

  constructor() { }

  ngOnInit() {}

  calcularPerimetro() {
    const triangulo = new TrianguloEquilatero(this.lado);
    const perimetro = triangulo.calcularPerimetro();  
    this.resultado = `El perimetro del Triangulo Equilatero es ${perimetro}`;
  }

}
