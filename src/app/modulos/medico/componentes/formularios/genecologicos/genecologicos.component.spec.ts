import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenecologicosComponent } from './genecologicos.component';

describe('GenecologicosComponent', () => {
  let component: GenecologicosComponent;
  let fixture: ComponentFixture<GenecologicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenecologicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenecologicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
