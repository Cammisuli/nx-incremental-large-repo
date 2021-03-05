import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16childlib9parentComponent } from './lib16childlib9parent.component';

describe('Lib16childlib9parentComponent', () => {
  let component: Lib16childlib9parentComponent;
  let fixture: ComponentFixture<Lib16childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib16childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
