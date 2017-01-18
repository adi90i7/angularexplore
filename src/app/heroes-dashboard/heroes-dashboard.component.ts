import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroServiceService} from '../hero-service.service'

@Component({
  moduleId: module.id,
  selector: 'app-heroes-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./heroes-dashboard.component.css']
})
export class HeroesDashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroServiceService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes().then(hereos => this.heroes = hereos.slice(1, 5))
  }
}
