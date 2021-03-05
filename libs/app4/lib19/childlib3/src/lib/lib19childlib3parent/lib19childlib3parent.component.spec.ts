import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19childlib3parentComponent } from './lib19childlib3parent.component';

describe('Lib19childlib3parentComponent', () => {
  let component: Lib19childlib3parentComponent;
  let fixture: ComponentFixture<Lib19childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib19childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
