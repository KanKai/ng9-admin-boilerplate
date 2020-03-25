import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'
import { MaterialModule } from '../material-module/material.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { RouterModule } from '@angular/router'
import { AreaComponent } from './widgets/area/area.component'
import { HighchartsChartModule } from 'highcharts-angular'
import { CardComponent } from './widgets/card/card.component'
import { PieComponent } from './widgets/pie/pie.component'
import { BarChartComponent } from './widgets/bar-chart/bar-chart.component'
import { BreadCrumbComponent } from './widgets/bread-crumb/bread-crumb.component'

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    BarChartComponent,
    BreadCrumbComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule,
    HighchartsChartModule,
  ],
  exports: [
    FlexLayoutModule,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MaterialModule,
    RouterModule,
    AreaComponent,
    CardComponent,
    PieComponent,
    BarChartComponent,
    BreadCrumbComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
