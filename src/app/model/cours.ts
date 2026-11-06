// ng generate interface model/cours

export interface Cours {
  id: number;
  titre: string;
  categorie: string;
  duree: string;
  placesRestantes: number;
}

export const COURS: Cours[] = [
  { id: 1, titre: 'Angular 22', categorie: 'Front-end', duree: '24h', placesRestantes: 12 },
  { id: 2, titre: 'TypeScript', categorie: 'Langage', duree: '16h', placesRestantes: 8 },
  { id: 3, titre: 'Node.js', categorie: 'Back-end', duree: '20h', placesRestantes: 15 }
];
