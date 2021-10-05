import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  nameInParent = "";

  message = ""; 

  constructor() { }

  ngOnInit(): void {
  }

  receiveMessage(msg: any) {
    // console.log(msg)
    this.message = msg;
  }
  
}
