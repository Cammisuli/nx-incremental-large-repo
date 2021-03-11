import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28parentComponent } from './lib28parent.component';

describe('Lib28parentComponent', () => {
  let component: Lib28parentComponent;
  let fixture: ComponentFixture<Lib28parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib28parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
