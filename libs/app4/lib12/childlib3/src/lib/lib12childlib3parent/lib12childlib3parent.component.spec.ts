import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12childlib3parentComponent } from './lib12childlib3parent.component';

describe('Lib12childlib3parentComponent', () => {
  let component: Lib12childlib3parentComponent;
  let fixture: ComponentFixture<Lib12childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib12childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
