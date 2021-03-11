import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib293parentComponent } from './lib293parent.component';

describe('Lib293parentComponent', () => {
  let component: Lib293parentComponent;
  let fixture: ComponentFixture<Lib293parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib293parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib293parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
