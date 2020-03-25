import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PostsComponent } from './posts.component'
import { PostRoutingModule } from './posts-routing.module'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, PostRoutingModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PostsModule {}
