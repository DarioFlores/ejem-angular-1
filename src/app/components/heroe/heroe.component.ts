import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Heroe, HeroesService } from "./../../services/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent{

  public heroe:Heroe;

  constructor(
    private _activateRoute:ActivatedRoute,
    private _heroes:HeroesService
  ) { 
    
    this._activateRoute.params.subscribe( params =>{
      this.heroe = this._heroes.getHeroeName( params['name'] );
    })

  }

}
