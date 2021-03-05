import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22childlib3parentComponent } from './lib22childlib3parent.component';

describe('Lib22childlib3parentComponent', () => {
  let component: Lib22childlib3parentComponent;
  let fixture: ComponentFixture<Lib22childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib22childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
