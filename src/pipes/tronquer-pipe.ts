import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tronquer',
})
export class TronquerPipe implements PipeTransform {
  transform(name: string, taille: number): string {
    if(!taille)return name;
    return name.substring(0,taille)+"...";
  }
}
