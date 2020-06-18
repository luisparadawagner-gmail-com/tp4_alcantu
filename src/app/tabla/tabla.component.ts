import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Teclados {
  marca: string;
  modelo: string;
  tipoMecanismo: string;
  tipoSwitch: string;
}

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  teclado: Teclados[] = [
    {marca: 'Redragon', modelo: 'Hydrogen', tipoMecanismo: 'Mecanico', tipoSwitch: 'Ontemu'},
    {marca: 'Redragon', modelo: 'Helium', tipoMecanismo: 'Mecanico', tipoSwitch: 'Ontemu'},
    {marca: 'Redragon', modelo: 'Lithium', tipoMecanismo: 'Membrana', tipoSwitch: 'Ontemu'},
    {marca: 'Redragon', modelo: 'Beryllium', tipoMecanismo: 'Membrana', tipoSwitch: 'Ontemu'}
  ];

  displayedColumns: string[] = ['marca', 'modelo', 'tipoMecanismo', 'tipoSwitch','editar' ];
  dataSource = this.teclado;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  editar(element) {
    debugger;
    this.router.navigate(['/formulario', element])
	}

}




