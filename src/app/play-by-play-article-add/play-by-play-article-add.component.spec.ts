import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayByPlayArticleAddComponent } from './play-by-play-article-add.component';

describe('PlayByPlayArticleAddComponent', () => {
  let component: PlayByPlayArticleAddComponent;
  let fixture: ComponentFixture<PlayByPlayArticleAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayByPlayArticleAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayByPlayArticleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
