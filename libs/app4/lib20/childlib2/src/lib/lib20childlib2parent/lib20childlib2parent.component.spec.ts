import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20childlib2parentComponent } from './lib20childlib2parent.component';

describe('Lib20childlib2parentComponent', () => {
  let component: Lib20childlib2parentComponent;
  let fixture: ComponentFixture<Lib20childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib20childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
