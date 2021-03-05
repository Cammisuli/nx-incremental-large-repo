import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib71parentComponent } from './lib71parent.component';

describe('Lib71parentComponent', () => {
  let component: Lib71parentComponent;
  let fixture: ComponentFixture<Lib71parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib71parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib71parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
