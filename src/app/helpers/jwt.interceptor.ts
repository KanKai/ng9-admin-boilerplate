import { Injectable } from '@angular/core'
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http'
import { Router } from '@angular/router'
import { Observable, EMPTY, throwError } from 'rxjs'
import { tap, map, catchError } from 'rxjs/operators'
import { environment } from 'src/environments/environment'
import { UserService } from '../services/user.service'

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private readonly userService: UserService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const url = `${environment.endPoint}${request.url}`
    const userInfo = this.userService.getUserInfo()

    let accessToken = ''
    if (userInfo && userInfo.accessToken) {
      accessToken = userInfo.accessToken
    }

    const newRequest = request.clone({
      url,
      body: request.body,
      setHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    const data = {
      headers: newRequest.headers,
      body: newRequest.body,
      parameter: newRequest.params.keys(),
    }

    if (!environment.production) {
      console.log(
        `%c==== HttpRequesting [${newRequest.method}]:[${newRequest.url}] Parameter:=> ====`,
        'background: #00E6C3; color: #000000',
        data
      )
    }

    let status: string

    return next.handle(newRequest).pipe(
      tap(
        (event: HttpEvent<any>) =>
          (status = event instanceof HttpResponse ? 'succeeded' : ''),
        (error: HttpErrorResponse) => (status = 'failed')
      ),
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (!environment.production) {
            console.log(
              `%c==== HttpResponse [${newRequest.method}]:[${newRequest.url}] Parameter:=> ====`,
              'background: #FF8900; color: #000000',
              event.body
            )
          }
        }
        return event
      }),
      catchError((error: HttpErrorResponse, caught) => {
        if (error.status === 401) {
          this.userService.clearUserInfo()
          this.router.navigate(['/login'])
          return EMPTY
        }
        return throwError(error)
      }) as any
    )
  }
}
