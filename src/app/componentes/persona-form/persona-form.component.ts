import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css']
})
export class PersonaFormComponent {
  persona: Persona = new Persona();
  @Output() agregarPersona: EventEmitter<Persona> = new EventEmitter();

  addPersona(){
    this.agregarPersona.emit(this.persona);
  }
}
