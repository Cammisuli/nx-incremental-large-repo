import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib92parentComponent } from './lib92parent.component';

describe('Lib92parentComponent', () => {
  let component: Lib92parentComponent;
  let fixture: ComponentFixture<Lib92parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib92parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib92parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
