import { Skill } from './skill.model';

export interface Persona {
  id?: number;
  nombre: string;
  skills: Skill[];
}
