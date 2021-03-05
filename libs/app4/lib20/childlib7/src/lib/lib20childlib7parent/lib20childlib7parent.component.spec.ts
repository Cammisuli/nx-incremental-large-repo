import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20childlib7parentComponent } from './lib20childlib7parent.component';

describe('Lib20childlib7parentComponent', () => {
  let component: Lib20childlib7parentComponent;
  let fixture: ComponentFixture<Lib20childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib20childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
