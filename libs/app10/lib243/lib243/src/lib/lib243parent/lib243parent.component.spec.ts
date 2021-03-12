import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib243parentComponent } from './lib243parent.component';

describe('Lib243parentComponent', () => {
  let component: Lib243parentComponent;
  let fixture: ComponentFixture<Lib243parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib243parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib243parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
