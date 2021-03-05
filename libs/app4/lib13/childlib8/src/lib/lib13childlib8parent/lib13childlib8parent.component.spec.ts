import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13childlib8parentComponent } from './lib13childlib8parent.component';

describe('Lib13childlib8parentComponent', () => {
  let component: Lib13childlib8parentComponent;
  let fixture: ComponentFixture<Lib13childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib13childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
