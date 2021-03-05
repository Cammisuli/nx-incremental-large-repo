import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10childlib4parentComponent } from './lib10childlib4parent.component';

describe('Lib10childlib4parentComponent', () => {
  let component: Lib10childlib4parentComponent;
  let fixture: ComponentFixture<Lib10childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib10childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
