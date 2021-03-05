import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23childlib3parentComponent } from './lib23childlib3parent.component';

describe('Lib23childlib3parentComponent', () => {
  let component: Lib23childlib3parentComponent;
  let fixture: ComponentFixture<Lib23childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib23childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
