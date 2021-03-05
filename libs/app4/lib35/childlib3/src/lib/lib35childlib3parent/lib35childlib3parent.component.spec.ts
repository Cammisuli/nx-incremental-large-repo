import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib35childlib3parentComponent } from './lib35childlib3parent.component';

describe('Lib35childlib3parentComponent', () => {
  let component: Lib35childlib3parentComponent;
  let fixture: ComponentFixture<Lib35childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib35childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib35childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
