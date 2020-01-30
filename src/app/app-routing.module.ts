import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainsComponent } from './trains/trains.component';
import { TrainsreturnComponent } from './trainsreturn/trainsreturn.component';


const routes: Routes = [
  {
    path: 'trains',
    component: TrainsComponent
  },
  {
    path: 'trainsreturn',
    component: TrainsreturnComponent
  },
  {
    path: '',
    redirectTo: '/trains',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: TrainsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
