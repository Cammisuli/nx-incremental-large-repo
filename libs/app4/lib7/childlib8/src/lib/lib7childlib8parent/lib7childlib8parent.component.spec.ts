import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib8parentComponent } from './lib7childlib8parent.component';

describe('Lib7childlib8parentComponent', () => {
  let component: Lib7childlib8parentComponent;
  let fixture: ComponentFixture<Lib7childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib7childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
