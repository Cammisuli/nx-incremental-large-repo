import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12childlib5parentComponent } from './lib12childlib5parent.component';

describe('Lib12childlib5parentComponent', () => {
  let component: Lib12childlib5parentComponent;
  let fixture: ComponentFixture<Lib12childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib12childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
