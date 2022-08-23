import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogeoComponent } from './components/logeo/logeo.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  {path:'', component: PortfolioComponent},
  {path:'login', component: LogeoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
