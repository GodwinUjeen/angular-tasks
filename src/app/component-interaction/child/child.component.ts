import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {

  @Input()
  name = 'Godwin';

  @Output()
  emitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendToParent(e: any) {
    // console.log(e.target.value)
    this.emitter.emit(e.target.value);
  }

}
