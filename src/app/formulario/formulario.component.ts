import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl, FormGroup } from '@angular/forms';
import { Teclado } from '../clases/Teclado';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  teclado: Teclado;
  mostrarFormulario: boolean = true;
  mostrarEditarFormulario: boolean = false; 

  ngOnInit(): void {

  }

  tecladoForm = this.fb.group({
    marca: ['', Validators.required],
    modelo: [''],
    tipoMecanismo: [''],
    tipoSwitch: ['']
  });

  submit(){
    debugger;
    this.tecladoForm.value;
    this.teclado = this.tecladoForm.value;

    this.mostrarFormulario = false;
    this.mostrarEditarFormulario = true;
  }

}
