import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
})
export class ByCapitalComponent {


  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  buscar( termino: string ){
    this.termino = termino;
   
    this.paisServie.buscarPorCapital( this.termino )
    .subscribe({
      next: (paises: Country[]) => {
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
    
  }

  constructor(private paisServie: PaisService ){}
}
