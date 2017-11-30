# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.2.0-rc.0"></a>
# [1.2.0-rc.0](https://github.com/thisissoon/angular-scrollspy/compare/v1.1.0...v1.2.0-rc.0) (2017-11-30)


### Features

* **build:** Move build environment to angular cli and ng-packagr ([ac8b57d](https://github.com/thisissoon/angular-scrollspy/commit/ac8b57d))


### BREAKING CHANGES

* **build:** `InViewportModule` must now be imported by user from
`@thisissoon/angular-inviewport` at root module of user application and `WindowRef` imported from
`@thisissoon/angular-inviewport` and passed to `forRoot` function of `InviewportModule`.



<a name="1.1.0"></a>
# [1.1.0](https://github.com/thisissoon/angular-scrollspy/compare/v1.0.0...v1.1.0) (2017-11-29)


### Features

* **ScrollSpy:** Allow setting debounce on ScrollSpySectionComponent ([cbfcbd7](https://github.com/thisissoon/angular-scrollspy/commit/cbfcbd7))



<a name="1.0.0"></a>
# 1.0.0 (2017-08-31)


### Features

* **ScrollSpy:** Added ScrollSpy module ([acfd1ee](https://github.com/thisissoon/angular-scrollspy/commit/acfd1ee))
