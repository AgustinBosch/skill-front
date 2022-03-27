import {
  AfterViewInit,
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

  constructor(private skillSevice: SkillService) {}

  crearNuevaSkill(skill: Skill) {
    if (skill.id) {
      this.skillSevice.editarSkill(skill).subscribe((skillEditada) => {
        this.actualizarPrimeraSkill(skillEditada);
      });
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

  private actualizarPrimeraSkill(skill: Skill) {
    for (let index = 0; index < this.skills.length; index++) {
      if (this.skills[index].id === skill.id) {
        this.skills[index] = skill;
        break;
      }
    }
  }

  toggleForm() {
    this.formSkill.toggleForm();
  }

  editarSkill(skill: Skill) {
    this.formSkill.setSkill(skill);
  }
}
