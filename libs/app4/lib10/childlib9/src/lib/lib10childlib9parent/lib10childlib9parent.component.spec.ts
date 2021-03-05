import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10childlib9parentComponent } from './lib10childlib9parent.component';

describe('Lib10childlib9parentComponent', () => {
  let component: Lib10childlib9parentComponent;
  let fixture: ComponentFixture<Lib10childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib10childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
