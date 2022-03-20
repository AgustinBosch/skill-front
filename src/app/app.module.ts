import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonaComponent } from './component/persona/persona.component';
import { SkillListComponent } from './component/skill-list/skill-list.component';
import { SkillComponent } from './component/skill-list/skill/skill.component';
import { FormSkillComponent } from './component/skill-list/form-skill/form-skill.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    SkillListComponent,
    SkillComponent,
    FormSkillComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
