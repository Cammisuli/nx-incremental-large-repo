import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib127parentComponent } from './lib127parent.component';

describe('Lib127parentComponent', () => {
  let component: Lib127parentComponent;
  let fixture: ComponentFixture<Lib127parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib127parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib127parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
