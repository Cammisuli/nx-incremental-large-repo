import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib32childlib5parentComponent } from './lib32childlib5parent.component';

describe('Lib32childlib5parentComponent', () => {
  let component: Lib32childlib5parentComponent;
  let fixture: ComponentFixture<Lib32childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib32childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib32childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
