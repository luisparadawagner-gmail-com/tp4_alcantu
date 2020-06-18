import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Teclado } from './../clases/Teclado';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-formulario',
  templateUrl: './editar-formulario.component.html',
  styleUrls: ['./editar-formulario.component.css']
})
export class EditarFormularioComponent implements OnInit {

  @Input() editar: Teclado;
  tecladoForm: FormGroup;
  teclado: Teclado;
  param: any;

  constructor( private fb: FormBuilder, private route: ActivatedRoute ) { }

  ngOnInit(): void {
		debugger;		
		this.param = this.route.snapshot.params;

		if (Object.keys(this.param).length) {
			this.teclado = this.param;
		} else {
			this.teclado = this.editar;
		}

		this.cargarDatos(this.teclado);
	}

  cargarDatos (formulario){
    this.tecladoForm = this.fb.group({
      marca: [formulario.marca, Validators.required],
      modelo: [formulario.modelo],
      tipoMecanismo: [formulario.tipoMecanismo],
      tipoSwitch: [formulario.tipoSwitch]
    });
  }
}
