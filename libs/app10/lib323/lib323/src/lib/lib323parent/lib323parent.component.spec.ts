import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib323parentComponent } from './lib323parent.component';

describe('Lib323parentComponent', () => {
  let component: Lib323parentComponent;
  let fixture: ComponentFixture<Lib323parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib323parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib323parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
