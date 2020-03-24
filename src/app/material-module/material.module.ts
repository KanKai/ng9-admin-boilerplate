import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

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
