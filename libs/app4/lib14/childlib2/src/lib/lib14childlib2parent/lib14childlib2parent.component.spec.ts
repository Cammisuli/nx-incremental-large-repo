import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14childlib2parentComponent } from './lib14childlib2parent.component';

describe('Lib14childlib2parentComponent', () => {
  let component: Lib14childlib2parentComponent;
  let fixture: ComponentFixture<Lib14childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib14childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
