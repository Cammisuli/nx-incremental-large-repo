import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib162parentComponent } from './lib162parent.component';

describe('Lib162parentComponent', () => {
  let component: Lib162parentComponent;
  let fixture: ComponentFixture<Lib162parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib162parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib162parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
