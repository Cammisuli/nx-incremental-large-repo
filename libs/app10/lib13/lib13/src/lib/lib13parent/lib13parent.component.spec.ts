import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13parentComponent } from './lib13parent.component';

describe('Lib13parentComponent', () => {
  let component: Lib13parentComponent;
  let fixture: ComponentFixture<Lib13parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib13parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
