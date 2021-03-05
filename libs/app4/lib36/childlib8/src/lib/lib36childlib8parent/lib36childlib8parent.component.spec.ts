import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib36childlib8parentComponent } from './lib36childlib8parent.component';

describe('Lib36childlib8parentComponent', () => {
  let component: Lib36childlib8parentComponent;
  let fixture: ComponentFixture<Lib36childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib36childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib36childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
