import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28childlib8parentComponent } from './lib28childlib8parent.component';

describe('Lib28childlib8parentComponent', () => {
  let component: Lib28childlib8parentComponent;
  let fixture: ComponentFixture<Lib28childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib28childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
