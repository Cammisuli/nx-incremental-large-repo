import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib307parentComponent } from './lib307parent.component';

describe('Lib307parentComponent', () => {
  let component: Lib307parentComponent;
  let fixture: ComponentFixture<Lib307parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib307parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib307parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
