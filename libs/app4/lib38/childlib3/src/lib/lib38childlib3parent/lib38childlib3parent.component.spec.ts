import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib38childlib3parentComponent } from './lib38childlib3parent.component';

describe('Lib38childlib3parentComponent', () => {
  let component: Lib38childlib3parentComponent;
  let fixture: ComponentFixture<Lib38childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib38childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib38childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
