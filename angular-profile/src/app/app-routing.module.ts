import { TicTacToeExampleComponent } from './components/tic-tac-toe-example/tic-tac-toe-example.component';
import { ReactiveFormExampleComponent } from './components/reactive-form-example/reactive-form-example.component';
import { SimpleFormExampleComponent } from './components/simple-form-example/simple-form-example.component';
import { HomeComponent } from './components/home/home.component';
import { Example1Component } from './components/example1/example1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Example2Component } from './components/example2/example2.component';
import { Example3Component } from './components/example3/example3.component';
import { Example4Component } from './components/example4/example4.component';
import { Example5Component } from './components/example5/example5.component';

const routes: Routes = [
  { path:'home', component: HomeComponent},
  // Create a custom Directive and use of @HostBinding and @HostListener
  { path:'example1', component: Example1Component},
  // Directive and @ViewChild
  { path:'example2', component: Example2Component},
  // @Output directive
  { path:'example3', component: Example3Component},
  // Passing static data throught the Route
  { path:'example4', component: Example4Component, data: {id:1, name:'Alan Altamirano'}},
  // Passing dynamic data throught the Route
  { path:'example5', component: Example5Component},
  { path:'simple-form', component: SimpleFormExampleComponent},
  { path:'reactive-form', component: ReactiveFormExampleComponent},
  { path:'tic-tac-toe', component: TicTacToeExampleComponent},
  { path:'', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
