
import { SharkDirective } from './../../directives/shark.directive';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ex2Sub1Component } from './ex2-sub1/ex2-sub1.component';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss']
})
export class Example2Component implements AfterViewInit {

  extraCreature!: string;

  // Using @ViewChild for directive
  @ViewChild(SharkDirective)
    set appShark(directive: SharkDirective){
      this.extraCreature = directive.creature;
  }


  // Using @ViewChild for DOM elements
  @ViewChild('pRef1')
  pRef1!: ElementRef;

  @ViewChild('inputRef')
  inputRef!: ElementRef;

  @ViewChild('pRef2')
  pRef2!: ElementRef;


  // Using @ViewChild for Child Components
  @ViewChild(Ex2Sub1Component) childComponent!: Ex2Sub1Component;


  ngAfterViewInit(): void {
    // print in DOM the text gotten from directive attribute
    this.pRef1.nativeElement.innerHTML = this.extraCreature;

    // print in DOM the text assigned in Component
    this.inputRef.nativeElement.value = 'Turttle';

    // print in DOM the result of a Child Component method
    this.pRef2.nativeElement.innerHTML = this.childComponent.whatCreatureIam();
  }

}
