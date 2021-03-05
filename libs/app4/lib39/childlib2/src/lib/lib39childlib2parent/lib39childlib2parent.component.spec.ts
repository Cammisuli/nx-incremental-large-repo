import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib39childlib2parentComponent } from './lib39childlib2parent.component';

describe('Lib39childlib2parentComponent', () => {
  let component: Lib39childlib2parentComponent;
  let fixture: ComponentFixture<Lib39childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib39childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib39childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
