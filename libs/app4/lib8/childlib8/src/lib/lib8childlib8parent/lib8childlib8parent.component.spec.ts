import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib8parentComponent } from './lib8childlib8parent.component';

describe('Lib8childlib8parentComponent', () => {
  let component: Lib8childlib8parentComponent;
  let fixture: ComponentFixture<Lib8childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib8childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
