import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2-sub1',
  templateUrl: './ex2-sub1.component.html',
  styleUrls: ['./ex2-sub1.component.scss']
})
export class Ex2Sub1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  whatCreatureIam(): string {
    return 'I am a child sea creature';
  }

}
