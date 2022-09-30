import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { ExperienciaEditComponent } from './components/experiencia-laboral/experiencia-edit.component';
import { NewExperienciaComponent } from './components/experiencia-laboral/new-experiencia.component';
import { LogeoComponent } from './components/logeo/logeo.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NewProjectComponent } from './components/projects/new-project.component';
import { ProyectoEditComponent } from './components/projects/proyecto-edit.component';

const routes: Routes = [
  {path:'', component: PortfolioComponent},
  {path:'login', component: LogeoComponent},
  {path:'nuevaexp', component:NewExperienciaComponent},
  {path:'expedit/:id', component:ExperienciaEditComponent},
  {path:'nuevoproyecto', component: NewProjectComponent,},
  {path:'proyectoedit/:id', component:ProyectoEditComponent},
  {path:'nuevaeducacion', component:NewEducacionComponent},
  {path:'editeducacion/:id', component:EditEducacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
