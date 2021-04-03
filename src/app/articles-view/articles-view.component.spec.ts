import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArticlesViewComponent } from './articles-view.component';

describe('ArticlesViewComponent', () => {
  let component: ArticlesViewComponent;
  let fixture: ComponentFixture<ArticlesViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
