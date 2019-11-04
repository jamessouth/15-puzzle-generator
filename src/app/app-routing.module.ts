import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { ArtworkComponent } from './artwork/artwork.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
    { path: 'demo', component: DemoComponent, data: { animation: 'DemoPage' } },
    { path: 'artwork', component: ArtworkComponent, data: { animation: 'ArtworkPage' } },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

// audit
// const routes: Routes = [
//     { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
//     { path: 'demo', component: DemoComponent, data: { animation: 'DemoPage' } },
//     { path: 'artwork', component: ArtworkComponent, data: { animation: 'ArtworkPage' } },
//     { path: '**', redirectTo: '', pathMatch: 'full' }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
