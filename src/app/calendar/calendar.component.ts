import { Component, OnInit } from '@angular/core';
import { Matches } from '../calendar/matches';
import { MatchesService } from '../calendar/matches.service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  matches:Matches[];

  constructor(private matchesService:MatchesService) { }

  ngOnInit() {

    this.matchesService.getMatches()
                        .subscribe(
                        data => {
                            this.matches = data;
                          },
                      )
  }

}
