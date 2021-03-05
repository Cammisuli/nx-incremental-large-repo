import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12childlib4parentComponent } from './lib12childlib4parent.component';

describe('Lib12childlib4parentComponent', () => {
  let component: Lib12childlib4parentComponent;
  let fixture: ComponentFixture<Lib12childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib12childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
