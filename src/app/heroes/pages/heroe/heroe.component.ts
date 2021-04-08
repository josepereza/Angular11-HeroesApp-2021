import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

heroe!:Heroe
  constructor(private route: ActivatedRoute, private hs:HeroesService) {
   
   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.hs.getHeroe(id).subscribe((dato)=>{this.heroe=dato})

  }

}
