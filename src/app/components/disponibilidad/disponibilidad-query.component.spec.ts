import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibilidadQueryComponent } from './disponibilidad-query.component';

describe('DisponibilidadComponent', () => {
  let component: DisponibilidadQueryComponent;
  let fixture: ComponentFixture<DisponibilidadQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisponibilidadQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisponibilidadQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
