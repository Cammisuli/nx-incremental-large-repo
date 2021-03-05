import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib2parentComponent } from './lib9childlib2parent.component';

describe('Lib9childlib2parentComponent', () => {
  let component: Lib9childlib2parentComponent;
  let fixture: ComponentFixture<Lib9childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib9childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
