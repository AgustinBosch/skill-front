import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Skill } from "src/app/model/skill.model";

@Component({
  selector: "app-form-skill",
  templateUrl: "./form-skill.component.html",
  styleUrls: ["./form-skill.component.css"],
})
export class FormSkillComponent {
  mostrarForm: boolean = false;
  @Output() nuevaSkill: EventEmitter<Skill> = new EventEmitter();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: [0],
      nombre: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      nivel: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
    });
  }

  setSkill(skill: Skill) {
    this.form.patchValue({
      id: skill.id,
      nombre: skill.nombre,
      nivel: skill.nivel,
    });
    this.mostrarForm = true;
  }

  toggleForm() {
    this.mostrarForm = !this.mostrarForm;
  }

  onSubmit(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      this.nuevaSkill.emit(this.form.value);
      this.form.reset();
      this.mostrarForm = false;
    } else {
      console.log("form no valido");
    }
  }
}
