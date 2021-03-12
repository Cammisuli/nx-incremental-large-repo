import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib314parentComponent } from './lib314parent.component';

describe('Lib314parentComponent', () => {
  let component: Lib314parentComponent;
  let fixture: ComponentFixture<Lib314parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib314parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib314parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
