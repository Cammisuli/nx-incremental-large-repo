import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib332parentComponent } from './lib332parent.component';

describe('Lib332parentComponent', () => {
  let component: Lib332parentComponent;
  let fixture: ComponentFixture<Lib332parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib332parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib332parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
