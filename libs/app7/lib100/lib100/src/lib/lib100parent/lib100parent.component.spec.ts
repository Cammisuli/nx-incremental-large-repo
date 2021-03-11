import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib100parentComponent } from './lib100parent.component';

describe('Lib100parentComponent', () => {
  let component: Lib100parentComponent;
  let fixture: ComponentFixture<Lib100parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib100parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib100parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
