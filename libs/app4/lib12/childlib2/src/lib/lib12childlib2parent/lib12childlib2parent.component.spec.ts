import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12childlib2parentComponent } from './lib12childlib2parent.component';

describe('Lib12childlib2parentComponent', () => {
  let component: Lib12childlib2parentComponent;
  let fixture: ComponentFixture<Lib12childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib12childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
