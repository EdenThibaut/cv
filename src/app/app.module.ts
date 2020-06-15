import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';

import { NZ_I18N, fr_FR } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';

import { AppComponent } from './app.component';
import { NeonComponent } from './neon/neon.component';
import { SectionMainComponent } from './section-main/section-main.component';
import { SectionPresentationComponent } from './section-presentation/section-presentation.component';
import { SectionExperiencesComponent } from './section-experiences/section-experiences.component';
import { SectionCompetencesComponent } from './section-competences/section-competences.component';
import { ItemExperienceComponent } from './item-experience/item-experience.component';
import { ItemCompetenceComponent } from './item-competence/item-competence.component';
import { NavigationComponent } from './navigation/navigation.component';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    NeonComponent,
    SectionMainComponent,
    SectionPresentationComponent,
    SectionExperiencesComponent,
    SectionCompetencesComponent,
    ItemExperienceComponent,
    ItemCompetenceComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzIconModule,
    DemoNgZorroAntdModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
