import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisponibilidadEditComponent } from './disponibilidad-edit.component';

describe('DisponibilidadEditComponent', () => {
  let component: DisponibilidadEditComponent;
  let fixture: ComponentFixture<DisponibilidadEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisponibilidadEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisponibilidadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
