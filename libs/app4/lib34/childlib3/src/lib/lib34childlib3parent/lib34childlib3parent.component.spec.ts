import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib34childlib3parentComponent } from './lib34childlib3parent.component';

describe('Lib34childlib3parentComponent', () => {
  let component: Lib34childlib3parentComponent;
  let fixture: ComponentFixture<Lib34childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib34childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib34childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
