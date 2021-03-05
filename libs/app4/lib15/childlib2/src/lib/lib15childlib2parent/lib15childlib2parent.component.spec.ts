import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15childlib2parentComponent } from './lib15childlib2parent.component';

describe('Lib15childlib2parentComponent', () => {
  let component: Lib15childlib2parentComponent;
  let fixture: ComponentFixture<Lib15childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib15childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
