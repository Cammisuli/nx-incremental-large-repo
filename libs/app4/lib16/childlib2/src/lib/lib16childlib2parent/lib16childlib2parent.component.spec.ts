import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16childlib2parentComponent } from './lib16childlib2parent.component';

describe('Lib16childlib2parentComponent', () => {
  let component: Lib16childlib2parentComponent;
  let fixture: ComponentFixture<Lib16childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib16childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
