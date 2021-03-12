import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib206parentComponent } from './lib206parent.component';

describe('Lib206parentComponent', () => {
  let component: Lib206parentComponent;
  let fixture: ComponentFixture<Lib206parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib206parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib206parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
