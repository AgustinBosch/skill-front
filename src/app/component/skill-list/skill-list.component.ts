import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css'],
})
export class SkillListComponent implements OnInit {
  @Input() skills: Skill[] = [];

  mostrarForm: boolean = false;

  constructor(private skillSevice: SkillService) {}

  ngOnInit(): void {}

  toggleForm() {
    this.mostrarForm = !this.mostrarForm;
  }

  crearNuevaSkill(skill: Skill) {
    this.skillSevice
      .nuevaSkill(skill)
      .subscribe((nuevaskill) => this.skills.push(nuevaskill));
  }
}
