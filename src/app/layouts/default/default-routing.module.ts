import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { DefaultComponent } from './default.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultComponent,
    data: {
      breadcrumb: 'หน้าหลัก',
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../../modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'posts',
        loadChildren: () =>
          import('../../modules/posts/posts.module').then((m) => m.PostsModule),
        data: {
          breadcrumb: 'จัดการข้อมูล',
        },
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultRoutingModule {}
