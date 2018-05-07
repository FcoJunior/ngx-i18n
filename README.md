# ngx-i18n

Based on the way iOS and Android work, this library was developed for i18n application in Angular applications in a practical and fast way.

## Instalation
Get package on npm:
```
npm i @fcojunr/ngx-i18n --save
```
or yarn:
```
yarn add @fcojunr/ngx-i18n --save
```

## Configuration
Configure in your `app.modules.ts` the component `NgxI18nModule` 

```
import { NgxI18nModule } from  '@fcojunr/ngx-i18n';
...
imports: [
...
	NgxI18nModule.forRoot({
		directory: 'assets/i18n',
		defaultLocale: 'pt-BR',
		locale: navigator.language
	}),
...
```
| Property      | Description |
|--|--|
| directory     | Source here your json files  |
| defaultLocale | Will be used case browser locale not found  |
| locale        | Current locale |

### Configure path i18n
Create in your application a folder into `assets` with named `i18n`, and add json files for respective languages.
The json files will be named conform [ISO Language Code Table](http://www.lingoes.net/en/translator/langcode.htm).

## Usage
Add `ngx-i18n` attribute on tags that will have your text modified.
```
<p ngx-i18n="label_key">Lorem ipsum</p>
```
The content of tag will be replaced by value which was defined in the json language.