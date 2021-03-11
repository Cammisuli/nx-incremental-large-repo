import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24parentComponent } from './lib24parent.component';

describe('Lib24parentComponent', () => {
  let component: Lib24parentComponent;
  let fixture: ComponentFixture<Lib24parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib24parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
