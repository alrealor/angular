import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.scss']
})
export class ItemOutputComponent {

  @Input()
  childInput: string = '';

  @Output()
  childOutputEvent = new EventEmitter<string>();

  constructor() {}

  addNewItem(value: string) {
    this.childOutputEvent.emit(this.childInput + ' - ' + value);
  }

}
