import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PFTCSubcutaneoComponent } from './p-f-t-c-subcutaneo.component';

describe('PFTCSubcutaneoComponent', () => {
  let component: PFTCSubcutaneoComponent;
  let fixture: ComponentFixture<PFTCSubcutaneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PFTCSubcutaneoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PFTCSubcutaneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
