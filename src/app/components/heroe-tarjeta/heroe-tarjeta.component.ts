import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() public heroe:Heroe;

  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * verHeroe
   */
  public verHeroe() {
      this._router.navigate( ['/heroe' , this.heroe.nombre] )
  }

}
