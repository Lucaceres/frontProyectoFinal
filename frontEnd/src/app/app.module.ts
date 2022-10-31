import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { LoginComponent } from './components/login/login.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { fakeAsync } from '@angular/core/testing';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LogeoComponent } from './components/logeo/logeo.component'
import { FormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './components/experiencia-laboral/new-experiencia.component';
import { ExperienciaEditComponent } from './components/experiencia-laboral/experiencia-edit.component';
import { NewProjectComponent } from './components/projects/new-project.component';
import { ProyectoEditComponent } from './components/projects/proyecto-edit.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HeaderComponent,
    SocialMediaComponent,
    LoginComponent,
    BannerComponent,
    AboutComponent,
    ExperienciaLaboralComponent,
    EducacionComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    PortfolioComponent,
    LogeoComponent,
    NewExperienciaComponent,
    ExperienciaEditComponent,
    NewProjectComponent,
    ProyectoEditComponent,
    NewEducacionComponent,
    EditEducacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      "showImage":true,
      "showTitle":false,
      "showSubtitle":false,
      "showUnits": false,
      "clockwise": false,
      "responsive":true
    })
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
