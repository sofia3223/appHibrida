import { Routes } from '@angular/router';

import { CompInicioComponent } from './componentes/comp-inicio/comp-inicio.component';
import { CompMenuComponent } from './componentes/comp-menu/comp-menu.component';
import { CompContacComponent } from './componentes/comp-contac/comp-contac.component';
import { CompNosotrosComponent } from './componentes/comp-nosotros/comp-nosotros.component';
import { CompPreciosComponent } from './componentes/comp-precios/comp-precios.component';
import { CompServiciosComponent } from './componentes/comp-servicios/comp-servicios.component';
import { CompInformacionComponent } from './componentes/comp-informacion/comp-informacion.component';

export const routes: Routes = [
{path: '', redirectTo: "/inicio", pathMatch : "full"},
{path:'inicio',component:CompInicioComponent},
{path:'menu',component:CompMenuComponent},
{path:'contacto',component:CompContacComponent},
{path:'nosotros',component:CompNosotrosComponent},
{path:'precios',component:CompPreciosComponent},
{path:'servicios',component:CompServiciosComponent},
{path:'informacion',component:CompInformacionComponent}
];
