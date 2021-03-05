import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27childlib3parentComponent } from './lib27childlib3parent.component';

describe('Lib27childlib3parentComponent', () => {
  let component: Lib27childlib3parentComponent;
  let fixture: ComponentFixture<Lib27childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib27childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
