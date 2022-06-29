import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  selectedHero: Hero;

  /* Inject the HeroService
     Add a private heroService parameter of type HeroService to the constructor.*/
  constructor(private heroService: HeroService) {}
  

  /* onSelelct -> method that Angular calls from hero object displayed in the clicked <li> */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }   


  /* Original getHeroes() - synchronous signature, which implies that the HeroService can fetch heroes synchronously. 
    The HeroesComponent consumes the getHeroes() result as if heroes could be fetched synchronously.
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  */

  /* Observable getHeroes() - for asynchronous calls 
   * Function to retrieve the heroes from the service.*/
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  

  /* The ngOnInit is a lifecycle hook. Angular calls ngOnInit shortly after creating a component. 
     It's a good place to put initialization logic.*/
  ngOnInit() {
    this.getHeroes();
  }

}
