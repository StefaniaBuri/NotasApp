import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonInput,
  IonList,
  IonItem,
  IonLabel,
  IonItemSliding,
  IonAvatar,
  IonIcon,
  IonItemOption,
  IonItemOptions,
  IonBadge, IonToast, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { NotasManagerService } from '../services/notas-manager.service';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { FormsModule } from '@angular/forms';
import { trash } from "ionicons/icons";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonToast, 
    IonBadge,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    IonAvatar,
    IonItemSliding,
    IonLabel,
    IonItem,
    IonList,
    IonInput,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    CommonModule,
    FormsModule
  ],
})
export class HomePage {
  public nuevaTarea: string = "";
  public isToastOpen: boolean = false;

  constructor(public servicioTareas: NotasManagerService) {
      addIcons({trash});}

  crear() {
    this.servicioTareas.crear(this.nuevaTarea);
    this.nuevaTarea = "";
  }

  borrar(idtTarea:number) {
    this.isToastOpen = true;
    this.servicioTareas.eliminar(idtTarea);
    
  }

  setOpen(open:boolean) {
    this.isToastOpen = open;
  }

  guardarTarea() {
    this.servicioTareas.getTarea();
  }

  buscarTarea() {
    this.servicioTareas.getTarea()
  }

}
