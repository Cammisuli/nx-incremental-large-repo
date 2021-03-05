import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10childlib2parentComponent } from './lib10childlib2parent.component';

describe('Lib10childlib2parentComponent', () => {
  let component: Lib10childlib2parentComponent;
  let fixture: ComponentFixture<Lib10childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib10childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
