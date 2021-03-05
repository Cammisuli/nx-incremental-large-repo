import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib31childlib2parentComponent } from './lib31childlib2parent.component';

describe('Lib31childlib2parentComponent', () => {
  let component: Lib31childlib2parentComponent;
  let fixture: ComponentFixture<Lib31childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib31childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib31childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
