import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarswapperComponent } from './sidebarswapper.component';

describe('SidebarswapperComponent', () => {
  let component: SidebarswapperComponent;
  let fixture: ComponentFixture<SidebarswapperComponent>;

  beforeEach(async(() => {
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
