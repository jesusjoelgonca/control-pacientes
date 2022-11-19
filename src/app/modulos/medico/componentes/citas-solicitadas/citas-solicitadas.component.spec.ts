import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasSolicitadasComponent } from './citas-solicitadas.component';

describe('CitasSolicitadasComponent', () => {
  let component: CitasSolicitadasComponent;
  let fixture: ComponentFixture<CitasSolicitadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitasSolicitadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitasSolicitadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
