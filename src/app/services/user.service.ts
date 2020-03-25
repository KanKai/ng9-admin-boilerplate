import { UserInfo } from './../interfaces/user-info.interface'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUserInfo(): UserInfo {
    const userData = sessionStorage.getItem('userData')
    if (!!userData) {
      return JSON.parse(userData) as UserInfo
    }
    return null
  }

  setLanguage(lang: string = 'en') {
    const userInfo = this.getUserInfo()
    if (userInfo) {
      userInfo.language = lang
      this.setUserInfo(userInfo)
    }
  }

  setUserInfo(userInfo: UserInfo): boolean {
    sessionStorage.setItem('userData', JSON.stringify(userInfo))
    return true
  }

  clearUserInfo(): boolean {
    sessionStorage.removeItem('userData')
    sessionStorage.clear()
    return true
  }
}
