import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'placesRestantes',
})
export class PlacesRestantesPipe implements PipeTransform {
  transform(p:number , seuil :number =5):string{
    switch (p) {
      case 0:
        return "Complet";
      case 1:
        return "Dernière place !";
      case 2-seuil:
        return "plus que "+p+"!";
      default:
        return p+" places disponibles";

    }
   /* if(p==0){
      return "Complet";
    }else{
      if(p==1){
        return "Dernière place !";
      }else{
        if(p <5 || p >1){
          return "plus que "+p+"!";
        }else{
          return p+" places disponibles";
        }
        }
    }*/
  }
}
