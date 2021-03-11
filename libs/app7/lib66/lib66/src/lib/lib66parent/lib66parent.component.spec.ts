import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib66parentComponent } from './lib66parent.component';

describe('Lib66parentComponent', () => {
  let component: Lib66parentComponent;
  let fixture: ComponentFixture<Lib66parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib66parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib66parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
