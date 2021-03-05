import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26childlib2parentComponent } from './lib26childlib2parent.component';

describe('Lib26childlib2parentComponent', () => {
  let component: Lib26childlib2parentComponent;
  let fixture: ComponentFixture<Lib26childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib26childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
