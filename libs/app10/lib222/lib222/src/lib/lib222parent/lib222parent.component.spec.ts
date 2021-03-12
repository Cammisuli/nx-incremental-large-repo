import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib222parentComponent } from './lib222parent.component';

describe('Lib222parentComponent', () => {
  let component: Lib222parentComponent;
  let fixture: ComponentFixture<Lib222parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib222parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib222parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
