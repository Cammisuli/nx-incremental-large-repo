import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib30childlib8parentComponent } from './lib30childlib8parent.component';

describe('Lib30childlib8parentComponent', () => {
  let component: Lib30childlib8parentComponent;
  let fixture: ComponentFixture<Lib30childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib30childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib30childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
