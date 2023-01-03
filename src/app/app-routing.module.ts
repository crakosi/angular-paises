import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ByPaisComponent } from "./paises/pages/by-pais/by-pais.component";
import { ByRegionComponent } from "./paises/pages/by-region/by-region.component";
import { ByCapitalComponent } from "./paises/pages/by-capital/by-capital.component";
import { VerPaisComponent } from "./paises/pages/ver-pais/ver-pais.component";

const routes: Routes = [
    { 
        path: '',
        component: ByPaisComponent,
        pathMatch: 'full'
     },
     {
        path: 'region',
        component: ByRegionComponent
     },
     {
        path: 'capital',
        component: ByCapitalComponent
     },
     {
        path: 'pais/:id',
        component: VerPaisComponent
     },
     {
        path: '**',
        redirectTo: ''
     }
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}