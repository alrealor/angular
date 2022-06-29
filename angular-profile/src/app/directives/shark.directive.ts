import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShark]'
})
export class SharkDirective {

  creature: string = 'Dolphin';

  constructor(element: ElementRef, renderer: Renderer2) {
    let shark = renderer.createText('Shark ');
    renderer.appendChild(element.nativeElement, shark);
  }

}
