import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16childlib8parentComponent } from './lib16childlib8parent.component';

describe('Lib16childlib8parentComponent', () => {
  let component: Lib16childlib8parentComponent;
  let fixture: ComponentFixture<Lib16childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib16childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
