import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib33childlib5parentComponent } from './lib33childlib5parent.component';

describe('Lib33childlib5parentComponent', () => {
  let component: Lib33childlib5parentComponent;
  let fixture: ComponentFixture<Lib33childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib33childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib33childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
