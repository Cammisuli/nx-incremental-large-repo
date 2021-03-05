import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14childlib9parentComponent } from './lib14childlib9parent.component';

describe('Lib14childlib9parentComponent', () => {
  let component: Lib14childlib9parentComponent;
  let fixture: ComponentFixture<Lib14childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib14childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
