import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';

export const MAT_MODULE = [
  MatButtonModule
];


@NgModule({
  imports: [
    ...MAT_MODULE
  ],
  exports: [
    ...MAT_MODULE
  ]
})
export class MaterialModule { }
