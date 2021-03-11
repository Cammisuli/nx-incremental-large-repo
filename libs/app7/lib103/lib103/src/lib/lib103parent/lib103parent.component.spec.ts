import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib103parentComponent } from './lib103parent.component';

describe('Lib103parentComponent', () => {
  let component: Lib103parentComponent;
  let fixture: ComponentFixture<Lib103parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib103parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib103parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
