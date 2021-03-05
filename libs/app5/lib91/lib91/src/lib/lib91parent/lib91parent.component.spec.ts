import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib91parentComponent } from './lib91parent.component';

describe('Lib91parentComponent', () => {
  let component: Lib91parentComponent;
  let fixture: ComponentFixture<Lib91parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib91parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib91parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
