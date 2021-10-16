import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirDataDetailsComponent } from './air-data-details/air-data-details.component';
import { AirDataLandingComponent } from './air-data-landing/air-data-landing.component';

const routes: Routes = [
  {path:'', component: AirDataLandingComponent},
  {path:'details/:id', component: AirDataDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
