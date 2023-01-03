import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrlV3: string = 'https://restcountries.com/v3.1';
;


  constructor(private http: HttpClient) { }

  buscarPais (termino: string): Observable<Country[]> {
    const url = `${this.apiUrlV3}/name/${termino}`;
    return this.http.get<Country[]>( url );
    //.pipe( catchError(err => of([]) ) );
  }

  buscarPorCapital( termino: string ): Observable<Country[]>{
    const url = `${this.apiUrlV3}/capital/${termino}`
    return this.http.get<Country[]>( url );
  }

  buscarPorRegion( termino: string ): Observable<Country[]>{
    const url = `${this.apiUrlV3}/region/${termino}`
    return this.http.get<Country[]>( url );
  }

  buscarPorCodigo( id: string ): Observable<Country[]>{
    const url = `${this.apiUrlV3}/alpha/${id}`
    return this.http.get<Country[]>( url );
  }


}
 