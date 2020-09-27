import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XavierComponent} from './xavier/xavier.component';
import { CarolinaComponent} from './carolina/carolina.component';
import { SofiaComponent} from './sofia/sofia.component';
import { HomeComponent} from './home/home.component';

const routes: Routes = [
      {path:"",pathMatch:"full", redirectTo:"/home"},
      {path:"home",component: HomeComponent},
      {path:"xavier",component: XavierComponent},
      {path:"carolina",component: CarolinaComponent},
      {path:"sofia",component: SofiaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
