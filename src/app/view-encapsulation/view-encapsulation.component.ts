import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  template: `
  <app-no-encapsulation></app-no-encapsulation>
  <app-emulated-encapsulation></app-emulated-encapsulation>
  <app-shadow-dom-encapsulation></app-shadow-dom-encapsulation>
`,
  styles: [
    'app-no-encapsulation, app-emulated-encapsulation, app-shadow-dom-encapsulation { display: block; max-width: 500px; padding: 5px; margin: 5px 0; }',
    'app-no-encapsulation { border: solid 2px red; }',
    'app-emulated-encapsulation { border: solid 2px green; }',
    'app-shadow-dom-encapsulation { border: solid 2px blue; }',
  ],
  encapsulation: ViewEncapsulation.None,
})

export class ViewEncapsulationComponent implements OnInit {

  nextId = 1
  constructor() {

  }
  ngOnInit(): void {
    console.log('ngOnInit');
    this.logIt()
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngOnChanges(): void {
    console.log('ngOnChange');
    console.log(this.nextId)
  }

  private logIt() {
    console.log(++this.nextId);
    for (let index = 0; index < 5; index++) {
      this.nextId++;
    }
    console.log(++this.nextId);
  }
}
