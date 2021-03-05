import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib96parentComponent } from './lib96parent.component';

describe('Lib96parentComponent', () => {
  let component: Lib96parentComponent;
  let fixture: ComponentFixture<Lib96parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib96parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib96parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
