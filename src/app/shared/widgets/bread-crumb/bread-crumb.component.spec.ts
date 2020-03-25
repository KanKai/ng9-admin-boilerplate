import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { BreadCrumbComponent } from './bread-crumb.component'
import { SidebarComponent } from '../../components/sidebar/sidebar.component'
import { FooterComponent } from '../../components/footer/footer.component'
import { AreaComponent } from '../area/area.component'
import { CardComponent } from '../card/card.component'
import { PieComponent } from '../pie/pie.component'
import { BarChartComponent } from '../bar-chart/bar-chart.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MaterialModule } from 'src/app/material-module/material.module'
import { RouterModule } from '@angular/router'
import { HighchartsChartModule } from 'highcharts-angular'
import { RouterTestingModule } from '@angular/router/testing'

describe('BreadCrumbComponent', () => {
  let component: BreadCrumbComponent
  let fixture: ComponentFixture<BreadCrumbComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BreadCrumbComponent,
        SidebarComponent,
        FooterComponent,
        AreaComponent,
        CardComponent,
        PieComponent,
        BarChartComponent,
        BreadCrumbComponent,
      ],
      imports: [
        FlexLayoutModule,
        MaterialModule,
        RouterTestingModule,
        HighchartsChartModule,
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadCrumbComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
