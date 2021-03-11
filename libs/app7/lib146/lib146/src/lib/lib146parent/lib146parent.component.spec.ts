import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib146parentComponent } from './lib146parent.component';

describe('Lib146parentComponent', () => {
  let component: Lib146parentComponent;
  let fixture: ComponentFixture<Lib146parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib146parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib146parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
