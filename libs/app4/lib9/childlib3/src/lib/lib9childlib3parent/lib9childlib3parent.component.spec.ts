import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib3parentComponent } from './lib9childlib3parent.component';

describe('Lib9childlib3parentComponent', () => {
  let component: Lib9childlib3parentComponent;
  let fixture: ComponentFixture<Lib9childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib9childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
