import { NgModule } from '@angular/core';
import { MatButtonModule, MatSidenavModule, MatDividerModule, MatToolbarModule, MatIconModule, MatMenuModule } from '@angular/material';

export const MAT_MODULE = [
  MatButtonModule,
  MatSidenavModule,
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule
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
