import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13childlib2parentComponent } from './lib13childlib2parent.component';

describe('Lib13childlib2parentComponent', () => {
  let component: Lib13childlib2parentComponent;
  let fixture: ComponentFixture<Lib13childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib13childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
