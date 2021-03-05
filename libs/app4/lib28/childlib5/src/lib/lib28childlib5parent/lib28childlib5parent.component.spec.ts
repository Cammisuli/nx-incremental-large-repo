import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28childlib5parentComponent } from './lib28childlib5parent.component';

describe('Lib28childlib5parentComponent', () => {
  let component: Lib28childlib5parentComponent;
  let fixture: ComponentFixture<Lib28childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib28childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
