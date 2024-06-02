import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.scss'
})



export class NgifComponent {

  isLoggedIn: boolean = false;
  
  //methods

  togle(){
    this.isLoggedIn = !this.isLoggedIn
  }

}
