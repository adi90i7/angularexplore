import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroServiceService} from './hero-service.service';

@Component({
  selector: 'hero-component',
  templateUrl: 'hero.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroServiceService]
})

export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroServiceService) {
  };

  title = 'app works!';
  heroes: Hero[];
  hero: Hero;

  getHeros() : void{
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
}
  ngOnInit(): void {
    this.getHeros();
  };

  heroSelected(hero: Hero): void {
    this.hero = hero;
    console.log('Here Object selected' + hero.name)
  }
}
