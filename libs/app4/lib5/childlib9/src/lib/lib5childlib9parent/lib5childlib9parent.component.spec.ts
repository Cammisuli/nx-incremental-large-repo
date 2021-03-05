import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib9parentComponent } from './lib5childlib9parent.component';

describe('Lib5childlib9parentComponent', () => {
  let component: Lib5childlib9parentComponent;
  let fixture: ComponentFixture<Lib5childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib5childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
