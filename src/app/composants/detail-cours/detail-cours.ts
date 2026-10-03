import { Component,Input } from '@angular/core';
import { Cours } from '../liste-cours/liste-cours';

@Component({
  imports: [],
  selector: 'app-detail-cours',
  styleUrl: './detail-cours.css',
  templateUrl: './detail-cours.html',
})
export class DetailCoursComponent {
  @Input() cours: Cours | null = null;
}

export class ListeCoursComponent {   cours: Cours[] = [   
    { titre: 'Angular avancé', categorie: 'Front-end', duree: '12h', places: 8 },   
    { titre: 'TypeScript pour développeurs', categorie: 'Langage', duree: '8h', places: 15 }, 
    { titre: 'API REST avec Node.js', categorie: 'Back-end', duree: '16h', places: 6 },   
    { titre: 'Git et travail collaboratif', categorie: 'Outils', duree: '4h', places: 20 },  
 ]; } 