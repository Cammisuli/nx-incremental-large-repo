import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib244parentComponent } from './lib244parent.component';

describe('Lib244parentComponent', () => {
  let component: Lib244parentComponent;
  let fixture: ComponentFixture<Lib244parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib244parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib244parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
