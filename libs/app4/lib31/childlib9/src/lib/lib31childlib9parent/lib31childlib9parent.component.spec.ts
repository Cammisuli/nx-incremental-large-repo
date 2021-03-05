import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib31childlib9parentComponent } from './lib31childlib9parent.component';

describe('Lib31childlib9parentComponent', () => {
  let component: Lib31childlib9parentComponent;
  let fixture: ComponentFixture<Lib31childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib31childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib31childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
