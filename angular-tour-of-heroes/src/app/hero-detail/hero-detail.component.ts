import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  /* The hero property must be an Input property, annotated with the @Input() decorator, 
     because the external HeroesComponent will bind to it.*/
  @Input() hero: Hero;

  constructor(private route: ActivatedRoute, 
              private location: Location,
              private heroService: HeroService) {}

  ngOnInit() {
    this.getHero();
  }
   
  /*
   - route.snapshot: static image of the route information shortly after the component was created. 
   - paramMap: is a dictionary of route parameter values extracted from the URL. 
   - The JavaScript (+) operator: converts the string to a number, 
  */
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  /*
   - goBack(): method to the component class that navigates backward one step in the browsers 
               history stack using the Location service that you injected previously. */
  goBack(): void {
    this.location.back();
  }

}
