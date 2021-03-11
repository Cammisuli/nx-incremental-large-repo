import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib51parentComponent } from './lib51parent.component';

describe('Lib51parentComponent', () => {
  let component: Lib51parentComponent;
  let fixture: ComponentFixture<Lib51parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib51parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib51parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
