import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BorderDirective } from './directives/border.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { Example1Component } from './components/example1/example1.component';
import { SharkDirective } from './directives/shark.directive';
import { Example2Component } from './components/example2/example2.component';
import { Ex2Sub1Component } from './components/example2/ex2-sub1/ex2-sub1.component';
import { Example3Component } from './components/example3/example3.component';
import { ItemOutputComponent } from './components/example3/item-output/item-output.component';
import { Example4Component } from './components/example4/example4.component';
import { Example5Component } from './components/example5/example5.component';
import { SimpleFormExampleComponent } from './components/simple-form-example/simple-form-example.component';
import { ReactiveFormExampleComponent } from './components/reactive-form-example/reactive-form-example.component';
import { TicTacToeExampleComponent } from './components/tic-tac-toe-example/tic-tac-toe-example.component';

@NgModule({
  declarations: [
    AppComponent,
    BorderDirective,
    SharkDirective,
    NavbarComponent,
    HomeComponent,
    Example1Component,
    Example2Component,
    Ex2Sub1Component,
    Example3Component,
    ItemOutputComponent,
    Example4Component,
    Example5Component,
    SimpleFormExampleComponent,
    ReactiveFormExampleComponent,
    TicTacToeExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
