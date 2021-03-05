import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29childlib9parentComponent } from './lib29childlib9parent.component';

describe('Lib29childlib9parentComponent', () => {
  let component: Lib29childlib9parentComponent;
  let fixture: ComponentFixture<Lib29childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib29childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
