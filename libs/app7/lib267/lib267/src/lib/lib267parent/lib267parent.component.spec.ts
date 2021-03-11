import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib267parentComponent } from './lib267parent.component';

describe('Lib267parentComponent', () => {
  let component: Lib267parentComponent;
  let fixture: ComponentFixture<Lib267parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib267parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib267parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
