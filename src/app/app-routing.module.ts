import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'demo', component: DemoComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
