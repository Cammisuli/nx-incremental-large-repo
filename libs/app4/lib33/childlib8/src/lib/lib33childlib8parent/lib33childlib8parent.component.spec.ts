import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib33childlib8parentComponent } from './lib33childlib8parent.component';

describe('Lib33childlib8parentComponent', () => {
  let component: Lib33childlib8parentComponent;
  let fixture: ComponentFixture<Lib33childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib33childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib33childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
