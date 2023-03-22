import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
})
export class PruebaComponent implements OnInit {

  lista = [
    {nombre: "duvan", apellido: "rodriguyez"},
    {nombre: "javier", apellido: "torres"},
    {nombre: "camilo", apellido: "aguilar"},
  ]


  constructor() {}

  ngOnInit(): void {}

  //metodo que captura el evento de movimiento y actualiza el array
  onDropeed (event: CdkDragDrop<any>): void {
    const anterior = event.previousIndex;
    const actual = event.currentIndex;
    moveItemInArray(this.lista, anterior, actual);
  }
}
