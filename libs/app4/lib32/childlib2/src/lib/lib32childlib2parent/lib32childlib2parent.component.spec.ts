import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib32childlib2parentComponent } from './lib32childlib2parent.component';

describe('Lib32childlib2parentComponent', () => {
  let component: Lib32childlib2parentComponent;
  let fixture: ComponentFixture<Lib32childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib32childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib32childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
