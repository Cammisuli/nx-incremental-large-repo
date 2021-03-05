import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24childlib9parentComponent } from './lib24childlib9parent.component';

describe('Lib24childlib9parentComponent', () => {
  let component: Lib24childlib9parentComponent;
  let fixture: ComponentFixture<Lib24childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib24childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
