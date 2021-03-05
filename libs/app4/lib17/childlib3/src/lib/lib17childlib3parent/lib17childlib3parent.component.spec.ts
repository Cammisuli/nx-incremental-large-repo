import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17childlib3parentComponent } from './lib17childlib3parent.component';

describe('Lib17childlib3parentComponent', () => {
  let component: Lib17childlib3parentComponent;
  let fixture: ComponentFixture<Lib17childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib17childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
