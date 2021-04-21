# PlanPurchase

This frontend app was creeated as part of a challange.

Angular Version: 11.2.9.

## This application includes
- Two pages
- Styled presentation using SCSS
- Components bound to a data model
- One in-memory service
- Some unit test coverage

## Application behaviours
- There are four options for purchase plans split across two pages.
- Only one option can be purchased at a time.
- The purchase can be cancelled and this will return to the original selection.
- Each purchase option is presented within a reusable component bound to values gathered via an in-
memory angular service.
- The service tracks which item is currently purchased to allow the presentation to be adjusted accordingly.
- The app is responsive presenting options in a single column when the device width is below 800px

## Running

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Building

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma]
