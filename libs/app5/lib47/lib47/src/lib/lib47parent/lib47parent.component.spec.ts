import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib47parentComponent } from './lib47parent.component';

describe('Lib47parentComponent', () => {
  let component: Lib47parentComponent;
  let fixture: ComponentFixture<Lib47parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib47parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib47parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
