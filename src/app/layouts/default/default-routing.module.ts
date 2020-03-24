import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DefaultComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'posts',
                loadChildren: () => import('../../modules/posts/posts.module').then(m => m.PostsModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DefaultRoutingModule { }