import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-class',
  templateUrl: './dynamic-class.component.html',
  styleUrl: './dynamic-class.component.scss'
})
export class DynamicClassComponent {
  
  currentClass: string = '';
}
