import { Component, OnInit } from '@angular/core'
import { DashboardService } from 'src/app/services/dashboard.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  bigCharts = []
  cards = []
  pieCharts = []
  barCharts: { series: any[]; drillDownSeries: any[] }

  constructor(private readonly dashboardService: DashboardService) {}

  ngOnInit() {
    this.bigCharts = this.dashboardService.bigCharts()
    this.cards = this.dashboardService.cards()
    this.pieCharts = this.dashboardService.pieCharts()
    this.barCharts = this.dashboardService.barCharts()
  }
}
