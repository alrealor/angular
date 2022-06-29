import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/* The @Injectable() decorator: This marks the class as one that participates in the dependency injection system */
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes'; // URL to web api

  /* This is a typical "service-in-service" scenario: 
   * you inject the MessageService into the HeroService which is injected into the HeroesComponent. 
   */
  constructor(private messageService: MessageService,
              private http: HttpClient) { }

  // GET heroes from the server              
  getHeroes(): Observable<Hero[]> {    
    // this.messageService.add("HeroService: fetched heroes"); // send a message when the heroes are fetched.
    // return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`); // Note the backticks (`) that define a JavaScript template literal for embedding the id.
    return of(HEROES.find(hero => hero.id === id));
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}