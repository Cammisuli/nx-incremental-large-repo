import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11childlib8parentComponent } from './lib11childlib8parent.component';

describe('Lib11childlib8parentComponent', () => {
  let component: Lib11childlib8parentComponent;
  let fixture: ComponentFixture<Lib11childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib11childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
