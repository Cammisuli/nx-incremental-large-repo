import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24childlib8parentComponent } from './lib24childlib8parent.component';

describe('Lib24childlib8parentComponent', () => {
  let component: Lib24childlib8parentComponent;
  let fixture: ComponentFixture<Lib24childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib24childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
