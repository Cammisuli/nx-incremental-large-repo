import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib2parentComponent } from './lib7childlib2parent.component';

describe('Lib7childlib2parentComponent', () => {
  let component: Lib7childlib2parentComponent;
  let fixture: ComponentFixture<Lib7childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib7childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
