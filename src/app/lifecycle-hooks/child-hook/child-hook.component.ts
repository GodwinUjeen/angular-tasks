import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-hook',
  templateUrl: './child-hook.component.html',
  styleUrls: ['./child-hook.component.css']
})
export class ChildHookComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  counter = 0;

  @Input()
  name = '';

  constructor() {
    console.log('Child constructor called');
  }

  ngOnInit(): void {
    console.log('Child onInit is called');
  }

  //If the component get destroyed without clearing the interval there will e a memory leak.
  // interval = setInterval(() => {
  //   console.log(this.counter++);
  // }, 1000);

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child Changes is called');
  }

  ngDoCheck(): void {
    console.log('Child doCheck called');
  }

  ngOnDestroy(): void {
    //onDestroy will help to clear the interval.
    // clearInterval(this.interval)
    console.log('Child onDestroy is called');
  }


}
