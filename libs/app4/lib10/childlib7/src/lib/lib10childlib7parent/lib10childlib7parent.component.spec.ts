import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10childlib7parentComponent } from './lib10childlib7parent.component';

describe('Lib10childlib7parentComponent', () => {
  let component: Lib10childlib7parentComponent;
  let fixture: ComponentFixture<Lib10childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib10childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
