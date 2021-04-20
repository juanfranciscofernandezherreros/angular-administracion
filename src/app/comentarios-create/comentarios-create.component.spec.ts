import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosCreateComponent } from './comentarios-create.component';

describe('ComentariosCreateComponent', () => {
  let component: ComentariosCreateComponent;
  let fixture: ComponentFixture<ComentariosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariosCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
