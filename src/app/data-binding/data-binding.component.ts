import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  name = 'Godwin';
  profilePhoto = 'assets/avatar.png';
  age = 22;
  passValueToComponent(e: any) {
    console.log(e.target.value)
  }

}
