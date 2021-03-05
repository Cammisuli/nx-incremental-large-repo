import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib9parentComponent } from './lib8childlib9parent.component';

describe('Lib8childlib9parentComponent', () => {
  let component: Lib8childlib9parentComponent;
  let fixture: ComponentFixture<Lib8childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib8childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
