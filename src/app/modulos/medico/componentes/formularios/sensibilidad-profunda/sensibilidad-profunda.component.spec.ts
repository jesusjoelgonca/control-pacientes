import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensibilidadProfundaComponent } from './sensibilidad-profunda.component';

describe('SensibilidadProfundaComponent', () => {
  let component: SensibilidadProfundaComponent;
  let fixture: ComponentFixture<SensibilidadProfundaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensibilidadProfundaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensibilidadProfundaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
