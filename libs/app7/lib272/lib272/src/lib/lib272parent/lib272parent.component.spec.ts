import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib272parentComponent } from './lib272parent.component';

describe('Lib272parentComponent', () => {
  let component: Lib272parentComponent;
  let fixture: ComponentFixture<Lib272parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib272parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib272parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
