import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-example5',
  templateUrl: './example5.component.html',
  styleUrls: ['./example5.component.scss']
})
export class Example5Component implements OnInit {

  dynamicData: any = {id: 0, name:''};

  constructor(private location: Location) { }

  ngOnInit(): void {
    console.log(this.location.getState());
    this.dynamicData = this.location.getState();
  }


}
