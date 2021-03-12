import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib70parentComponent } from './lib70parent.component';

describe('Lib70parentComponent', () => {
  let component: Lib70parentComponent;
  let fixture: ComponentFixture<Lib70parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib70parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib70parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
