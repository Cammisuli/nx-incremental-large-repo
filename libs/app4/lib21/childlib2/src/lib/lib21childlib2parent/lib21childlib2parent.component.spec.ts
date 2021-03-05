import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21childlib2parentComponent } from './lib21childlib2parent.component';

describe('Lib21childlib2parentComponent', () => {
  let component: Lib21childlib2parentComponent;
  let fixture: ComponentFixture<Lib21childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib21childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
