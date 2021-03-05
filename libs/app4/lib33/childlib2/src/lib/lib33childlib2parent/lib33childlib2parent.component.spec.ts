import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib33childlib2parentComponent } from './lib33childlib2parent.component';

describe('Lib33childlib2parentComponent', () => {
  let component: Lib33childlib2parentComponent;
  let fixture: ComponentFixture<Lib33childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib33childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib33childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
