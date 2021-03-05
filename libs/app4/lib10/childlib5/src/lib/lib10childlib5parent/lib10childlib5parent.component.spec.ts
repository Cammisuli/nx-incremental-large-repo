import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10childlib5parentComponent } from './lib10childlib5parent.component';

describe('Lib10childlib5parentComponent', () => {
  let component: Lib10childlib5parentComponent;
  let fixture: ComponentFixture<Lib10childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib10childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
