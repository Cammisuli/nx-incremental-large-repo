import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13childlib9parentComponent } from './lib13childlib9parent.component';

describe('Lib13childlib9parentComponent', () => {
  let component: Lib13childlib9parentComponent;
  let fixture: ComponentFixture<Lib13childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib13childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
