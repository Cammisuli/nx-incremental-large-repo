import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib30childlib4parentComponent } from './lib30childlib4parent.component';

describe('Lib30childlib4parentComponent', () => {
  let component: Lib30childlib4parentComponent;
  let fixture: ComponentFixture<Lib30childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib30childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib30childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
