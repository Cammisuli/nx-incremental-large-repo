import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23parentComponent } from './lib23parent.component';

describe('Lib23parentComponent', () => {
  let component: Lib23parentComponent;
  let fixture: ComponentFixture<Lib23parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib23parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
