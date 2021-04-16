import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe';
import { FormGroup, FormControl } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  heroe: Heroe = {
    alter_ego: '',
    superhero: '',
    characters: '',
    publisher: 'DC Comics',
    first_appearance: '',
    alt_img: ''
  
  }
  heroeForm=new FormGroup({
id:new FormControl(''),    
alter_ego:new FormControl(''),
superhero:new FormControl(''),
characters:new FormControl(''),
publisher: new FormControl('DC Comics'),
first_appearance: new FormControl(''),
alt_img:new FormControl('')
  })
  constructor(private hs:HeroesService , private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.hs.getHeroe(id).subscribe((dato)=>{console.log('mi dato mio ',dato); this.heroe=dato;
   this.heroeForm.setValue({
     id:this.heroe.id,
     superhero:this.heroe.superhero,
     alter_ego:this.heroe.alter_ego,
     characters:this.heroe.characters,
     publisher:this.heroe.publisher,
     first_appearance: this.heroe.first_appearance,
     alt_img: this.heroe.alt_img || ''
   })
  
  })}
guardar(){
//   console.log(this.heroeForm.get('alt_img')?.value)
//   console.log(this.heroeForm.value)
// this.hs.saveHeroe(this.heroeForm.value).subscribe(dato=>{console.log(dato)})

if (this.heroe.superhero.trim().length === 0) {
  return;
}

if (this.heroe.id) {
  //actualizar

  console.log(this.heroeForm.value)
  this.hs.actualizarHeroe(this.heroeForm.value).subscribe(heroe => {
    console.log('prueba heroe ', heroe)
    this.router.navigate(['/heroes/listado']);
  })
}
else {
  this.hs.saveHeroe(this.heroe).subscribe(heroe => {
    this.router.navigate(['/heroes/editar', heroe.id]);
  })
}

}

}
