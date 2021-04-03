import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComentariosComponent } from './comentarios.component';

describe('ComentariosComponent', () => {
  let component: ComentariosComponent;
  let fixture: ComponentFixture<ComentariosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
