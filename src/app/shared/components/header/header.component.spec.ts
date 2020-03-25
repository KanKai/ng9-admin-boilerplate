import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HeaderComponent } from './header.component'
import { SidebarComponent } from '../sidebar/sidebar.component'
import { FooterComponent } from '../footer/footer.component'
import { AreaComponent } from '../../widgets/area/area.component'
import { CardComponent } from '../../widgets/card/card.component'
import { PieComponent } from '../../widgets/pie/pie.component'
import { BarChartComponent } from '../../widgets/bar-chart/bar-chart.component'
import { BreadCrumbComponent } from '../../widgets/bread-crumb/bread-crumb.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MaterialModule } from 'src/app/material-module/material.module'
import { RouterModule } from '@angular/router'
import { HighchartsChartModule } from 'highcharts-angular'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        FlexLayoutModule,
        MaterialModule,
        RouterModule,
        HighchartsChartModule,
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
