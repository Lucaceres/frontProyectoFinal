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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule,
    NgCircleProgressModule.forRoot({
      "showImage":true,
      "showTitle":false,
      "showSubtitle":false,
      "showUnits": false,
      "clockwise": false,
      "responsive":true
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
