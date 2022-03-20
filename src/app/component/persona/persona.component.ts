import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent implements OnInit {
  persona: Persona = { nombre: '', skills: [] };

  constructor(private personaService: PersonaService) {
    this.personaService
      .getPersona()
      .subscribe((persona) => (this.persona = persona));
  }

  ngOnInit(): void {}
}
