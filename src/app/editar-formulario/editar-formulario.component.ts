import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-formulario',
  templateUrl: './editar-formulario.component.html',
  styleUrls: ['./editar-formulario.component.css']
})
export class EditarFormularioComponent implements OnInit {

  @Input() tecladoForm2: FormGroup;

  @Input() marcaE: string;
  @Input() modeloE: string;
  @Input() tipoMecanismoE: string;
  @Input() tipoSwitchE: string

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    debugger;
    this.tecladoForm2 = this.fb.group({
      marcaEditada: [this.marcaE],
      modeloEditado: [this.modeloE],
      tipoMecanismoEditado: [this.tipoMecanismoE],
      tipoSwitchEditado: [this.tipoSwitchE]
    });
    
  }

}
