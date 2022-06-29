import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.scss']
})
export class Example3Component {

  parentItem: string = "itemX";

  items: string[] = ["item1", "item2", "item3"];

  constructor() { }

  addItem(newItem: string) {
    this.items.push(newItem);
  }

}
