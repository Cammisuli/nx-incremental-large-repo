import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20childlib9parentComponent } from './lib20childlib9parent.component';

describe('Lib20childlib9parentComponent', () => {
  let component: Lib20childlib9parentComponent;
  let fixture: ComponentFixture<Lib20childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib20childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
