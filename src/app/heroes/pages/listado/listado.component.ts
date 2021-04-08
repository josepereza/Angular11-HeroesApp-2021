import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

heroes:Heroe[]=[]
  constructor(private hs:HeroesService) { }

  ngOnInit(): void {
    this.hs.getHeroes().subscribe(datos=>{
     this.heroes=datos;

    })
  }

}
