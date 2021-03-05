import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11childlib9parentComponent } from './lib11childlib9parent.component';

describe('Lib11childlib9parentComponent', () => {
  let component: Lib11childlib9parentComponent;
  let fixture: ComponentFixture<Lib11childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib11childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
