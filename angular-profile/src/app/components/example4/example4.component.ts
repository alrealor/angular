import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-example4',
  templateUrl: './example4.component.html',
  styleUrls: ['./example4.component.scss']
})
export class Example4Component implements OnInit {

  id: number;
  name: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.id = 0;
    this.name = '';
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(result => {
      this.id = result['id'];
      this.name = result['name'];
    });
  }

}
