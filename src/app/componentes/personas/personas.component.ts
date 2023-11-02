import { Component } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {

  personas: Persona[] = [];
  mostrarFormAgregarPersonaVar: boolean = false;

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.getAllPersonasMethod();
  }

  getAllPersonasMethod(): void {
    this.personas = this.personaService.getAllPersonas();
  }

  borrarPersonaDeLista(persona: Persona) {
    this.personas = this.personaService.removePersona(persona, this.personas);
  }

  mostrarFormAgregarPersona() {
    this.mostrarFormAgregarPersonaVar = true;
  }

  agregarPersona(persona: Persona) {
    this.personas = this.personaService.addPersona(persona);
    this.mostrarFormAgregarPersonaVar = false;
  }
}
