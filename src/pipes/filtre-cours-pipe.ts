import { Cours } from './../app/model/cours';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtreCours',
})
export class FiltreCoursPipe implements PipeTransform {
  transform(/*donner a transformer*/Cours: /*type de donner*/Cours[], recherche: string): Cours[] {
    if(!recherche) return Cours;
    const q=recherche.toLocaleLowerCase();
    return Cours.filter(c=>c.titre.toLocaleLowerCase().includes(q));
  }
}
