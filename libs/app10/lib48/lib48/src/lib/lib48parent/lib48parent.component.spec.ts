import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib48parentComponent } from './lib48parent.component';

describe('Lib48parentComponent', () => {
  let component: Lib48parentComponent;
  let fixture: ComponentFixture<Lib48parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib48parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib48parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
