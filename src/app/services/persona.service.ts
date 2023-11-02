import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas: Persona[] = [];

  constructor() { }

  getAllPersonas(): Persona[]{
    let persona1 = new Persona("Liuben", "Lopez", 34);
    let persona2 = new Persona("Yenny", "Gonzalez", 33);
    let persona3 = new Persona("Maricely", "Aparicio", 52);
    this.personas.push(persona1);
    this.personas.push(persona2);
    this.personas.push(persona3);
    return this.personas;
  }

  removePersona(persona: Persona, personas: Persona[]): Persona[] {
    return personas.filter(p => p.nombre !== persona.nombre);
  }
  
  addPersona(persona: Persona): Persona[] {
    this.personas.push(persona);
    return this.personas;
  }

}
