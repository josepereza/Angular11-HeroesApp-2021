import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe';
import { FormGroup, FormControl } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

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
alter_ego:new FormControl(''),
superhero:new FormControl(''),
characters:new FormControl(''),
publisher: new FormControl('DC Comics'),
first_appearance: new FormControl(''),
alt_img:new FormControl('')
  })
  constructor(private hs:HeroesService , private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.hs.getHeroe(id).subscribe((dato)=>{console.log('mi dato mio ',dato); this.heroe=dato;
   this.heroeForm.setValue({
     superhero:this.heroe.superhero,
     alter_ego:'',
     characters:'',
     publisher:'',
     first_appearance:'',
     alt_img:''
   })
  
  })}
guardar(){
  console.log(this.heroeForm.get('alt_img')?.value)
  console.log(this.heroeForm.value)
this.hs.saveHeroe(this.heroeForm.value).subscribe(dato=>{console.log(dato)})
}
}
