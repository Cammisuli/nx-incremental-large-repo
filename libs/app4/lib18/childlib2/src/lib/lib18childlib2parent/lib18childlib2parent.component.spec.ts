import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18childlib2parentComponent } from './lib18childlib2parent.component';

describe('Lib18childlib2parentComponent', () => {
  let component: Lib18childlib2parentComponent;
  let fixture: ComponentFixture<Lib18childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib18childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
