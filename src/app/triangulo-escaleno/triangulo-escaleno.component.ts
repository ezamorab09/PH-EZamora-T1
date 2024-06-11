import { Component, OnInit } from '@angular/core';
import { IonInput, IonList, IonItem, IonButton } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { TrianguloEscaleno } from '../modelo/Formas';

@Component({
  selector: 'app-triangulo-escaleno',
  templateUrl: './triangulo-escaleno.component.html',
  styleUrls: ['./triangulo-escaleno.component.scss'],
  standalone: true,
  imports: [FormsModule, IonButton, IonList, IonItem, IonInput]
})

export class TrianguloEscalenoComponent implements OnInit {

  lado1Str: string = "";
  lado2Str: string = "";
  lado3Str: string = "";
  resultado: string = "";

  constructor() { }

  ngOnInit() {}

  calcularPerimetro() {
    const lado1 = parseInt(this.lado1Str);
    const lado2 = parseInt(this.lado2Str);
    const lado3 = parseInt(this.lado3Str);

    if(isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
      this.resultado = 'Por favor, ingrese valores válidos para los lados';
      return;
    }

    const trianguloEscaleno = new TrianguloEscaleno(lado1, lado2, lado3)
    const perimetro = trianguloEscaleno.calcularPerimetro();
    this.resultado = `El perimetro del Triangulo Escaleno es ${perimetro}`;
  }
}

