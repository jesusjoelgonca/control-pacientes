import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeurologicoComponent } from './neurologico.component';

describe('NeurologicoComponent', () => {
  let component: NeurologicoComponent;
  let fixture: ComponentFixture<NeurologicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeurologicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeurologicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
