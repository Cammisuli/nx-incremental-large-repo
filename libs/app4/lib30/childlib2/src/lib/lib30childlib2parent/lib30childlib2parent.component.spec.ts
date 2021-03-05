import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib30childlib2parentComponent } from './lib30childlib2parent.component';

describe('Lib30childlib2parentComponent', () => {
  let component: Lib30childlib2parentComponent;
  let fixture: ComponentFixture<Lib30childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib30childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib30childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
