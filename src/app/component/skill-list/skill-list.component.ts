import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { Skill } from "src/app/model/skill.model";
import { SkillService } from "src/app/service/skill.service";
import { FormSkillComponent } from "./form-skill/form-skill.component";

@Component({
  selector: "app-skill-list",
  templateUrl: "./skill-list.component.html",
  styleUrls: ["./skill-list.component.css"],
})
export class SkillListComponent {
  @ViewChild("formSkill") formSkill!: FormSkillComponent;
  @Input() skills: Skill[] = [];

  mostrarForm: boolean = false;

  constructor(private skillSevice: SkillService) {}

  toggleForm() {
    this.mostrarForm = !this.mostrarForm;
  }

  crearNuevaSkill(skill: Skill) {
    if (skill.id) {
      //edit
    } else {
      this.skillSevice
        .nuevaSkill(skill)
        .subscribe((nuevaskill) => this.skills.push(nuevaskill));
    }
  }

  borrarSkill(id: number) {
    this.skillSevice.borrarSkill(id).subscribe(() => {
      this.skills = this.skills.filter((t) => t.id !== id);
    });
  }

  editarSkill(skill: Skill) {
    this.toggleForm();
    //this.formSkill.funcion();
  }
}
