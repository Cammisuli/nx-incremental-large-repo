import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib198parentComponent } from './lib198parent.component';

describe('Lib198parentComponent', () => {
  let component: Lib198parentComponent;
  let fixture: ComponentFixture<Lib198parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib198parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib198parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
