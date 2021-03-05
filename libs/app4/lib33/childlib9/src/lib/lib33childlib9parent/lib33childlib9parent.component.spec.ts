import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib33childlib9parentComponent } from './lib33childlib9parent.component';

describe('Lib33childlib9parentComponent', () => {
  let component: Lib33childlib9parentComponent;
  let fixture: ComponentFixture<Lib33childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib33childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib33childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
