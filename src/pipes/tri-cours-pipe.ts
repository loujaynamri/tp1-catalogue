import { Cours } from './../app/model/cours';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'triCours',
})
export class TriCoursPipe implements PipeTransform {
  transform(Cours: Cours[], sens: 'asc' | 'desc'='asc'): Cours[] {
    const copie =[...Cours].sort((a,b)=>a.titre.localeCompare(b.titre));
    return sens === 'desc' ? copie.reverse():copie;
  }
}
