import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib357parentComponent } from './lib357parent.component';

describe('Lib357parentComponent', () => {
  let component: Lib357parentComponent;
  let fixture: ComponentFixture<Lib357parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib357parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib357parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
