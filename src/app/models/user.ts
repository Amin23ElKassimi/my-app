export interface Indirizzo {
  via: string;
  citta: string;
  cap: string;
  nazione: string;
}

export interface User {
  nome: string;
  cognome: string;
  eta: number;
  indirizzo: Indirizzo;
  email: string;
}
