import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib32childlib8parentComponent } from './lib32childlib8parent.component';

describe('Lib32childlib8parentComponent', () => {
  let component: Lib32childlib8parentComponent;
  let fixture: ComponentFixture<Lib32childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib32childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib32childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
