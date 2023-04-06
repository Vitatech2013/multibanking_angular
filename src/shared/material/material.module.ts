import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';


const materials:any =[
  MatButtonModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, materials
  ],
  exports:[materials]
})
export class MaterialModule { }
