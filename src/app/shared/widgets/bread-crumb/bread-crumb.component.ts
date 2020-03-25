import { Component, OnInit } from '@angular/core'
import { BreadCrumbInfo } from 'src/app/interfaces/bread-crumb.interface'
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router'
import { filter, distinctUntilChanged } from 'rxjs/operators'

@Component({
  selector: 'app-widget-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss'],
})
export class BreadCrumbComponent implements OnInit {
  public breadcrumbs: BreadCrumbInfo[]

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root)
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root)
      })
  }

  private buildBreadCrumb(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: BreadCrumbInfo[] = []
  ): BreadCrumbInfo[] {
    const label =
      route.routeConfig && route.routeConfig.data
        ? route.routeConfig.data.breadcrumb
        : ''
    const path =
      route.routeConfig && route.routeConfig.data ? route.routeConfig.path : ''

    const nextUrl = path ? `${url}/${path}` : url

    const breadcrumb: BreadCrumbInfo = {
      label,
      url: nextUrl,
    }

    const newBreadcrumbs = breadcrumb.label
      ? [...breadcrumbs, breadcrumb]
      : [...breadcrumbs]

    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs)
    }
    return newBreadcrumbs
  }
}
