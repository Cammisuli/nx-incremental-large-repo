import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23childlib8parentComponent } from './lib23childlib8parent.component';

describe('Lib23childlib8parentComponent', () => {
  let component: Lib23childlib8parentComponent;
  let fixture: ComponentFixture<Lib23childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib23childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
