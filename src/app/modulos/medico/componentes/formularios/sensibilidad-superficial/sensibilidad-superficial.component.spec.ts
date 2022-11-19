import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensibilidadSuperficialComponent } from './sensibilidad-superficial.component';

describe('SensibilidadSuperficialComponent', () => {
  let component: SensibilidadSuperficialComponent;
  let fixture: ComponentFixture<SensibilidadSuperficialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensibilidadSuperficialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensibilidadSuperficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
