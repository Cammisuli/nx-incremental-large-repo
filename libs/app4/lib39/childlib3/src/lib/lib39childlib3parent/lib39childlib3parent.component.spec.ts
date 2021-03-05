import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib39childlib3parentComponent } from './lib39childlib3parent.component';

describe('Lib39childlib3parentComponent', () => {
  let component: Lib39childlib3parentComponent;
  let fixture: ComponentFixture<Lib39childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib39childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib39childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
