import { NgxI18nService } from './ngx-i18n.service';
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[ngx-i18n]'
})
export class NgxI18nDirective implements AfterViewInit {
    
    @Input('ngx-i18n') _key: string;

    private _element: ElementRef; 

    constructor (
        private _el: ElementRef, 
        private _service: NgxI18nService
    ) { }

    ngAfterViewInit() {
        this._service.getByKey(this._key, x => {
          this._el.nativeElement.innerText = x;
        });
    }
}