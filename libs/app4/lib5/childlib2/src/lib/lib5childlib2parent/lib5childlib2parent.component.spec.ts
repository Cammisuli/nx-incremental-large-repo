import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib2parentComponent } from './lib5childlib2parent.component';

describe('Lib5childlib2parentComponent', () => {
  let component: Lib5childlib2parentComponent;
  let fixture: ComponentFixture<Lib5childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib5childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
