import { NgxI18nServiceConfig } from './../../projects/ngx-i18n/src/lib/ngx-i18n.service.config';
import { Component } from '@angular/core';
import { NgxI18nService } from 'projects/ngx-i18n/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _service: NgxI18nServiceConfig) {
    _service.locale = 'pt-BR';
  }
}
