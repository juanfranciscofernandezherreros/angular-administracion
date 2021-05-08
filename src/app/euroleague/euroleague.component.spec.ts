import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuroleagueComponent } from './euroleague.component';

describe('EuroleagueComponent', () => {
  let component: EuroleagueComponent;
  let fixture: ComponentFixture<EuroleagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuroleagueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuroleagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
