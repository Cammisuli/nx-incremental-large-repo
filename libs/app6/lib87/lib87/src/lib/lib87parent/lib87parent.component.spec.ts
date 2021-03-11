import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib87parentComponent } from './lib87parent.component';

describe('Lib87parentComponent', () => {
  let component: Lib87parentComponent;
  let fixture: ComponentFixture<Lib87parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib87parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib87parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
