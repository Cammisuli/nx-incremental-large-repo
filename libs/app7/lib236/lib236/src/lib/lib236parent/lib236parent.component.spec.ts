import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib236parentComponent } from './lib236parent.component';

describe('Lib236parentComponent', () => {
  let component: Lib236parentComponent;
  let fixture: ComponentFixture<Lib236parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib236parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib236parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
