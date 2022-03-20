import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  URL = 'http://localhost:8080/skill/';
  constructor(private http: HttpClient) {}

  nuevaSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(this.URL + 'nueva', skill);
  }
}
