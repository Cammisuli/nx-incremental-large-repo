import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15childlib8parentComponent } from './lib15childlib8parent.component';

describe('Lib15childlib8parentComponent', () => {
  let component: Lib15childlib8parentComponent;
  let fixture: ComponentFixture<Lib15childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib15childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
