import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib144parentComponent } from './lib144parent.component';

describe('Lib144parentComponent', () => {
  let component: Lib144parentComponent;
  let fixture: ComponentFixture<Lib144parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib144parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib144parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
