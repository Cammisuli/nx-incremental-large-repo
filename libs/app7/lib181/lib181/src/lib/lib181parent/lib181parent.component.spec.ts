import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib181parentComponent } from './lib181parent.component';

describe('Lib181parentComponent', () => {
  let component: Lib181parentComponent;
  let fixture: ComponentFixture<Lib181parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib181parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib181parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
