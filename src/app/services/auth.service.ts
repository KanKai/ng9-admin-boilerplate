import { Injectable } from '@angular/core'
import { UserService } from './user.service'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly userService: UserService) {}

  public isAuthenticated(): boolean {
    const userData = this.userService.getUserInfo()
    if (userData) {
      return true
    } else {
      return false
    }
  }
}
