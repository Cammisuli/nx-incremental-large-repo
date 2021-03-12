import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib238parentComponent } from './lib238parent.component';

describe('Lib238parentComponent', () => {
  let component: Lib238parentComponent;
  let fixture: ComponentFixture<Lib238parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib238parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib238parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
