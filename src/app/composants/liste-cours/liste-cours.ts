import { Component , EventEmitter, Output} from '@angular/core';
import { Cours } from '../../model/cours';
import { FormsModule } from '@angular/forms';
import { FiltreCoursPipe } from '../../../pipes/filtre-cours-pipe';
import { TriCoursPipe } from '../../../pipes/tri-cours-pipe';
@Component({
  imports: [FormsModule,FiltreCoursPipe,TriCoursPipe],
  selector: 'app-liste-cours',
  styleUrl: './liste-cours.css',
  templateUrl: './liste-cours.html',
})

export class ListeCoursComponent {
  recherche='';
  tri:'asc' | 'desc' ='asc';
  @Output() coursSelectionne = new EventEmitter<Cours>();
  coursActif: Cours | null = null;
  cours = [
    { titre: 'Angular avancé', categorie: 'Front-end', duree: '12h', places: 8,placesRestantes:2 },
    { titre: 'TypeScript pour développeurs', categorie: 'Langage', duree: '8h', places: 15,placesRestantes:6 },
    { titre: 'API REST avec Node.js', categorie: 'Back-end', duree: '16h', places: 6 ,placesRestantes:0},
    { titre: 'Git et travail collaboratif', categorie: 'Outils', duree: '4h', places: 20,placesRestantes:1 },
  ];
  selectionner(c: Cours) {
    this.coursActif = c;
    this.coursSelectionne.emit(c);
  }
}




