import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29childlib2parentComponent } from './lib29childlib2parent.component';

describe('Lib29childlib2parentComponent', () => {
  let component: Lib29childlib2parentComponent;
  let fixture: ComponentFixture<Lib29childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib29childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
