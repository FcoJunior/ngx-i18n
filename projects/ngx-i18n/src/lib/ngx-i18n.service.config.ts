import { Injectable } from "@angular/core";

@Injectable()
export class NgxI18nServiceConfig {
    directory: string;
    defaultLocale: string;
    locale: string;
}