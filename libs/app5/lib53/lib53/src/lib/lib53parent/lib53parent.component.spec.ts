import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib53parentComponent } from './lib53parent.component';

describe('Lib53parentComponent', () => {
  let component: Lib53parentComponent;
  let fixture: ComponentFixture<Lib53parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib53parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib53parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
