import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitosFisiologicosComponent } from './habitos-fisiologicos.component';

describe('HabitosFisiologicosComponent', () => {
  let component: HabitosFisiologicosComponent;
  let fixture: ComponentFixture<HabitosFisiologicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitosFisiologicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitosFisiologicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
