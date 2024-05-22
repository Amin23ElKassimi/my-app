import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  // Varibles
  count: number = 0;
  
  // Methods
  increment() {
    this.count++;
  }

}
