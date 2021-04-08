import { Component, OnInit } from '@angular/core';
import { ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: string[] = [];
  opened: boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
close(dato:any){}
}
