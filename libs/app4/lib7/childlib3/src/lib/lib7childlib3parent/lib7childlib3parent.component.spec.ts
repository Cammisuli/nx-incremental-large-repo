import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib3parentComponent } from './lib7childlib3parent.component';

describe('Lib7childlib3parentComponent', () => {
  let component: Lib7childlib3parentComponent;
  let fixture: ComponentFixture<Lib7childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib7childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
