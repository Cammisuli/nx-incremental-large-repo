import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib192parentComponent } from './lib192parent.component';

describe('Lib192parentComponent', () => {
  let component: Lib192parentComponent;
  let fixture: ComponentFixture<Lib192parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib192parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib192parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
