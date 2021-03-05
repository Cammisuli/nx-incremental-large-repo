import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28childlib2parentComponent } from './lib28childlib2parent.component';

describe('Lib28childlib2parentComponent', () => {
  let component: Lib28childlib2parentComponent;
  let fixture: ComponentFixture<Lib28childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib28childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
