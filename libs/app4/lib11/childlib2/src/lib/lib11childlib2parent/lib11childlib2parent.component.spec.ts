import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11childlib2parentComponent } from './lib11childlib2parent.component';

describe('Lib11childlib2parentComponent', () => {
  let component: Lib11childlib2parentComponent;
  let fixture: ComponentFixture<Lib11childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib11childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
