import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  @Input()heroe!:Heroe
  constructor(private hs:HeroesService,private router:Router) { }

  ngOnInit(): void {
  }
  borrar(id:string | undefined){
    this.hs.eliminarHeroe(id).subscribe(dato=>this.router.navigate(['/heroes']));
  }
}

