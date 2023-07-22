import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WeaponsComponent } from './components/weapons/weapons.component';
import { AgentsComponent } from './components/agents/agents.component';
import { MapsComponent } from './components/maps/maps.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'agents',
    component: AgentsComponent 
  },
  {
    path:'weapons',
    component: WeaponsComponent 
  },
  {
    path:'maps',
    component: MapsComponent 
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
