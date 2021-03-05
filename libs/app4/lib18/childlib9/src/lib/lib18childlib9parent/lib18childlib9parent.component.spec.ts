import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18childlib9parentComponent } from './lib18childlib9parent.component';

describe('Lib18childlib9parentComponent', () => {
  let component: Lib18childlib9parentComponent;
  let fixture: ComponentFixture<Lib18childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib18childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
