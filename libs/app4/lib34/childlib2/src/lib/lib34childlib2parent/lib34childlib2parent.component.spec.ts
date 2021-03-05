import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib34childlib2parentComponent } from './lib34childlib2parent.component';

describe('Lib34childlib2parentComponent', () => {
  let component: Lib34childlib2parentComponent;
  let fixture: ComponentFixture<Lib34childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib34childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib34childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
