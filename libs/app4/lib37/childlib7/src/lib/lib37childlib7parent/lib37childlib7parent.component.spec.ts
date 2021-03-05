import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib37childlib7parentComponent } from './lib37childlib7parent.component';

describe('Lib37childlib7parentComponent', () => {
  let component: Lib37childlib7parentComponent;
  let fixture: ComponentFixture<Lib37childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib37childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib37childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
