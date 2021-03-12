import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib64parentComponent } from './lib64parent.component';

describe('Lib64parentComponent', () => {
  let component: Lib64parentComponent;
  let fixture: ComponentFixture<Lib64parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib64parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib64parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
