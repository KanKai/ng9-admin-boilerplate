import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AuthenticationRoutingModule } from './authentication-routing.module'

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthenticationRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthenticationModule {}
