import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from './../../models/Persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  
  @Input() personaComp: Persona = new Persona();
  @Output() deletePersona: EventEmitter<Persona> = new EventEmitter();

  constructor(){
    
  }

  festejar(persona: Persona){
    persona.cumplirAnios();
  }
 
  restarEdad(persona: Persona){
    persona.edad--;
  }

  eliminarPersona(persona: Persona){
    this.deletePersona.emit(persona);
  }

}
