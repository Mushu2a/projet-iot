import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TestComponent} from "./test.component";
import { AccueilComponent } from './accueil.component';
import { InscriptionComponent } from './inscription.component';


const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil',  component: AccueilComponent },
  { path: 'inscription', component: InscriptionComponent},
  { path: 'test', component: TestComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
