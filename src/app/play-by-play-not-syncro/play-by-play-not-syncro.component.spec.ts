import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayByPlayNotSyncroComponent } from './play-by-play-not-syncro.component';

describe('PlayByPlayNotSyncroComponent', () => {
  let component: PlayByPlayNotSyncroComponent;
  let fixture: ComponentFixture<PlayByPlayNotSyncroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayByPlayNotSyncroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayByPlayNotSyncroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
