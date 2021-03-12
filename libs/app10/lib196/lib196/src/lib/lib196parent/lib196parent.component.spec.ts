import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib196parentComponent } from './lib196parent.component';

describe('Lib196parentComponent', () => {
  let component: Lib196parentComponent;
  let fixture: ComponentFixture<Lib196parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib196parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib196parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
