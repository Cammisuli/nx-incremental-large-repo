import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib292parentComponent } from './lib292parent.component';

describe('Lib292parentComponent', () => {
  let component: Lib292parentComponent;
  let fixture: ComponentFixture<Lib292parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib292parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib292parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
