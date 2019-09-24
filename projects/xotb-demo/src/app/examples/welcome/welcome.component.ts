import { Component } from '@angular/core';

@Component({
  template: `
    <object
      height="600px"
      width="100%"
      data="./assets/README.html"
      type="text/html"
    ></object>
  `,
  styles: [
    `
      body {
        font-family: Helvetica, sans-serif;
      }
    `
  ]
})
export class Welcome {}
