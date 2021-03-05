import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib31childlib5parentComponent } from './lib31childlib5parent.component';

describe('Lib31childlib5parentComponent', () => {
  let component: Lib31childlib5parentComponent;
  let fixture: ComponentFixture<Lib31childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib31childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib31childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
