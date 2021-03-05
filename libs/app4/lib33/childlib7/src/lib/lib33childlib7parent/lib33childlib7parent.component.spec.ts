import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib33childlib7parentComponent } from './lib33childlib7parent.component';

describe('Lib33childlib7parentComponent', () => {
  let component: Lib33childlib7parentComponent;
  let fixture: ComponentFixture<Lib33childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib33childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib33childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
