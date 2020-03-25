import { environment } from './../environments/environment'
import { NgModule, Injectable } from '@angular/core'
import {
  Translation,
  translocoConfig,
  TranslocoLoader,
  TranslocoModule,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
} from '@ngneat/transloco'
import { HttpBackend, HttpClient } from '@angular/common/http'

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private httpBackend: HttpBackend) {}

  getTranslation(lang: string) {
    const http = new HttpClient(this.httpBackend)
    return http.get<Translation>(`/assets/i18n/${lang}.json`)
  }
}

@NgModule({
  imports: [TranslocoModule],
  exports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['en', 'th'],
        defaultLang: 'th',
        reRenderOnLangChange: true,
        prodMode: environment.production,
      }),
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
  ],
})
export class TranslocoRootModule {}
