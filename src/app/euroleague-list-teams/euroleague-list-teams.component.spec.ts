import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuroleagueListTeamsComponent } from './euroleague-list-teams.component';

describe('EuroleagueListTeamsComponent', () => {
  let component: EuroleagueListTeamsComponent;
  let fixture: ComponentFixture<EuroleagueListTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuroleagueListTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuroleagueListTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
