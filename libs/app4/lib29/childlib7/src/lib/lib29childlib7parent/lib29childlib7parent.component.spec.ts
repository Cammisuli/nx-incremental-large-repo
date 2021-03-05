import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29childlib7parentComponent } from './lib29childlib7parent.component';

describe('Lib29childlib7parentComponent', () => {
  let component: Lib29childlib7parentComponent;
  let fixture: ComponentFixture<Lib29childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib29childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
