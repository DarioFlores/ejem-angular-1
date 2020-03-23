import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  public termino:string;
  public heroes:Heroe[] = [];
  public ceroHeroes:boolean;

  constructor(
    private _heroesService:HeroesService,
    private _activateRoute:ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscadorHeroes( this.termino );
    })
    this.ceroHeroes = this.heroes.length == 0;
  }
}
