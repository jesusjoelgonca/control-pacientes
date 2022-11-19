import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitosToxicosComponent } from './habitos-toxicos.component';

describe('HabitosToxicosComponent', () => {
  let component: HabitosToxicosComponent;
  let fixture: ComponentFixture<HabitosToxicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitosToxicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitosToxicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
