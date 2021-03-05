import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28childlib9parentComponent } from './lib28childlib9parent.component';

describe('Lib28childlib9parentComponent', () => {
  let component: Lib28childlib9parentComponent;
  let fixture: ComponentFixture<Lib28childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib28childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
