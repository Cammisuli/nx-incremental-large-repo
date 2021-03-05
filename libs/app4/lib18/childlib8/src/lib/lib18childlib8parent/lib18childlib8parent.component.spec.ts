import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18childlib8parentComponent } from './lib18childlib8parent.component';

describe('Lib18childlib8parentComponent', () => {
  let component: Lib18childlib8parentComponent;
  let fixture: ComponentFixture<Lib18childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib18childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
