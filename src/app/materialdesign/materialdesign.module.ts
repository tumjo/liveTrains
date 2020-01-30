import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatTableModule } from '@angular/material';


const material= [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule
];

@NgModule({
  declarations: [],
  imports: [ material ],
  exports: [ material ]
})
export class MaterialdesignModule { }
