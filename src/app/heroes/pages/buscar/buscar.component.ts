import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Heroe } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(private hs:HeroesService) { }
  myControl = new FormControl();
  options: Heroe[] = [];
  filteredOptions!: Observable<Heroe[]>;

  ngOnInit() {
    this.hs.getHeroes().subscribe(datos=>this.options=datos)
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
       startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): Heroe[] {
    const filterValue = value.toLowerCase();
    
   
     return this.options.filter((option:Heroe) => option.superhero.toLowerCase().includes(filterValue))

}
}