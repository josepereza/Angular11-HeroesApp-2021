import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe';
import { FormGroup, FormControl } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';

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
  constructor(private hs:HeroesService) { }

  ngOnInit(): void {
  }
guardar(){
  console.log(this.heroeForm.value)
this.hs.saveHeroe(this.heroeForm.value).subscribe(dato=>{console.log(dato)})
}
}
