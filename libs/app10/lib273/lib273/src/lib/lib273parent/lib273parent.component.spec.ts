import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib273parentComponent } from './lib273parent.component';

describe('Lib273parentComponent', () => {
  let component: Lib273parentComponent;
  let fixture: ComponentFixture<Lib273parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib273parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib273parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
