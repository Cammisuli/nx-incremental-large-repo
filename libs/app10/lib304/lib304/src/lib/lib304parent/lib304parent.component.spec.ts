import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib304parentComponent } from './lib304parent.component';

describe('Lib304parentComponent', () => {
  let component: Lib304parentComponent;
  let fixture: ComponentFixture<Lib304parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib304parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib304parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
