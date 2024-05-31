import { Component } from '@angular/core';
import { user } from './models/user.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'angular-beta';
  
  names: string[] = ["Marco", "Giulia", "Luca", "Sara", "Francesco"];
  persona: user = {
    nome: 'Mario',
    cognome: 'Rossi',
    eta: 30,
    indirizzo: 'Via Roma 1, 00100 Roma',
    email: 'mario.rossi@example.com'
  };

 

}
