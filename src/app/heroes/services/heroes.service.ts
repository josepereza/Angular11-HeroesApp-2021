import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Heroe} from '../interfaces/heroe'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
private baseUrl:string=environment.baseUrl
  constructor(private http:HttpClient) { }

  getHeroes():Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`)
  }
  getHeroe(id:string | null){
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`)
  }
  saveHeroe(heroe:Heroe):Observable<Heroe>{
    console.log('servicio ', heroe)
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`,heroe)
  }
}
