import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
    }
  `]
})
export class ByRegionComponent {

  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  activarRegion( region: string){
    if( region !== this.regionActiva){
      this.regionActiva = region;
      this.buscar( region );
    }
 
  }

  getClaseCSS( region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary' ;
  }

   buscar( region: string ){
   
   
    this.paisServie.buscarPorRegion( region )
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

  constructor(private paisServie: PaisService ){}
}
