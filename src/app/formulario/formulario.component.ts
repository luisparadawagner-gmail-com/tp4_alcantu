import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Teclado } from '../clases/Teclado';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor( private fb: FormBuilder, private route: ActivatedRoute ) { }

  tecladoForm : FormGroup;
  teclado: Teclado;
  tabla: any;

  mostrarFormulario: boolean = true;
  mostrarEditarFormulario: boolean = false; 


  ngOnInit(): void {
		debugger;		
		this.tabla = this.route.snapshot.params;

		if (Object.keys(this.tabla).length) {
			this.teclado = this.tabla;
		} else {
			this.teclado = this.tabla;
		}

		this.cargarDatos(this.teclado);
	}

  cargarDatos(formulario){
    this.tecladoForm = this.fb.group({
      marca: [formulario ? formulario.marca : '', Validators.required],
      modelo: [formulario ? formulario.modelo: ''],
      tipoMecanismo: [formulario ? formulario.tipoMecanismo: ''],
      tipoSwitch: [formulario ? formulario.tipoSwitch: '']
    });
  }
  

  submit(){
    debugger;
    this.tecladoForm.value;
    this.teclado = this.tecladoForm.value;

    this.mostrarFormulario = false;
    this.mostrarEditarFormulario = true;
  }

}
