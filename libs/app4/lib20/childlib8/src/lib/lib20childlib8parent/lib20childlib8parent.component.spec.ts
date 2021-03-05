import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20childlib8parentComponent } from './lib20childlib8parent.component';

describe('Lib20childlib8parentComponent', () => {
  let component: Lib20childlib8parentComponent;
  let fixture: ComponentFixture<Lib20childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib20childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
