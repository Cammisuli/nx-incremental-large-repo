import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25childlib3parentComponent } from './lib25childlib3parent.component';

describe('Lib25childlib3parentComponent', () => {
  let component: Lib25childlib3parentComponent;
  let fixture: ComponentFixture<Lib25childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib25childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
