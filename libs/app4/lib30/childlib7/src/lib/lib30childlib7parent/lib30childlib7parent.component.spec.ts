import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib30childlib7parentComponent } from './lib30childlib7parent.component';

describe('Lib30childlib7parentComponent', () => {
  let component: Lib30childlib7parentComponent;
  let fixture: ComponentFixture<Lib30childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib30childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib30childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
