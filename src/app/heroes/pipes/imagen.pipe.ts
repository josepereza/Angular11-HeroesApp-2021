import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {
imagen:string=''
  transform(heroe:Heroe): unknown {
if(heroe.id){
  this.imagen=`assets/heroes/${heroe.id}.jpg` 

}else {this.imagen=`assets/no-image.png` } 

return this.imagen;
    
  }

}
