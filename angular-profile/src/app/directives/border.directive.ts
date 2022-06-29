import { Directive, HostBinding, HostListener, Input } from '@angular/core';

/**
 * Custom directive using @HostBinding and @HostListener
 */
@Directive({
  selector: '[borderDirective]'
})
export class BorderDirective {

  @Input() bStyle: string = 'solid';
  @Input() bRadius: string = '0';

  // host binding where "host" = component where the directive is being applied\

  // style host binding
  @HostBinding('style.color') textColor = 'black';
  @HostBinding('style.background-color') bgColor = 'white';
  @HostBinding('style.border-style')
  get borderStyle() {
    return this.bStyle;
  }
  @HostBinding('style.border-radius')
  get borderRadius() {
    return `${this.bRadius}px`;
  }

  // class host binding
  @HostBinding('class.componentClass1')
  get getCompClass1() {
    return true;
  }

  // Host Listeners for events
  @HostListener('mouseover')
  onMouseOver(){
    this.textColor = 'white';
    this.bgColor = 'green';
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.resetStyles();
  }

  @HostListener('click')
  onClick(){
    this.bgColor = 'red';
  }

  resetStyles() {
    this.textColor = 'black';
    this.bgColor = 'white';
  }

  constructor() { }

}
