import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbdominalComponent } from './abdominal.component';

describe('AbdominalComponent', () => {
  let component: AbdominalComponent;
  let fixture: ComponentFixture<AbdominalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbdominalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbdominalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
