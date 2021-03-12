import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib355parentComponent } from './lib355parent.component';

describe('Lib355parentComponent', () => {
  let component: Lib355parentComponent;
  let fixture: ComponentFixture<Lib355parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib355parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib355parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
