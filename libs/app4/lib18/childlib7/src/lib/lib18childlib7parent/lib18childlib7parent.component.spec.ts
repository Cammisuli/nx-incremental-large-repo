import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18childlib7parentComponent } from './lib18childlib7parent.component';

describe('Lib18childlib7parentComponent', () => {
  let component: Lib18childlib7parentComponent;
  let fixture: ComponentFixture<Lib18childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib18childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
