import { Component, signal } from '@angular/core';
import { ListeCoursComponent } from './composants/liste-cours/liste-cours';
import { EnTete } from './composants/en-tete/en-tete';
import { PiedPage } from './composants/pied-page/pied-page';
import { DetailCoursComponent } from './composants/detail-cours/detail-cours';
import { Cours } from './model/cours';

@Component({
  imports: [ListeCoursComponent,EnTete,PiedPage,DetailCoursComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  coursSelectionne: Cours | null = null;    
  onSelectionCours(c: Cours) {    
  this.coursSelectionne = c;  
 }
}

