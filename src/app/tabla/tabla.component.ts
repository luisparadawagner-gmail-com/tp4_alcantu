import { Component, OnInit } from '@angular/core';

export interface ListaTeclados {
  marca: string;
  modelo: string;
  mecanismo: string;
  switch: string;
}

const TECLADO_DATA: ListaTeclados[] = [
  {marca: 'Redragon', modelo: 'Hydrogen', mecanismo: 'Mecanico', switch: 'Ontemu'},
  {marca: 'Redragon', modelo: 'Helium', mecanismo: 'Mecanico', switch: 'Ontemu'},
  {marca: 'Redragon', modelo: 'Lithium', mecanismo: 'Membrana', switch: 'Ontemu'},
  {marca: 'Redragon', modelo: 'Beryllium', mecanismo: 'Membrana', switch: 'Ontemu'},

];

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  displayedColumns: string[] = ['marca', 'modelo', 'mecanismo', 'switch', 'boton'];
  dataSource = TECLADO_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}




