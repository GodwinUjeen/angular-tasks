import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent-hook',
  templateUrl: './parent-hook.component.html',
  styleUrls: ['./parent-hook.component.css']
})
export class ParentHookComponent implements OnInit, OnChanges,DoCheck {

  isChild = true;

  name = ''

  constructor() {
    console.log('Parent constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Parent Changes is called');
  }

  ngOnInit(): void {
    console.log('Parent onInit called');
  }

  ngDoCheck():void{
    console.log('Parent doCheck called');
  }

  toggleChild() {
    this.isChild = !this.isChild;
  }

}
