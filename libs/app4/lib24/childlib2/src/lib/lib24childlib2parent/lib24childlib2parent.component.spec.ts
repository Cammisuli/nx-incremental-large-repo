import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24childlib2parentComponent } from './lib24childlib2parent.component';

describe('Lib24childlib2parentComponent', () => {
  let component: Lib24childlib2parentComponent;
  let fixture: ComponentFixture<Lib24childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib24childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
