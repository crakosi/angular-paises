import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-by-pais',
  templateUrl: './by-pais.component.html',
  styles:[
    `
      li{
        cursor: pointer
      }
    `
  ]
})
export class ByPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugueridos: Country[] = [];

  buscar( termino: string ){
    this.termino = termino;
   
    this.paisServie.buscarPais( this.termino )
    .subscribe({
      next: (paises) => {
        this.paises = paises;
        
         this.hayError = false;
        },
      error: (err) => {
         this.hayError = true;
         this.paises = [];
        }
    } );
    
  }

  sugerencias( termino: string){
    this.hayError = false;
    if(termino){
      this.paisServie.buscarPais( termino )
      .subscribe( {
        next: (paises) =>{
          this.paisesSugueridos = paises.splice(0,5);
        },
        error: (err) => {
          this.paisesSugueridos = [];
        }
      })
    } else {
      this.paisesSugueridos = [];
    }
   
  }

  constructor(private paisServie: PaisService ){}
}
