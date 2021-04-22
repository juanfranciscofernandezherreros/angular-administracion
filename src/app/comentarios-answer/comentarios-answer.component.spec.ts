import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosAnswerComponent } from './comentarios-answer.component';

describe('ComentariosAnswerComponent', () => {
  let component: ComentariosAnswerComponent;
  let fixture: ComponentFixture<ComentariosAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariosAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
