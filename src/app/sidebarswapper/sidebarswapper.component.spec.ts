import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidebarswapperComponent } from './sidebarswapper.component';

describe('SidebarswapperComponent', () => {
  let component: SidebarswapperComponent;
  let fixture: ComponentFixture<SidebarswapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarswapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarswapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
