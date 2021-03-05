import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25childlib2parentComponent } from './lib25childlib2parent.component';

describe('Lib25childlib2parentComponent', () => {
  let component: Lib25childlib2parentComponent;
  let fixture: ComponentFixture<Lib25childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib25childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
