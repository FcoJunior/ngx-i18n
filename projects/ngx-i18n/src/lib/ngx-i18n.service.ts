import { Injectable, Optional } from '@angular/core';
import { NgxI18nServiceConfig } from './ngx-i18n.service.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class NgxI18nService {
  private _config: NgxI18nServiceConfig = new NgxI18nServiceConfig();
  private _languagePack: any;
  private _currentLanguage: string = '';

  constructor(@Optional() config: NgxI18nServiceConfig, private _http: HttpClient) {
    if(config) { 
      this._config = config;
    }
  }

  getByKey(key: string, callback: (x: string) => any) : void {
    const value = map(x => this._languagePack[key]);
    value(this._getLanguagePack(this._config.locale))
      .subscribe(
        x => { callback(x) }, 
        x => { 
          this._config.locale = this._config.defaultLocale;
          this.getByKey(key, callback);
        });
  }

  private _getLanguagePack(locale: string): Observable<any> {
    if (locale !== this._currentLanguage || !this._languagePack) {
      
      const handler = map(x => {
        this._languagePack = x;
        this._currentLanguage = locale;
        return x
      });

      try {
        return handler(this._http.get(`${this._config.directory}/${locale}.json`))
      } catch {
        this._getLanguagePack(this._config.defaultLocale);
      }
        
    } else {
      return this._languagePack;
    }
  }
}
