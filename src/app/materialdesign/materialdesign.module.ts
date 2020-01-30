import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatCardModule } from '@angular/material';


const material= [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: [ material ],
  exports: [ material ]
})
export class MaterialdesignModule { }
