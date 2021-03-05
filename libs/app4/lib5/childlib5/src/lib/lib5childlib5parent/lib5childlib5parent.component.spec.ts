import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib5parentComponent } from './lib5childlib5parent.component';

describe('Lib5childlib5parentComponent', () => {
  let component: Lib5childlib5parentComponent;
  let fixture: ComponentFixture<Lib5childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib5childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
