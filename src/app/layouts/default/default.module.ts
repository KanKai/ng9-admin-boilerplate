import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DefaultComponent } from './default.component'
import { DefaultRoutingModule } from './default-routing.module'
import { SharedModule } from 'src/app/shared/shared.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { DashboardService } from 'src/app/services/dashboard.service'

@NgModule({
  declarations: [DefaultComponent],
  imports: [CommonModule, DefaultRoutingModule, SharedModule, FlexLayoutModule],
  providers: [DashboardService],
})
export class DefaultModule {}
