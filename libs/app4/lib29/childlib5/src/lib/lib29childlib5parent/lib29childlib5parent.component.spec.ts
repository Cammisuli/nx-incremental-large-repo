import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29childlib5parentComponent } from './lib29childlib5parent.component';

describe('Lib29childlib5parentComponent', () => {
  let component: Lib29childlib5parentComponent;
  let fixture: ComponentFixture<Lib29childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib29childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
