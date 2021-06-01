import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTeamComponent } from './data-team.component';

describe('DataTeamComponent', () => {
  let component: DataTeamComponent;
  let fixture: ComponentFixture<DataTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
