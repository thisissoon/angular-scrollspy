# Angular ScrollSpy
[![Build Status][travis-badge]][travis-badge-url]
[![Coverage Status][coveralls-badge]][coveralls-badge-url]

A simple lightweight library for [Angular (2/4+)][angular] which automatically updates links to indicate the currently active section in the viewport.

This is a simple library for [Angular][angular], implemented in the [Angular Package Format v4.0](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/edit#heading=h.k0mh3o8u5hx).


## Install

`npm i @thisissoon/angular-scrollspy --save`

`app.module.ts`
```ts
import { ScrollSpyModule } from '@thisissoon/angular-scrollspy';

@NgModule({
  imports: [
    ScrollSpyModule
  ]
})
export class AppModule { }
```


## Example

`app.component.html`

```html
<p class="foo" snScrollSpy>
  ...
</p>
```

[travis-badge]: https://travis-ci.org/thisissoon/angular-scrollspy.svg?branch=master
[travis-badge-url]: https://travis-ci.org/thisissoon/angular-scrollspy
[coveralls-badge]: https://coveralls.io/repos/github/thisissoon/angular-scrollspy/badge.svg?branch=master
[coveralls-badge-url]: https://coveralls.io/github/thisissoon/angular-scrollspy?branch=master
[angular]: https://angular.io/
