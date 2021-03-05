import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib36childlib9parentComponent } from './lib36childlib9parent.component';

describe('Lib36childlib9parentComponent', () => {
  let component: Lib36childlib9parentComponent;
  let fixture: ComponentFixture<Lib36childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib36childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib36childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
