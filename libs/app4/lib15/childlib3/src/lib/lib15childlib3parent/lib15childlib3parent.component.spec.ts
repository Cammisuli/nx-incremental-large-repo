import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15childlib3parentComponent } from './lib15childlib3parent.component';

describe('Lib15childlib3parentComponent', () => {
  let component: Lib15childlib3parentComponent;
  let fixture: ComponentFixture<Lib15childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib15childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
