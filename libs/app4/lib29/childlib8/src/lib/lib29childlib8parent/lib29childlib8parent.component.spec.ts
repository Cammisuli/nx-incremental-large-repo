import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29childlib8parentComponent } from './lib29childlib8parent.component';

describe('Lib29childlib8parentComponent', () => {
  let component: Lib29childlib8parentComponent;
  let fixture: ComponentFixture<Lib29childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib29childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
