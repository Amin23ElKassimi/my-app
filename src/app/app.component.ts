import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'angular-beta';
  
  names: string[] = ["Marco", "Giulia", "Luca", "Sara", "Francesco"];

  users: User[] = [
    {
      nome: 'Mario',
      cognome: 'Rossi',
      eta: 30,
      indirizzo: {
        via: 'Via Roma 1',
        citta: 'Roma',
        cap: '00100',
        nazione: 'Italia'
      },
      email: 'mario.rossi@example.com'
    },
    {
      nome: 'Luigi',
      cognome: 'Bianchi',
      eta: 25,
      indirizzo: {
        via: 'Corso Milano 15',
        citta: 'Milano',
        cap: '20100',
        nazione: 'Italia'
      },
      email: 'luigi.bianchi@example.com'
    },
    {
      nome: 'Giovanni',
      cognome: 'Verdi',
      eta: 45,
      indirizzo: {
        via: 'Via Torino 8',
        citta: 'Torino',
        cap: '10100',
        nazione: 'Italia'
      },
      email: 'giovanni.verdi@example.com'
    },
    {
      nome: 'Anna',
      cognome: 'Russo',
      eta: 34,
      indirizzo: {
        via: 'Via Napoli 23',
        citta: 'Napoli',
        cap: '80100',
        nazione: 'Italia'
      },
      email: 'anna.russo@example.com'
    },
    {
      nome: 'Paola',
      cognome: 'Ferrari',
      eta: 29,
      indirizzo: {
        via: 'Via Firenze 11',
        citta: 'Firenze',
        cap: '50100',
        nazione: 'Italia'
      },
      email: 'paola.ferrari@example.com'
    },
    {
      nome: 'Marco',
      cognome: 'Neri',
      eta: 38,
      indirizzo: {
        via: 'Via Bologna 17',
        citta: 'Bologna',
        cap: '40100',
        nazione: 'Italia'
      },
      email: 'marco.neri@example.com'
    },
    {
      nome: 'Francesca',
      cognome: 'Marini',
      eta: 31,
      indirizzo: {
        via: 'Via Genova 4',
        citta: 'Genova',
        cap: '16100',
        nazione: 'Italia'
      },
      email: 'francesca.marini@example.com'
    },
    {
      nome: 'Simone',
      cognome: 'Romano',
      eta: 27,
      indirizzo: {
        via: 'Via Palermo 5',
        citta: 'Palermo',
        cap: '90100',
        nazione: 'Italia'
      },
      email: 'simone.romano@example.com'
    },
    {
      nome: 'Valentina',
      cognome: 'Galli',
      eta: 40,
      indirizzo: {
        via: 'Via Venezia 2',
        citta: 'Venezia',
        cap: '30100',
        nazione: 'Italia'
      },
      email: 'valentina.galli@example.com'
    },
    {
      nome: 'Alessandro',
      cognome: 'Fontana',
      eta: 36,
      indirizzo: {
        via: 'Via Bari 9',
        citta: 'Bari',
        cap: '70100',
        nazione: 'Italia'
      },
      email: 'alessandro.fontana@example.com'
    }
  ];


 

}
