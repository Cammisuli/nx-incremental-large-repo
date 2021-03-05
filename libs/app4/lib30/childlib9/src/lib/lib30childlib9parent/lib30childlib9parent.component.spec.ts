import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib30childlib9parentComponent } from './lib30childlib9parent.component';

describe('Lib30childlib9parentComponent', () => {
  let component: Lib30childlib9parentComponent;
  let fixture: ComponentFixture<Lib30childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib30childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib30childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
