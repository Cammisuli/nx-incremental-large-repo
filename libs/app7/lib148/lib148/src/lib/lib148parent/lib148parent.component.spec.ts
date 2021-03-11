import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib148parentComponent } from './lib148parent.component';

describe('Lib148parentComponent', () => {
  let component: Lib148parentComponent;
  let fixture: ComponentFixture<Lib148parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib148parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib148parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
