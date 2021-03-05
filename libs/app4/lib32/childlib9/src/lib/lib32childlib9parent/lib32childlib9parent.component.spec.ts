import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib32childlib9parentComponent } from './lib32childlib9parent.component';

describe('Lib32childlib9parentComponent', () => {
  let component: Lib32childlib9parentComponent;
  let fixture: ComponentFixture<Lib32childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib32childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib32childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
