import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib8parentComponent } from './lib5childlib8parent.component';

describe('Lib5childlib8parentComponent', () => {
  let component: Lib5childlib8parentComponent;
  let fixture: ComponentFixture<Lib5childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib5childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
