import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },  
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }        
];

/*
 * exports: [ RouterModule ]
          Exporting RouterModule makes router directives available for use in 
          the AppModule components that will need them.
 * imports: [ RouterModule.forRoot(routes) ] 
          The method is called forRoot() because you configure router at the application's root level. 
          The forRoot() method supplies the service providers and directives needed for routing, 
          and performs the initial navigation based on the current browser URL.
 */
@NgModule({  
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ]   
})
export class AppRoutingModule {}
