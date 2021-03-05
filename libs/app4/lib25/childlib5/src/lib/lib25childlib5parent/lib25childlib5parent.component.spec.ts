import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25childlib5parentComponent } from './lib25childlib5parent.component';

describe('Lib25childlib5parentComponent', () => {
  let component: Lib25childlib5parentComponent;
  let fixture: ComponentFixture<Lib25childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib25childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
