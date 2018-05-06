import { NgxI18nServiceConfig } from './ngx-i18n.service.config';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgxI18nService } from './ngx-i18n.service';
import { NgxI18nDirective } from './ngx-i18n.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations:[ NgxI18nDirective ],
    imports: [ HttpClientModule ],
    exports: [ NgxI18nDirective ],
    providers: [ NgxI18nService ]
})
export class NgxI18nModule {
  static forRoot(config: NgxI18nServiceConfig) : ModuleWithProviders {
    return {
      ngModule: NgxI18nModule,
      providers: [
        { provide: NgxI18nServiceConfig, useValue: config }
      ]
    }
  }
}
