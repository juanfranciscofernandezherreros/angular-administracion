import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopbarheaderComponent } from './topbarheader.component';

describe('TopbarheaderComponent', () => {
  let component: TopbarheaderComponent;
  let fixture: ComponentFixture<TopbarheaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
