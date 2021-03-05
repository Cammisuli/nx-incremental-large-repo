import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17childlib2parentComponent } from './lib17childlib2parent.component';

describe('Lib17childlib2parentComponent', () => {
  let component: Lib17childlib2parentComponent;
  let fixture: ComponentFixture<Lib17childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib17childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
