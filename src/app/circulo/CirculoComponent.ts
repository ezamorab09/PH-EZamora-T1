import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput, IonButton } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { Circulo } from '../modelo/Formas';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [FormsModule, IonButton, IonList, IonItem, IonInput]
})

export class CirculoComponent implements OnInit {
  radioStr: string = "";
  resultado: string = "";

  constructor() { }

  ngOnInit() { }

  calcularPerimetro() {
    const radio = parseInt(this.radioStr)

    if (isNaN(radio)) {
      this.resultado = 'Por favor, ingrese un valor válido para el radio';
      return;
    }

    const circulo = new Circulo(radio)
    const perimetro = circulo.calcularPerimetro()
    this.resultado = `El perimetro del circulo es ${perimetro}`
  }

}
