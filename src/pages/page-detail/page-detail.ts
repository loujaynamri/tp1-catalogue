import { COURS ,Cours} from './../../app/model/cours';
import { Component,Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DetailCoursComponent } from '../../app/composants/detail-cours/detail-cours';

@Component({
  imports: [RouterLink,DetailCoursComponent],
  selector: 'app-page-detail',
  styleUrl: './page-detail.css',
  templateUrl: './page-detail.html',
})
export class PageDetail {
  @Input() id='';
  get cours():Cours | undefined {
    return COURS.find(c =>c.id == Number(this.id))
  }
}
