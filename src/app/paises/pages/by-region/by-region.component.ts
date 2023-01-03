import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  buscar( termino: string ){
    this.termino = termino;
   
    this.paisServie.buscarPorRegion( this.termino )
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
