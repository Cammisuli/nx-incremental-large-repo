import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib37childlib8parentComponent } from './lib37childlib8parent.component';

describe('Lib37childlib8parentComponent', () => {
  let component: Lib37childlib8parentComponent;
  let fixture: ComponentFixture<Lib37childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib37childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib37childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
