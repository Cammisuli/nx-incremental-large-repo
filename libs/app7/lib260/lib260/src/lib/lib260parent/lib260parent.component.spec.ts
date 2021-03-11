import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib260parentComponent } from './lib260parent.component';

describe('Lib260parentComponent', () => {
  let component: Lib260parentComponent;
  let fixture: ComponentFixture<Lib260parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib260parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib260parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
