import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib250parentComponent } from './lib250parent.component';

describe('Lib250parentComponent', () => {
  let component: Lib250parentComponent;
  let fixture: ComponentFixture<Lib250parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib250parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib250parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
