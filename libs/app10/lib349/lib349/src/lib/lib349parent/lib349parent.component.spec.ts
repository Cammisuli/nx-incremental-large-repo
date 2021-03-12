import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib349parentComponent } from './lib349parent.component';

describe('Lib349parentComponent', () => {
  let component: Lib349parentComponent;
  let fixture: ComponentFixture<Lib349parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib349parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib349parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
