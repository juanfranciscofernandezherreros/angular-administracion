import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTranslateComponent } from './article-translate.component';

describe('ArticleTranslateComponent', () => {
  let component: ArticleTranslateComponent;
  let fixture: ComponentFixture<ArticleTranslateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleTranslateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
