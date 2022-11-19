import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntecendetesPersonalesComponent } from './antecendetes-personales.component';

describe('AntecendetesPersonalesComponent', () => {
  let component: AntecendetesPersonalesComponent;
  let fixture: ComponentFixture<AntecendetesPersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntecendetesPersonalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntecendetesPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
