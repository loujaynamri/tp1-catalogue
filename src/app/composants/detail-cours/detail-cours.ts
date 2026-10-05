import { Component,Input } from '@angular/core';
import { Cours } from '../../model/cours';

@Component({
  imports: [],
  selector: 'app-detail-cours',
  styleUrl: './detail-cours.css',
  templateUrl: './detail-cours.html',
})
export class DetailCoursComponent {
  @Input() cours: Cours | null = null;
}

