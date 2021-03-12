import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib289parentComponent } from './lib289parent.component';

describe('Lib289parentComponent', () => {
  let component: Lib289parentComponent;
  let fixture: ComponentFixture<Lib289parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib289parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib289parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
