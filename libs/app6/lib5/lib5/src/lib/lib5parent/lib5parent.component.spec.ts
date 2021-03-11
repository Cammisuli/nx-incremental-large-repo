import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5parentComponent } from './lib5parent.component';

describe('Lib5parentComponent', () => {
  let component: Lib5parentComponent;
  let fixture: ComponentFixture<Lib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
