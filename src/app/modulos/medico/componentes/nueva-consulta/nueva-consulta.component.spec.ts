import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaConsultaComponent } from './nueva-consulta.component';

describe('NuevaConsultaComponent', () => {
  let component: NuevaConsultaComponent;
  let fixture: ComponentFixture<NuevaConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaConsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
