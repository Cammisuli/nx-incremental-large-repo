import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib2parentComponent } from './lib8childlib2parent.component';

describe('Lib8childlib2parentComponent', () => {
  let component: Lib8childlib2parentComponent;
  let fixture: ComponentFixture<Lib8childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib8childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
