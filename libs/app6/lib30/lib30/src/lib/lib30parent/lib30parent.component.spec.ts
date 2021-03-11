import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib30parentComponent } from './lib30parent.component';

describe('Lib30parentComponent', () => {
  let component: Lib30parentComponent;
  let fixture: ComponentFixture<Lib30parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib30parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib30parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
