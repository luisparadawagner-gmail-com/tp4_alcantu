import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Teclado } from './../clases/Teclado';

@Component({
  selector: 'app-editar-formulario',
  templateUrl: './editar-formulario.component.html',
  styleUrls: ['./editar-formulario.component.css']
})
export class EditarFormularioComponent implements OnInit {

  constructor( private fb: FormBuilder ) { }

  @Input() formulario: Teclado;

  tecladoForm: FormGroup;

  ngOnInit(): void {
    this.cargarDatos (this.formulario);
  }

  cargarDatos (formulario : Teclado){
    debugger;
    this.tecladoForm = this.fb.group({
      marca: [formulario.marca, Validators.required],
      modelo: [formulario.modelo],
      tipoMecanismo: [formulario.tipoMecanismo],
      tipoSwitch: [formulario.tipoSwitch]
    });
  }

  submit(){
    this.tecladoForm.value;
  }

}
