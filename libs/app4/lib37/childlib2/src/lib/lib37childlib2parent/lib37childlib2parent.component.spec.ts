import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib37childlib2parentComponent } from './lib37childlib2parent.component';

describe('Lib37childlib2parentComponent', () => {
  let component: Lib37childlib2parentComponent;
  let fixture: ComponentFixture<Lib37childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib37childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib37childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
