import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14childlib8parentComponent } from './lib14childlib8parent.component';

describe('Lib14childlib8parentComponent', () => {
  let component: Lib14childlib8parentComponent;
  let fixture: ComponentFixture<Lib14childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib14childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
