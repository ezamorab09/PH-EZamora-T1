import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, IonItem, IonLabel, IonInput, IonButton, SelectChangeEventDetail } from '@ionic/angular/standalone';
import { CirculoComponent } from '../circulo/CirculoComponent';
import { TrianguloEscalenoComponent } from '../triangulo-escaleno/triangulo-escaleno.component';
import { TrianguloEquilateroComponent } from '../triangulo-equilatero/triangulo-equilatero.component';
import { IonSelectCustomEvent } from '@ionic/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ CommonModule, CirculoComponent, TrianguloEscalenoComponent, TrianguloEquilateroComponent, IonButton, IonInput, IonLabel, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption ]

})
export class HomePage {
  tipoFigura:string = ""

  constructor() {}

  esCirculo() { return this.tipoFigura == "circulo"}
  esTrianguloEscaleno() { return this.tipoFigura == "trianguloEscaleno"}
  esTrianguloEquilatero() { return this.tipoFigura == "trianguloEquilatero"}


  manejarSeleccionFiguraGeometrica($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    this.tipoFigura = $event.detail.value
  }

}




