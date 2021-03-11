import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27parentComponent } from './lib27parent.component';

describe('Lib27parentComponent', () => {
  let component: Lib27parentComponent;
  let fixture: ComponentFixture<Lib27parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib27parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
