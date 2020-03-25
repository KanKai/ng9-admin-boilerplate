import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() {}

  bigCharts() {
    return [
      {
        name: 'Asia',
        data: [502, 635, 809, 947, 1402, 3634, 5268],
      },
      {
        name: 'Africa',
        data: [106, 107, 111, 133, 221, 767, 1766],
      },
      {
        name: 'Europe',
        data: [163, 203, 276, 408, 547, 729, 628],
      },
      {
        name: 'America',
        data: [18, 31, 54, 156, 339, 818, 1201],
      },
      {
        name: 'Oceania',
        data: [2, 2, 2, 6, 13, 30, 46],
      },
    ]
  }

  cards() {
    return [71, 78, 39, 66]
  }

  pieCharts() {
    return [
      {
        name: 'Chrome',
        y: 61.41,
        sliced: true,
        selected: true,
      },
      {
        name: 'Internet Explorer',
        y: 11.84,
      },
      {
        name: 'Firefox',
        y: 10.85,
      },
      {
        name: 'Edge',
        y: 4.67,
      },
      {
        name: 'Safari',
        y: 4.18,
      },
      {
        name: 'Sogou Explorer',
        y: 1.64,
      },
      {
        name: 'Opera',
        y: 1.6,
      },
      {
        name: 'QQ',
        y: 1.2,
      },
      {
        name: 'Other',
        y: 2.61,
      },
    ]
  }

  barCharts() {
    return {
      series: [
        {
          name: 'Browsers',
          colorByPoint: true,
          data: [
            {
              name: 'Chrome',
              y: 62.74,
              drilldown: 'Chrome',
            },
            {
              name: 'Firefox',
              y: 10.57,
              drilldown: 'Firefox',
            },
            {
              name: 'Internet Explorer',
              y: 7.23,
              drilldown: 'Internet Explorer',
            },
            {
              name: 'Safari',
              y: 5.58,
              drilldown: 'Safari',
            },
            {
              name: 'Edge',
              y: 4.02,
              drilldown: 'Edge',
            },
            {
              name: 'Opera',
              y: 1.92,
              drilldown: 'Opera',
            },
            {
              name: 'Other',
              y: 7.62,
              drilldown: null,
            },
          ],
        },
      ],
      drillDownSeries: [
        {
          name: 'Chrome',
          id: 'Chrome',
          data: [
            ['v65.0', 0.1],
            ['v64.0', 1.3],
            ['v63.0', 53.02],
            ['v62.0', 1.4],
            ['v61.0', 0.88],
            ['v60.0', 0.56],
            ['v59.0', 0.45],
            ['v58.0', 0.49],
            ['v57.0', 0.32],
            ['v56.0', 0.29],
            ['v55.0', 0.79],
            ['v54.0', 0.18],
            ['v51.0', 0.13],
            ['v49.0', 2.16],
            ['v48.0', 0.13],
            ['v47.0', 0.11],
            ['v43.0', 0.17],
            ['v29.0', 0.26],
          ],
        },
        {
          name: 'Firefox',
          id: 'Firefox',
          data: [
            ['v58.0', 1.02],
            ['v57.0', 7.36],
            ['v56.0', 0.35],
            ['v55.0', 0.11],
            ['v54.0', 0.1],
            ['v52.0', 0.95],
            ['v51.0', 0.15],
            ['v50.0', 0.1],
            ['v48.0', 0.31],
            ['v47.0', 0.12],
          ],
        },
        {
          name: 'Internet Explorer',
          id: 'Internet Explorer',
          data: [
            ['v11.0', 6.2],
            ['v10.0', 0.29],
            ['v9.0', 0.27],
            ['v8.0', 0.47],
          ],
        },
        {
          name: 'Safari',
          id: 'Safari',
          data: [
            ['v11.0', 3.39],
            ['v10.1', 0.96],
            ['v10.0', 0.36],
            ['v9.1', 0.54],
            ['v9.0', 0.13],
            ['v5.1', 0.2],
          ],
        },
        {
          name: 'Edge',
          id: 'Edge',
          data: [
            ['v16', 2.6],
            ['v15', 0.92],
            ['v14', 0.4],
            ['v13', 0.1],
          ],
        },
        {
          name: 'Opera',
          id: 'Opera',
          data: [
            ['v50.0', 0.96],
            ['v49.0', 0.82],
            ['v12.1', 0.14],
          ],
        },
      ],
    }
  }
}
