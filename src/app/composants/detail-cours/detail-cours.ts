import { Component,Input } from '@angular/core';
import { Cours } from '../../model/cours';
import { UpperCasePipe } from '@angular/common';
import { PlacesRestantesPipe } from '../../../pipes/places-restantes-pipe';
import { TronquerPipe } from '../../../pipes/tronquer-pipe';
@Component({
  imports: [UpperCasePipe, PlacesRestantesPipe,TronquerPipe],
  selector: 'app-detail-cours',
  styleUrl: './detail-cours.css',
  templateUrl: './detail-cours.html',
})
export class DetailCoursComponent {
  @Input() cours: Cours | null = null;
}

