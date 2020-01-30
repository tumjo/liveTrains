import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule } from '@angular/material';


const material= [
  MatToolbarModule,
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [ material ],
  exports: [ material ]
})
export class MaterialdesignModule { }
