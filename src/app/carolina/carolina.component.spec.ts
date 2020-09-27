import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarolinaComponent } from './carolina.component';

describe('CarolinaComponent', () => {
  let component: CarolinaComponent;
  let fixture: ComponentFixture<CarolinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarolinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarolinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
