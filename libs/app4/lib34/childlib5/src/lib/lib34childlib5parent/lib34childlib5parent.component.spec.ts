import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib34childlib5parentComponent } from './lib34childlib5parent.component';

describe('Lib34childlib5parentComponent', () => {
  let component: Lib34childlib5parentComponent;
  let fixture: ComponentFixture<Lib34childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib34childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib34childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
