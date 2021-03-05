import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib38childlib2parentComponent } from './lib38childlib2parent.component';

describe('Lib38childlib2parentComponent', () => {
  let component: Lib38childlib2parentComponent;
  let fixture: ComponentFixture<Lib38childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib38childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib38childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
