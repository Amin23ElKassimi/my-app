export interface user {
    nome: string;
    cognome: string;
    eta: number;
    indirizzo: Indirizzo;
    email: string;
  }

  export interface Indirizzo {
    via: string;
    citta: string;
    cap: string;
    nazione: string;
  }