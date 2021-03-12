import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib57parentComponent } from './lib57parent.component';

describe('Lib57parentComponent', () => {
  let component: Lib57parentComponent;
  let fixture: ComponentFixture<Lib57parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib57parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib57parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
