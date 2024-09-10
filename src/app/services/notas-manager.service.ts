import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

const NODO_RAIZ = "task";

@Injectable({
  providedIn: 'root'
})
export class NotasManagerService {

  public tareas: string[] = [];
  
  constructor(private storage: Storage) {
    this.init();
  }


  public crear(tarea: string) {
    this.tareas.push(tarea);
  }

  public eliminar(posicion:number) {
    this.tareas.splice(posicion,1)
  }

  async init() {
    this.storage = await this.storage.create();
  }

  public guardar(tarea:string) {
    this.storage.get(NODO_RAIZ)
    .then((data) => {
      if (data == null) {
        let tareas = new Array();
        tareas.push(tarea);
        this.storage.set(NODO_RAIZ, tareas);
      } else {
        let tareas = data;
        tareas.push(tarea);
        this.storage.set(NODO_RAIZ, tareas);
      }
    })
    .catch((error) => {
      console.error("Error:" + error);
    })
    .finally(() => {
      console.log("Fin del proceso de almacenamiento");
    });
  }

  getTarea() {
    return this.storage.get(NODO_RAIZ);
  }
}
