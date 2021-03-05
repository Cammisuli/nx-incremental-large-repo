import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib37childlib3parentComponent } from './lib37childlib3parent.component';

describe('Lib37childlib3parentComponent', () => {
  let component: Lib37childlib3parentComponent;
  let fixture: ComponentFixture<Lib37childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib37childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib37childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
