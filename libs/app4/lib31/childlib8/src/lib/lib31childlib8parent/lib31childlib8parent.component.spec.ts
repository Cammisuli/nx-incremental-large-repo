import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib31childlib8parentComponent } from './lib31childlib8parent.component';

describe('Lib31childlib8parentComponent', () => {
  let component: Lib31childlib8parentComponent;
  let fixture: ComponentFixture<Lib31childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib31childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib31childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
