import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayByPlayNotSyncronizedComponent } from './play-by-play-not-syncronized.component';

describe('PlayByPlayNotSyncronizedComponent', () => {
  let component: PlayByPlayNotSyncronizedComponent;
  let fixture: ComponentFixture<PlayByPlayNotSyncronizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayByPlayNotSyncronizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayByPlayNotSyncronizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
