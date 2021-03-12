import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib220parentComponent } from './lib220parent.component';

describe('Lib220parentComponent', () => {
  let component: Lib220parentComponent;
  let fixture: ComponentFixture<Lib220parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib220parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib220parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
