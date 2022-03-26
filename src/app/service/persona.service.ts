import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Persona } from "../model/persona.model";

@Injectable({
  providedIn: "root",
})
export class PersonaService {
  URL = "http://localhost:8080/persona/1";

  constructor(private http: HttpClient) {}

  getPersona(): Observable<Persona> {
    return this.http.get<Persona>(this.URL);
  }
}
