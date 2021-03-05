import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10childlib8parentComponent } from './lib10childlib8parent.component';

describe('Lib10childlib8parentComponent', () => {
  let component: Lib10childlib8parentComponent;
  let fixture: ComponentFixture<Lib10childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib10childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
