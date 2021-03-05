import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib37childlib9parentComponent } from './lib37childlib9parent.component';

describe('Lib37childlib9parentComponent', () => {
  let component: Lib37childlib9parentComponent;
  let fixture: ComponentFixture<Lib37childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib37childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib37childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
