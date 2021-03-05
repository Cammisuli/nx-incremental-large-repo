import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29childlib4parentComponent } from './lib29childlib4parent.component';

describe('Lib29childlib4parentComponent', () => {
  let component: Lib29childlib4parentComponent;
  let fixture: ComponentFixture<Lib29childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib29childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
