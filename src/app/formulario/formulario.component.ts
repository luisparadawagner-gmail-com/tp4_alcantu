import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  marca: string;
  modelo: string;
  tipoMecanismo: string;
  tipoSwitch: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.marca = this.tecladoForm.get('marca').value;
    this.modelo = this.tecladoForm.get('modelo').value;
    this.tipoMecanismo = this.tecladoForm.get('tipoMecanismo').value;
    this.tipoSwitch = this.tecladoForm.get('tipoSwitch').value;

  }

  tecladoForm = this.fb.group({
    marca: ['Redragon', Validators.required],
    modelo: ['Visnu K561'],
    tipoMecanismo: ['Mecanico'],
    tipoSwitch: ['Outemu']
  });

  onSubmit(){
    debugger;
    this.tecladoForm.value;

    /*this.tecladoForm.setValue({
      marca: 'Redragon',
      modelo: 'Visnu K561',
      tipoMecanismo: 'Mecanico',
      tipoSwitch: 'Outemu'
    });*/
  }

}
